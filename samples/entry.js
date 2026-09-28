// New public reference for modular Entries. Not Nhur's private storage protocol.
const MAX_BLOCKS = 100;
const validTypes = new Set(['text', 'quote', 'checklist']);

export function validateEntry(input) {
  if (!input || input.version !== 1 || !Array.isArray(input.blocks)) throw new Error('Formato de entrada no admitido.');
  if (input.blocks.length > MAX_BLOCKS) throw new Error('Máximo 100 bloques en esta muestra.');
  const ids = new Set();
  const blocks = input.blocks.map(block => {
    if (!block || typeof block.id !== 'string' || !/^[a-z0-9-]{1,64}$/.test(block.id) || ids.has(block.id)) throw new Error('Identificador inválido o repetido.');
    ids.add(block.id);
    if (!validTypes.has(block.type)) throw new Error('Tipo de bloque no admitido.');
    if (typeof block.text !== 'string' || block.text.length > 4000) throw new Error('Texto inválido o demasiado largo.');
    if (block.type === 'checklist' && typeof block.checked !== 'boolean') throw new Error('La tarea necesita un estado booleano.');
    // Explicit projection: arbitrary input fields never reach the DOM.
    return {id:block.id,type:block.type,text:block.text,...(block.type==='checklist'?{checked:block.checked}:{})};
  });
  return {version:1,blocks};
}

export function moveBlock(entry,id,delta) {
  const result=validateEntry(entry);
  if (delta!==-1 && delta!==1) throw new Error('El desplazamiento debe ser -1 o 1.');
  const index=result.blocks.findIndex(block=>block.id===id);
  if(index===-1) throw new Error('Bloque inexistente.');
  const target=index+delta;
  if(target>=0 && target<result.blocks.length) [result.blocks[index],result.blocks[target]]=[result.blocks[target],result.blocks[index]];
  return result;
}

export function renderEntry(entry,host) {
  const clean=validateEntry(entry);
  const document=host.ownerDocument;
  const fragment=document.createDocumentFragment();
  for(const block of clean.blocks){
    const node=document.createElement(block.type==='quote'?'blockquote':block.type==='checklist'?'label':'p');
    if(block.type==='checklist'){
      const box=document.createElement('input');box.type='checkbox';box.checked=block.checked;box.disabled=true;
      node.append(box);
    }
    // User text is always text. No HTML parser, URL execution or remote fetch.
    node.append(document.createTextNode(block.text));
    fragment.append(node);
  }
  host.replaceChildren(fragment);
}
