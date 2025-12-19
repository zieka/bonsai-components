# @bonsai-components/palette-pantry

Battle-tested color palettes for data visualization.

## Installation

```bash
npm install @bonsai-components/palette-pantry
```

## Usage

```typescript
import {
  CategoricalPalettes,
  SequentialPalettes,
  DivergingPalettes,
} from '@bonsai-components/palette-pantry';

// Categorical - for distinct categories
const categoryColor = CategoricalPalettes.AdobeSpectrum12[0]; // '#0eb6ad'

// Sequential - for ordered data (low to high)
const heatmapColors = SequentialPalettes.ColorBrewerBlues9;

// Diverging - for data with a meaningful midpoint
const temperatureScale = DivergingPalettes.ColorBrewerRdBu11;
```

## Available Palettes

### Categorical Palettes

For distinguishing between discrete categories.

| Name | Colors | Source |
|------|--------|--------|
| `ColorBrewerAccent8` | 8 | ColorBrewer |
| `ColorBrewerDark28` | 8 | ColorBrewer |
| `ColorBrewerPaired12` | 12 | ColorBrewer |
| `ColorBrewerPastel19` | 9 | ColorBrewer |
| `ColorBrewerPastel28` | 8 | ColorBrewer |
| `ColorBrewerSet19` | 9 | ColorBrewer |
| `ColorBrewerSet28` | 8 | ColorBrewer |
| `ColorBrewerSet312` | 12 | ColorBrewer |
| `IbmCarbon14` | 14 | IBM Carbon Design System |
| `AdobeSpectrum12` | 12 | Adobe Spectrum |

### Sequential Palettes

For ordered data that progresses from low to high values.

**Single-hue:**
- `ColorBrewerBlues9`, `ColorBrewerGreens9`, `ColorBrewerGreys9`
- `ColorBrewerOranges9`, `ColorBrewerPurples9`, `ColorBrewerReds9`

**Multi-hue:**
- `ColorBrewerBuGn9`, `ColorBrewerBuPu9`, `ColorBrewerGnBu9`
- `ColorBrewerOrRd9`, `ColorBrewerPuBu9`, `ColorBrewerPuBuGn9`
- `ColorBrewerPuRd9`, `ColorBrewerRdPu9`, `ColorBrewerYlGn9`
- `ColorBrewerYlGnBu9`, `ColorBrewerYlOrBr9`, `ColorBrewerYlOrRd9`

### Diverging Palettes

For data with a meaningful midpoint (e.g., zero, average).

- `ColorBrewerBrBG11`, `ColorBrewerPiYG11`, `ColorBrewerPRGn11`
- `ColorBrewerPuOr11`, `ColorBrewerRdBu11`, `ColorBrewerRdGy11`
- `ColorBrewerRdYlBu11`, `ColorBrewerRdYlGn11`, `ColorBrewerSpectral11`

## Type Safety

All palettes are typed as readonly tuples with literal string types:

```typescript
// TypeScript knows the exact type
const color = CategoricalPalettes.AdobeSpectrum12[0];
// Type: "#0eb6ad"

// Full palette type
type AdobePalette = typeof CategoricalPalettes.AdobeSpectrum12;
// Type: readonly ["#0eb6ad", "#4046ca", "#f68512", ...]
```

## Sources

- [ColorBrewer](https://colorbrewer2.org/) - Cynthia Brewer's color schemes for cartography
- [IBM Carbon Design System](https://carbondesignsystem.com/data-visualization/color-palettes/)
- [Adobe Spectrum](https://spectrum.adobe.com/page/color-for-data-visualization/)

## License

MIT OR Apache-2.0
