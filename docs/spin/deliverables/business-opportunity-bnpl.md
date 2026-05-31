# Oportunidad de negocio: BNPL del super a 15 dias

## 1. Resumen ejecutivo

**Recomendacion:** avanzar con un MVP controlado de **"pide tu super ahora y pagalo en quince dias"** para un supermercado online con delivery en Mexico.

La recomendacion es **si, con guardrails claros**:

- monto maximo acotado por carrito;
- elegibilidad contextual en checkout;
- foco inicial en canasta basica y reposicion;
- resumen financiero claro antes de aceptar;
- monitoreo estricto de fraude, mora temprana y recompra.

### Por que conviene avanzar

1. **Resuelve un problema real en un momento critico del funnel.**  
   En supermercado online, parte del abandono ocurre cuando el usuario ya decidio comprar, pero no quiere pagar el carrito completo ese mismo dia ni recortar una compra necesaria.

2. **Tiene un encaje mas claro que un credito amplio.**  
   Financiar una compra de despensa o reposicion en checkout es mas entendible y defendible que ofrecer una linea de credito general fuera del contexto de compra.

3. **La categoria tiene recurrencia natural.**  
   La compra de super puede impactar conversion, recompra y frecuencia, no solo originacion.

4. **El contexto digital en Mexico ya permite probarlo con disciplina.**  
   El e-commerce retail en Mexico alcanzo **941 mil millones de pesos** en 2025, con crecimiento anual de **19.2%**, y llego a **77.2 millones de compradores digitales**. Ademas, **4 de cada 10** usuarios planean comprar por internet al menos una vez por semana, lo que confirma un habito digital recurrente. [Fuentes 1, 2]

### Lo que debe demostrar el MVP

- que BNPL reduce abandono de carrito en compras necesarias;
- que aumenta frecuencia sin deteriorar el pago puntual;
- que el usuario entiende costo total, fecha de pago y consecuencias del atraso;
- que el beneficio economico compensa fraude, incobrabilidad y costo operativo;
- que mejora conversion sin erosionar confianza.

## 2. Decision de negocio

La decision no es solo si lanzar credito. La decision es:

> si conviene lanzar un BNPL a 15 dias embebido en checkout para compras de supermercado online, y bajo que condiciones vale la pena escalarlo.

Este documento responde esa decision desde cuatro preguntas:

1. **Demanda:** existe un problema suficientemente frecuente y relevante?
2. **Encaje:** el producto agrega valor frente a tarjeta, promociones o postergacion de compra?
3. **Economia y riesgo:** la recurrencia compensa fraude, mora y costo?
4. **Implementacion:** puede lanzarse en 4 meses como un MVP controlado?

## 3. Objetivo del MVP y metricas lideres

### Objetivo del negocio

Validar si un BNPL de checkout puede convertirse en una palanca real de:

- conversion de carrito;
- frecuencia de recompra;
- proteccion del ticket sin ampliar de forma excesiva el riesgo.

### Metrica rectora

La metrica principal no debe ser solo "creditos otorgados". Debe ser:

> **frecuencia de compra incremental con riesgo de pago controlado**

### Metricas clave del piloto

| Dimension | Metrica principal | Lectura |
| --- | --- | --- |
| Conversion | adopcion del BNPL sobre checkouts elegibles | Si el producto destraba una compra real |
| Recompra | frecuencia de compra a 30, 60 y 90 dias | Si mejora habito y no solo resuelve una ocasion |
| Riesgo | mora 1-7, 8-30 y 31+ dias | Si la propuesta es sostenible |
| Claridad | comprension de costo total, fecha y atraso | Si evita quejas y arrepentimiento |
| Economia | ticket retenido o recuperado vs costo de riesgo | Si el modelo justifica escalar |

### Implicaciones para Data

Para este MVP, Data no debe entrar solo como soporte de reporting. Debe ser parte del criterio de viabilidad del producto desde el inicio.

Data necesita habilitar cinco capacidades:

| Frente | Pregunta que debe responder | Implicacion para el MVP |
| --- | --- | --- |
| Baseline | Cuanto abandono, reduccion de carrito y recompra ya existen sin BNPL? | Evitar atribuir al producto un efecto que ya existia |
| Elegibilidad | Que senales permiten ofrecer BNPL con control razonable de riesgo? | Definir reglas iniciales de oferta y exclusion |
| Experimentacion | Como se medira incrementalidad real en conversion, ticket y recompra? | Diseñar cohorts, holdouts o comparables desde el piloto |
| Monitoreo | Que alertas tempranas deben dispararse por fraude, mora o comportamiento atipico? | Operar el piloto con thresholds claros y accionables |
| Decision | Que combinacion de adopcion, riesgo y economia justifica escalar? | Convertir el piloto en una decision de negocio, no en una prueba aislada |

## 4. Tesis estrategica

### Tesis

La mejor primera apuesta no es una linea de credito amplia ni una tarjeta. Es un **BNPL embebido en checkout** para una compra de super con delivery, con pago a 15 dias y reglas de uso simples.

### Punto de entrada recomendado

> Financiar una compra necesaria, recurrente y de ticket acotado en el momento exacto en que el usuario siente restriccion de presupuesto.

### Por que este caso de uso es defendible

- aparece en un momento de decision de compra real;
- se asocia a una canasta necesaria, no a consumo aspiracional;
- hace evidente el valor: "lleva tu pedido hoy y pagalo despues";
- reduce la ambiguedad sobre para que sirve el credito;
- facilita controlar monto, frecuencia y composicion del carrito.

### Lo que no debe convertirse

- no debe comportarse como una linea revolvente abierta;
- no debe extenderse a cualquier compra del ecosistema desde el inicio;
- no debe depender de mensajes agresivos de deuda;
- no debe priorizar originacion sobre pago sano.

## 5. Opciones estrategicas y tradeoffs

| Opcion | Que es | Ventaja | Debilidad | Lectura |
| --- | --- | --- | --- | --- |
| **A. BNPL del super en checkout** | Financiar una compra puntual con pago a 15 dias | Encaje claro, mejor comprension y control por carrito | Requiere integracion fina entre checkout, riesgo y repago | **Opcion recomendada** |
| **B. Promo no crediticia** | Descuento, cashback o cupon para cerrar compra | Menor riesgo crediticio y ejecucion mas simple | Consume margen y no construye flexibilidad de pago | Buen benchmark, pero no sustituye el financiamiento |
| **C. Credito amplio fuera de checkout** | Linea o prestamo generalista | Mayor flexibilidad y potencial de uso | Menor claridad, mas riesgo y menos encaje con el brief | Mala primera apuesta |
| **D. No lanzar todavia** | Mantener medios de pago actuales | Evita riesgo inmediato | Deja sin resolver abandono por presupuesto y retrasa aprendizaje | Opcion conservadora, pero costosa en oportunidad |

### Recomendacion

Elegir la **opcion A**.

Es la alternativa que mejor concentra:

- necesidad real del usuario;
- facilidad de explicacion;
- control de riesgo por carrito;
- potencial de impacto en conversion y frecuencia.

## 6. Hechos relevantes del mercado en Mexico

Nota de comunicacion: cuando se incluyen montos en USD, se usan solo como referencia ejecutiva aproximada. No deben leerse como cifras contables.

| Hecho | Dato | Implicacion |
| --- | --- | --- |
| e-commerce retail | En 2025 crecio **19.2%** y llego a **941 mil millones de pesos** | El canal digital ya tiene escala suficiente para justificar optimizacion de pagos. [1] |
| compradores digitales | Mexico llego a **77.2 millones** de compradores digitales en 2025 | La base potencial es amplia. [1] |
| participacion del canal online | El canal digital ya representa **17.7%** de las ventas minoristas | El checkout online ya mueve volumen relevante. [1] |
| frecuencia digital | **4 de cada 10** usuarios planea comprar por internet al menos una vez por semana | El habito digital recurrente favorece categorias de alta frecuencia como supermercado. [2] |
| shopper hibrido | **84%** de los compradores digitales de consumo masivo tambien compra en fisico | La experiencia no debe asumir un comportamiento 100% digital. [3] |
| consumo masivo digital | El e-commerce de consumo masivo crece al doble ritmo que el mercado total y mantiene una brecha de penetracion de **49 puntos** frente al consumo fisico | Hay oportunidad real, pero aun no es un comportamiento universal. [4] |
| credito formal | Solo **37.3%** de la poblacion de 18 a 70 anos tenia algun credito formal en 2024 | No conviene asumir alta sofisticacion crediticia. [5] |
| rechazo al credito | Entre quienes no tienen credito formal, **38.4%** reporta que no le gusta endeudarse y **20.7%** que no cumple requisitos | La propuesta debe hablar de claridad y control, no de credito facil. [6] |
| pagos en plataformas online | En 2024, **57.4%** reporto uso de transferencia para pagos en plataformas online y **33.2%** uso de tarjeta | BNPL debe convivir con habitos digitales ya instalados. [7] |
| uso de app financiera | **69.1%** de quienes tienen cuenta de ahorro formal ya usa app celular para consultas o movimientos | Existe base para recordatorios, consulta de deuda y repago digital. [8] |
| costo del credito revolvente | La TEPP de clientela no totalera en tarjetas fue **37.1%** y sin promociones **52.7%** a junio de 2025 | Hay espacio para competir por claridad y previsibilidad, aunque no necesariamente por menor tasa absoluta. [9] |

## 7. Cliente objetivo, JTBD y momento de uso

### Cliente primario

**Responsable de compra del hogar que compra super online de forma planificada o semiplanificada**

Persona adulta, urbana o semiurbana, usuaria de delivery o supermercado online, que compra categorias necesarias para el hogar y que, al cierre del carrito, puede enfrentar una restriccion temporal de presupuesto.

### Rasgos clave

- compra para abastecimiento o reposicion del hogar;
- combina sensibilidad a precio con urgencia funcional;
- usa medios digitales de pago, pero no siempre quiere cargar todo el gasto el mismo dia;
- puede recortar carrito, posponer compra o buscar una promo si no le alcanza;
- valora certeza: cuanto paga, cuando paga y que ocurre si se atrasa.

### Job to be done

> Cuando ya arme mi pedido del super y no quiero pagar todo hoy, quiero una opcion clara para recibir mi compra ahora y pagarla despues, sin sorpresas y sin sentir que entro en una deuda dificil de controlar.

### Momento de uso prioritario

El momento correcto es **el cierre del checkout**, cuando el usuario ya:

- construyo su carrito;
- comparo precios o promociones;
- decidio que la compra es necesaria;
- y detecta una restriccion temporal de presupuesto o flujo disponible.

## 8. Mercado, sizing y escenarios

### Nota metodologica

No existe una fuente publica que mida con precision el mercado de BNPL grocery en Mexico. Por eso el sizing debe leerse como **proxy de oportunidad**, no como TAM definitivo.

Se usan dos lentes:

1. **mercado estrategico amplio** para justificar que el espacio existe;
2. **backsolve operativo** para probar si la meta de 3,000 creditos en 3 meses es razonable.

### Supuestos base

| Supuesto | Valor | Lectura |
| --- | ---: | --- |
| compradores digitales en Mexico | 77.2M | Base amplia de usuarios online [1] |
| usuarios con compra online semanal | 40% | Proxy de compradores digitales de alta recurrencia [2] |
| usuarios de compra semanal | 30.9M | 77.2M x 40% |
| universo servible inicial | 5%-12% del universo semanal | Proxy conservador para supermercados online con delivery, ticket adecuado y checkout elegible |
| ticket BNPL inicial sugerido | $600-$1,800 MXN | Rango razonable para reposicion o despensa acotada |
| plazo | 15 dias | Alineado al brief |

### Lectura estrategica

| Corte | Definicion | Usuarios / volumen | Lectura |
| --- | --- | ---: | --- |
| **TAM amplio** | Compradores digitales en Mexico | 77.2M | Universo digital total |
| **TAM relevante** | Compradores digitales con habito semanal | 30.9M | Limite superior de shoppers recurrentes |
| **Mercado servible inicial** | 5%-12% del universo semanal | 1.5M-3.7M | Base potencial para un operador relevante con delivery y checkout BNPL |

### Backsolve operativo para la meta del caso

Meta del brief:

> **3,000 creditos otorgados en los primeros 3 meses**

Eso equivale a:

- **1,000 creditos por mes**

Si el MVP logra:

- cobertura de oferta en **15%-25%** de checkouts;
- adopcion sobre elegibles de **8%-15%**;

entonces la conversion BNPL sobre el total de checkouts estaria entre:

- **1.2% y 3.8%**

Con ese rango, para llegar a 1,000 creditos mensuales se requeriria aproximadamente:

- **26 mil a 83 mil checkouts mensuales**

### Lectura de negocio

- La meta de 3,000 creditos es alcanzable, pero exige una base relevante de checkouts.
- La pregunta clave no es solo si se llega a 3,000, sino con que mora, con que fraude y con que impacto en recompra.
- El MVP debe probar que adopcion y calidad de cartera justifican escalar.

## 9. Competencia, sustitutos y espacio blanco

El usuario no compara BNPL solo contra otros creditos. Lo compara contra cualquier forma de cerrar o no cerrar la compra.

| Sustituto | Fortaleza | Debilidad frente a BNPL grocery | Implicacion |
| --- | --- | --- | --- |
| Tarjeta de credito | Ya conocida, flexible y sin cambio de habito | No todos califican; costo menos visible; cupo limitado | Principal competidor financiero formal |
| Debito / transferencia | Simples y ya adoptados | Exigen pagar todo hoy | BNPL compite contra una restriccion inmediata de presupuesto |
| Cupones / promos / cashback | Reducen friccion de precio | Consumen margen y no resuelven la restriccion completa | Complementan, pero no sustituyen siempre el financiamiento |
| Reducir carrito | Evita deuda | Reduce ticket y puede eliminar categorias necesarias | BNPL puede proteger canasta |
| Posponer compra | Evita deuda | Debilita recurrencia y resuelve peor una necesidad urgente | BNPL compite de forma directa aqui |
| Otros BNPL | Propuesta similar | Menor integracion con el supermercado y menor control del checkout | Competencia directa si el retailer no controla la experiencia |

### Espacio blanco

El espacio defendible no es sumar una alternativa financiera indistinta. Es:

> una opcion embebida, clara y acotada para cerrar hoy una compra necesaria y pagarla en 15 dias.

## 10. Riesgos del modelo y guardrails

| Riesgo | Por que importa | Guardrail recomendado |
| --- | --- | --- |
| Sobreuso o dependencia | El usuario puede usar BNPL para compras que no puede sostener | Limite por carrito, frecuencia maxima y reglas de pausa |
| Mora temprana | Puede deteriorar el modelo con rapidez | Limites bajos, scoring conservador, recordatorios y bloqueos por atraso |
| Fraude | El checkout digital es una superficie sensible | Validacion de identidad, dispositivo, metodo de pago y patrones de compra |
| Mala comprension | Genera quejas, arrepentimiento y dano reputacional | Resumen financiero obligatorio antes de aceptar |
| Uso en categorias no prioritarias | Puede elevar riesgo sin agregar valor suficiente | Empezar con categorias necesarias o carritos elegibles por composicion |
| Costo operativo | Cobranza, soporte y conciliacion pueden crecer rapido | Automatizar repago, autoservicio y alertas tempranas |
| Riesgo reputacional | El credito en supermercado puede percibirse como predatorio | Tono responsable, mensajes de control y exclusiones visibles |

### Guardrails minimos del MVP

- monto inicial acotado;
- una sola compra activa por usuario en el primer ciclo;
- bloqueo temporal ante atraso;
- disclosure simple: costo, total, fecha y atraso;
- exclusion de usuarios o carritos de alto riesgo;
- monitoreo diario de fraude y mora 1-7.

### Requisitos minimos de Data para el piloto

- definicion de eventos de funnel desde visualizacion de oferta hasta pago;
- baseline pre-lanzamiento de abandono, ticket, recompra y medios de pago;
- cohortes comparables entre expuestos, elegibles no expuestos y usuarios que toman BNPL;
- tablero operativo con alertas de fraude, mora temprana, caidas de conversion y errores de instrumentacion;
- definiciones compartidas de adopcion, pago puntual, recompra, perdida temprana y contribution por cohorte.

## 11. MVP recomendado

### Producto

- BNPL embebido en checkout;
- promesa principal: **"lleva tu pedido hoy y pagalo en 15 dias"**;
- aplicacion contextual solo en checkouts elegibles;
- rango inicial sugerido: **$600-$1,800 MXN**.

### Experiencia minima

1. El usuario arma su carrito.
2. En checkout aparece la opcion BNPL si el carrito o el usuario califican.
3. Se muestra un resumen claro con:
   - monto financiado;
   - costo del servicio o intereses;
   - total a pagar;
   - fecha exacta de pago;
   - consecuencia de atraso.
4. El usuario acepta.
5. El pedido se confirma.
6. El usuario recibe recordatorios previos al vencimiento.
7. El usuario paga por el canal digital definido.
8. El sistema confirma el pago y habilita recompra futura si corresponde.

### Lo que Data debe dejar listo junto con el MVP

- taxonomia de eventos y propiedades de negocio;
- definicion de cohortes de medicion y reglas de lectura del experimento;
- scorecard inicial de elegibilidad y exclusion;
- dashboard de seguimiento diario para producto, riesgo y operaciones;
- criterio compartido para decidir si el piloto se itera, se pausa o se escala.

### Lo que no debe incluir el primer MVP

- linea revolvente abierta;
- multiples cuotas o plazos complejos;
- uso fuera de checkout;
- promesas de aprobacion masiva;
- integraciones de alto costo que no sean necesarias para probar adopcion y repago.

## 12. Hipotesis criticas y validacion

| Hipotesis | Como validarla | Senal de exito |
| --- | --- | --- |
| BNPL reduce abandono de carrito en compras necesarias | Test A/B o piloto controlado en checkout | Mejora de conversion sobre cohortes comparables |
| El usuario entiende mejor BNPL en grocery que un credito abierto | Concept test y pruebas de comprension | Usuarios explican costo, fecha y total sin ayuda |
| El caso de uso impulsa frecuencia, no solo una compra aislada | Seguimiento a 30, 60 y 90 dias | Mayor recompra en cohortes sanas |
| El ticket retenido compensa riesgo y costo | Analisis de contribution por cohorte | Economia positiva o camino claro a positividad |
| Las reglas de elegibilidad y monto reducen mora temprana | Piloto por cohortes | Mora dentro del umbral definido |
| La instrumentacion permite aislar incrementalidad real | Diseno de baseline, cohorts y lectura comparativa | Decisiones de escala sustentadas en efecto incremental y no solo en volumen bruto |

### Escalar si

- la adopcion es suficiente para mover conversion;
- la mora temprana se mantiene bajo control;
- la recompra mejora;
- el costo de soporte se mantiene acotado;
- la comprension del producto es alta.

### Frenar o redisenar si

- existe adopcion, pero con mala comprension;
- el producto solo mueve originacion y no recompra;
- la mora o el fraude deterioran la economia del modelo;
- el usuario lo usa para compras que no deberian financiarse en el MVP.

## 14. Fuentes

1. ANTAD / AMVO, [Crece e-commerce 19.2% en Mexico](https://antad.net/crece-e-commerce-19-2-en-mexico/), publicado el 12 de marzo de 2026.
2. AMVO, [Consumer Pulse abril-junio 2026](https://amvo.org.mx/consumer-pulse-abril-junio-2026), consultado el 31 de mayo de 2026.
3. AMVO, [Los 4 tipos de compradores digitales de consumo masivo en Mexico](https://blog.amvo.org.mx/blog/los-4-tipos-de-compradores-digitales-de-consumo-masivo-en-m%C3%A9xico-y-c%C3%B3mo-activar-cada-uno), publicado en marzo de 2026.
4. AMVO, [Segmentos de Consumo Masivo: El journey de los compradores digitales](https://blog.amvo.org.mx/publicaciones/segmentos-de-consumo-masivo-el-journey-de-los-compradores-digitales), consultado el 31 de mayo de 2026.
5. INEGI / CNBV, [Encuesta Nacional de Inclusion Financiera 2024 - Principales resultados](https://www.inegi.org.mx/contenidos/programas/enif/2024/doc/enif_2024_resultados.pdf), publicada en 2025.
6. INEGI / CNBV, [ENIF 2024 - motivos para no tener credito formal](https://www.inegi.org.mx/contenidos/programas/enif/2024/doc/enif_2024_resultados.pdf), tabla de poblacion sin credito formal, datos 2024.
7. INEGI / CNBV, [ENIF 2024 - pago con tarjeta y transferencia en plataformas de compra en linea](https://www.inegi.org.mx/contenidos/programas/enif/2024/doc/enif_2024_resultados.pdf), datos 2024.
8. INEGI / CNBV, [ENIF 2024 - uso de aplicacion de celular para consultas o movimientos](https://www.inegi.org.mx/contenidos/programas/enif/2024/doc/enif_2024_resultados.pdf), datos 2024.
9. Banco de Mexico, [Indicadores Basicos de Tarjetas de Credito, datos a junio de 2025](https://www.banxico.org.mx/publicaciones-y-prensa/rib-tarjetas-de-credito/%7BEDFAC909-76C7-749D-778B-859D724250E2%7D.pdf), publicado en 2026.

## 15. Supuestos explicitos

- El caso se analiza para **Mexico**.
- Se asume un supermercado online con delivery y volumen suficiente para experimentar en checkout.
- No se asume que el supermercado ya sea una entidad financiera; la originacion puede apoyarse en un partner.
- El sizing de BNPL grocery usa proxies de e-commerce y consumo masivo, no un mercado medido directamente.
- Los guardrails del MVP priorizan aprendizaje y calidad de cartera sobre crecimiento agresivo.
