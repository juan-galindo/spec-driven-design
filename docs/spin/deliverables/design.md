# Design Direction - BNPL de checkout para supermercado online

## 1. Objetivo

Definir una guia breve de diseno para el MVP de **"pide tu super ahora y pagalo en 15 dias"** dentro de una experiencia mobile de supermercado online con delivery.

La experiencia debe sentirse:

- integrada al checkout
- clara en costo y fecha
- utilitaria
- mobile-native

## 2. Sistema visual

### Paleta

| Token | Valor | Uso |
| --- | --- | --- |
| `brand-primary` | `#5925CD` | CTA principal, acentos, foco |
| `brand-primary-strong` | `#3811A3` | extremo del gradiente, estados activos |
| `brand-soft` | `#ECE3FF` | fondos suaves, iconos, chips |
| `text-primary` | `#1F1F24` | titulos y contenido principal |
| `text-secondary` | `#6F6F78` | soporte, metadata |
| `surface-primary` | `#F9FAFF` | fondo base y cards |
| `feedback-warning` | `#FF9F1A` | alerta |
| `feedback-success` | `#DFF6E7` | confirmacion |

### Bordes y outline

- evitar bordes visibles en cards, inputs y superficies principales
- evitar outlines por defecto en inputs, selects, textareas y botones
- separar contenido con color, sombra, espaciado y contraste, no con lineas de borde
- si hace falta indicar foco o estado activo, hacerlo con cambio de fondo, elevacion o color, no con outline

### Gradiente

Usar solo en CTA principal y highlights puntuales.

- inicio `#5925CD`
- fin `#8C3FFF`

### Tipografia

Familia: `Figtree`

- headlines: `500`
- body: `300`
- labels y metadata: `300`, subir a `500` solo si hace falta
- montos y datos financieros: `500`

Escala sugerida:

| Uso | Tamano |
| --- | --- |
| Header de pantalla | 30-36 |
| Titulo de bloque | 22-28 |
| Monto principal | 40-56 |
| Cuerpo | 16-18 |
| Label | 14-15 |
| Metadata | 12-13 |
| CTA | 17 |

## 3. Layout mobile

- una sola columna
- padding horizontal: 20-24 px
- separacion entre bloques: 16-24 px
- cards con radius 16-20 px
- cards sin borde visible
- CTA sticky cuando el paso lo requiera
- respeto estricto por safe areas superior e inferior
- sin layouts de dos columnas
- targets tactiles minimo 44 px, ideal 48-56 px

Reglas:

- priorizar uso con una mano
- mantener la accion principal en la mitad inferior cuando sea posible
- contemplar teclado, notch y home indicator desde base
- evitar inputs outline-heavy o cajas con stroke marcado
