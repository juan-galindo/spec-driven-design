# Spec: Agentic Hand-off

## Propósito del artefacto

El Agentic Hand-off es la **spec viva ejecutable** que cierra el puente entre definición de producto/experiencia y development. Funciona como fuente de verdad compartida para PM, Product Designer, Tech Lead, QA, Content y agentes AI.

**Cuándo usarlo:** al final de Solution shaping o al inicio de Build and launch readiness, cuando el happy path está validado, el prototipo code-first existe y el squad necesita una definición estable para implementar sin ambigüedad.

**Artefactos upstream que alimentan esta spec:**

| Artefacto | Qué aporta |
| --- | --- |
| Business case / opportunity framing | Contexto de negocio, métricas, restricciones |
| Customer journey / JTBD | Jobs, momentos de verdad, hipótesis de valor |
| Prototipo code-first | Comportamiento, layout, flujo validado |
| Decision log | Decisiones con owner, fecha y tradeoff |
| ADRs / arquitectura mínima | Contratos, dependencias técnicas |

**Convenciones de llenado:**

- Reemplazar todos los bloques `> [Completar: ...]` con contenido real.
- Eliminar filas marcadas como `_ejemplo_` antes de congelar la spec.
- Mantener la spec actualizada cuando cambie una decisión de alcance, copy o comportamiento.
- Estado `frozen` implica que no se abren cambios estructurales sin nueva decisión registrada.

---

## Cómo usar con agentes

Mapeo sugerido de skills a secciones de esta spec:

| Skill / rol | Secciones que alimenta |
| --- | --- |
| `$business-analyst` | Business Context, restricciones, métricas de éxito |
| `$product-strategist` | Objective, Intent, In Scope and Out of Scope, Why this is priority |
| `$design-strategist` | Intent, Vistas, principios de experiencia implícitos en comportamiento |
| `$content-designer` | Content aprobado, copy en Estados y errores |
| `$tech-lead` | Datos requeridos, Dependencias, contratos, riesgos técnicos |
| `$researcher` | Validación de supuestos referenciados en Business Context y User Story |
| Prototipo code-first | Vistas, Componentes, Estados y errores |
| Decision log | Riesgos abiertos, cambios de alcance, Sign-off |

Para evaluar calidad del handoff entre roles, usar `$agent-harness`.

---

## Metadatos

| Campo | Valor |
| --- | --- |
| Feature | > [Completar: nombre del feature] |
| Versión | v0.1 |
| Estado | `draft` / `review` / `frozen` |
| Product Manager | > [Completar: nombre] |
| Product Designer | > [Completar: nombre] |
| Tech Lead | > [Completar: nombre] |
| Última actualización | YYYY-MM-DD |
| Prototipo | > [Completar: URL o ruta al prototipo code-first] |
| Decision log | > [Completar: URL o ruta al decision log] |
| Business case | > [Completar: URL o ruta] |
| Customer journey | > [Completar: URL o ruta] |

---

## Feature Overview

> [Completar: resumen de 2–4 líneas. Qué es el feature, para quién, en qué contexto aparece y qué outcome busca en el piloto.]

---

## Sign-off

| Rol | Responsable | Estado | Fecha | Notas |
| --- | --- | --- | --- | --- |
| Product Manager | | `pending` / `approved` | | |
| Product Designer | | `pending` / `approved` | | |
| Tech Lead | | `pending` / `approved` | | |
| Content Designer | | `pending` / `approved` | | |
| Legal / Riesgo | | `pending` / `approved` / `n/a` | | |
| QA | | `pending` / `approved` | | |
| Data | | `pending` / `approved` / `n/a` | | |

---

## Business Context

**Problema**

> [Completar: qué dolor de negocio o de usuario resuelve este feature.]

**Oportunidad**

> [Completar: por qué vale la pena construirlo ahora y qué apuesta valida el piloto.]

**Restricciones**

> [Completar: regulatorias, operativas, técnicas, de partnership o de tiempo que limitan la solución.]

**Métrica de éxito del piloto**

| Dimensión | Métrica | Umbral / objetivo | Owner |
| --- | --- | --- | --- |
| | | | |
| _ejemplo_ | Adopción | ≥ X% de usuarios elegibles completan el flujo | PM |
| _ejemplo_ | Comprensión | ≥ X% repite monto y fecha sin ayuda | Research |

---

## Objective

> [Completar: outcome medible del feature. Enfocarse en el resultado para negocio y usuario, no en entregables de diseño.]

**Ejemplo (eliminar):** Validar que usuarios elegibles pueden completar [acción principal] con comprensión clara de [compromiso clave] y sin incrementar [riesgo medido] por encima del umbral acordado.

---

## Intent (The "What")

**Qué debe lograr el usuario**

> [Completar: progreso funcional y emocional que busca el usuario.]

**Qué debe lograr el negocio**

> [Completar: valor esperado en conversión, retención, aprendizaje u otro outcome.]

**Qué NO intenta resolver**

> [Completar: límites explícitos del feature en esta versión.]

---

## In Scope and Out of Scope

### In Scope

- > [Completar: capacidad incluida en el MVP]
- > [Completar: flujo, estados o segmentos incluidos]

### Out of Scope

- > [Completar: capacidad explícitamente excluida]
- > [Completar: edge cases o escenarios diferidos a post-MVP]

---

## User Story

**Como** [tipo de usuario]
**Quiero** [acción o capacidad]
**Para** [beneficio o progreso]

### Why this is priority

> [Completar: por qué este story entra al MVP ahora. Contrastar con alternativas descartadas o diferidas.]

### Test Scenarios

| ID | Escenario | Precondiciones | Resultado esperado |
| --- | --- | --- | --- |
| TS-01 | | | |
| _ejemplo_ | TS-99 | Usuario elegible completa flujo happy path | Sesión activa, elegibilidad confirmada | Feature activo, confirmación visible, evento analítico registrado |

### Acceptance Criteria

- [ ] **AC-01:** > [Completar: criterio verificable]
- [ ] **AC-02:** > [Completar: criterio verificable]

**Formato alternativo (Given / When / Then):**

```
Given [contexto]
When [acción del usuario o del sistema]
Then [resultado observable]
```

_Ejemplo (eliminar):_

```
Given un usuario elegible en [punto del flujo]
When confirma [acción principal]
Then ve [confirmación] y recibe [señal de éxito]
```

---

## Vistas

| ID | Vista | Objetivo | Acciones principales | Navegación | Link prototipo |
| --- | --- | --- | --- | --- | --- |
| V-00 | | | | Entrada / salida | |
| _ejemplo_ | V-01 | Oferta | Mostrar valor y condiciones antes de aceptar | Continuar, Volver | `/ruta/en/prototipo` |

**Notas por vista (opcional):**

### V-00. [Nombre]

> [Completar: qué debe entender el usuario, qué riesgo de abandono se reduce, reglas de comportamiento no obvias.]

---

## Datos requeridos

| Campo / dato | Fuente | Obligatorio | Uso en UI o lógica | Contrato / notas |
| --- | --- | --- | --- | --- |
| | | Sí / No | | |
| _ejemplo_ | `user_id` | Sesión | Sí | Elegibilidad, analítica | UUID del usuario autenticado |

**Contratos mínimos (API, eventos, servicios):**

> [Completar: endpoints, payloads, eventos o integraciones necesarias. Enlazar ADR o spec técnica si existe.]

---

## Estados y errores

| Estado / error | Trigger | UI / comportamiento | Copy clave | Recuperación | Evento analítico |
| --- | --- | --- | --- | --- | --- |
| | | | | | |
| _ejemplo_ | `not_eligible` | Usuario no cumple reglas | Mensaje inline, CTA alternativo | "No disponible para tu cuenta" | Volver a opciones previas | `feature_not_eligible` |
| _ejemplo_ | `processing_error` | Timeout o fallo de servicio | Pantalla de error con reintento | "No pudimos completar la acción" | Reintentar o contactar soporte | `feature_error` |

---

## Content aprobado

| Clave | Copy final | Vista / contexto | Owner | Estado |
| --- | --- | --- | --- | --- |
| | | | Content | `draft` / `approved` |
| _ejemplo_ | `cta.primary` | Continuar | V-01 | Content | `approved` |
| _ejemplo_ | `error.timeout` | No pudimos completar la acción. Intenta de nuevo. | processing_error | Content | `draft` |

**Disclosures / legal (si aplica):**

> [Completar: textos legales, términos o consentimientos con referencia de aprobación.]

---

## Componentes existentes, extensiones y componentes nuevos

| Componente | Acción | Vista(s) | Notas |
| --- | --- | --- | --- |
| | `reuse` / `extend` / `new` | | |
| _ejemplo_ | `Button` | `reuse` | V-00, V-01 | CTA primario sticky |
| _ejemplo_ | `PaymentOptionCard` | `extend` | V-01 | Agregar variante con subtítulo explicativo |
| _ejemplo_ | `ConfirmationBanner` | `new` | V-02 | Confirmación unificada; proponer para design system |

---

## Eventos de analítica

| Evento | Propiedades | Cuándo disparar | Owner Data | Notas |
| --- | --- | --- | --- | --- |
| | | | | |
| _ejemplo_ | `feature_viewed` | `view_id`, `user_segment` | Al cargar vista principal | Data | Baseline de funnel |
| _ejemplo_ | `feature_completed` | `outcome`, `duration_ms` | Al confirmar éxito | Data | Conversión principal |

**Cohortes y lectura del piloto:**

> [Completar: segmentos, ventanas de medición y umbrales acordados con Data.]

---

## Dependencias

| Dependencia | Tipo | Owner | Bloqueante | Fecha objetivo | Estado |
| --- | --- | --- | --- | --- | --- |
| | Backend / Frontend / Legal / Partner / Data / Ops | | Sí / No | | |
| _ejemplo_ | API de elegibilidad | Backend | Tech Lead | Sí | YYYY-MM-DD | En progreso |
| _ejemplo_ | Copy legal de términos | Legal | Legal/Riesgo | Sí | YYYY-MM-DD | Pendiente |

---

## Riesgos abiertos

| ID | Riesgo | Impacto | Mitigación | Decisión pendiente | Owner | Fecha límite |
| --- | --- | --- | --- | --- | --- | --- |
| R-01 | | Alto / Medio / Bajo | | | | |
| _ejemplo_ | R-99 | Baja comprensión del costo | Quejas, mora, soporte | Copy claro + test de comprensión | ¿Congelar copy antes de build? | PM + Content | YYYY-MM-DD |

**Referencias al decision log:**

| Decisión | Fecha | Owner | Resumen | Link |
| --- | --- | --- | --- | --- |
| | | | | |
