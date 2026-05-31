# Customer Journey Map: BNPL del super a 15 dias

## Proposito del artefacto

Traducir la oportunidad de negocio del BNPL del super a 15 dias en decisiones de experiencia, producto y medicion.

Este journey no describe un credito amplio. Describe un **producto embebido en checkout** para una compra necesaria de supermercado online con delivery.

## Tesis estrategica

La oportunidad no es lanzar una linea de credito general ni una tarjeta propia. La oportunidad es ofrecer una opcion clara para **cerrar hoy una compra necesaria y pagarla quince dias despues**.

El wedge del MVP es:

> Destrabar carritos necesarios cuando el usuario ya decidio comprar, pero no quiere pagar todo hoy.

## Usuario primario

**Responsable de compra del hogar que compra super online y llega corto de presupuesto al cierre**

Persona adulta, urbana o semiurbana, que compra despensa o reposicion del hogar por e-commerce o delivery y que, al cierre del carrito, puede:

- recortar categorias;
- posponer la compra;
- cambiar de tienda;
- o buscar una promo.

### Job principal

> Cuando ya arme mi carrito del super y no quiero pagarlo todo hoy, quiero una opcion simple para recibir el pedido ahora y pagarlo despues sin sorpresas.

### Misiones de compra prioritarias

| Mision | Descripcion | Prioridad MVP |
| --- | --- | --- |
| Reposicion urgente | Faltantes del hogar que no pueden esperar | Alta |
| Despensa de quincena acotada | Compra planificada, pero con restriccion temporal de presupuesto | Alta |
| Compra por promocion util | Carrito que se quiere cerrar hoy por precio o disponibilidad | Media |
| Compra discrecional grande | Categorias menos necesarias o de impulso | Baja |

## Principios de experiencia

| Principio | Implicacion |
| --- | --- |
| Contexto de checkout | La opcion debe aparecer cuando el usuario ya decidio comprar |
| Claridad antes de aceptar | Monto, costo total, fecha y atraso visibles antes del consentimiento |
| Conveniencia con control | Debe sentirse util, no como deuda escondida |
| Guardrails visibles | Montos, frecuencia y estados deben ser comprensibles |
| Recompra como norte | El producto debe mejorar habito, no solo originacion |

## Customer journey map

| Etapa | Situacion del usuario | Necesidad / pregunta | Riesgo principal | Oportunidad de diseno | Senales a medir |
| --- | --- | --- | --- | --- | --- |
| 1. Planea la compra | El usuario prepara una compra de despensa o reposicion | "Que necesito comprar hoy?" | Ticket demasiado alto para su presupuesto | Identificar misiones de compra necesarias vs discrecionales | Frecuencia, tamano de carrito, categorias |
| 2. Arma el carrito | Agrega productos y ajusta cantidades | "Me alcanza para todo?" | Friccion por precio, promociones o sustitucion | Mostrar progreso del carrito y ahorrar friccion antes del pago | Valor del carrito, ediciones, tiempo |
| 3. Siente presion de presupuesto | Llega al checkout y duda si pagar todo hoy | "Lo pago completo, recorto o lo dejo?" | Abandono o reduccion de carrito | Activar BNPL solo cuando tiene sentido | Abandono, reduccion, cambio de metodo |
| 4. Descubre la opcion BNPL | Ve "paga en 15 dias" en checkout | "Esto me conviene? Es confiable?" | Rechazo por deuda o desconfianza | Presentar beneficio con lenguaje simple y sin exageracion | Impresiones, clicks, apertura de detalle |
| 5. Revisa elegibilidad y terminos | Consulta monto, costo, total, fecha y atraso | "Cuanto pago despues y cuando?" | Mala comprension o sorpresa posterior | Resumen financiero obligatorio | Comprension, tiempo de lectura, abandono |
| 6. Decide aceptar | Compara BNPL con tarjeta, promo o recorte de carrito | "Me ayuda a cerrar la compra sin meterme en un problema?" | Aceptacion impulsiva o rechazo por miedo | Incluir friccion responsable y recordatorio de fecha exacta | Tasa de aceptacion, rechazo por costo o desconfianza |
| 7. Confirma pedido | Termina checkout y recibe confirmacion | "Ya quedo? Que tengo que hacer despues?" | Ambiguedad sobre deuda activa | Confirmacion clara del pedido y del repayment | Exito de checkout, errores, contactos a soporte |
| 8. Recibe el pedido | La compra llega y el valor del producto se materializa | "Valio la pena usar esta opcion?" | Mala experiencia de delivery afecta percepcion del BNPL | Reforzar control posterior, no vender mas credito | Satisfaccion, cancelaciones, devoluciones |
| 9. Recibe recordatorios | Se acerca la fecha limite | "Cuando vence y como pago?" | Mora por olvido o baja visibilidad | Recordatorios utiles, no agresivos | Apertura, consultas, promesas de pago |
| 10. Paga | Liquida por el canal definido | "Como cierro esto facil y con certeza?" | Falla operativa o pago no aplicado | Flujo simple, comprobante y confirmacion inmediata | Pago puntual, exito, errores |
| 11. Repite o se restringe | El sistema permite nueva compra o bloquea por atraso | "Puedo volver a usarlo?" | Reuso riesgoso o arbitrariedad | Hacer visibles reglas de continuidad o pausa | Recompra, segundo uso, mora por cohorte |

## Momentos de verdad

| Momento | Por que importa | Decision de diseno |
| --- | --- | --- |
| Shock de presupuesto en checkout | Es donde se decide conversión o abandono | Activar BNPL como opcion contextual |
| Resumen financiero | Define confianza y riesgo reputacional | Mostrar costo total y fecha antes de aceptar |
| Confirmacion del pedido | Debe cerrar la ansiedad de compra y deuda | Unificar estado del pedido y repayment |
| Recordatorio previo al vencimiento | Impacta pago puntual | Recordatorio util y accionable |
| Segundo uso | Define si el producto mejora frecuencia o deteriora riesgo | Reglas claras de elegibilidad futura |

## Pain points priorizados

| Prioridad | Pain point | Impacto si no se resuelve |
| --- | --- | --- |
| Alta | El usuario no quiere una deuda abierta, quiere cerrar una compra puntual | Rechazo del producto |
| Alta | No entender costo total ni fecha exacta | Quejas, arrepentimiento, mora |
| Alta | Llegar corto de presupuesto al final del carrito | Abandono o reduccion de canasta |
| Media | No confiar en quien financia o cobra | Baja adopcion |
| Media | No saber si podra volver a usarlo | Confusion y frustracion |

## Oportunidades de producto

1. **Defender ticket sin presionar al usuario:** usar BNPL para evitar recortes innecesarios de una compra necesaria.
2. **Posicionar el producto como conveniencia de checkout:** no como credito amplio.
3. **Hacer del resumen financiero el centro del flujo:** antes, durante y despues de aceptar.
4. **Convertir repayment en parte de la experiencia:** no dejarlo escondido tras la compra.
5. **Aprender por misiones de compra:** reposicion, despensa y promocion util no tienen el mismo riesgo.

## Implicaciones para el MVP

### Alcance recomendado

- opcion BNPL en checkout;
- financiamiento a 15 dias;
- montos iniciales acotados;
- resumen financiero claro;
- recordatorios previos al vencimiento;
- repayment digital simple;
- reglas de pausa o reuso visibles.

### Fuera de alcance inicial

- linea abierta de credito;
- multiples mensualidades;
- uso fuera de checkout;
- categorias de alto riesgo sin aprendizaje previo;
- ampliacion agresiva de monto desde el primer ciclo.

## Metricas recomendadas

| Dimension | Metricas |
| --- | --- |
| Conversion | Take rate, uplift en checkout, disminucion de abandono |
| Producto | Comprension de costo y fecha, completion del flujo, exito de repayment |
| Riesgo | Mora temprana, fraude, reversos, segunda compra sana |
| Negocio | Ticket retenido, frecuencia de recompra, contribution por cohorte |

## Preguntas de investigacion derivadas

- Que tipo de carrito si amerita BNPL y cual no?
- Que lenguaje disminuye miedo y aumenta claridad?
- El usuario lo usa para comprar mas o para no recortar una compra necesaria?
- El repayment a 15 dias se siente comodo o riesgoso?
- Que condiciones minimas necesita para confiar en el producto?
