import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            scale: {
                200: "200%"
            },
            aspectRatio: {
                "1x1": "1/1",
                "3x2": "3/2",
                "4x3": "4/3",
                "3x4": "3/4",
                "2x3": "2/3",
                "5x6": "5/6",
                "16x9": "16/9"
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            maxWidth: {
                300: "75rem",
            },
            lineHeight: {
                3.5: "0.875rem",
            },
            width: {
                66: "16.625rem",
                140: "35rem",
                75: "17.75rem",
                18: "4.5rem",
                headerSearchInput: "calc(100% - 6rem)",
                62: "15.375rem",
                67.5: "16.875rem",
                20: "5rem",
                180: "45rem",
            },
            height: {
                140: "35rem",
                headerDrawer: "calc(100% - 3.75rem)",
                108: "27rem",
                67.5: "16.875rem",
                116: "29rem",
                20: "5rem",
                adminSidebar: "calc(100svh - 57px)",
                adminLoader: "calc(100vh - 57px - 12px * 2)",
            },
            inset: {
                13: "3.25rem",
            },
            minHeight: {
                adminSidebar: "calc(100svh - 57px)",
                7.5: "1.875rem",
                40.5: "10.125rem",
                pageLayout: "calc(100svh - 10.125rem)",
                pageLayoutMobile: "calc(100svh - 18rem)",
                34: "8.5rem",
                150: "37.5rem"
            },
            maxHeight: {
                44: "11rem",
            },
            colors: {
                secondary: "#BDE9E0",
                primary: "#A696D2",
                primaryHover: "#B3A3D8",
                babyCarriage: "#CE4ADA",
                comments: "hsl(210,16.7%,95.6%)",
            },
            gridTemplateColumns: {
                headerColumns: "18.75rem, 1fr, 18.75rem",
                homeBottomContent: "66%, 1fr",
                cartElement: "5rem, 16rem, 1.5fr, 1fr, auto",
                cartPhoneElement: "5rem, 1fr, auto",
                checkoutCartElement: "5rem, 1fr, 10rem, 7.5rem",
                checkoutCartPhoneElement: "5rem, 1fr, auto",
                ordersCartElement: "5rem, 1fr, 9rem, 16rem, auto",
                ordersCartPhoneElement: "5rem, 1fr, auto",
                commentElement: "20px, 200px, 1fr, 72px",
                commentPhoneElement: "auto, 1fr, auto",
                ordersColumns: '6rem 1fr 1fr 1fr 1fr 1fr',
                ordersPhoneColumns: 'auto auto 1fr 1fr 1fr 1.6fr',
            },
            gridTemplateRows: {},
            screens: {
                phone: {max: "960px"}
            },
            gradientColorStops: {},
        },
    },
    plugins: [
        // ...
        require("tailwind-aspect-ratio")
        // ...
    ]
};
export default config;
