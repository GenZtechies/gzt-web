module.exports = {
    mode: "jit",
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#5D5CD6",
                "primary-dark": "#151452",
                "primary-light": "#D6D6F5",
                secondary: "#FFB800",
                tertiary: "#28B567",
                light: "#F7F7FD",
                lighter: "#D2D4D7",
                warning: "#FEC658"

            },
            fontFamily: {
                // Add custom fonts
            }
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '3rem',
                lg: "5rem",
                xl: '5rem',
                '2xl': '9rem'


            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        styled: true,
        themes: false,
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        prefix: "",
        darkTheme: "dark"
    }
};
