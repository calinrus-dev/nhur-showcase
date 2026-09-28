# Nhur / Encontrar a los tuyos. Construir un lugar.

**Una red social de comunidades y nichos.** Nace de la idea de una alternativa a Amino: pertenencia, conversación y descubrimiento, con Entradas modulares que dejan organizar contenido con más intención que un muro plano.

**Expo · React Native · TypeScript** · Producto en desarrollo.

## De la comunidad al contenido

Los **Entornos** dan un lugar a intereses compartidos. Los **Canales** sostienen la conversación. Las **Entradas** permiten componer y conservar contenido mediante bloques. La inspiración combina comunidad, conversación tipo Discord, descubrimiento tipo Reddit y edición modular al estilo Notion.

El recorrido anterior se conocía como Glow; su exploración visual forma parte de la historia y la identidad de Nhur. [Contexto del proyecto](docs/EXPERIENCIA.md).

## Una Entrada que puedes tocar

[**Abrir la mesa de bloques →**](https://calinrus-dev.github.io/nhur-showcase/) · [Modelo y renderizador](samples/entry.js) · [Pruebas](test/entry.test.mjs)

Edita texto, mueve una cita, guarda localmente y recarga. La identidad del bloque sobrevive al cambio de posición. Si escribes `<img src=x>`, debes leer esos caracteres; el contenido de una comunidad no puede convertirse por accidente en instrucciones para el navegador.

**Esta es una referencia nueva y acotada para el escaparate.** No es una extracción del editor completo ni del protocolo privado de Nhur. Tres tipos de bloque, validación de límites, proyección de campos, renderizado como texto y almacenamiento local opcional.

[![Pruebas de la muestra](https://github.com/calinrus-dev/nhur-showcase/actions/workflows/verify.yml/badge.svg)](https://github.com/calinrus-dev/nhur-showcase/actions/workflows/verify.yml)

~~~sh
node --test test/*.test.mjs
~~~

## Local-first no elimina la dificultad de sincronizar

Un documento local permite continuar y conservar trabajo. Una red social también necesita identidad, permisos, moderación y resolución de conflictos. Esta muestra no simula haber resuelto esas partes: enseña el límite local que puede examinarse de forma independiente.

El arranque web del producto completo tenía pendiente resolver `@nhur/ui` en la última revisión. La demo pública funciona por separado; no es evidencia de que la red social completa esté desplegada.

[Estado y pendientes](docs/ESTADO.md) · [Arquitectura](docs/ARQUITECTURA.md) · [Origen y límites](docs/PROVENANCE.md) · [Verificación](docs/VERIFICATION.md) · [Portfolio](https://github.com/calinrus-dev/portfolio)


[Instagram @c4linrus](https://www.instagram.com/c4linrus/) · [LinkedIn / calinrus](https://www.linkedin.com/in/calinrus/)
