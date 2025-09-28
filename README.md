# Patrones de Diseño

Este repositorio contiene implementaciones prácticas de patrones de diseño en TypeScript, como parte de un trabajo en grupo. El proyecto demuestra el uso de patrones creacionales, estructurales y comportamentales a través de tres ejercicios específicos: construcción de objetos complejos, separación de abstracciones e implementaciones, y centralización de comunicaciones entre objetos.

Cada ejercicio aborda un problema común en el desarrollo de software y muestra cómo un patrón de diseño apropiado puede mejorar la mantenibilidad, escalabilidad y legibilidad del código.

## Estructura del Proyecto

- `src/exercise1/`: Implementación del patrón Builder para construcción de automóviles personalizados.
- `src/exercise2/`: Implementación del patrón Bridge para gestión de notificaciones en múltiples plataformas.
- `src/exercise3/`: Implementación del patrón Mediator para chat grupal.
- `package.json`: Dependencias y scripts de npm
- `tsconfig.json`: Configuración de TypeScript
- `.gitignore`: Archivos ignorados por Git (node_modules, dist, etc.)

Cada carpeta de ejercicio contiene:
- `README.md`: Descripción detallada del problema, patrón utilizado y beneficios esperados
- `class_diagram.puml`: Diagrama de clases UML

## Ejecución de Ejercicios

### Requisitos Previos
- Node.js instalado (versión 18 o superior)
- npm instalado

### Opciones de Ejecución

#### Opción 1: Compilación y Ejecución (Recomendado)
Compila el proyecto: `npm run build`

#### Opción 2: Ejecución Directa sin Compilación
Si prefieres ejecutar sin compilar, usa `ts-node` (asegúrate de tenerlo instalado globalmente o como dependencia):

### Ejercicio 1: Patrón Builder
Implementa la construcción de un automóvil personalizado con múltiples opciones.

**Ejecución con compilación:**
- node dist/exercise1/index.js

**Ejecución directa:**
- npx ts-node src/exercise1/index.ts

### Ejercicio 2: Patrón Bridge
Gestiona notificaciones en diferentes plataformas (escritorio, móvil, web).

**Ejecución con compilación:**
- node dist/exercise2/index.js

**Ejecución directa:**
- npx ts-node src/exercise2/index.ts

### Ejercicio 3: Patrón Mediator
Simula un chat grupal con usuarios interactuando a través de un mediador.

**Ejecución con compilación:**
- node dist/exercise3/index.js

**Ejecución directa:**
- npx ts-node src/exercise3/index.ts

### Diagramas de Clases
Los diagramas UML de clases para cada ejercicio están disponibles en la raíz del proyecto como archivos `.puml` (PlantUML). Puedes visualizarlos con cualquier herramienta que soporte PlantUML, como VSCode con la extensión PlantUML.