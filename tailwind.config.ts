import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            maxWidth: {
                300: "75rem",
            },
            width: {
                75: "17.75rem",
                headerSearchInput: "calc(100% - 6rem)",
                62: "15.375rem",
            },
            height: {
                headerDrawer: "calc(100% - 3.75rem)",
            },
            minHeight: {
                7.5: "1.875rem",
                40.5: "10.125rem",
                pageLayout: "calc(100svh - 10.125rem)",
                pageLayoutMobile: "calc(100svh - 18rem)",
            },
            colors: {
                primary: "#A696D2",
                secondary: "#BDE9E0",
                babyCarriage: "#CE4ADA",
            },
            gridTemplateColumns: {
                headerColumns: "18.75rem, 1fr, 18.75rem"
            },
            gridTemplateRows: {},
            screens: {
                phone: {max: "960px"}
            },
        },
    },
    plugins: [],
};
export default config;
