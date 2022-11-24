/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: [
        // Break line
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                // Add color schemes
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
        }
    },
    plugins: [require("daisyui")],
    daisyui: {
        styled: true,
        themes: false,
        base: true,
        utils: true,
        logs: false,
        rtl: false,
        prefix: "",
        darkTheme: "dark"
    }
};
