# Fundeen Marp Theme

Tema de [Marp](https://marp.app/) con el branding oficial de Fundeen para presentaciones internas y externas.

## Instalación

```bash
npm install @fundeen/marp-theme @marp-team/marp-cli
```

Crea un `.marprc.yml` en tu proyecto:

```yaml
theme: ./node_modules/@fundeen/marp-theme/fundeen.css
html: true
```

## Uso rápido

```markdown
---
marp: true
theme: fundeen
paginate: true
---

<!-- _class: title -->

# Título de la presentación

## Subtítulo

---

# Slide de contenido

- Punto uno
- Punto dos
```

## Exportar

```bash
npx marp slides.md --pdf    # PDF
npx marp slides.md --pptx   # PowerPoint
npx marp slides.md --preview # Preview en navegador
```

## Layouts disponibles

| Clase | Uso |
|---|---|
| `title` | Portada |
| `section` | Separador de capítulo |
| `index` | Índice |
| `accent` | Destacado con borde |
| `light` | Fondo blanco |
| `cols` | Dos columnas |
| `lead` | Texto grande centrado |
| `end` | Slide de cierre |

## VS Code

Instala [Marp for VS Code](https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode) y añade a `.vscode/settings.json`:

```json
{
  "markdown.marp.themes": ["node_modules/@fundeen/marp-theme/fundeen.css"],
  "markdown.marp.enableHtml": true
}
```

## Releases

```bash
npm run release        # patch  0.1.0 → 0.1.1
npm run release:minor  # minor  0.1.0 → 0.2.0
npm run release:major  # major  0.1.0 → 1.0.0
```+Plex+Sans) from Google Fonts automatically. No local install needed.
