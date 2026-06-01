# Experiencia BNPL Classic

## 1. Resumen

Este documento define la experiencia de **compra y activacion del BNPL** dentro del checkout de un marketplace o supermercado online.

El flujo cubre el **happy path** desde que el usuario arma su carrito hasta que recibe la confirmacion de que:

- su pedido fue procesado;
- su credito BNPL quedo activo;
- y conoce con claridad cuanto pagara y cuando.

La experiencia debe cuidar tres cosas en cada vista:

- que necesita entender el usuario en ese momento;
- que accion principal debe tomar;
- que riesgo de abandono o desconfianza debemos reducir.

**Fuente de verdad:** especificacion de flujo, vistas y wireframes ASCII de este documento. Tokens, layout y analitica: ver [design.md](./design.md).

## 2. Principios de experiencia

| Principio | Implicacion de diseno |
| --- | --- |
| Contexto antes que promocion | BNPL aparece como metodo de pago dentro del checkout, no como modulo de marketing separado |
| Claridad antes de consentimiento | costo total, fecha exacta y consecuencia basica por atraso deben estar visibles antes de aceptar |
| Friccion responsable | OTP e identidad se explican como proteccion y validacion, no como obstaculo arbitrario |
| Continuidad del checkout | el usuario no debe sentir que salio del proceso de compra para entrar a otro producto aparte |
| Confirmacion doble | la experiencia final confirma tanto la orden como la activacion del BNPL |

## 3. Supuestos de producto

- se disena primero el happy path
- el usuario ya tiene sesion iniciada
- el sistema ya cuenta con un celular registrado para OTP
- la validacion de identidad se hace con Incode usando INE + biometria facial
- la aprobacion del BNPL ocurre en tiempo real dentro del checkout
- no se define todavia repago, cobranza ni recordatorios mas alla de la promesa de aviso previo

## 4. Flujo general (9 pasos)

| Paso | Descripcion |
| --- | --- |
| 1 | Arma carrito en marketplace |
| 2 | Checkout: descubre BNPL como metodo de pago alternativo |
| 3 | Educacion: que es compra ahora paga despues |
| 4 | Anticipacion: validacion de identidad |
| 5 | OTP al celular registrado |
| 6 | INE + rostro con Incode |
| 7 | Confirmacion de credito, costo y fecha |
| 8 | Loading: aprobacion + procesamiento de orden |
| 9 | Success: orden procesada en marketplace |

## 5. Alineacion con customer journey

Referencia completa: [customer-journey-map.md](./customer-journey-map.md).

| Etapa CJM | Pantalla(s) | Momento de verdad |
| --- | --- | --- |
| 1-2 Planea / arma carrito | Vista 0 | Presion de presupuesto temprana |
| 3 Presion en checkout | Vista 1 | Shock de presupuesto |
| 4 Descubre BNPL | Vista 1 → 2 | Confianza inicial |
| 5 Revisa terminos | Vista 2, 6 | Resumen financiero |
| 6 Decide aceptar | Vista 6 | Consentimiento |
| 7 Confirma pedido | Vista 7-8 | Cierre de ansiedad |

**Sub-flujo de activacion (pasos 4-7 del flujo total):** OTP, identidad y oferta usan indicador `Paso X de 4` solo dentro de la validacion BNPL, no en los 9 pasos del flujo completo.

## 6. Vistas del flujo

### Vista 0. Carrito

**Paso del flujo:** 1/9

**Objetivo**

Permitir armar la compra en el marketplace y llegar al checkout con intencion clara, sin promover BNPL antes del momento de pago.

**Que muestra**

- lista de productos con cantidades editables
- subtotal y envio estimado si aplica
- CTA principal hacia checkout
- sin opcion BNPL en esta pantalla (alcance MVP)

**Como debe funcionar**

- el usuario edita cantidades o elimina productos
- al tocar `Ir a pagar`, conserva el carrito al entrar al checkout
- no se interrumpe la sesion ni se pierde el estado del carrito

**Contenido clave**

- titulo: `Carrito`
- apoyo: `N productos` o equivalente
- CTA: `Ir a pagar`

**Acciones**

- principal: `Ir a pagar`
- secundaria: seguir comprando / editar carrito

**Criterios de aceptacion**

- el usuario llega al checkout con el carrito intacto
- no hay confusion sobre financiamiento en esta etapa

### Vista 1. Checkout con BNPL como metodo de pago

**Paso del flujo:** 2/9

**Objetivo**

Permitir descubrir BNPL justo en el momento de presion de presupuesto, sin romper la continuidad del checkout.

**Que muestra**

- resumen del pedido
- lista de metodos de pago disponibles
- opcion BNPL visible junto a tarjeta o transferencia
- mensaje corto de valor: `Compra hoy y paga en 15 dias`
- trigger para ampliar el detalle antes de seleccionarlo

**Como debe funcionar**

- BNPL vive dentro del bloque de metodos de pago
- debe tener jerarquia equivalente a otros metodos y no verse como banner externo
- por defecto BNPL no esta seleccionado; el usuario lo descubre en la lista
- al tocar la opcion BNPL o `Ver como funciona`, se abre la Vista 2
- si el usuario vuelve atras, conserva el estado del checkout, carrito y metodo previamente seleccionado

**Contenido clave**

- titulo del metodo: `Compra ahora, paga despues`
- apoyo corto: `Recibe tu pedido hoy y pagalo en 15 dias`
- microcopy de apoyo: `Sujeto a validacion`

**Acciones**

- principal: `Ver como funciona` o `Elegir BNPL`
- secundaria: cambiar a otro metodo de pago

**Criterios de aceptacion**

- el usuario entiende que BNPL es un metodo de pago aplicable a esta compra
- el checkout no se reinicia ni pierde contexto

### Vista 2. Detalle de BNPL / educacion previa

**Paso del flujo:** 3/9

**Objetivo**

Explicar el producto de forma simple antes de pedir cualquier validacion.

**Que muestra**

- que significa comprar hoy y pagar despues
- monto estimado a financiar
- fecha estimada de pago
- preview breve de que habra validacion de identidad (no sustituye la Vista 3)
- beneficio concreto: cerrar la compra hoy sin pagar todo en ese momento
- resumen de pedido colapsado (total + N productos)

**Como debe funcionar**

- debe responder con claridad:
  - que es el producto
  - cuanto pagaria
  - cuando pagaria
  - por que existira validacion despues
- la mencion de validacion aqui es anticipacion ligera; el detalle de pasos vive en la Vista 3
- no debe incluir legales largos dentro del flujo principal
- debe ofrecer acceso secundario a terminos completos
- esta vista todavia no representa consentimiento final de credito

**Contenido clave**

- titulo: `Compra hoy. Paga en 15 dias`
- resumen: `Usa esta opcion para completar tu pedido hoy y cubrir este monto despues`
- apoyo de confianza: `Antes de continuar, validaremos tu identidad para proteger tu cuenta`

**Acciones**

- principal: `Continuar con validacion`
- secundaria: `Elegir otro metodo de pago`

**Criterios de aceptacion**

- el usuario entiende que la validacion ocurre antes de aprobar el credito
- el usuario no siente que ya acepto una deuda

### Vista 3. Anticipacion de validacion

**Paso del flujo:** 4/9

**Objetivo**

Reducir friccion al anticipar los pasos y el tiempo que tomara completar la activacion.

**Que muestra**

- lista simple de pasos:
  - confirmar celular
  - validar identidad
  - revisar oferta
  - confirmar compra
- mensaje de confianza: `Esto nos ayuda a proteger tu cuenta y validar tu solicitud`
- tiempo estimado del proceso
- resumen de pedido colapsado

**Como debe funcionar**

- prepara al usuario antes de OTP e Incode
- reduce sorpresa y abandono
- puede presentarse como pantalla propia o como bloque final de la vista anterior, pero funcionalmente debe existir
- deja claro que aun falta revisar la oferta final antes de confirmar

**Contenido clave**

- titulo: `Te tomara solo unos minutos`
- apoyo: `Primero validaremos tu celular y tu identidad. Despues revisaras tu oferta antes de confirmar`

**Acciones**

- principal: `Empezar validacion`
- secundaria: `Cancelar`

**Criterios de aceptacion**

- el usuario sabe que vienen varios pasos
- el usuario entiende por que existen antes de empezar

### Vista 4. Validacion de celular por OTP

**Paso del flujo:** 5/9

**Objetivo**

Confirmar que el usuario controla el celular registrado en su cuenta.

**Que muestra**

- indicador de progreso: `Paso 1 de 4` (sub-flujo de activacion)
- celular registrado parcialmente enmascarado
- mensaje: `Te enviaremos un codigo al numero terminado en XXXX`
- campo o celdas para capturar OTP
- opcion de reenviar codigo
- temporizador o estado de espera
- resumen de pedido colapsado

**Como debe funcionar**

- el sistema toma por defecto el celular ya registrado
- no se solicita captura manual del numero como camino principal
- si el OTP es correcto, el sistema puede avanzar automaticamente o habilitar un CTA claro
- si el OTP falla, debe permitir reintento controlado
- si el numero no es correcto, eso sale del happy path y se resuelve por flujo alterno
- al volver atras, conserva progreso del carrito y del checkout

**Contenido clave**

- titulo: `Confirma tu celular`
- apoyo: `Usaremos este numero para validar que eres tu`
- estado de reenvio: `Puedes solicitar un nuevo codigo en 00:30`

**Acciones**

- principal: `Confirmar codigo`
- secundaria: `Reenviar codigo`

**Criterios de aceptacion**

- el usuario entiende que esta validando identidad, no creando una cuenta
- no hay confusion sobre el estado del pedido

### Vista 5. Validacion de identidad con Incode

**Paso del flujo:** 6/9

**Objetivo**

Guiar la validacion de INE y biometria facial como parte de la solicitud.

**Que muestra**

- indicador de progreso: `Paso 2 de 4`
- explicacion breve: `Necesitamos validar tu identidad para continuar con tu solicitud`
- subpasos visibles:
  - foto del INE
  - selfie o validacion facial
- recomendaciones operativas:
  - buena luz
  - documento visible
  - quitar accesorios si aplica
- resumen de pedido colapsado

**Como debe funcionar**

- la vista prepara al usuario antes de lanzar el flujo de Incode
- al tocar el CTA principal, se abre el **SDK de Incode** (pantallas propias del proveedor; fuera del wireframe del marketplace)
- al regresar de Incode con exito, el sistema evalua la solicitud
- si la evaluacion es instantanea, transicion directa a la Vista 6
- si el motor tarda, puede mostrarse un **micro-estado opcional**: `Estamos preparando tu oferta` con spinner breve antes de la Vista 6 (happy path tolerante; no obligatorio en v1)
- al regresar con error, se muestra necesidad de reintento sin mezclar informacion financiera
- no debe mezclar informacion financiera ni condiciones de credito en la pantalla prep

**Contenido clave**

- titulo: `Valida tu identidad`
- apoyo: `Te pediremos una foto de tu INE y una selfie para continuar`
- nota operativa: `Hazlo en un lugar bien iluminado`

**Acciones**

- principal: `Continuar con validacion de identidad`
- secundaria: `Volver`

**Criterios de aceptacion**

- el usuario entiende que documento necesita y que se validara con su rostro
- el paso se percibe como seguridad, no como barrera arbitraria

### Vista 6. Revision de oferta aprobada

**Paso del flujo:** 7/9

**Objetivo**

Mostrar la oferta concreta y obligar a una lectura minima antes del **unico consentimiento de credito** del flujo.

**Que muestra**

- indicador de progreso: `Paso 3 de 4`
- monto financiado
- costo total a pagar
- fecha exacta de pago
- consecuencia basica por atraso en lenguaje claro
- relacion con la compra: `Tu pedido se procesara hoy. Este monto lo pagaras el [fecha]`
- resumen de pedido colapsado

**Como debe funcionar**

- esta es la vista mas critica del flujo y el **unico punto de consentimiento de credito**
- toda la informacion financiera clave debe estar por encima del CTA
- no debe permitirse confirmar sin mostrar costo y fecha
- si el monto aprobado difiere del esperado, el cambio debe explicarse de forma explicita
- el CTA confirma simultaneamente la aceptacion del BNPL y el procesamiento del pedido en el marketplace

**Contenido clave**

- titulo: `Revisa tu oferta`
- resumen financiero en formato de lectura rapida
- bloque de confianza: `No pagaras hoy. Tu fecha limite de pago sera el [fecha]`

**Acciones**

- principal: `Confirmar y procesar pedido`
- secundaria: `Cancelar solicitud`

**Criterios de aceptacion**

- el usuario puede decir cuanto pagara y cuando lo pagara
- el consentimiento solo ocurre despues de ver la oferta final

### Vista 7. Loading / procesamiento

**Paso del flujo:** 8/9

**Objetivo**

Sostener confianza mientras el sistema activa BNPL y procesa la orden.

**Que muestra**

- indicador visual de carga
- mensaje breve: `Estamos confirmando tu pago y procesando tu pedido`
- apoyo: `No cierres esta pantalla`

**Como debe funcionar**

- debe comunicar que se estan resolviendo dos cosas en paralelo:
  - la activacion del BNPL
  - el procesamiento de la orden en el marketplace
- no debe durar mas de lo necesario
- si existe una demora breve, debe mostrarse un mensaje tranquilizador y no un error ambiguo

**Contenido clave**

- titulo o estado: `Estamos procesando tu compra`
- apoyo: `Esto puede tardar unos segundos`

**Acciones**

- no hay accion principal en el happy path

**Criterios de aceptacion**

- el usuario entiende que el proceso sigue en curso
- no hay ambiguedad sobre si debe reintentar

### Vista 8. Success unificado: orden procesada + BNPL activo

**Paso del flujo:** 9/9

**Objetivo**

Cerrar la ansiedad de compra y confirmar tanto el pedido del marketplace como la obligacion BNPL futura.

**Que muestra**

- confirmacion principal: `Tu pedido fue procesado`
- confirmacion secundaria: `Tu compra quedo registrada con pago en 15 dias`
- resumen final:
  - numero de orden
  - monto BNPL
  - fecha exacta de pago
- proximo paso: `Te recordaremos antes de la fecha de pago`

**Como debe funcionar**

- la jerarquia principal debe priorizar el exito de la compra en el marketplace
- debajo, debe quedar explicito que existe una obligacion futura con fecha concreta
- no debe incluir venta cruzada ni nuevas ofertas
- puede ofrecer acceso posterior al detalle del pedido o del credito si el producto lo requiere

**Contenido clave**

- titulo principal: `Tu pedido fue procesado`
- apoyo BNPL: `Tu pago en 15 dias ya quedo activo`
- cierre: `Guarda esta fecha: [fecha]`

**Acciones**

- principal: `Ver pedido`
- secundaria: `Ver detalle de pago` o `Entendido`

**Criterios de aceptacion**

- el usuario sale con certeza de que la orden si quedo procesada
- tambien entiende que tiene una obligacion futura con fecha especifica

## 7. Wireframes screen by screen

Los siguientes wireframes son esquemas de baja fidelidad para definir composicion, jerarquia y componentes principales de cada vista. Numeracion alineada con Vistas 0-8 y pasos 1-9 del flujo general.

**Nota sobre progreso:** `Paso X de 4` en wireframes 4-6 corresponde al sub-flujo de activacion BNPL (celular, identidad, oferta, confirmacion). Los pasos 1-9 del flujo completo incluyen carrito, checkout, educacion, loading y success.

### Wireframe 0. Carrito (paso 1/9)

```text
[Header]
Carrito (N productos)

[Product List]
- Producto A    $XX   [ - 1 + ]
- Producto B    $XX   [ - 2 + ]
...

[Summary Card]
Subtotal: $X
Envio estimado: $X

[Sticky Footer CTA]
[Ir a pagar]
```

**Jerarquia visual**

- productos y subtotal como foco
- CTA de pago fijo abajo

**Componentes**

- lista de productos editable
- card de resumen
- CTA sticky inferior

### Wireframe 1. Checkout con BNPL (paso 2/9)

```text
[Header]
Checkout

[Order Summary Card]
- Total del pedido
- Direccion / entrega
- Productos resumidos

[Payment Methods Section]
( ) Tarjeta
( ) Transferencia
( ) Compra ahora, paga despues
    Recibe tu pedido hoy y pagalo en 15 dias
    [Ver como funciona]

[Sticky Footer CTA]
[Continuar]
```

**Estado alterno:** si el usuario ya selecciono BNPL, el radio pasa a `(•)` y el CTA puede avanzar a Vista 2.

**Jerarquia visual**

- primero el total y contexto del pedido
- despues la seleccion de metodo de pago
- BNPL debe verse como una opcion nativa dentro de la lista, sin seleccionar por defecto

**Componentes**

- card de resumen
- radio list de metodos de pago
- link o trigger informativo
- CTA sticky inferior

### Wireframe 2. Detalle de BNPL / educacion previa (paso 3/9)

```text
[Top Bar]
< Volver

[Collapsed Order Summary]
Pedido: $X · N productos

[Hero Block]
Compra hoy. Paga en 15 dias
Usa esta opcion para completar tu pedido hoy

[Financial Snapshot Card]
- Monto estimado: $X
- Fecha estimada de pago: DD/MM
- Pagas despues de recibir tu pedido

[Trust / Validation Info]
Antes de continuar, validaremos tu identidad
para proteger tu cuenta

[Secondary Link]
Ver terminos completos

[Sticky Footer CTA]
[Continuar con validacion]
[Elegir otro metodo de pago]
```

**Jerarquia visual**

- titular claro arriba
- datos financieros resumidos al centro
- mensaje de seguridad antes del CTA

**Componentes**

- top bar con back
- resumen de pedido colapsado
- card financiera
- bloque informativo de confianza
- CTA principal + accion secundaria

### Wireframe 3. Anticipacion de validacion (paso 4/9)

```text
[Top Bar]
< Volver

[Collapsed Order Summary]
Pedido: $X · N productos

[Intro Block]
Te tomara solo unos minutos

[Steps Card]
1. Confirmar celular
2. Validar identidad
3. Revisar oferta
4. Confirmar compra

[Trust Message]
Esto nos ayuda a proteger tu cuenta
y validar tu solicitud

[Time Estimate]
Tiempo estimado: 2 a 3 minutos

[Sticky Footer CTA]
[Empezar validacion]
[Cancelar]
```

**Jerarquia visual**

- promesa de rapidez arriba
- pasos visibles como lista simple
- mensaje de confianza antes de empezar

**Componentes**

- header con regreso
- resumen de pedido colapsado
- stepper simple o lista numerada
- badge o chip de tiempo estimado
- CTA primario

### Wireframe 4. OTP celular (paso 5/9)

```text
[Progress Indicator]
Paso 1 de 4

[Collapsed Order Summary]
Pedido: $X · N productos

[Title]
Confirma tu celular

[Support Copy]
Te enviaremos un codigo al numero
terminado en 1234

[OTP Input]
[ _ ][ _ ][ _ ][ _ ][ _ ][ _ ]

[Timer / Resend]
Reenviar codigo en 00:30

[Help Copy]
Usaremos este numero para validar que eres tu

[Sticky Footer CTA]
[Confirmar codigo]
[Reenviar codigo]
```

**Jerarquia visual**

- progreso y contexto al inicio
- OTP como foco absoluto al centro
- reenvio visible, pero secundario

**Componentes**

- progress bar (sub-flujo activacion)
- resumen de pedido colapsado
- input OTP segmentado
- temporizador
- CTA principal

### Wireframe 5. Identidad con Incode (paso 6/9)

```text
[Progress Indicator]
Paso 2 de 4

[Collapsed Order Summary]
Pedido: $X · N productos

[Title]
Valida tu identidad

[Support Copy]
Te pediremos una foto de tu INE
y una selfie para continuar

[Checklist Card]
- Ten tu INE a la mano
- Busca buena luz
- Quita accesorios si es necesario

[Identity Steps]
1. Foto del INE
2. Selfie / validacion facial

[Sticky Footer CTA]
[Continuar con validacion de identidad]
[Volver]
```

**Transicion:** CTA abre SDK Incode (pantallas del proveedor, no wireframeadas aqui). Tras exito, Vista 6 o micro-loading `Estamos preparando tu oferta`.

**Jerarquia visual**

- explicacion corta arriba
- preparacion operativa antes de entrar a Incode
- CTA solo cuando el usuario sabe que necesitara

**Componentes**

- progress indicator
- resumen de pedido colapsado
- checklist card
- lista de subpasos
- CTA sticky

### Wireframe 6. Revision de oferta aprobada (paso 7/9)

```text
[Progress Indicator]
Paso 3 de 4

[Collapsed Order Summary]
Pedido: $X · N productos

[Title]
Revisa tu oferta

[Main Financial Card]
- Monto financiado: $X
- Costo total: $Y
- Fecha de pago: DD/MM/YYYY

[Clarification Block]
Tu pedido se procesara hoy.
Este monto lo pagaras el DD/MM/YYYY

[Late Fee / Consequence Note]
Si te atrasas, podrian aplicarse cargos adicionales

[Sticky Footer CTA]
[Confirmar y procesar pedido]
[Cancelar solicitud]
```

**Jerarquia visual**

- los datos financieros son el bloque dominante
- fecha y costo total deben verse sin scroll idealmente
- aclaracion de la relacion entre orden y deuda justo antes del CTA

**Componentes**

- progress bar
- resumen de pedido colapsado
- card financiera principal
- nota de consecuencia por atraso
- CTA de consentimiento final

### Wireframe 7. Loading / procesamiento (paso 8/9)

```text
[Centered State]
(spinner / loader)

Estamos procesando tu compra

Estamos confirmando tu pago
y procesando tu pedido

No cierres esta pantalla
```

**Jerarquia visual**

- un solo foco central
- mensaje principal corto
- mensaje secundario tranquilizador

**Componentes**

- loader animado
- texto principal
- texto secundario

### Wireframe 8. Success unificado (paso 9/9)

```text
[Success Icon]
(check)

Tu pedido fue procesado

Tu compra quedo registrada
con pago en 15 dias

[Summary Card]
- Numero de orden: #12345
- Monto BNPL: $X
- Fecha de pago: DD/MM/YYYY

[Next Step Block]
Te recordaremos antes de la fecha de pago

[Primary CTA]
[Ver pedido]

[Secondary Action]
Ver detalle de pago
```

**Jerarquia visual**

- exito de la compra primero
- compromiso BNPL segundo
- resumen y proximo paso abajo

**Componentes**

- icono de exito
- card resumen
- CTA principal
- accion secundaria

## 8. Estados y casos complementarios

Aunque el foco inicial es el happy path, el diseno debe contemplar estos casos:

- el usuario descubre BNPL y regresa a otro medio de pago
- el usuario abandona al enterarse de la validacion
- OTP con reenvio exitoso
- validacion Incode exitosa en primer intento
- demora breve durante procesamiento o scoring post-Incode
- exito final con fecha de pago visible

Los edge cases fuera de este alcance, como numero desactualizado, falla persistente de OTP, rechazo de identidad o revision manual, se documentan como flujos alternos posteriores.

## 9. Reglas transversales

- CTA sticky en vistas con accion principal
- barra o indicador de progreso `Paso X de 4` desde OTP hasta oferta (sub-flujo de activacion)
- resumen de pedido colapsado (total + N productos) visible en Vistas 2-6 del sub-flujo BNPL
- navegacion `Volver` conserva carrito, metodo de pago seleccionado y progreso OTP cuando aplique
- tono de contenido claro, directo y sin promesas agresivas
- monto, fecha y terminos clave siempre visibles por encima del fold cuando sean el foco de la vista
- la confirmacion final debe unir exito de compra y activacion BNPL en una sola experiencia

## 10. Criterios de aceptacion UX del flujo completo

- BNPL se entiende como metodo de pago contextual y no como credito generico
- la validacion de celular e identidad se percibe como parte natural del proceso
- el usuario conoce costo total y fecha exacta antes de confirmar
- la orden y el BNPL quedan confirmados en una sola experiencia final
- el flujo mantiene continuidad, contexto y confianza de inicio a fin
