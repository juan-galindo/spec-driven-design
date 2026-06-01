### Propuesta de plan de investigacion

#### Contexto

El negocio quiere lanzar una funcionalidad de credito para un supermercado online con delivery: **"pide tu super ahora y pagalo en quince dias"**.

El piloto prioriza el **checkout del super online de OXXO** por facilidad de partnership (integracion, datos, repago Spin/caja). Otros retailers pueden evaluarse despues; la investigacion debe servir primero al canal piloto sin cerrar el caso a un solo actor para siempre.

El foco es validar un **BNPL embebido en checkout** que ayude a cerrar compras necesarias sin obligar al usuario a pagar todo hoy.

El equipo necesita evidence rapido para responder preguntas criticas:

- realmente hay abandono por restriccion de presupuesto en el checkout?
- para que tipos de compra se percibe legitimo financiar?
- que informacion necesita el usuario antes de aceptar?
- el beneficio mueve solo conversion o tambien recompra?
- que barreras de confianza, fraude o comprension pueden frenar adopcion?

#### Objetivo general

Entender si un BNPL del super a 15 dias es deseable, comprensible y viable para el usuario objetivo, y que condiciones de experiencia y riesgo deberia tener el MVP para mejorar conversion y frecuencia sin deteriorar pago puntual.

#### Objetivos especificos

- Entender en que momentos el usuario reduce, abandona o pospone un carrito de super por restriccion de presupuesto.
- Identificar para que misiones de compra un BNPL de 15 dias se siente legitimo: reposicion, despensa, compra urgente, compra promocional o carrito grande.
- Entender que alternativas usa hoy cuando no quiere o no puede pagar el carrito completo: tarjeta, debito, reduccion de carrito, cupon, otra tienda o posponer.
- Detectar que informacion minima necesita antes de aceptar: costo, fecha exacta, monto, atraso, metodo de pago y recordatorios.
- Medir valor percibido del producto frente a otros mecanismos no crediticios.
- Entender si el usuario percibe el BNPL como apoyo de conveniencia o como deuda riesgosa.
- Definir principios de experiencia, tono y guardrails para el flujo de checkout.
- Evaluar si la relacion con OXXO, Spin o Premia aumenta confianza y disposicion a repagar en el piloto.

#### Preguntas de investigacion

- Que hace el usuario cuando el carrito final queda por encima de su presupuesto disponible?
- Que tipos de carrito consideraria razonable pagar en 15 dias y cuales no?
- Que tan sensible es a frases como "paga despues", "sin intereses", "costo del servicio" o "fecha limite"?
- Que tan importante es que el producto aparezca en checkout y no antes?
- Que tipo de monto siente manejable a 15 dias?
- Que lo haria confiar en la opcion?
- Que consecuencias de atraso necesita entender antes de aceptar?
- Que tan probable es que una experiencia positiva aumente la recompra?
- Que tan importante es pagar via Spin, caja OXXO u otro canal ya conocido frente a un flujo nuevo?
- Que senales de marca (OXXO, Spin) aumentan o reducen desconfianza hacia el BNPL?

#### Hipotesis iniciales con framework XYZ

| Hipotesis XYZ | Que valida | Evidencia esperada |
| --- | --- | --- |
| Si mostramos una opcion de BNPL de 15 dias en checkout para carritos necesarios, esperamos reducir abandono por presupuesto en usuarios que ya decidieron comprar. | Valor del producto en el momento de cierre. | El usuario reconoce situaciones reales donde preferiria financiar una parte o todo el carrito en vez de recortarlo o posponerlo. |
| Si el BNPL se comunica como forma de resolver una compra necesaria y no como credito generico, esperamos mayor comprension y menor rechazo. | Tesis de posicionamiento. | El usuario explica con sus palabras por que lo usaria y no lo confunde con una linea abierta de deuda. |
| Si mostramos costo total, fecha exacta y consecuencias de atraso antes de aceptar, esperamos reducir sorpresa y aumentar confianza. | Riesgo de comprension. | El usuario puede repetir sin ayuda cuanto paga, cuando paga y que pasa si se atrasa. |
| Si acotamos montos y frecuencia, esperamos mejor aceptacion del producto sin disparar temor a sobreendeudamiento. | Guardrails del MVP. | El usuario percibe el producto como controlado y "para resolver", no como trampa. |
| Si el caso de uso es reposicion o despensa necesaria, esperamos mayor legitimidad que en compras mas discrecionales. | Priorizacion de misiones de compra. | El usuario rankea carritos de abastecimiento y urgencia por encima de compra aspiracional. |

#### Metodologia multi-metodo

| Componente | Definicion |
| --- | --- |
| Enfoque | Investigacion ligera orientada a decisiones de MVP |
| Duracion | 5 a 10 dias habiles |
| Cualitativo principal | Entrevistas semiestructuradas de 30 a 40 minutos con compradores digitales de super; priorizar quienes usen o puedan usar el super online de OXXO |
| Cualitativo complementario | Test moderado de comprension con concepto y pantallas de baja fidelidad |
| Cuantitativo rapido | Encuesta o intercept para medir intencion, claridad, confianza y sensibilidad a costo |
| Cuantitativo secundario | Analisis de data existente: abandono de carrito, ticket promedio, frecuencia de recompra, medios de pago, cupones y tasas de error/fraude |

#### Participantes y muestra

| Criterio | Definicion |
| --- | --- |
| Muestra cualitativa | 8 a 12 participantes |
| Muestra cuantitativa | 100 a 150 respuestas como minimo practico |
| Segmentos | Compradores online de super; compradores hibridos; usuarios que abandonaron o redujeron carrito por presupuesto; usuarios con relacion OXXO/Spin/Premia (deseable, no obligatorio) |
| Inclusion | Personas adultas, compran para el hogar, usan e-commerce o delivery, han sentido restriccion de presupuesto al comprar despensa o reposicion; idealmente con experiencia reciente en super online o delivery de conveniencia |
| Exclusion | Usuarios sin control de compra del hogar o sin experiencia reciente en compra online |

#### Estimulos

- Descripcion neutral del concepto: "lleva tu pedido hoy y pagalo en quince dias".
- Variantes de copy para:
  - nombre del producto;
  - costo total;
  - fecha de pago;
  - atraso;
  - confirmacion.
- Ejemplos de carrito:
  - reposicion pequena;
  - despensa media;
  - carrito grande de quincena;
  - carrito de compra poco esencial.
- Wireframes de checkout del super online OXXO con:
  - opcion BNPL;
  - resumen financiero;
  - confirmacion;
  - recordatorio;
  - pantalla de repayment (Spin, caja OXXO u otro canal acordado).

#### Senales cuantitativas a levantar

- Intencion de uso ante el concepto.
- Preferencia frente a otras opciones: tarjeta, cupon, reducir carrito, posponer compra.
- Claridad percibida de costo total y fecha.
- Confianza en el producto y sensibilidad a penalizacion.
- Ticket que consideraria razonable financiar.
- Misiones de compra mas aceptables para BNPL.
- Disposicion a recomprar si la experiencia fue positiva.

#### Guia de sesion

1. **Screening y contexto:** como compra despensa, con que frecuencia y por que canal.
2. **Comportamiento actual:** como decide monto de carrito y que hace si se pasa del presupuesto.
3. **Momento de quiebre:** explorar una situacion reciente de recorte, abandono o posposicion.
4. **Alternativas actuales:** tarjeta, debito, promo, otra tienda, posponer o reducir.
5. **Reaccion al concepto:** presentar BNPL a 15 dias en checkout.
6. **Priorizacion de carritos:** para que tipos de compra lo usaria o no.
7. **Comprension:** pedir que explique costo, total, fecha y atraso.
8. **Confianza y lenguaje:** comparar variantes de copy y triggers de desconfianza.
9. **Recompra y control:** entender si una experiencia positiva cambiaria frecuencia futura.
10. **Cierre:** condiciones minimas para usarlo y principales motivos de rechazo.

#### Plan de analisis

- Agrupar hallazgos por: conversion, presupuesto, legitimidad, lenguaje, confianza, claridad, repayment y recompra.
- Separar hechos observados, interpretaciones y recomendaciones.
- Cruzar hallazgos cualitativos con abandono de carrito, ticket y recompra si hay data disponible.
- Priorizar hallazgos por impacto en:
  - conversion;
  - riesgo;
  - claridad;
  - factibilidad de MVP.

#### Entregables

- Research brief ejecutivo.
- JTBD principal y secundarios.
- Lectura sobre momentos de abandono o recorte de carrito.
- Priorizacion de misiones de compra aptas para BNPL.
- Riesgos de comprension y confianza.
- Recomendaciones de contenido para checkout.
- Implicaciones para journey, prototipo y reglas de producto.

#### Criterios de decision

- Si el usuario no ve valor claro del BNPL en checkout, no se avanza sin replantear el caso de uso.
- Si la mayoria no entiende costo total o fecha de pago, no se avanza a alta fidelidad sin redisenar el resumen financiero.
- Si la adopcion potencial viene solo de carritos poco esenciales, se revisa el foco del MVP.
- Si el rechazo principal es desconfianza o miedo a deuda escondida, se prioriza disclosure, tono y guardrails.
- Si el usuario reconoce valor para compras necesarias y puede repetir claramente cuanto y cuando pagaria, se avanza a prototipo y piloto controlado.

### JTBD inicial a validar

Job principal por resolver (alineado a oportunidad de negocio):

> Cuando cierro un carrito de despensa o reposicion en el super online y no tengo liquidez para pagarlo completo hoy — aunque ya decidi que la compra es necesaria —, quiero una forma de pago acotada que me permita recibir el pedido ahora y liquidarlo en una fecha conocida, para no recortar categorias del hogar ni posponer una necesidad que no puede esperar.

#### Que debe validar la investigacion del job

| Dimension | Pregunta de validacion |
| --- | --- |
| Funcional | El usuario reconoce el momento de carrito listo + falta de liquidez, no solo "no quiero pagar hoy" |
| Emocional | Puede repetir monto, fecha y consecuencia de atraso sin ayuda |
| Social | El producto reduce verguenza o dependencia de familia frente a recortar o posponer |
| Contratacion | Prefiere BNPL frente a recortar carrito, posponer o cupon cuando la compra es necesaria |
| Legitimidad | Rankea despensa/reposicion por encima de carritos discrecionales |

#### Jobs secundarios a observar (no bloquean MVP)

- Consultar deuda y fecha sin friccion post-compra.
- Pagar al vencimiento por canal conocido (Spin, caja OXXO).
- Intencion de segundo uso si el primer ciclo fue claro y puntual.

### Propuesta de valor inicial a validar

> Lleva tu super hoy y pagalo en quince dias, con el costo total y la fecha exacta visibles antes de aceptar.

### Principios de experiencia derivados del discovery

- **Checkout, no banner suelto:** el valor aparece al cierre del carrito.
- **Claridad radical:** monto, costo, total y fecha antes de aceptar.
- **Legitimidad de la compra:** priorizar carritos necesarios y de abastecimiento.
- **Friccion responsable:** evitar una aceptacion impulsiva por urgencia.
- **Control posterior:** repayment, recordatorios y estado visibles.
- **Repago en ecosistema conocido:** priorizar Spin y/o caja OXXO cuando el partnership lo permita.
- **Tono sin euforia:** evitar promesas tipo "dinero gratis" o "sin preocupaciones".
