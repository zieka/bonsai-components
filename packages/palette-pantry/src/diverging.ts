/**
 * Diverging color palettes for data visualization.
 * Use these for data with a meaningful midpoint (e.g., zero, average).
 * Colors diverge from a neutral middle color to two different hues at the extremes.
 *
 * @see https://colorbrewer2.org/ - ColorBrewer palettes
 */
export const DivergingPalettes = {
  /**
   * ColorBrewer BrBG (Brown-Blue-Green) - 11 colors
   * Brown to white to blue-green
   */
  ColorBrewerBrBG11: [
    '#543005',
    '#8c510a',
    '#bf812d',
    '#dfc27d',
    '#f6e8c3',
    '#f5f5f5',
    '#c7eae5',
    '#80cdc1',
    '#35978f',
    '#01665e',
    '#003c30',
  ] as const,

  /**
   * ColorBrewer PiYG (Pink-Yellow-Green) - 11 colors
   * Pink to white to yellow-green
   */
  ColorBrewerPiYG11: [
    '#8e0152',
    '#c51b7d',
    '#de77ae',
    '#f1b6da',
    '#fde0ef',
    '#f7f7f7',
    '#e6f5d0',
    '#b8e186',
    '#7fbc41',
    '#4d9221',
    '#276419',
  ] as const,

  /**
   * ColorBrewer PRGn (Purple-Green) - 11 colors
   * Purple to white to green
   */
  ColorBrewerPRGn11: [
    '#40004b',
    '#762a83',
    '#9970ab',
    '#c2a5cf',
    '#e7d4e8',
    '#f7f7f7',
    '#d9f0d3',
    '#a6dba0',
    '#5aae61',
    '#1b7837',
    '#00441b',
  ] as const,

  /**
   * ColorBrewer PuOr (Purple-Orange) - 11 colors
   * Purple to white to orange
   */
  ColorBrewerPuOr11: [
    '#7f3b08',
    '#b35806',
    '#e08214',
    '#fdb863',
    '#fee0b6',
    '#f7f7f7',
    '#d8daeb',
    '#b2abd2',
    '#8073ac',
    '#542788',
    '#2d004b',
  ] as const,

  /**
   * ColorBrewer RdBu (Red-Blue) - 11 colors
   * Red to white to blue
   */
  ColorBrewerRdBu11: [
    '#67001f',
    '#b2182b',
    '#d6604d',
    '#f4a582',
    '#fddbc7',
    '#f7f7f7',
    '#d1e5f0',
    '#92c5de',
    '#4393c3',
    '#2166ac',
    '#053061',
  ] as const,

  /**
   * ColorBrewer RdGy (Red-Grey) - 11 colors
   * Red to white to grey
   */
  ColorBrewerRdGy11: [
    '#67001f',
    '#b2182b',
    '#d6604d',
    '#f4a582',
    '#fddbc7',
    '#ffffff',
    '#e0e0e0',
    '#bababa',
    '#878787',
    '#4d4d4d',
    '#1a1a1a',
  ] as const,

  /**
   * ColorBrewer RdYlBu (Red-Yellow-Blue) - 11 colors
   * Red to yellow to blue
   */
  ColorBrewerRdYlBu11: [
    '#a50026',
    '#d73027',
    '#f46d43',
    '#fdae61',
    '#fee090',
    '#ffffbf',
    '#e0f3f8',
    '#abd9e9',
    '#74add1',
    '#4575b4',
    '#313695',
  ] as const,

  /**
   * ColorBrewer RdYlGn (Red-Yellow-Green) - 11 colors
   * Red to yellow to green
   */
  ColorBrewerRdYlGn11: [
    '#a50026',
    '#d73027',
    '#f46d43',
    '#fdae61',
    '#fee08b',
    '#ffffbf',
    '#d9ef8b',
    '#a6d96a',
    '#66bd63',
    '#1a9850',
    '#006837',
  ] as const,

  /**
   * ColorBrewer Spectral - 11 colors
   * Red through yellow to blue-green
   */
  ColorBrewerSpectral11: [
    '#9e0142',
    '#d53e4f',
    '#f46d43',
    '#fdae61',
    '#fee08b',
    '#ffffbf',
    '#e6f598',
    '#abdda4',
    '#66c2a5',
    '#3288bd',
    '#5e4fa2',
  ] as const,
} as const;
