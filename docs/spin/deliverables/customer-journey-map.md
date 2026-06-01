# Customer Journey Map: BNPL del súper a 15 días

## Propósito del artefacto

Traducir la oportunidad de negocio del BNPL del súper a 15 días en decisiones de experiencia, producto y medición.

Este journey no describe un crédito amplio. Describe un **producto embebido en checkout** del súper online de **OXXO** (retailer piloto prioritario por facilidad de partnership), para una compra necesaria con delivery.

### Misiones de compra prioritarias

| Misión | Descripción | Prioridad MVP |
| --- | --- | --- |
| Reposición urgente | Faltantes del hogar que no pueden esperar | Alta |
| Despensa de quincena acotada | Compra planificada, pero con restricción temporal de presupuesto | Alta |
| Compra por promoción útil | Carrito que se quiere cerrar hoy por precio o disponibilidad | Media |
| Compra discrecional grande | Categorías menos necesarias o de impulso | Baja |

## Principios de experiencia

| Principio | Implicación |
| --- | --- |
| Contexto de checkout | La opción debe aparecer cuando el usuario ya decidió comprar |
| Claridad antes de aceptar | Monto, costo total, fecha y atraso visibles antes del consentimiento |
| Conveniencia con control | Debe sentirse útil, no como deuda escondida |
| Guardrails visibles | Montos, frecuencia y estados deben ser comprensibles |
| Recompra como norte | El producto debe mejorar hábito, no solo originación |
| Repago en ecosistema | Priorizar Spin y/o caja OXXO cuando el partnership lo permita |

## Customer journey map

| Etapa | Situación del usuario | Necesidad / pregunta | Riesgo principal | Oportunidad de diseño | Señales a medir |
| --- | --- | --- | --- | --- | --- |
| 1. Planea la compra | El usuario prepara una compra de despensa o reposición | "¿Qué necesito comprar hoy?" | Ticket demasiado alto para su presupuesto | Identificar misiones de compra necesarias vs discrecionales | Frecuencia, tamaño de carrito, categorías |
| 2. Arma el carrito | Agrega productos y ajusta cantidades | "¿Me alcanza para todo?" | Fricción por precio, promociones o sustitución | Mostrar progreso del carrito y reducir fricción antes del pago | Valor del carrito, ediciones, tiempo |
| 3. Siente presión de presupuesto | Llega al checkout y duda si pagar todo hoy | "¿Lo pago completo, recorto o lo dejo?" | Abandono o reducción de carrito | Activar BNPL solo cuando tiene sentido | Abandono, reducción, cambio de método |
| 4. Descubre la opción BNPL | Ve "paga en 15 días" en checkout | "¿Esto me conviene? ¿Es confiable?" | Rechazo por deuda o desconfianza | Presentar beneficio con lenguaje simple y sin exageración | Impresiones, clicks, apertura de detalle |
| 5. Revisa elegibilidad y términos | Consulta monto, costo, total, fecha y atraso | "¿Cuánto pago después y cuándo?" | Mala comprensión o sorpresa posterior | Resumen financiero obligatorio | Comprensión, tiempo de lectura, abandono |
| 6. Decide aceptar | Compara BNPL con tarjeta, promo o recorte de carrito | "¿Me ayuda a cerrar la compra sin meterme en un problema?" | Aceptación impulsiva o rechazo por miedo | Incluir fricción responsable y recordatorio de fecha exacta | Tasa de aceptación, rechazo por costo o desconfianza |
| 7. Confirma pedido | Termina checkout y recibe confirmación | "¿Ya quedó? ¿Qué tengo que hacer después?" | Ambigüedad sobre deuda activa | Confirmación clara del pedido y del repago | Éxito de checkout, errores, contactos a soporte |
| 8. Recibe el pedido | La compra llega y el valor del producto se materializa | "¿Valió la pena usar esta opción?" | Mala experiencia de delivery afecta la percepción del BNPL | Reforzar control posterior, no vender más crédito | Satisfacción, cancelaciones, devoluciones |
| 9. Recibe recordatorios | Se acerca la fecha límite | "¿Cuándo vence y cómo pago?" | Mora por olvido o baja visibilidad | Recordatorios útiles, no agresivos | Apertura, consultas, promesas de pago |
| 10. Paga | Liquida por Spin, caja OXXO u otro canal acordado | "¿Cómo cierro esto fácil y con certeza?" | Falla operativa o pago no aplicado | Flujo simple en ecosistema conocido; comprobante y confirmación inmediata | Pago puntual, éxito, errores |
| 11. Repite o se restringe | El sistema permite nueva compra o bloquea por atraso | "¿Puedo volver a usarlo?" | Reuso riesgoso o arbitrariedad | Hacer visibles reglas de continuidad o pausa | Recompra, segundo uso, mora por cohorte |

## Momentos de verdad

| Momento | Por qué importa | Decisión de diseño |
| --- | --- | --- |
| Shock de presupuesto en checkout | Es donde se decide conversión o abandono | Activar BNPL como opción contextual |
| Resumen financiero | Define confianza y riesgo reputacional | Mostrar costo total y fecha antes de aceptar |
| Confirmación del pedido | Debe cerrar la ansiedad de compra y deuda | Unificar estado del pedido y repago |
| Recordatorio previo al vencimiento | Impacta pago puntual | Recordatorio útil y accionable |
| Segundo uso | Define si el producto mejora frecuencia o deteriora riesgo | Reglas claras de elegibilidad futura |

## Pain points priorizados

| Prioridad | Pain point | Impacto si no se resuelve |
| --- | --- | --- |
| Alta | El usuario no quiere una deuda abierta; quiere cerrar una compra puntual | Rechazo del producto |
| Alta | No entender costo total ni fecha exacta | Quejas, arrepentimiento, mora |
| Alta | Llegar corto de presupuesto al final del carrito | Abandono o reducción de canasta |
| Media | No confiar en quién financia o cobra | Baja adopción |
| Media | No saber si podrá volver a usarlo | Confusión y frustración |

## Oportunidades de producto

1. **Defender ticket sin presionar al usuario:** usar BNPL para evitar recortes innecesarios de una compra necesaria.
2. **Posicionar el producto como conveniencia de checkout:** no como crédito amplio.
3. **Hacer del resumen financiero el centro del flujo:** antes, durante y después de aceptar.
4. **Convertir el repago en parte de la experiencia:** no dejarlo escondido tras la compra.
5. **Aprender por misiones de compra:** reposición, despensa y promoción útil no tienen el mismo riesgo.

## Métricas recomendadas

| Dimensión | Métricas |
| --- | --- |
| Conversión | Take rate, uplift en checkout, disminución de abandono |
| Riesgo | Mora temprana, fraude, reversos, segunda compra sana |
| Negocio | Ticket retenido, frecuencia de recompra, contribución por cohorte |

## Preguntas de investigación derivadas

- ¿Qué tipo de carrito sí amerita BNPL y cuál no?
- ¿Qué lenguaje disminuye miedo y aumenta claridad?
- ¿El usuario lo usa para comprar más o para no recortar una compra necesaria?
- ¿El repago a 15 días se siente cómodo o riesgoso?
- ¿Qué condiciones mínimas necesita para confiar en el producto?
