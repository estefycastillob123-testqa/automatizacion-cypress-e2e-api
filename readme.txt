AUTOMATIZACIÓN DE PRUEBAS CON CYPRESS

Autora: Estefanía Castillo

1. DESCRIPCIÓN

Este proyecto contiene pruebas automatizadas desarrolladas con Cypress para validar:

- Un flujo de compra completo en SauceDemo.
- Los servicios REST de registro y autenticación de Demoblaze.

2. REQUISITOS

- Node.js instalado.
- npm instalado.
- Conexión a Internet.
- Navegador compatible con Cypress.

3. INSTALACIÓN

Abrir una terminal en la carpeta raíz del proyecto y ejecutar:

npm install

4. EJECUCIÓN EN MODO INTERACTIVO

Ejecutar:

npx cypress open

Seleccionar E2E Testing y ejecutar cualquiera de los archivos:

- cypress/e2e/saucedemo-compra.cy.js
- cypress/e2e/demoblaze-api.cy.js

5. EJECUCIÓN DESDE TERMINAL

Ejecutar todas las pruebas:

npx cypress run

Ejecutar solamente las pruebas E2E de SauceDemo:

npx cypress run --spec "cypress/e2e/saucedemo-compra.cy.js"

Ejecutar solamente las pruebas API de Demoblaze:

npx cypress run --spec "cypress/e2e/demoblaze-api.cy.js"

6. CASOS AUTOMATIZADOS

SauceDemo:

- Validación del formulario de inicio de sesión.
- Inicio de sesión con credenciales válidas.
- Incorporación de dos productos al carrito.
- Validación de productos en el carrito.
- Ingreso de información del comprador.
- Finalización y confirmación exitosa de la compra.

Demoblaze API:

- Registro exitoso de un usuario nuevo.
- Intento de registro de un usuario existente.
- Inicio de sesión con credenciales correctas.
- Inicio de sesión con contraseña incorrecta.

7. EVIDENCIAS

Las capturas de los resultados se encuentran en:

- evidencias/e2e-saucedemo
- evidencias/api-demoblaze

8. RESULTADO

Las dos especificaciones se ejecutaron satisfactoriamente:

- Total de pruebas: 6
- Pruebas exitosas: 6
- Pruebas fallidas: 0