# Plan alto nivel co-creación del MVP

## Principios de construcción del plan

- **Discovery y delivery en paralelo:** investigar para decidir mejor, sin bloquear al equipo de development.
- **AI-native workflow:** usar AI para acelerar exploración, síntesis, prototipado, documentación y handoff.
- **Benchmarking:** usar Mobbin MCP o recopilacion manual de referencias reales para revisar patrones de checkout, BNPL, crédito, pagos y repayment antes de definir la solución.
- **Code-first design:** omitir Figma como artefacto principal y usar un prototipo de alta fidelidad en código como fuente viva.
- **Domain-Driven Design para alinear arquitectura:** usar Domain-Driven Design como herramienta de alineación entre negocio, diseño y tecnología, sin convertirlo en un proceso pesado.
- **Mejora del design system existente:** revisar componentes disponibles, detectar gaps y proponer mejoras reutilizables para no resolver el MVP como una experiencia aislada.
- **Medición integral:** evaluar adopción, comprensión, pago puntual y riesgo.
- **Data como disciplina de decisión:** definir baseline, instrumentación, cohortes, thresholds y lectura de incrementalidad desde framing, no al cierre del piloto.

## Leadership blueprint

Al ser nuevo en el equipo, la primera responsabilidad no sería imponer una solución. Sería construir confianza, conexiones y credibilidad rápidamente para poder influir en la misión. Usualmente comparto un [leadership blueprint](https://docs.google.com/document/d/1WayagV_CErjZYm-mcz0FpfNQndqIYlTG/edit) con Design Team, Head of Design, Design Lead, Product Manager, Tech Lead y Development Team para establecer expectativas sobre cómo trabajo con las personas.

La confianza es la base para que el squad pueda moverse rápido.

### Mis principios de trabajo como guardrails

| Principio | ¿Qué significa? |
| --- | --- |
| **Drive Outcomes, Not Just Outputs** | Conectar contexto de negocio, UX strategy, datos y metas para priorizar el trabajo que más impacta: no solo entregar pantallas, sino reducir riesgo, mejorar comprensión y habilitar un MVP medible |
| **Raise Standards, Respect People** | Elevar la calidad del trabajo sin perder empatía: escuchar al equipo, desafiar supuestos, mentorear cuando haga falta y crear condiciones para que todos puedan aportar |
| **Lead Through Trust and Collaboration** | Construir relaciones de trabajo sólidas desde el inicio, crear espacios donde el equipo pueda aportar con seguridad y convertir colaboración en influencia para lograr la misión |
| **AI-Native Workflows, Human Judgment** | Usar AI para mejorar velocidad, exploración y documentación, manteniendo pensamiento crítico, systems thinking y colaboración como filtros para decidir qué se construye y por qué |

## Modelo de colaboración

El plan no solo organiza fases de diseño. Organiza cómo producto, diseño y tecnología co-crean una solución.

### Núcleo de decisión

- La tríada `Product Manager + Product Designer + Tech Lead` toma decisiones de alcance, tradeoffs, secuencia y riesgos.
- `Data` participa desde framing para definir baseline, criterios de medición, cohorts, thresholds y lectura del piloto.
- `Content Designer` y `UX Researcher` participan como owners en discovery, comprensión y validación, no solo como apoyo.
- `Legal`, `Riesgo`, `Marketing` y `Producto` entran desde definición, no solo al final.
- `Tech Lead` participa desde benchmarking y prototipo para asegurar que el code-first design sea un puente real hacia implementación.

### Elementos explícitos de cierre por fase

1. Decisión tomada.
2. Dueño de la decisión.
3. Impacto en alcance.
4. Artefacto actualizado.
5. Efecto sobre development.

### Rituales del squad

- **Tríada 2 veces por semana:** decide alcance, dependencias, cambios y riesgos.
- **Design-definition review semanal:** Product Designer, Content, Research, Data, Tech Lead y Front Lead revisan flujo, estados, copy, medición y readiness.
- **Decision log vivo:** toda decisión que cambie experiencia, esfuerzo o riesgo queda registrada con responsable, fecha y tradeoff.
- **Checkpoint de release:** Product Manager, Tech Lead, Data, Riesgo y Soporte confirman si el MVP sigue siendo lanzable.

### Creando confianza

- Publicar una forma de trabajo clara desde la primera semana: canales, rituales, responsables, decisiones y artefactos.
- Escuchar primero a Product Manager, Tech Lead, Data, Research, Content y negocio para entender restricciones reales antes de proponer solución.
- Convertir complejidad en dirección accionable: supuestos priorizados, decisiones pendientes y tradeoffs visibles.
- Usar evidencia y prototipos para alinear, no opiniones aisladas.
- Mantener un estándar alto en valor al cliente: si una decisión mejora conversión pero reduce comprensión o confianza, se discute explícitamente.

## Criterios de éxito del MVP

El MVP no debe evaluarse solamente por cantidad de créditos otorgados. Debe considerarse exitoso si muestra señales sanas en estas dimensiones:

- Hay adopción y recurrencia.
- Los usuarios entienden cuánto pagan, cuándo pagan y qué pasa si se atrasan.
- La experiencia no genera confusión ni presión indebida.
- El pago puntual es suficiente para justificar continuidad.
- La mora temprana está dentro de umbrales aceptables.
- El servicio al cliente no se satura por dudas básicas.
- El squad puede iterar con datos reales.
- El negocio puede decidir si escalar, ajustar o detener.

## Timeline sugerido de 3 meses

Development arranca en la semana 1 y trabaja en paralelo con diseño hasta la semana 11. Aunque el caso indica que backend ya inició con definiciones de negocio, el plan abre con una fase explícita para validar la oportunidad y luego libera definiciones progresivas para evitar desalinear lo ya avanzado.

Milestones claves para asegurar la ejecución saludable del plan:

- Cerrar un **happy path preliminar** al final de semana 3.
- Cerrar **principios de experiencia + arquitectura mínima + componentes reutilizables** no más tarde de semana 5.
- Llegar a semana 7 con el flujo ya totalmente, no apenas definido.
- Usar semanas 8 a 10 para iteración fina, no para descubrir la solución principal.

| Semana | Fase | Enfoque de diseño/producto | Enfoque de research | Trabajo adelantable de development | Trabajo dependiente de definición | Artefactos de salida |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Strategic framing | Oportunidad de negocio + hipótesis estratégica | Identificar oportunidad, segmentos iniciales y alternativas competitivas | Backend comparte definiciones ya asumidas para contrastarlas con hipótesis de negocio y riesgos de cartera | No cerrar aún copy, reglas finas ni flujo final | [Doc Opportunity Framing](./business-opportunity-bnpl.md), mapa de competidores y sustitutos, hipótesis estratégica inicial, criterios para decidir si avanzar|
| 2 | Strategic framing | Kickoff de decisiones + alineación inicial | Definir objetivos, preguntas críticas y supuestos a validar | Setup técnico, navegación base, instrumentación analítica base, architecture draft adaptable | No congelar aún estados regulatorios ni criterios finales | Canal del proyecto, decision log, lista de riesgos y preguntas críticas, architecture draft v0 |
| 3 | Discovery| Discovery setup + definición provisional | Cerrar plan de investigación, muestra, screener y estímulos | Estructura base de frontend y backend alineada al architecture draft | No cerrar todavía copy final de disclosures ni orden final del flujo | Research plan final, backlog de hipótesis, flow provisional v0, primeros estados y lenguaje ubicuo inicial |
| 4 | Discovery| Discovery fieldwork + freeze preliminar del happy path | Ejecutar entrevistas, survey y señales cuantitativas direccionales | Base de componentes, navegación inicial y capas técnicas no bloqueadas | Mantener abiertos edge cases regulatorios y criterios finales | Notas de entrevistas, primeros patrones de confianza y comprensión, happy path preliminar congelable, iteración del architecture draft |
| 5 | Discovery| Síntesis + principios de experiencia + system audit | Sintetizar hallazgos y validar hipótesis clave | Ajustes a estructura, componentes reutilizables y contratos base | No cerrar aún reglas finas de elegibilidad ni copy final | JTBDs, customer journey, principios de experiencia, arquitectura mínima, inventario de componentes reutilizables |
| 6 | Solution shaping | Benchmarking aterrizado + definición de solución | Contrastar hallazgos con patrones de mercado y expectativas de experiencia | Extensiones de componentes ya priorizadas, dependencias técnicas definidas | Mantener abiertos solo puntos finos de contenido y consentimiento | Benchmark deck, backlog de componentes, design use cases, reglas visibles y architecture draft v1 |
| 7 | Solution shaping | Flujo validado + edge cases MVP | Validar riesgos críticos del flujo con stakeholders y usuarios cuando aplique | Revisión de lo construido contra casos de uso y contratos mínimos | No introducir nuevos jobs o problemas al scope del MVP | Happy path validado, edge cases MVP, contratos mínimos, decisiones clave de producto y contenido |
| 8 | Solution shaping | Prototipo code-first v1 | Evaluar comprensión y claridad sobre prototipo v1 | Construcción sobre prototipo v1 e integración temprana | Mantener fuera del scope nuevos escenarios no críticos | Prototipo v1 en código, estados críticos, feedback del squad |
| 9 | Build and launch readiness | Iteración fina + spec viva | Validar copy, jerarquía y fricciones críticas | Iteración de estados, copy y comportamiento a partir de feedback validado | No reabrir happy path ni contratos mínimos | Prototipo v2, copy refinado, QA scenarios preliminares |
| 10 | Build and launch readiness | Consolidación de spec y backlog final | Verificar que la spec preserve hallazgos y criterios de comprensión | Front y back trabajan con contratos estabilizados y backlog refinado | No inventar decisiones nuevas de producto en esta semana | Spec ejecutable final, contratos validados, eventos analíticos, criterios de aceptación, backlog MVP |
| 11 | Build and launch readiness | Build sprint + GTM prep | Preparar plan de medición, soporte y protocolo post-launch | Implementación principal y QA temprano sobre casos críticos | No abrir scope nuevo | MVP integrado, ADRs clave, QA cases, materiales de servicio al cliente y plan de rollout |
| 12 | Build and launch readiness | Build sprint + launch readiness | Cerrar baseline de medición y logística de post-launch testing | Hardening, fixes finales y readiness de release | No agregar nuevos requisitos | MVP funcional, release checklist, piloto controlado listo, dashboard inicial y plan de monitoreo |

## Roles y responsabilidades

| Rol | Responsabilidad |
| --- | --- |
| Product Manager | Liderar alcance, priorización, apoyar framing, hipótesis, métricas, tradeoffs de negogio/producto y criterio de qué entra o sale del MVP |
| Product Designer | Liderar estrategia de experiencia, benchmarking, prototipo code-first, decisiones de flujo y spec |
| Tech Lead | Definir arquitectura, dependencias, contratos, factibilidad y secuencia técnica junto con la tríada |
| Data | Definir motor de aprobación si no existe, taxonomía de eventos, cohortes, thresholds, lectura de incrementalidad y monitoreo del piloto |
| Content Designer | Definir lenguaje claro, jerarquía de información, estados, mensajes críticos, disclosures y diseñar FAQs |
| UX Researcher | Ejecutar discovery, traducir hallazgos en implicaciones accionables y conducir post-launch testing |
| Front Lead | Aterrizar factibilidad del flujo, componentes y prototipo code-first hacia implementación real |
| QA | Convertir criterios en escenarios verificables desde definición y validar readiness antes del release |
| Business Analyst | Apoyar framing, hipótesis, métricas y tradeoffs de negocio |
| Dev team | Implementar MVP según spec, componentes definidos y mejoras reutilizables |
| Legal/riesgo | Validar disclosures, consentimiento, costos, elegibilidad y política de cobranza antes del cierre final |
| Soporte o CX | Preparar FAQs, scripts y rutas de escalamiento para el piloto |


## Riesgos del plan

| Riesgo | Impacto | Mitigación |
| --- | --- | --- |
| Optimizar solo por 3,000 créditos | Puede generar mala cartera y daño reputacional | Medir comprensión, pago puntual y mora desde el inicio |
| Baja comprensión del costo | Puede causar quejas, abandono o mora | Copy claro, resumen antes de aceptar y comprehension testing |
| Discovery insuficiente | Se construye una solución basada en supuestos | Discovery rápido antes del concepto y traducción de hallazgos a reglas, estados y contratos |
| Benchmarking superficial | Se copian patrones sin entender contexto | Evaluar patrones con criterios de crédito responsable, costo de implementación y compatibilidad con el design system |
| Duplicación de componentes | Inconsistencia y deuda de UI | Auditar componentes antes de prototipar y priorizar extensiones reutilizables |
| Handoff ambiguo | Retrabajo entre diseño y development | Prototipo code-first, spec viva, decision log y gates por fase |
| Cambios tardíos sobre happy path o contratos | Retrabajo en front y back | Congelar happy path preliminar en semana 4 y contratos mínimos en semana 7 |
| AI usada sin criterio | Soluciones rápidas pero desconectadas del usuario | AI después de JTBD y con validación humana |
| Riesgo legal o regulatorio | Bloqueo de lanzamiento o daño reputacional | Incluir legal/riesgo desde framing, definición y release checkpoint |


## Fase 1: Strategic framing

**1.1 Oportunidad de negocio:** Define por qué vale la pena lanzar este MVP, qué oportunidad concreta se quiere capturar y desde qué ventaja se va a competir.

**1.2 Alineación:** Convierte esa hipótesis inicial en una base compartida de decisiones, restricciones y lenguaje de dominio.

**Decisión a cerrar:** Qué estamos validando realmente con el MVP, qué no vamos a validar todavía y qué resultados no se deben sacrificar por perseguir originación.

**Participan:** Product Manager, Product Designer, Tech Lead, Data, Riesgo, Marketing y stakeholders clave.

### Actividades

1. Descubrir con producto, tecnologia, data, riesgo y marketing cuál es la meta real detrás del MVP:
   - ¿Adquisición, frecuencia, ticket promedio, retención, margen, aprendizaje o una combinación?
   - Qué resultado importa más en el corto plazo y cuál no se debe sacrificar.
2. Mapear la oportunidad de negocio:
   - Tamaño potencial de la oportunidad dentro del contexto.
   - Segmentos de usuario con mayor probabilidad de adopción y pago sano.
   - Momentos del journey donde crédito podría destrabar valor.
   - Señales disponibles o faltantes para medir elegibilidad, incrementalidad y calidad de cartera.
3. Analizar el landscape competitivo y sustitutos:
   - Tarjetas de crédito.
   - Otros BNPL o créditos de corto plazo.
   - Otros mecanismos de financiamiento.
4. Facilitar un **kickoff de decisiones o workshop** para cerrar:
   - Problema inicial.
   - Objetivo de negocio.
   - Restricciones no negociables.
   - Riesgos principales.
   - Alcance del discovery.
   - Primer criterio de éxito.
5. Generar una primera capa de alineación async arquitectónica con Domain-Driven Design:
   - Entidades y eventos de dominio clave.
   - Revisión de supuestos de backend contra objetivos de negocio y casos de uso esperados.
   - Architecture draft con decisiones abiertas, dependencias y supuestos de arquitectura.
   - Primer ADR con tradeoffs todavía por validar.
6. Definir con Data la primera capa de medición:
   - Baseline previo al experimento.
   - Cohortes iniciales.
   - Eventos y propiedades críticas.
   - Thresholds de lectura para escalar, iterar o pausar.

### Resultado esperado

Una hipótesis inicial del MVP con oportunidad priorizada, segmento objetivo, leading and lagging indicators, baseline inicial, restricciones no negociables, primer lenguaje de dominio y backlog de preguntas críticas.

| Elemento | Cierre esperado |
| --- | --- |
| Decisión | Hipótesis de MVP y criterios de éxito iniciales |
| Dueño | Product Manager y Product Designer |
| Impacto en alcance | Qué entra al framing del MVP y qué queda fuera por ahora |
| Artefacto actualizado | Opportunity framing, decision log, architecture draft v0, baseline y plan de medición v0 |
| Efecto sobre development | Backend puede contrastar lo ya iniciado; frontend puede recibir un paquete inicial para arrancar sin esperar el diseño final |

## Fase 2: Discovery y definición temprana

**2.1 Product discovery:** Entiende el problema real del usuario, los JTBDs y los riesgos de comprensión antes de cerrar la solución.

**2.2 Benchmarking y Design System review:** Contrasta hallazgos con patrones de mercado y con las capacidades reales del sistema de diseño.

**Decisión a cerrar:** Qué problemas del usuario sí justifican el MVP y qué experiencia mínima debemos proteger para no lanzar una solución que no aporta valor o no mueve la aguja.

**Participan:** Product Designer, UX Researcher, Content Designer, Product Manager, Data, Tech Lead y Front Lead.

### Actividades

1. Apoyar la definición y ejecución de investigación junto al Researcher. [Propuesta plan de investigación](./research-plan.md)
2. Identificar Jobs To Be Done funcionales, emocionales y sociales.
3. Trabajar con Content Designer para definir:
   - Estrategia de contenido.
   - Jerarquía de información.
   - Mensajes mínimos para comprensión.
4. Traducir cada hallazgo relevante en implicaciones:
   - Implicación de experiencia.
   - Implicación de regla de negocio.
   - Implicación de contrato, estado o dependencia técnica.
   - Implicación de medición, segmentación o lectura posterior.
5. Sintetizar hallazgos en:
   - JTBDs principal y secundarios.
   - Customer Journey con pains, puntos de contacto y oportunidades.
   - Principios de experiencia.
   - Ajustes al modelo de diagrama de architectura.
6. Hacer benchmarking de flujos comparables:
   - Checkout con financiamiento o pago diferido.
   - BNPL y créditos de corto plazo.
   - Wallets y métodos de pago guardados.
   - Pantallas de elegibilidad o preaprobación.
   - Resumen de costo, fecha límite y términos.
   - Recordatorios de pago y repayment.
   - Estados de atraso, error y servicio al cliente.
7. Definir con Data la estructura de instrumentación del flujo:
   - Eventos del funnel.
   - Propiedades de elegibilidad, oferta, aceptación, pago y atraso.
   - Cohortes y cortes de lectura.
   - Dependencias de tracking con frontend y backend.
8. Definir qué componentes se reutilizan, qué se extiende y qué se crea desde cero.

### Resultado esperado

JTBD, principios de experiencia, criterios de comprensión, patterns reutilizables, backlog de componentes y una definición temprana suficientemente clara para congelar un happy path preliminar.

| Elemento | Cierre esperado |
| --- | --- |
| Decisión | Happy path preliminar congelable y experiencia mínima a proteger |
| Dueño | Tech Lead, Product Manager y Product Designer con input de Research y Content |
| Impacto en alcance | Qué jobs y problemas sí justifican el MVP; qué hallazgos no se intentarán resolver en esta versión |
| Artefacto actualizado | Research synthesis, principios de experiencia, inventario de patrones y componentes, diagrama de architectura, taxonomía de eventos v0 |
| Efecto sobre development | El equipo puede seguir avanzando en trabajo adelantable con menos riesgo de retrabajo sobre estructura, componentes y contratos base |

## Fase 3: Solution shaping

**3.1 Definición:** Convierte el aprendizaje en reglas, estados, componentes, criterios de experiencia y contratos mínimos.

**3.2 Prototipo code-first:** Vuelve la definición una experiencia tangible, evaluable y útil para destrabar implementación.

**Decisión a cerrar:** Happy path, edge cases críticos del MVP, reglas de negocio visibles para front, componentes, estados y contratos mínimos para implementación.

**Participan:** Product Manager, Product Designer, Tech Lead, Content Designer, Front Lead.

### Actividades

1. Traducir hallazgos del discovery a design use cases priorizados.
2. Definir criterios de experiencia por design use case.
3. Definir estrategia de contenido:
   - Jerarquía de información por momento del flujo.
   - Terminología clara para crédito, costo total, fecha límite, atraso, pago y elegibilidad.
   - Mensajes clave por design use case.
   - Tono responsable: claro, directo y sin presión comercial.
   - Disclosures mínimos que deben aparecer antes de aceptar.
   - Criterios de comprensión para validar copy con usuarios.
4. Definir reglas de negocio, estados y restricciones del MVP:
   - Elegibilidad.
   - Límite disponible.
   - Cálculo de costo total.
   - Fecha límite de pago.
   - Aceptación de términos.
   - Confirmación de originación.
   - Pago pendiente, pagado y vencido.
   - Servicio al cliente y escalamiento.
5. Traducir reglas de negocio a reglas de medición y monitoreo:
   - Qué define una oferta elegible.
   - Qué define una adopción válida.
   - Qué define un pago puntual.
   - Qué define deterioro temprano.
   - Qué alertas disparan revisión manual o pausa.
6. Consolidar la definición de arquitectura:
   - Revisar que backend soporte los design use cases priorizados.
   - Registrar decisiones de arquitectura y tradeoffs en ADRs cortos.
8. Explorar 2 o 3 rutas basadas en JTBD usando AI.
9. Diseñar directamente en un prototipo de alta fidelidad en código del happy path, usando componentes reales o equivalentes del design system.

### Resultado esperado

Un prototipo happy path code-first validado, content aprobado, estados críticos definidos que sirve para validar y para destrabar implementación.

| Elemento | Cierre esperado |
| --- | --- |
| Decisión | Flujo validado, edge cases MVP, reglas visibles y contratos mínimos |
| Dueño | Tech Lead, Product Manager y Product Designer con soporte de Front y Content |
| Impacto en alcance | Qué se congela para MVP y qué se mueve a post-MVP |
| Artefacto actualizado | Prototipo code-first, spec viva v1, ADRs, decisiones de componente, scorecard de métricas y alertas |
| Efecto sobre development | Front y back pueden construir sobre una definición ya encaminada, no apenas descubierta |

## Fase 4: Build and launch readiness

**4.1 Spec y build:** Consolida la definición en una fuente de verdad ejecutable y acompaña la implementación sin abrir scope tardío.

**4.2 GTM y medición:** Prepara el piloto, la operación de soporte y el aprendizaje post-launch para decidir si iterar, pausar o escalar.

**Decisión a cerrar:** Qué entra al MVP, qué se difiere y qué riesgos quedan aceptados antes de lanzar.

**Participan:** Squad completo: Product Manager, Product Designer, Tech Lead, Dev team, QA, Content, Research, Data, Marketing, Riesgo y Soporte.

### Actividades

1. Consolidar la spec final con:
   - Vistas.
   - Casos de uso.
   - Comportamientos esperados.
   - Restricciones legales y de consentimiento.
   - Dependencias técnicas.
   - Eventos analíticos.
   - Definiciones de métricas y cohortes.
2. Trabajar con development desde la spec para cubrir escenarios críticos.
3. Compartir progreso en async daily y mantener alineaciones semanales con el squad:
   - Decisiones tomadas.
   - Cambios por discovery validado.
   - Riesgos abiertos.
   - Dependencias.
   - Casos no cubiertos.
4. Verificar que la implementación respete:
   - Comportamientos del prototipo.
   - Spec.
   - Uso acordado de componentes existentes y nuevos.
   - Estados definidos.
   - Criterios de aceptación.
5. Preparar lanzamiento como piloto limitado:
   - Segmento inicial.
   - Mensajes responsables.
   - FAQs.
   - Scripts de atención.
   - Rutas de escalamiento.
   - Rollout gradual.
6. Establecer el ritual de seguimiento post-launch:
   - Reunión semanal con Product Manager, Product Design, Research, Content, Data y Tech Lead.
   - Revisar métricas, hallazgos y riesgos.
   - Tomar una de cuatro decisiones: iterar, pausar, ampliar o rediseñar.

### Resultado esperado

Una spec ejecutable, criterios verificables, aceptación QA, readiness legal y operativa, y un esquema claro de monitoreo para iterar sin abrir scope tardíamente.

| Elemento | Cierre esperado |
| --- | --- |
| Decisión | Scope final del MVP, riesgos aceptados y readiness de lanzamiento |
| Dueño | Tech Lead, Product Manager y Product Designer con validación de Riesgo |
| Impacto en alcance | Qué se lanza ahora, qué se difiere y qué queda como aprendizaje post-launch |
| Artefacto actualizado | Spec ejecutable final, QA scenarios, release checklist, dashboard inicial, definición de cohorts y thresholds |
| Efecto sobre development | El equipo entra a hardening y release sin abrir scope nuevo ni introducir decisiones estructurales tardías |

### Estructura recomendada de la spec

```md
# Spec: Agentic Hand-off

## Feature Overview
## Sign-off
## Business Context
## Objective
## Intent (The "What")
## In Scope and Out of Scope
## User Story
### Why this is priority
### Test Scenarios
### Acceptance Criteria
## Vistas
## Datos requeridos
## Estados y errores
## Content aprobado
## Componentes existentes, extensiones y componentes nuevos
## Eventos de analítica
## Dependencias
## Riesgos abiertos
```


