# Cómo comprobar esta muestra

[← Proyecto](../README.md) · [Origen](PROVENANCE.md)

## Repetir la comprobación

Node 24.17.0. Sin instalar paquetes: las pruebas usan node:test.

Desde la raíz de este repositorio:

~~~sh
node --test test/*.test.mjs
~~~

Última ejecución local: **8 pruebas aprobadas**, 28 de septiembre de 2026. Este es un resultado fechado, no una promesa sobre cambios futuros.

[Workflow y ejecuciones públicas](https://github.com/calinrus-dev/nhur-showcase/actions/workflows/verify.yml). Abre una ejecución para ver el commit exacto y los logs; el badge del README sigue la rama actual.

## Comprobar la interacción

[Demo publicada](https://calinrus-dev.github.io/nhur-showcase/). También puedes servir la raíz con python3 -m http.server 8090 y abrir el puerto local en el navegador. No se necesitan cuentas ni credenciales.

## Qué no certifican estas pruebas

No incluye permisos, red, sincronización, colaboración, moderación ni un protocolo de migraciones. La persistencia es una demostración opcional de localStorage, sin garantías de durabilidad fuera de ese navegador.

Las pruebas nuevas ejercitan las piezas públicas. No se suman a las cifras históricas de tests del producto como si fueran la misma suite.
