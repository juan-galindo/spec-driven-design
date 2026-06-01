# Spec-Driven Design

Repositorio de trabajo para estructurar retos de producto, discovery, estrategia, diseño y handoff técnico usando un flujo de especificación guiado por agentes especializados.

El contenido actual está enfocado en el caso **Spin - Product Designer Sr challenge**, un ejercicio para definir cómo lanzar un MVP de crédito.

## Estructura del repositorio

```text
.
├── AGENTS.md
├── README.md
├── templates/
│   └── agentic-hand-off.md
└── docs/
    └── spin/
        ├── challenge/
        │   └── challenge.md
        ├── deliverables/
        │   ├── business-opportunity-bnpl.md
        │   ├── customer-journey-map.md
        │   ├── design.md
        │   ├── estructura-presentacion-caso.md
        │   ├── plan-co-creacion-mvp.md
        │   └── research-plan.md
        └── sr-product-designer-spin.md
```

## Caso principal

- [Resumen del caso Spin](docs/spin/sr-product-designer-spin.md): punto de entrada recomendado para entender el reto, referencias y criterio de solución.
- [Reto original](docs/spin/challenge/challenge.md): brief del caso para Product Designer Sr.

## Entregables

- [Oportunidad de negocio](docs/spin/deliverables/business-opportunity-bnpl.md): business case ejecutivo para México sobre un BNPL del súper a 15 días, con sizing, segmento objetivo, riesgos, guardrails y plan de validación.
- [Plan alto nivel de co-creación del MVP](docs/spin/deliverables/plan-co-creacion-mvp.md): fases de trabajo desde alineación hasta medición post-launch, incluyendo discovery, benchmarking, prototipo code-first, spec ejecutable, development y GTM.
- [Customer Journey Map](docs/spin/deliverables/customer-journey-map.md): recorrido del usuario primario, momentos de verdad, pain points, oportunidades de producto, hipótesis y métricas.
- [Diseño del MVP](docs/spin/deliverables/design.md): propuesta de experiencia para el happy path de crédito, pantallas, estados, contenido, componentes, analítica y criterios de aceptación UX.
- [Plan de investigación](docs/spin/deliverables/research-plan.md): objetivos, preguntas, hipótesis XYZ, metodología, muestra, estímulos, señales cuantitativas y criterios de decisión.

## Templates

- [Agentic Hand-off](templates/agentic-hand-off.md): template genérico de spec ejecutable para handoff entre diseño, producto y development. Incluye guía por sección, tablas y placeholders pensados para completar la spec a partir del prototipo code-first, decision log y artefactos upstream.

## Flujo de trabajo recomendado

Para producir o actualizar artefactos de discovery y especificación, el proyecto usa skills como agentes especializados. La guía completa está en [AGENTS.md](AGENTS.md).

Secuencia sugerida:

1. `$researcher`: reunir evidencia, validar supuestos y comparar fuentes.
2. `$business-analyst`: estructurar el problema de negocio, opciones estratégicas y recomendación.
3. `$product-strategist`: definir dirección de producto, MVP, roadmap y métricas.
4. `$content-designer`: convertir la estrategia en narrativa, UX writing, mensajes y terminología.
5. `$tech-lead`: traducir la solución en arquitectura, secuencia de implementación, riesgos y verificación.

Para revisar la calidad del workflow entre agentes, usar `$agent-harness`.
Para convertir artefactos en una presentación ejecutiva, usar `$consulting-slide-md`.
