module.exports = {
    mode: "jit",
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                // Add color schemes
            },
            fontFamily: {
                // Add custom fonts
            }
        }
    },
    plugins: [require("daisyui")],
    daisyui: {
        styled: false,
        themes: false,
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        prefix: "",
        darkTheme: "dark"
    }
};
