module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./views/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#FF8225",
                secondary: "#004d40",
                accent: "#f8f8f8",
                lightpink: "#F8EDED",
            },
            fontFamily: {
                lato: ['Lato', 'sans-serif'],
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
    variants: {
        extend: {
            padding: ['responsive', 'hover'],
            margin: ['responsive'],
            display: ['responsive'],
        },
    },
};

export {};
