\---

name: Presentaciones Fundeen con Marp

description: Genera presentaciones corporativas de Fundeen en markdown usando el tema oficial fundeen-marp-theme. Usar cuando el usuario pida crear una presentación, deck, slides o documento visual para Fundeen.

\---

\# Skill: Presentaciones Fundeen con Marp



\## Cuándo usar esta skill

Cuando el usuario pida crear una presentación, deck, slides o cualquier documento

visual para Fundeen. Esta skill REEMPLAZA cualquier otra forma de hacer presentaciones.



\## Qué es Marp

Marp convierte markdown en presentaciones con el branding oficial de Fundeen.

El usuario solo escribe contenido — el diseño (colores, fuentes, degradados) sale

automáticamente.



\## Cómo generar una presentación



\### 1. Estructura obligatoria del fichero

Todo fichero de presentación empieza con:



\---

marp: true

theme: fundeen

paginate: true

\---



\### 2. Layouts disponibles



| Clase | Uso | Sintaxis |

|---|---|---|

| `title` | Portada | `<!-- \\\_class: title -->` |

| `section` | Separador de capítulo | `<!-- \\\_class: section -->` |

| `index` | Índice | `<!-- \\\_class: index -->` |

| `accent` | Destacado / cita | `<!-- \\\_class: accent -->` |

| `light` | Fondo blanco (tablas, datos) | `<!-- \\\_class: light -->` |

| `cols` | Dos columnas | `<!-- \\\_class: cols -->` |

| `lead` | Texto grande centrado | `<!-- \\\_class: lead -->` |

| `end` | Slide de cierre | `<!-- \\\_class: end -->` |



\### 3. Estructura recomendada por tipo de presentación



\*\*Pitch / Presentación comercial:\*\*

title → index → section + contenido → lead → end



\*\*Update interno / reunión de equipo:\*\*

title → contenido directo → end



\*\*Informe de resultados:\*\*

title → index → section + light (tablas) → cols → end



\### 4. Separación de slides

Cada slide se separa con ---



\### 5. Exportar



PDF (para compartir):

npx marp --theme fundeen.css --pdf --no-stdin slides.md



PowerPoint:

npx marp --theme fundeen.css --pptx --no-stdin slides.md



Preview en navegador:

npx marp --theme fundeen.css --preview --no-stdin slides.md



\## Ejemplo completo



\---

marp: true

theme: fundeen

paginate: true

\---



<!-- \\\_class: title -->



\# Título de la presentación



\## Subtítulo o fecha



\---



<!-- \\\_class: index -->



\### Índice



\# 01 Primer bloque



\## 02 Segundo bloque



\## 03 Tercer bloque



\---



<!-- \\\_class: section -->



\# Primer bloque



\## Descripción del bloque



\---



\# Slide de contenido



Texto introductorio del slide.



\- Punto clave uno

\- Punto clave dos

\- Punto clave tres



\---



<!-- \\\_class: light -->



\# Datos o tabla



| Columna A | Columna B | Columna C |

|---|---|---|

| Dato 1 | Dato 2 | Dato 3 |



\---



<!-- \\\_class: cols -->



\# Slide de dos columnas



\## Columna izquierda



Contenido de la columna izquierda.



\- Punto uno

\- Punto dos



\## Columna derecha



Contenido de la columna derecha.



\- Punto tres

\- Punto cuatro



\---



<!-- \\\_class: accent -->



> Cita o mensaje destacado importante para el contexto de la presentación.



\*\*Autor o fuente\*\*



\---



<!-- \\\_class: end -->



\# ¡Gracias!



Texto de cierre o contacto



\## Reglas de contenido

\- Español siempre, salvo que el usuario pida inglés

\- Títulos concisos — máximo 6 palabras

\- Bullets cortos — máximo 10 palabras por punto

\- Máximo 5 bullets por slide

\- No mezclar layouts en el mismo slide

\- Las slides de contenido normal no llevan \_class

\- El slide de portada siempre lleva fecha o subtítulo

\- El slide de cierre siempre lleva dato de contacto

