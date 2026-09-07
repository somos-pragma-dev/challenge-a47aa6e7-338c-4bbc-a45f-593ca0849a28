# Implementación de formularios dinámicos con validación personalizada

El equipo de desarrollo de una plataforma de e-commerce necesita implementar un formulario dinámico para la creación de productos. El formulario debe permitir añadir y eliminar campos de manera dinámica, y debe validar los campos según reglas personalizadas. Los campos pueden ser de diferentes tipos (texto, número, fecha) y deben mostrar mensajes de error específicos cuando no cumplan con las reglas de validación. El formulario debe ser capaz de manejar hasta 10 campos adicionales y debe validar cada campo en tiempo real. Los errores más comunes incluyen campos vacíos, formatos incorrectos y valores fuera de rango.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | React Hooks |
| **Nivel** | junior-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 4 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Definición del formulario base

**Objetivo:** Crear un formulario base que permita añadir y eliminar campos dinámicamente.

**Tiempo estimado:** 1 hora

**Instrucciones:**

- El formulario debe tener un botón para añadir un nuevo campo y otro para eliminar el último campo añadido.
- Cada campo añadido debe tener un tipo (texto, número, fecha) y un nombre único.
- El formulario debe ser capaz de manejar hasta 10 campos adicionales.

**Entregable:** Formulario base funcional con botones para añadir y eliminar campos.

<details>
<summary>Pistas de conocimiento</summary>

- Piensa en cómo puedes utilizar React Hooks para gestionar el estado del formulario.
- Considera cómo puedes hacer que la adición y eliminación de campos sea dinámica.

</details>

### Fase 2: Implementación de la validación de campos

**Objetivo:** Añadir validación personalizada a cada campo del formulario.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Cada campo debe validarse según reglas personalizadas en tiempo real.
- Los campos pueden ser de diferentes tipos (texto, número, fecha) y deben mostrar mensajes de error específicos cuando no cumplan con las reglas de validación.
- Los errores más comunes incluyen campos vacíos, formatos incorrectos y valores fuera de rango.

**Entregable:** Formulario con validación personalizada en cada campo.

<details>
<summary>Pistas de conocimiento</summary>

- Piensa en cómo puedes validar cada campo según su tipo.
- Considera cómo puedes mostrar mensajes de error específicos para cada regla de validación.

</details>

### Fase 3: Optimización y mejora de la usabilidad

**Objetivo:** Optimizar el rendimiento del formulario y mejorar su usabilidad.

**Tiempo estimado:** 1 hora

**Instrucciones:**

- El formulario debe ser capaz de manejar hasta 10 campos adicionales sin perder rendimiento.
- Mejora la usabilidad del formulario añadiendo características como autocompletado y sugerencias de valores.
- Asegúrate de que el formulario sea accesible y cumpla con las mejores prácticas de accesibilidad.

**Entregable:** Formulario optimizado y con mejor usabilidad.

<details>
<summary>Pistas de conocimiento</summary>

- Piensa en cómo puedes optimizar el rendimiento del formulario.
- Considera cómo puedes mejorar la usabilidad del formulario añadiendo características como autocompletado y sugerencias de valores.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué son los React Hooks y cómo se utilizan en la implementación de formularios dinámicos?
- **paraQueSirve**: ¿Para qué sirve la validación personalizada en un formulario y cómo se implementa con React Hooks?
- **comoSeUsa**: ¿Cómo se utiliza React para gestionar el estado de un formulario dinámico?
- **erroresComunes**: ¿Cuáles son los errores más comunes al implementar formularios dinámicos con React Hooks y cómo se pueden evitar?
- **queDecisionesImplica**: ¿Qué decisiones implica la optimización y mejora de la usabilidad de un formulario dinámico implementado con React Hooks?

## Criterios de Evaluacion

- Implementación de un formulario base que permita añadir y eliminar campos dinámicamente.
- Añadir validación personalizada a cada campo del formulario.
- Optimización del rendimiento del formulario y mejora de su usabilidad.

## Como trabajar con un asistente de IA

- **AGENTS.md** — instrucciones nativas del repo (Cursor, Codex, Copilot, Gemini, Claude Code). Abrí el proyecto y el agente las carga solo.
- **PROMPT_MEJORA.md** — el mismo prompt, para copiar y pegar en un chat (claude.ai, ChatGPT, etc.).

---

*Reto generado automaticamente por Challenge Generator - Pragma*
