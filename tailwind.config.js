/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#3531d5",
                pink: "#ef5589",
                blueLight1: "#e1edfa",
                bottomTabText: "",
                bottomTabActive: "",
                extra1: "#8987e7",
                black1: "#332b3f",
            },
        },
    },
    plugins: [],
};
