# Plan alto nivel de co-creación del MVP

## Principios construccion de; plan

- **Discovery y delivery en paralelo:** investigar para decidir mejor, sin bloquear al equipo técnico.
- **AI-native workflow:** usar AI para acelerar exploración, síntesis, prototipado, documentación y handoff.
- **Benchmarking:** usar Mobbin MCP para revisar patrones reales de checkout, BNPL, crédito, pagos y repayment antes de definir la solución.
- **Code-first design:** Omitir Figma como artefacto principal y usar un prototipo de alta fidelidad en código como fuente viva.
- **Mejora del design system existente:** revisar componentes disponibles, detectar gaps y proponer mejoras reutilizables para no resolver el MVP como una experiencia aislada.
- **Medición integral:** evaluar adopción, comprensión, pago puntual y riesgo.

## Leadership blueprint de entrada

Al ser nuevo en el equipo, la primera responsabilidad no sería imponer una solución. Sería construir confianza, conexiones y credibilidad rápidamente para poder influir en la misión. Usualmente comparto un documento para establecer expectativas sobre cómo trabajo con las personas. Documento de refencia

La confianza es la base para que el squad pueda moverse rápido en un producto sensible como crédito. Para lograrlo, usaría un leadership blueprint simple, compartido con Design Team, Head of Design, Head of Engineering y Product Leads.

### Mis principios de trabajo

| Principio | ¿Qué significa? |
| --- | --- |
| **Drive Outcomes, Not Just Outputs** | Conectar contexto de negocio, UX strategy, datos y metas para priorizar el trabajo que más impacta: no solo entregar pantallas, sino reducir riesgo, mejorar comprensión y habilitar un MVP medible |
| **Build Trust Through Clarity** | Hacer visibles prioridades, decisiones, supuestos, riesgos y avances para reducir fricción entre diseño, producto, tecnología, negocio y riesgo |
| **Raise Standards, Respect People** | Elevar la calidad del trabajo sin perder empatía: escuchar al equipo, desafiar supuestos, mentorear cuando haga falta y crear condiciones para que todos puedan aportar |
| **Lead Through Trust and Collaboration** | Construir relaciones de trabajo sólidas desde el inicio, crear espacios donde el equipo pueda aportar con seguridad y convertir colaboración en influencia para lograr la misión |
| **AI-Native Workflows, Human Judgment** | Usar AI para mejorar velocidad, exploración, síntesis y documentación, manteniendo pensamiento crítico, systems thinking y colaboración como filtros para decidir qué se construye y por qué |

### Preguntas que uso para entender y alinear expectativas del equipo

- **What is your mission?**
- **What actions do you value?**
- **What do you expect from your team?**
- **What could the team expect from you?**

### Cómo crear confianza en la práctica

- Publicar una forma de trabajo clara desde la primera semana: canales, rituales, responsables, decisiones y artefactos.
- Escuchar primero a PM, Tech Lead, Research, Content, BA, QA y negocio para entender restricciones reales antes de proponer solución.
- Convertir complejidad en dirección accionable: supuestos priorizados, decisiones pendientes y tradeoffs visibles.
- Usar evidencia y prototipos para alinear, no opiniones aisladas.
- Dar crédito al trabajo existente del squad y proponer mejoras sin invalidar lo avanzado.
- Mantener un estándar alto en crédito: si una decisión mejora conversión pero reduce comprensión o confianza, se discute explícitamente.

### Principios de trabajo de Juan Galindo como guardrails de decisión

| Principio | Guardrail |
| --- | --- |
| **Drive Outcomes, Not Just Outputs** | Ningún entregable se considera completo si no explica qué riesgo reduce, qué decisión habilita o qué métrica impacta |
| **Build Trust Through Clarity** | No hay decisiones importantes escondidas en conversaciones privadas; supuestos, tradeoffs y blockers quedan visibles |
| **Raise Standards, Respect People** | Se desafían ideas con evidencia y criterios, no personas; el feedback debe elevar la calidad y preservar colaboración |
| **Lead Through Trust and Collaboration** | La influencia se gana escuchando, conectando equipos y creando compromiso compartido antes de pedir velocidad o alineación |
| **AI-Native Workflows, Human Judgment** | AI acelera exploración y documentación, pero las decisiones pasan por criterio humano, evidencia, sistemas y restricciones reales |

## Fase 1: Alineación inicial eficiente

### Objetivo

Crear una base compartida antes de hacer workshops largos o diseñar soluciones, usando claridad operativa como primer mecanismo para construir confianza.

### Why

Evita que el squad arranque desde supuestos dispersos. Al ser nuevo en el equipo, esta fase construye confianza inicial, hace visibles las decisiones y permite que negocio, diseño, tecnología y riesgo trabajen sobre la misma realidad.

### Outcome

Un punto de partida común para que diseño, producto, tecnología y negocio trabajen sobre la misma realidad, con decisiones visibles y una definición compartida de impacto.

### Actividades

1. Crear un canal de Slack del proyecto con PM, Business Analyst, Tech Lead, Content Designer, UX Researcher, QA, diseño, negocio y stakeholders clave.
- Usar el canal para recopilar información existente:
  - Meta de negocio: 3,000 créditos otorgados en los primeros 3 meses.
  - Definiciones existentes del producto.
  - Restricciones legales, regulatorias y de riesgo.
  - Supuestos de elegibilidad.
  - Costos, comisiones, límites y plazo.
  - Dependencias técnicas.
  - Métricas disponibles.
  - Preguntas críticas abiertas.
2. Consolidar un documento base vivo con:
  - Documento de referencia: [Ejemplo reemplazable - Crédito MVP base doc](https://docs.google.com/document/d/REEMPLAZAR_POR_ID_DEL_DOCUMENTO).
  - Contexto.
  - Decisiones conocidas.
  - Supuestos.
  - Riesgos.
  - Preguntas críticas.
  - Dependencias.
  - Leadership blueprint y principios de trabajo.
  - Decision log con dueño, fecha, razonamiento y métrica afectada.
3. Facilitar un workshop corto de alineación para acordar:
  - Problema inicial.
  - Objetivo de negocio.
  - Restricciones no negociables.
  - Riesgos principales.
  - Alcance del discovery.
  - Primer criterio de éxito.
4. Reencuadrar la meta de 3,000 créditos con métricas más sanas:
  - Créditos otorgados.
  - Comprensión del costo.
  - Aceptación de la oferta.
  - Pago puntual.
  - Mora temprana.
  - Abandono por pantalla.
  - Contactos a soporte.

## Fase 2: Product Discovery

### Objetivo

Entender el problema real del usuario, JTBDs antes de elegir una solución.

### Why

Reduce el riesgo de diseñar una solución atractiva pero desconectada del usuario. En crédito, entender motivaciones, lenguaje, confianza y comprensión del costo es crítico para evitar confusión, rechazo o mora temprana.

### Outcome

Una definición accionable del problema, basada en evidencia inicial y no solo en supuestos internos: JTBD, propuesta de valor, principios de experiencia y criterios para evaluar conceptos.

### Actividades

1. Ejecutar investigación con usuarios potenciales.
2. Explorar momentos de falta de liquidez.
  - Qué detona la necesidad?
  - Qué tan urgente es?
  - Qué alternativas usa hoy?
  - Qué le genera confianza?
  - Qué le genera rechazo?
  - Qué entiende por pagar en 15 días?
  - Qué tan sensible es al costo total?
3. Identificar Jobs To Be Done funcionales, emocionales y sociales.
4. Validar hipótesis críticas:
  - Qué necesita entender antes de aceptar.
  - Qué lenguaje suena riesgoso, abusivo o confuso.
  - Qué condiciones mínimas le darían confianza.
5. Trabajar con Content Designer para definir:
  - Estrategia de Contenido
  - Jerarquía de información.
  - Mensajes mínimos para comprensión.
- Sintetizar hallazgos en:
  - JTBD principal.
  - Pain points.
  - Principios de experiencia.
  - Implicaciones para negocio, experiencia, contenido, riesgo y tecnología.

### Propuesta de plan de investigación

#### Contexto

El negocio quiere lanzar una funcionalidad de crédito. El squad ya necesita avanzar, pero todavía no existe evidencia suficiente sobre necesidades, lenguaje, confianza, comprensión del costo o barreras de uso.

#### Objetivo general

Identificar JTBDs, condiciones de confianza, riesgos de comprensión y criterios de experiencia necesarios para diseñar un MVP de crédito responsable, claro y viable para desarrollo, combinando evidencia cualitativa con señales cuantitativas rápidas.

#### Objetivos específicos

- Entender cuándo y por qué un usuario necesitaría liquidez.
- Identificar alternativas actuales cuando necesita financiar una compra.
- Detectar información mínima necesaria antes de aceptar una deuda de corto, mediano o largo plazo.
- Identificar lenguaje claro, lenguaje riesgoso y términos que generan desconfianza.
- Dimensionar señales de intención, claridad percibida, confianza y sensibilidad al costo.
- Definir principios de experiencia y propuesta de valor para competir con claridad en un mercado financiero complejo.


#### Preguntas de investigación

- ¿En qué momentos el usuario necesita liquidez para completar su compra de súper?
- ¿Qué alternativas usa hoy cuando no puede o no quiere pagar todo al momento?
- ¿Qué entiende por "pagar en 15 días"?
- ¿Qué información necesita antes de aceptar una deuda de corto plazo?
- ¿Qué costo, término o condición le generaría rechazo?
- ¿Qué señales aumentan confianza: marca, claridad, recordatorios, soporte, método de pago o control?
- ¿Qué lenguaje entiende naturalmente y qué lenguaje percibe como riesgoso o engañoso?
- ¿Qué podría causar abandono, confusión, quejas o mora temprana?

#### Hipótesis iniciales

- Si el crédito aparece en el contexto del checkout, el usuario lo entenderá mejor como ayuda para completar una compra real y no como deuda genérica.
- Si el costo total, la fecha límite y las consecuencias de atraso son visibles antes de aceptar, aumentará la comprensión y disminuirá el riesgo de quejas.
- Si el lenguaje evita promesas como "fácil", "gratis" o "sin preocupaciones", la experiencia será más confiable y responsable.
- Si el usuario percibe control posterior, con estado, recordatorios y forma de pago claros, habrá mayor disposición a usar el producto.

#### Metodología multi-método

| Componente | Definición |
| --- | --- |
| Enfoque | Investigación multi-método ligera, orientada a decisiones de MVP |
| Duración | 5 a 10 días hábiles, dependiendo de acceso a usuarios y data existente |
| Cualitativo principal | Entrevistas semiestructuradas de 30 a 40 minutos para entender motivaciones, lenguaje, confianza y contexto de uso |
| Cualitativo complementario | Test moderado de comprensión con estímulos de baja fidelidad |
| Cuantitativo rápido | Encuesta corta o intercept survey para medir señales direccionales de intención, claridad, confianza y sensibilidad al costo |
| Cuantitativo secundario | Análisis de data existente: abandono de checkout, métodos de pago usados, tickets de soporte, frecuencia de compra, ticket promedio y uso de promociones |
| Modalidad | Remota y moderada para cualitativo; online o intercept para cuantitativo |
| Equipo | UX Researcher lidera; Product Designer, Content Designer, PM y BA observan sesiones clave |

#### Participantes y muestra

| Criterio | Definición |
| --- | --- |
| Muestra cualitativa | 8 a 12 participantes |
| Muestra cuantitativa | 80 a 150 respuestas si existe canal de intercept o base de usuarios; si no, usar datos comportamentales existentes como proxy |
| Segmentos | Usuarios frecuentes del supermercado online, usuarios ocasionales, usuarios que abandonaron checkout y usuarios sensibles a promociones/métodos de pago |
| Criterios de inclusión | Mayores de edad, compradores digitales de súper, distintos niveles de familiaridad con crédito |
| Criterios de exclusión | Personas que no toman decisiones de pago del hogar o que no han comprado súper online recientemente |
| Nota metodológica | El cualitativo busca profundidad y patrones; el cuantitativo busca señales direccionales, no representatividad estadística definitiva |

#### Estímulos

- Descripción neutral del concepto: "paga tu súper en 15 días".
- Variantes de copy para oferta, resumen de costo, fecha límite y confirmación.
- Ejemplos de resumen: monto de compra, costo, total a pagar y fecha límite.
- Escenarios de pago puntual, atraso, no elegibilidad y error.
- Bocetos o wireframes de baja fidelidad si el equipo ya tiene una hipótesis de flujo.

#### Señales cuantitativas a levantar

- Intención declarada de uso ante el concepto.
- Claridad percibida del costo total y fecha límite.
- Nivel de confianza en la opción de crédito dentro del supermercado online.
- Sensibilidad al costo, comisiones o penalizaciones.
- Preferencia de punto de entrada: checkout, método de pago, oferta contextual o comunicación previa.
- Motivos de rechazo o duda.
- Frecuencia de compra, ticket promedio declarado y uso de promociones/métodos de pago.

#### Guía de sesión

1. **Screening y contexto:** confirmar perfil, frecuencia de compra y familiaridad con métodos de pago/crédito.
2. **Comportamiento actual:** entender cómo compra, cómo decide cuánto gastar y qué hace cuando el presupuesto no alcanza.
3. **Momento crítico:** explorar una situación reciente de falta de liquidez, urgencia o abandono de compra.
4. **Reacción al concepto:** presentar una descripción neutral de "paga tu súper en 15 días".
5. **Comprensión:** pedir al usuario que explique con sus palabras cuánto pagaría, cuándo pagaría y qué pasa si se atrasa.
6. **Lenguaje y confianza:** comparar variantes de copy y detectar términos claros, confusos o sensibles.
7. **Cierre:** identificar condiciones mínimas para usarlo, motivos de rechazo y dudas pendientes.

#### Plan de análisis

- Agrupar hallazgos por temas: necesidad, confianza, comprensión, lenguaje, fricción, riesgo y soporte.
- Mapear hallazgos contra etapas del journey: checkout, aceptación, confirmación, recordatorio y pago.
- Separar hechos observados, interpretaciones, hipótesis y decisiones recomendadas.
- Cruzar hallazgos cualitativos con señales cuantitativas para evitar sobregeneralizar entrevistas individuales.
- Usar data existente para contrastar supuestos: abandono, ticket promedio, métodos de pago, frecuencia y soporte.
- Priorizar hallazgos por impacto en el MVP: alto riesgo de comprensión, alto impacto en conversión, alto impacto en pago puntual o alta dependencia técnica/legal.
- Sintetizar implicaciones para negocio, experiencia, contenido, riesgo y tecnología.

#### Entregables

- Research brief ejecutivo.
- JTBD principal y secundarios.
- Propuesta de valor inicial a validar.
- Principios de experiencia.
- Riesgos de comprensión y confianza.
- Señales cuantitativas direccionales sobre intención, claridad, confianza y sensibilidad al costo.
- Recomendaciones de contenido.
- Criterios para evaluar conceptos.
- Implicaciones para benchmarking, prototipo code-first y spec de desarrollo.

#### Criterios de decisión

- Si la mayoría no entiende costo total o fecha límite, no se avanza a prototipo sin rediseñar la jerarquía de información.
- Si las señales cuantitativas muestran baja claridad o baja confianza, se prioriza rediseñar contenido, disclosure y punto de entrada antes de avanzar a alta fidelidad.
- Si el principal motivador es urgencia extrema sin capacidad clara de pago, se escala el riesgo con negocio y risk antes de ampliar alcance.
- Si el rechazo viene por lenguaje o desconfianza, se prioriza trabajo de content, disclosure y soporte.
- Si el usuario entiende la propuesta y valora completar la compra con control, se avanza a benchmarking y prototipo code-first.
- Cada decisión derivada del discovery debe conectar hallazgo, implicación y acción: qué aprendimos, qué cambia y qué métrica esperamos mover.

### JTBD inicial a validar

> Cuando estoy haciendo mi súper y no quiero o no puedo pagarlo todo hoy, quiero una forma clara y confiable de completar mi compra y pagar en una fecha cercana, para resolver mi necesidad sin perder control de cuánto debo y cuándo debo pagarlo.

### Propuesta de valor inicial a validar

> Completa tu súper hoy y págalo en 15 días, con el costo total y la fecha límite claros antes de aceptar.

Esta propuesta debe comunicar tres ideas sin sobredimensionar la promesa:

- **Liquidez contextual:** aparece cuando el usuario está resolviendo una compra real, no como crédito genérico.
- **Claridad antes de aceptar:** el usuario sabe cuánto pagará, cuándo pagará y qué pasa si se atrasa.
- **Control y confianza:** el producto ayuda a completar la compra sin generar sensación de trampa, presión o deuda escondida.

### Principios de experiencia derivados del discovery

- **Contexto antes que promoción:** presentar el crédito como una opción útil dentro del checkout, no como una oferta agresiva de deuda.
- **Costo total siempre visible:** mostrar monto financiado, costo, total a pagar y fecha límite antes de cualquier aceptación.
- **Fricción responsable:** agregar una pausa consciente antes de aceptar; en crédito, menos fricción no siempre significa mejor experiencia.
- **Lenguaje simple y directo:** evitar términos ambiguos como "fácil", "gratis" o "sin preocupaciones" si no están respaldados por condiciones reales.
- **Comparabilidad:** permitir que el usuario entienda cómo esta opción se compara con pagar hoy usando otros métodos.
- **Control posterior:** después de aceptar, el usuario debe poder consultar estado, fecha límite, monto pendiente y forma de pago sin buscar información.
- **Estados honestos:** explicar con claridad no elegibilidad, errores, límite insuficiente, pago vencido y soporte, sin culpar al usuario.
- **Confianza operativa:** cada confirmación, recordatorio y comprobante debe reducir incertidumbre sobre compra, crédito y pago.

### Criterios para evaluar conceptos

- El usuario entiende la propuesta sin explicación externa.
- El costo total y la fecha límite se identifican en menos de unos segundos.
- La aceptación se siente informada, no impulsiva.
- El flujo no oculta restricciones legales, costo o consecuencias de atraso.
- La solución puede implementarse con componentes existentes o extensiones razonables.
- El concepto permite medir comprensión, abandono, aceptación y pago puntual.

## Fase 3: Benchmarking y auditoría de componentes

### Objetivo

Usar referencias reales de mercado y el sistema existente para diseñar una experiencia más rápida de construir, más consistente y mejor informada.

### Why

Evita diseñar desde cero o copiar patrones sin contexto. Esta fase conecta evidencia externa, experiencia de mercado y capacidades internas para acelerar el prototipo sin crear deuda innecesaria en el design system.

### Outcome

Un inventario de patrones y componentes que informa el prototipo code-first, reduce retrabajo y genera mejoras reutilizables para el sistema de producto, sin copiar benchmarks fuera de contexto.

### Actividades

- Usar Mobbin MCP para hacer benchmarking de flujos comparables:
  - Checkout con financiamiento o pago diferido.
  - BNPL y créditos de corto plazo.
  - Wallets y métodos de pago guardados.
  - Pantallas de elegibilidad o preaprobación.
  - Resumen de costo, fecha límite y términos.
  - Recordatorios de pago y repayment.
  - Estados de atraso, error y soporte.
- Analizar los benchmarks con foco en patrones reutilizables:
  - Dónde aparece la oferta.
  - Cómo se explica el costo.
  - Cómo se reduce ansiedad antes de aceptar.
  - Cómo se muestra la fecha límite.
  - Cómo se presenta el consentimiento.
  - Qué estados se resuelven dentro del flujo y cuáles se derivan a soporte.
- Evaluar cada patrón con pensamiento crítico y systems thinking:
  - Qué problema resuelve.
  - Qué comportamiento incentiva.
  - Qué riesgo podría introducir.
  - Qué dependencia técnica u operativa exige.
  - Qué impacto tendría en soporte, riesgo, legal y medición.
- Auditar los componentes existentes del producto o design system:
  - Checkout summary.
  - Payment method selector.
  - Promo/offer card.
  - Alert, banner y inline message.
  - Bottom sheet o modal de confirmación.
  - Terms and conditions checkbox.
  - Status/receipt screen.
  - Notification/reminder patterns.
  - Error and empty states.
- Proponer mejoras a componentes existentes antes de crear componentes nuevos:
  - Variantes para información financiera sensible.
  - Jerarquía para monto, costo total y fecha límite.
  - Estados de loading, error, warning y disabled.
  - Patrones de disclosure progresivo.
  - Accesibilidad y legibilidad para montos, fechas y términos.
  - Eventos analíticos reutilizables por componente.
- Definir qué se reutiliza, qué se extiende y qué se crea desde cero.

### Criterios de evaluación de benchmarks

- Claridad del costo total.
- Visibilidad de fecha límite.
- Fricción adecuada antes de aceptar deuda.
- Confianza y tono responsable.
- Facilidad para comparar con otros métodos de pago.
- Manejo de estados de error, atraso y soporte.
- Factibilidad de implementación con componentes existentes.

## Fase 4: Exploración AI-native y prototipo code-first

### Objetivo

Convertir los hallazgos del discovery en una experiencia tangible, validable y cercana a desarrollo.

### Why

Convierte estrategia y discovery en una experiencia tangible que el squad puede evaluar, probar y discutir. El prototipo en código reduce ambigüedad, acelera validación y acerca diseño a implementación sin depender de un handoff visual separado.

### Outcome

Un prototipo navegable en código que permite validar experiencia, contenido y comportamiento sin depender de Figma como handoff principal, manteniendo trazabilidad entre hallazgos, decisiones y outcomes.

### Actividades

- Usar AI para generar alternativas de experiencia basadas en JTBD, hallazgos y restricciones reales.
- Usar AI como herramienta de divergencia, crítica y documentación; la selección del concepto se decide con evidencia, criterios de experiencia, factibilidad y riesgo.
- Explorar 2 o 3 rutas de solución:
  - Crédito como opción dentro del checkout.
  - Crédito como método de pago disponible.
  - Oferta contextual para completar el súper cuando el usuario tiene fricción de pago.
- Evaluar conceptos con el squad usando criterios de:
  - Claridad.
  - Confianza.
  - Factibilidad técnica.
  - Riesgo legal/financiero.
  - Potencial de conversión.
  - Aprendizaje para el MVP.
- Incorporar patrones observados en Mobbin y capacidades reales del sistema de componentes.
- Elegir una ruta base para prototipar.
- Diseñar directamente en un prototipo de alta fidelidad en código, usando componentes reales o equivalentes del design system.
- Priorizar extensiones de componentes existentes antes de crear componentes nuevos.
- Usar el prototipo como fuente viva para validar:
  - Interacción.
  - Contenido.
  - Jerarquía visual.
  - Responsividad.
  - Estados.
  - Comportamiento.
- Documentar qué decisiones del prototipo responden a cada principio de experiencia y qué métricas buscará mover.

### Happy path del prototipo

1. Usuario llega al checkout del súper.
2. Ve una opción elegible para pagar en 15 días.
3. Revisa monto, costo total y fecha límite.
4. Acepta términos de forma informada.
5. Confirma la compra con crédito.
6. Recibe confirmación clara de la compra y del crédito.
7. Recibe recordatorios antes del vencimiento.
8. Paga el crédito.
9. Recibe confirmación de pago.

### Estados críticos

- Usuario no elegible.
- Límite insuficiente.
- Costo no disponible.
- Error al aceptar términos.
- Error al confirmar compra.
- Pago pendiente.
- Pago vencido.
- Pago exitoso.
- Necesita soporte.

### Uso de AI

- Generar variantes de flujo.
- Proponer copy alternativo por pantalla.
- Detectar riesgos de comprensión.
- Crear checklists de estados.
- Preparar escenarios de prueba.
- Convertir aprendizajes de research en criterios de diseño.
- Revisar consistencia entre JTBD, propuesta de valor, principios de experiencia, componentes y criterios de aceptación.
- Mantener outputs de AI trazables y revisados por diseño, content, research, PM y tech antes de convertirse en decisiones.

## Fase 5: Spec ejecutable para development

### Objetivo

Convertir el prototipo en una especificación clara, accionable y útil para un squad o un agente de implementación.

### Why

Hace que el diseño sea implementable. La spec reduce interpretación subjetiva, permite que desarrollo y QA trabajen con claridad y deja contexto suficiente para que un agente o el squad construyan el producto con menos retrabajo.

### Outcome

Un handoff code-first y agent-ready: suficientemente específico para que development avance con menos ambigüedad y para que un agente pueda implementar partes del producto con contexto claro, criterios humanos y trazabilidad de decisiones.

### Actividades

- Transformar el prototipo en una spec de producto orientada a desarrollo.
- Documentar casos de uso:
  - Usuario elegible ve la oferta.
  - Usuario no elegible no ve la oferta o recibe una explicación breve.
  - Usuario acepta crédito.
  - Usuario cancela antes de confirmar.
  - Falla la validación.
  - Falla el cálculo de costo.
  - Usuario paga a tiempo.
  - Usuario se atrasa.
  - Usuario solicita soporte.
- Documentar por vista:
  - Objetivo de la vista.
  - Datos requeridos.
  - Componentes usados.
  - Nuevos componentes necesarios.
  - Componentes existentes a mejorar o extender.
  - Referencias de benchmark que justifican el patrón elegido.
  - Estados.
  - Validaciones.
  - Eventos analíticos.
  - Criterios de aceptación.
  - Principio de experiencia que protege.
  - Outcome o riesgo que busca impactar.
- Definir comportamientos esperados:
  - Loading.
  - Error.
  - Empty state.
  - Disabled state.
  - Confirmaciones.
  - Navegación.
  - Fallbacks.
  - Restricciones legales y de consentimiento.
- Mapear dependencias técnicas:
  - Motor de elegibilidad.
  - Cálculo de costo total.
  - Aceptación legal.
  - Originación.
  - Pagos.
  - Notificaciones.
  - Soporte.
  - Analítica.

### Estructura recomendada de la spec

```md
# Spec: Paga tu súper en 15 días

## Objetivo
## Alcance MVP
## Fuera de alcance
## Casos de uso
## Flujos
## Vistas y componentes
## Datos requeridos
## Estados y errores
## Copy aprobado
## Benchmarking y rationale de patrones
## Componentes existentes, extensiones y componentes nuevos
## Eventos de analítica
## Criterios de aceptación
## Decision log y rationale
## Dependencias
## Riesgos abiertos
```

## Fase 6: Development y delivery con squad

### Objetivo

Construir el MVP con ciclos cortos de revisión, manteniendo coherencia entre discovery, prototipo, spec e implementación.

### Why

Protege la coherencia entre intención de producto e implementación real. Esta fase evita que el MVP se degrade por presión de tiempo, manteniendo foco en lo esencial, calidad suficiente y trazabilidad entre decisiones, componentes y criterios de aceptación.

### Outcome

Un MVP construido con trazabilidad entre investigación, decisión de producto, experiencia y desarrollo, sin convertir calidad en burocracia.

### Actividades

- Traducir la spec en backlog MVP con PM, Business Analyst y Tech Lead.
- Separar el trabajo en frentes:
  - Experiencia cliente.
  - Mejoras de componentes existentes.
  - Elegibilidad.
  - Cálculo de crédito y costo.
  - Aceptación legal.
  - Originación.
  - Pagos.
  - Recordatorios.
  - Soporte.
  - Analítica.
  - QA.
- Definir contratos mínimos entre front y back para desbloquear desarrollo temprano.
- Trabajar con QA desde la spec para cubrir escenarios críticos:
  - Elegible.
  - No elegible.
  - Costo no disponible.
  - Aceptación fallida.
  - Compra confirmada.
  - Pago vencido.
  - Pago exitoso.
  - Error de confirmación.
  - Soporte.
- Hacer revisiones semanales con squad:
  - Decisiones tomadas.
  - Cambios por discovery.
  - Riesgos abiertos.
  - Dependencias.
  - Diferencias entre prototipo e implementación.
  - Impacto esperado en métricas y riesgos.
- Verificar que la implementación respete:
  - Prototipo.
  - Spec.
  - Copy aprobado.
  - Uso acordado de componentes existentes y nuevos.
  - Estados definidos.
  - Criterios de aceptación.
- Mantener un estándar alto sin bloquear innecesariamente:
  - Separar must-have de mejoras post-MVP.
  - Explicar cada ajuste con evidencia, riesgo o impacto.
  - Cuidar que QA, dev y content participen temprano, no al final.

## Fase 7: Go-to-market controlado

### Objetivo

Lanzar el MVP de forma gradual para aprender sin exponer innecesariamente al usuario, la marca o la cartera.

### Why

Permite aprender en mercado sin tratar el MVP como escala definitiva. En un producto de crédito, el go-to-market debe controlar exposición, proteger la confianza del usuario y preparar soporte antes de empujar crecimiento.

### Outcome

Un lanzamiento controlado que permite validar adopción y comportamiento real sin tratar el MVP como escala definitiva ni confundir crecimiento con éxito.

### Actividades

- Lanzar como piloto limitado, no como despliegue masivo.
- Definir segmento inicial:
  - Usuarios elegibles del supermercado online.
  - Usuarios con señales mínimas de confianza y capacidad de pago.
  - Usuarios dentro de reglas conservadoras de riesgo.
- Activar el producto en puntos de entrada específicos:
  - Checkout.
  - Método de pago.
  - Comunicación contextual.
- Preparar mensajes de lanzamiento con Content Designer:
  - Claros.
  - Responsables.
  - Enfocados en control.
  - Sin prometer "crédito fácil".
- Revisar que los mensajes de lanzamiento sean coherentes con la propuesta de valor y no contradigan los principios de crédito responsable.
- Coordinar soporte:
  - FAQs.
  - Scripts de atención.
  - Rutas de escalamiento.
  - Manejo de dudas sobre costo, fecha de pago, atraso y pagos no reconocidos.
- Usar rollout gradual:
  - Porcentaje bajo de usuarios al inicio.
  - Límites conservadores.
  - Monitoreo cercano.
  - Pausas si aparecen señales de confusión, mora o fricción operativa.

## Fase 8: Medición, post-launch user testing y aprendizaje

### Objetivo

Entender si el MVP funciona, por qué funciona o por qué falla, combinando datos cuantitativos con investigación post-launch.

### Why

Evita confundir originación con éxito. Esta fase permite entender no solo cuántos usuarios toman crédito, sino si lo entienden, lo pagan, confían en la experiencia y qué debe cambiar antes de escalar.

### Outcome

Un sistema de aprendizaje post-launch que permite decidir si el MVP debe escalar, ajustarse o detenerse con base en outcomes, confianza y evidencia.

### Métricas de adopción

- Usuarios elegibles.
- Exposición de la oferta.
- Tasa de aceptación.
- Originación.
- Primer uso.
- Abandono por pantalla.

### Métricas de comprensión

- Usuario entiende total a pagar.
- Usuario entiende fecha límite.
- Usuario entiende costo.
- Usuario entiende consecuencias de atraso.
- Usuario recuerda dónde y cómo pagar.

### Métricas de salud financiera

- Pago puntual.
- Mora temprana.
- Refinanciamientos o extensiones.
- Cancelaciones.
- Pérdida esperada.

### Métricas de experiencia

- Contactos a soporte.
- Errores de pago.
- NPS o CSAT.
- Motivos de rechazo.
- Motivos de abandono.
- Quejas por confusión.

### Métricas de negocio

- Créditos otorgados.
- Recurrencia.
- Ticket promedio.
- Incremento de conversión en checkout.
- Costo operativo.

### Post-launch user testing

- Entrevistar usuarios reales de cuatro grupos:
  - Aceptaron y pagaron puntual.
  - Aceptaron y se atrasaron.
  - Abandonaron el flujo.
  - No aceptaron la oferta.
- Ejecutar sesiones moderadas cortas para entender:
  - Qué entendieron.
  - Qué les generó confianza.
  - Qué les generó duda.
  - Qué información no fue visible.
  - Qué parte del pago generó fricción.
  - Qué lenguaje fue confuso.
- Analizar tickets de soporte y comentarios de usuarios.
- Cruzar datos cuantitativos con hallazgos cualitativos para decidir:
  - Iterar copy.
  - Cambiar jerarquía de información.
  - Ajustar recordatorios.
  - Ajustar soporte.
  - Modificar límites o criterios de elegibilidad.
  - Pausar o rediseñar partes del flujo.

### Ritual de aprendizaje

- Reunión semanal con PM, riesgo, negocio, diseño, research, content y tech.
- Revisar métricas, hallazgos y riesgos.
- Revisar si las iteraciones siguen respetando los principios de experiencia y los principios de trabajo.
- Tomar una de cuatro decisiones:
  - Iterar.
  - Pausar.
  - Ampliar.
  - Rediseñar.

## Timeline sugerido de 4 meses

| Periodo | Enfoque | Outcome |
| --- | --- | --- |
| Semanas 1-2 | Alineación y recopilación de información | Canal, documento base, riesgos, preguntas críticas |
| Semanas 2-4 | Discovery rápido y JTBD | JTBD, principios, hipótesis priorizadas |
| Semanas 3-5 | Benchmarking Mobbin y auditoría de componentes | Patrones comparables, gaps y mejoras reutilizables |
| Semanas 4-6 | Exploración AI-native y prototipo code-first | Prototipo navegable y estados críticos |
| Semanas 6-8 | Spec ejecutable y backlog | Spec agent-ready, casos de uso, componentes y criterios |
| Semanas 8-13 | Development y QA | MVP implementado y validado |
| Semanas 14-16 | GTM controlado y hardening | Piloto listo, soporte, métricas y monitoreo |
| Post-launch | Medición y user testing | Aprendizajes, iteraciones y decisión de escala |

## Roles y responsabilidades

| Rol | Responsabilidad |
| --- | --- |
| Product Designer | Liderar estrategia de experiencia, benchmarking, prototipo code-first, decisiones de flujo y spec |
| Content Designer | Definir lenguaje claro, jerarquía de información, estados y mensajes críticos |
| UX Researcher | Ejecutar discovery, validar JTBD, probar prototipo y conducir post-launch testing |
| PM | Priorizar alcance, alinear negocio y tomar decisiones de producto |
| Business Analyst | Conectar métricas, caso de negocio, supuestos y dependencias operativas |
| Tech Lead | Definir arquitectura, dependencias, contratos, factibilidad y reutilización de componentes |
| QA | Convertir casos de uso en escenarios de prueba y criterios de aceptación |
| Dev team | Implementar MVP según spec, contratos, componentes definidos y mejoras reutilizables |
| Legal/riesgo | Validar disclosures, consentimiento, costos, elegibilidad y política de cobranza |

## Artefactos esperados

- Canal de Slack del proyecto.
- Documento base vivo.
- Mapa de supuestos y riesgos.
- Research plan ligero.
- JTBD y principios de experiencia.
- Propuesta de valor inicial a validar.
- Benchmarking con Mobbin MCP.
- Auditoría de componentes existentes.
- Backlog de mejoras de componentes.
- Prototipo code-first de alta fidelidad.
- Spec ejecutable para development y agentes.
- Backlog MVP priorizado.
- Plan de go-to-market controlado.
- Dashboard de métricas MVP.
- Plan de post-launch user testing.

## Criterios de éxito del MVP

El MVP no debe evaluarse solamente por cantidad de créditos otorgados. Debe considerarse exitoso si muestra señales sanas en estas dimensiones:

- Hay adopción suficiente para aprender.
- Los usuarios entienden cuánto pagan, cuándo pagan y qué pasa si se atrasan.
- La experiencia no genera confusión ni presión indebida.
- El pago puntual es suficiente para justificar continuidad.
- La mora temprana está dentro de umbrales aceptables.
- El soporte no se satura por dudas básicas.
- El squad puede iterar con datos reales.
- El negocio puede decidir si escalar, ajustar o detener.

## Riesgos principales

| Riesgo | Impacto | Mitigación |
| --- | --- | --- |
| Optimizar solo por 3,000 créditos | Puede generar mala cartera y daño reputacional | Medir comprensión, pago puntual y mora desde el inicio |
| Baja comprensión del costo | Puede causar quejas, abandono o mora | Copy claro, resumen antes de aceptar y comprehension testing |
| Discovery insuficiente | Se construye una solución basada en supuestos | Discovery rápido antes del concepto y testing post-launch |
| Benchmarking superficial | Se copian patrones sin entender contexto | Evaluar Mobbin con criterios de crédito responsable y restricciones del MVP |
| Duplicación de componentes | Inconsistencia y deuda de UI | Auditar componentes antes de prototipar y priorizar extensiones reutilizables |
| Handoff ambiguo | Retrabajo entre diseño y development | Prototipo code-first, inventario de componentes y spec ejecutable |
| AI usada sin criterio | Soluciones rápidas pero desconectadas del usuario | AI después de JTBD y con validación humana |
| Riesgo legal o regulatorio | Bloqueo de lanzamiento o daño reputacional | Incluir legal/riesgo desde alineación inicial |

## Mensaje ejecutivo para el deck

> Mi enfoque sería desbloquear al squad rápidamente sin romantizar la velocidad. Primero alineamos información y riesgos, después hacemos discovery corto para definir los Jobs To Be Done, usamos Mobbin MCP para comparar patrones reales y auditamos componentes existentes, luego usamos AI para acelerar exploración y prototipado en código. Ese prototipo se convierte en una spec lista para desarrollo, se lanza controlado y se mide con datos reales y user testing post-launch. En crédito, el éxito no es solo colocar; es que el usuario entienda, confíe, pague y quiera volver a usarlo.
