/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                pink: "#ef5589",
                blueLight1: "#e1edfa",
                bottomTabText: "",
                bottomTabActive: "",
            },
        },
    },
    plugins: [],
};
