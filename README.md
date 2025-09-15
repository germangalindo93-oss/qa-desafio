# 🧪 QA Desafío – Pruebas Funcionales y de Carga

Este proyecto contiene la automatización de pruebas funcionales y de rendimiento para un sitio web de e‑commerce, utilizando **Playwright**, **Postman/Newman** y **k6**.

## 📌 Contenido del repositorio

punto-1-api/ ├── functional/ # Pruebas funcionales (Postman/Newman) │ ├── postman/ # Colección y entorno de Postman │ ├── reports/ # Reportes HTML generados │ └── package.json # Scripts npm para ejecutar pruebas │ ├── performance/ # Pruebas de carga (k6) │ ├── load-test.js # Script de prueba de carga │ ├── reports/ # Resultados de k6 │ └── package.json │ └── docs/ # Documentación y casos de prueba └── Casos_de_Prueba_Web.docx

## 🚀 Requisitos previos

- [Node.js](https://nodejs.org/) (v18 o superior)
- [npm](https://www.npmjs.com/)
- [Newman](https://www.npmjs.com/package/newman) y [htmlextra](https://www.npmjs.com/package/newman-reporter-htmlextra)
- [k6](https://k6.io/docs/get-started/installation/)
- [Playwright](https://playwright.dev/)

Instalar dependencias globales necesarias:

npm install -g newman newman-reporter-htmlextra
🧩 Pruebas funcionales (Postman/Newman)
📂 Estructura
Colección: functional/postman/collection.json

Entorno: functional/postman/environment.json

▶️ Ejecución
Desde la carpeta functional:

npm run api:test
Esto:

Ejecuta la colección con Newman.

Usa el entorno configurado.

Genera un reporte HTML en functional/reports/functional-report.html.

📈 Pruebas de carga (k6)
📂 Estructura
Script: performance/load-test.js

▶️ Ejecución
Desde la carpeta performance:

npm run load:test
o directamente:

k6 run load-test.js
Los resultados se guardarán en performance/reports/.

🎭 Pruebas E2E (Playwright)
📂 Estructura
Scripts en tests/ (alineados con los casos de prueba documentados en docs/Casos_de_Prueba_Web.docx).

▶️ Ejecución
Instalar Playwright:

npm install @playwright/test
npx playwright install
Ejecutar todas las pruebas:

npx playwright test
Generar reporte HTML:

npx playwright show-report
📚 Documentación
Casos de prueba: docs/Casos_de_Prueba_Web.docx Contiene todos los casos manuales con pasos detallados y trazabilidad hacia los scripts automatizados.

👤 Autor
Germán Enrique Galindo Bermúdez QA / Testing Specialist – Automatización y Pruebas de API

Código

---

💡 Con este README:
- Cualquiera que entre a tu repo sabrá **qué hace el proyecto**, **cómo está organizado** y **cómo ejecutar cada tipo de prueba**.
- Está alineado con tu estructura actual (`functional`, `performance`, `docs`).
- Incluye comandos listos para copiar y pegar.

Si quieres, puedo ayudarte a **subir este README directamente a tu repo y hacer el commit/push** para que ya quede visible en GitHub.  
¿Quieres que lo dejemos listo en tu rama principal?
