# visual-form-builder

# Internal Tool: Visual Form Builder 

## Overview
This project is a lightweight, front-end layout designer built with **Google Blockly**. It allows non-technical staff to rapidly prototype and generate custom customer forms (like applications or onboarding screens) using a visual drag-and-drop interface, eliminating the need to write raw HTML.

I built this prototype to demonstrate my ability to design front-end screens using a Blockly-based layout designer and to showcase my capacity for independent learning.

## Business Value & Needs Analysis
* **Accelerated Delivery:** Shortens the feedback loop during requirement gathering and agile sprint planning.
* **Error Reduction:** Pre-configured blocks ensure that generated HTML adheres to internal design guidelines and accessibility standards.
* **Resource Optimization:** Frees up developer time by allowing business units to generate their own standard forms.

## Technical Implementation
* **Framework:** Vanilla JavaScript, HTML5, Tailwind CSS (for rapid UI layout).
* **Core Library:** Google Blockly.
* **Features:** 
  * Custom Block Definition (Banking-specific UI elements).
  * Real-time DOM manipulation (translating workspace blocks into rendered HTML).

## Further Development
To proactively contribute to the further development of this concept, future iterations would include:
1. **JSON Export/Import:** Allowing users to save their Blockly workspace state to a database.
2. **REST API Integration:** Wiring generated forms directly to backend submission endpoints.
3. **Advanced Blocks:** Adding logic blocks for form validation (e.g., "If Age < 18, show warning").

## Live Demo
Access the live prototype here: [Deploying...]
