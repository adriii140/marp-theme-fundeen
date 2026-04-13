\---

name: Presentaciones Fundeen con Marp

description: Genera presentaciones corporativas de Fundeen en markdown usando el tema oficial fundeen-marp-theme. Usar cuando el usuario pida crear una presentación, deck, slides o documento visual para Fundeen.

\---



\# Skill: Presentaciones Fundeen con Marp



\## Cuándo usar esta skill



Cuando el usuario pida crear una presentación, deck, slides o cualquier documento visual para Fundeen.



\## Layouts disponibles



| Clase | Uso |

|---|---|

| title | Portada |

| section | Separador de capítulo |

| index | Índice |

| accent | Destacado / cita |

| light | Fondo blanco (tablas, datos) |

| cols | Dos columnas |

| lead | Texto grande centrado |

| end | Slide de cierre |



\## Estructura obligatoria



Todas las presentaciones empiezan con este encabezado:



marp: true

theme: fundeen

paginate: true



\## Reglas



\- Español siempre salvo que el usuario pida inglés

\- Títulos concisos, máximo 6 palabras

\- Bullets cortos, máximo 10 palabras por punto

\- Máximo 5 bullets por slide

\- El slide de portada siempre lleva fecha o subtítulo

\- El slide de cierre siempre lleva dato de contacto

\- Las slides de contenido normal no llevan clase

