/**
 * Categorical color palettes for data visualization.
 * Use these when you need to distinguish between discrete categories.
 *
 * @see https://colorbrewer2.org/ - ColorBrewer palettes
 * @see https://carbondesignsystem.com/data-visualization/color-palettes/ - IBM Carbon
 * @see https://spectrum.adobe.com/page/color-for-data-visualization/ - Adobe Spectrum
 */
export const CategoricalPalettes = {
  /**
   * ColorBrewer Accent - 8 colors
   * Pastel colors with medium saturation
   */
  ColorBrewerAccent8: [
    '#7fc97f',
    '#beaed4',
    '#fdc086',
    '#ffff99',
    '#386cb0',
    '#f0027f',
    '#bf5b17',
    '#666666',
  ] as const,

  /**
   * ColorBrewer Dark2 - 8 colors
   * Darker, more saturated colors
   */
  ColorBrewerDark28: [
    '#1b9e77',
    '#d95f02',
    '#7570b3',
    '#e7298a',
    '#66a61e',
    '#e6ab02',
    '#a6761d',
    '#666666',
  ] as const,

  /**
   * ColorBrewer Paired - 12 colors
   * Pairs of light/dark versions of 6 hues
   */
  ColorBrewerPaired12: [
    '#a6cee3',
    '#1f78b4',
    '#b2df8a',
    '#33a02c',
    '#fb9a99',
    '#e31a1c',
    '#fdbf6f',
    '#ff7f00',
    '#cab2d6',
    '#6a3d9a',
    '#ffff99',
    '#b15928',
  ] as const,

  /**
   * ColorBrewer Pastel1 - 9 colors
   * Light pastel colors
   */
  ColorBrewerPastel19: [
    '#fbb4ae',
    '#b3cde3',
    '#ccebc5',
    '#decbe4',
    '#fed9a6',
    '#ffffcc',
    '#e5d8bd',
    '#fddaec',
    '#f2f2f2',
  ] as const,

  /**
   * ColorBrewer Pastel2 - 8 colors
   * Light pastel colors
   */
  ColorBrewerPastel28: [
    '#b3e2cd',
    '#fdcdac',
    '#cbd5e8',
    '#f4cae4',
    '#e6f5c9',
    '#fff2ae',
    '#f1e2cc',
    '#cccccc',
  ] as const,

  /**
   * ColorBrewer Set1 - 9 colors
   * Bold, saturated colors
   */
  ColorBrewerSet19: [
    '#e41a1c',
    '#377eb8',
    '#4daf4a',
    '#984ea3',
    '#ff7f00',
    '#ffff33',
    '#a65628',
    '#f781bf',
    '#999999',
  ] as const,

  /**
   * ColorBrewer Set2 - 8 colors
   * Medium saturation colors
   */
  ColorBrewerSet28: [
    '#66c2a5',
    '#fc8d62',
    '#8da0cb',
    '#e78ac3',
    '#a6d854',
    '#ffd92f',
    '#e5c494',
    '#b3b3b3',
  ] as const,

  /**
   * ColorBrewer Set3 - 12 colors
   * Light, varied colors
   */
  ColorBrewerSet312: [
    '#8dd3c7',
    '#ffffb3',
    '#bebada',
    '#fb8072',
    '#80b1d3',
    '#fdb462',
    '#b3de69',
    '#fccde5',
    '#d9d9d9',
    '#bc80bd',
    '#ccebc5',
    '#ffed6f',
  ] as const,

  /**
   * IBM Carbon Design System - 14 colors
   * @see https://carbondesignsystem.com/data-visualization/color-palettes/#categorical-palettes
   */
  IbmCarbon14: [
    '#6929c4',
    '#1192e8',
    '#005d5d',
    '#9f1853',
    '#fa4d56',
    '#570408',
    '#198038',
    '#002d9c',
    '#ee538b',
    '#b28600',
    '#009d9a',
    '#012749',
    '#8a3800',
    '#a56eff',
  ] as const,

  /**
   * Adobe Spectrum - 12 colors
   * @see https://spectrum.adobe.com/page/color-for-data-visualization/
   */
  AdobeSpectrum12: [
    '#0eb6ad',
    '#4046ca',
    '#f68512',
    '#de3d82',
    '#7e84fa',
    '#71e06a',
    '#157af3',
    '#7326d3',
    '#e8c500',
    '#cb5d01',
    '#038f5d',
    '#bce930',
  ] as const,
} as const;
