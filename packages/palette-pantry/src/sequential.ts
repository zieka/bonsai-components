/**
 * Sequential color palettes for data visualization.
 * Use these for ordered data that progresses from low to high values.
 *
 * @see https://colorbrewer2.org/ - ColorBrewer palettes
 * @see https://spectrum.adobe.com/page/color-for-data-visualization/ - Adobe Spectrum
 */
export const SequentialPalettes = {
  // ============================================
  // Single-hue sequential palettes
  // ============================================

  /**
   * ColorBrewer Blues - 9 colors
   * Light to dark blue gradient
   */
  ColorBrewerBlues9: [
    '#f7fbff',
    '#deebf7',
    '#c6dbef',
    '#9ecae1',
    '#6baed6',
    '#4292c6',
    '#2171b5',
    '#08519c',
    '#08306b',
  ] as const,

  /**
   * ColorBrewer Greens - 9 colors
   * Light to dark green gradient
   */
  ColorBrewerGreens9: [
    '#f7fcf5',
    '#e5f5e0',
    '#c7e9c0',
    '#a1d99b',
    '#74c476',
    '#41ab5d',
    '#238b45',
    '#006d2c',
    '#00441b',
  ] as const,

  /**
   * ColorBrewer Greys - 9 colors
   * Light to dark grey gradient
   */
  ColorBrewerGreys9: [
    '#ffffff',
    '#f0f0f0',
    '#d9d9d9',
    '#bdbdbd',
    '#969696',
    '#737373',
    '#525252',
    '#252525',
    '#000000',
  ] as const,

  /**
   * ColorBrewer Oranges - 9 colors
   * Light to dark orange gradient
   */
  ColorBrewerOranges9: [
    '#fff5eb',
    '#fee6ce',
    '#fdd0a2',
    '#fdae6b',
    '#fd8d3c',
    '#f16913',
    '#d94801',
    '#a63603',
    '#7f2704',
  ] as const,

  /**
   * ColorBrewer Purples - 9 colors
   * Light to dark purple gradient
   */
  ColorBrewerPurples9: [
    '#fcfbfd',
    '#efedf5',
    '#dadaeb',
    '#bcbddc',
    '#9e9ac8',
    '#807dba',
    '#6a51a3',
    '#54278f',
    '#3f007d',
  ] as const,

  /**
   * ColorBrewer Reds - 9 colors
   * Light to dark red gradient
   */
  ColorBrewerReds9: [
    '#fff5f0',
    '#fee0d2',
    '#fcbba1',
    '#fc9272',
    '#fb6a4a',
    '#ef3b2c',
    '#cb181d',
    '#a50f15',
    '#67000d',
  ] as const,

  // ============================================
  // Multi-hue sequential palettes
  // ============================================

  /**
   * ColorBrewer BuGn (Blue-Green) - 9 colors
   */
  ColorBrewerBuGn9: [
    '#f7fcfd',
    '#e5f5f9',
    '#ccece6',
    '#99d8c9',
    '#66c2a4',
    '#41ae76',
    '#238b45',
    '#006d2c',
    '#00441b',
  ] as const,

  /**
   * ColorBrewer BuPu (Blue-Purple) - 9 colors
   */
  ColorBrewerBuPu9: [
    '#f7fcfd',
    '#e0ecf4',
    '#bfd3e6',
    '#9ebcda',
    '#8c96c6',
    '#8c6bb1',
    '#88419d',
    '#810f7c',
    '#4d004b',
  ] as const,

  /**
   * ColorBrewer GnBu (Green-Blue) - 9 colors
   */
  ColorBrewerGnBu9: [
    '#f7fcf0',
    '#e0f3db',
    '#ccebc5',
    '#a8ddb5',
    '#7bccc4',
    '#4eb3d3',
    '#2b8cbe',
    '#0868ac',
    '#084081',
  ] as const,

  /**
   * ColorBrewer OrRd (Orange-Red) - 9 colors
   */
  ColorBrewerOrRd9: [
    '#fff7ec',
    '#fee8c8',
    '#fdd49e',
    '#fdbb84',
    '#fc8d59',
    '#ef6548',
    '#d7301f',
    '#b30000',
    '#7f0000',
  ] as const,

  /**
   * ColorBrewer PuBu (Purple-Blue) - 9 colors
   */
  ColorBrewerPuBu9: [
    '#fff7fb',
    '#ece7f2',
    '#d0d1e6',
    '#a6bddb',
    '#74a9cf',
    '#3690c0',
    '#0570b0',
    '#045a8d',
    '#023858',
  ] as const,

  /**
   * ColorBrewer PuBuGn (Purple-Blue-Green) - 9 colors
   */
  ColorBrewerPuBuGn9: [
    '#fff7fb',
    '#ece2f0',
    '#d0d1e6',
    '#a6bddb',
    '#67a9cf',
    '#3690c0',
    '#02818a',
    '#016c59',
    '#014636',
  ] as const,

  /**
   * ColorBrewer PuRd (Purple-Red) - 9 colors
   */
  ColorBrewerPuRd9: [
    '#f7f4f9',
    '#e7e1ef',
    '#d4b9da',
    '#c994c7',
    '#df65b0',
    '#e7298a',
    '#ce1256',
    '#980043',
    '#67001f',
  ] as const,

  /**
   * ColorBrewer RdPu (Red-Purple) - 9 colors
   */
  ColorBrewerRdPu9: [
    '#fff7f3',
    '#fde0dd',
    '#fcc5c0',
    '#fa9fb5',
    '#f768a1',
    '#dd3497',
    '#ae017e',
    '#7a0177',
    '#49006a',
  ] as const,

  /**
   * ColorBrewer YlGn (Yellow-Green) - 9 colors
   */
  ColorBrewerYlGn9: [
    '#ffffe5',
    '#f7fcb9',
    '#d9f0a3',
    '#addd8e',
    '#78c679',
    '#41ab5d',
    '#238443',
    '#006837',
    '#004529',
  ] as const,

  /**
   * ColorBrewer YlGnBu (Yellow-Green-Blue) - 9 colors
   */
  ColorBrewerYlGnBu9: [
    '#ffffd9',
    '#edf8b1',
    '#c7e9b4',
    '#7fcdbb',
    '#41b6c4',
    '#1d91c0',
    '#225ea8',
    '#253494',
    '#081d58',
  ] as const,

  /**
   * ColorBrewer YlOrBr (Yellow-Orange-Brown) - 9 colors
   */
  ColorBrewerYlOrBr9: [
    '#ffffe5',
    '#fff7bc',
    '#fee391',
    '#fec44f',
    '#fe9929',
    '#ec7014',
    '#cc4c02',
    '#993404',
    '#662506',
  ] as const,

  /**
   * ColorBrewer YlOrRd (Yellow-Orange-Red) - 9 colors
   */
  ColorBrewerYlOrRd9: [
    '#ffffcc',
    '#ffeda0',
    '#fed976',
    '#feb24c',
    '#fd8d3c',
    '#fc4e2a',
    '#e31a1c',
    '#bd0026',
    '#800026',
  ] as const,

  // ============================================
  // Adobe Spectrum sequential palettes
  // @see https://spectrum.adobe.com/page/color-for-data-visualization/
  // ============================================

  /**
   * Adobe Spectrum Viridis - 17 colors
   * Yellow to green to teal to blue to purple
   */
  AdobeSpectrumViridis17: [
    '#fcf85c',
    '#d3eb51',
    '#a9dc47',
    '#81cb44',
    '#5cb949',
    '#3ea553',
    '#26905e',
    '#1d7b67',
    '#1f666c',
    '#24516d',
    '#283d6a',
    '#2b2962',
    '#2b1653',
    '#260840',
    '#1e022a',
    '#120017',
    '#070007',
  ] as const,

  /**
   * Adobe Spectrum Magma - 17 colors
   * Light cream to orange to pink to purple to dark
   */
  AdobeSpectrumMagma17: [
    '#fcfdbf',
    '#fef0a6',
    '#fedc8a',
    '#fec76c',
    '#feaf53',
    '#fc9749',
    '#f67d4a',
    '#eb6252',
    '#db4a57',
    '#c43a5d',
    '#a82e66',
    '#89246b',
    '#6a1c6a',
    '#4c1562',
    '#310f51',
    '#190b38',
    '#080616',
  ] as const,

  /**
   * Adobe Spectrum Rose - 17 colors
   * Light pink to magenta to blue-purple
   */
  AdobeSpectrumRose17: [
    '#fff0f3',
    '#ffd9e2',
    '#ffc2d1',
    '#ffaac2',
    '#fe8fb5',
    '#f774aa',
    '#ea58a1',
    '#d73e98',
    '#c02690',
    '#a41386',
    '#86107b',
    '#681170',
    '#4d1362',
    '#351451',
    '#21123d',
    '#120e27',
    '#070711',
  ] as const,

  /**
   * Adobe Spectrum Cerulean - 17 colors
   * Light cyan to teal to blue to dark purple
   */
  AdobeSpectrumCerulean17: [
    '#dffff9',
    '#b8f6f1',
    '#90ece9',
    '#6adfe1',
    '#48d0d8',
    '#2cbfcd',
    '#17adc0',
    '#0c99b1',
    '#0985a1',
    '#0b7190',
    '#105d7d',
    '#154a6a',
    '#183856',
    '#182843',
    '#151a30',
    '#0f0f1e',
    '#07070d',
  ] as const,

  /**
   * Adobe Spectrum Forest - 17 colors
   * Light yellow-green to green to teal to dark
   */
  AdobeSpectrumForest17: [
    '#ffffcf',
    '#daf5a4',
    '#b6ea7d',
    '#93dd5b',
    '#71cd44',
    '#52bc38',
    '#37a936',
    '#23953a',
    '#188140',
    '#136d44',
    '#125946',
    '#124644',
    '#11353e',
    '#0f2534',
    '#0b1827',
    '#060d18',
    '#030508',
  ] as const,
} as const;
