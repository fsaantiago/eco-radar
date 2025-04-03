const FONTS = {
    LATO_BLACK: 'Lato-Black',
    MONTSERRAT_BLACK: 'Montserrat-Black',
} as const;

export type FONT_TYPE = keyof typeof FONTS;

export default FONTS;
