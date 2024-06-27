/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#020403",
          "200": "rgba(0, 0, 0, 0.8)",
          "300": "rgba(0, 0, 0, 0.6)",
          "400": "rgba(0, 0, 0, 0.56)",
          "500": "rgba(255, 255, 255, 0)",
          "600": "rgba(122, 122, 122, 0.09)",
          "700": "rgba(255, 255, 255, 0)",
        },
        white: "#fff",
        whitesmoke: {
          "100": "#f7f7f7",
          "200": "#f6f6f6",
          "300": "#f3f3f3",
        },
        silver: {
          "100": "#c4c4c4",
          "200": "#c0c0c0",
        },
        black: "#000",
        darkslategray: "#194337",
        gainsboro: {
          "100": "#d9d9d9",
          "200": "rgba(217, 217, 217, 0)",
        },
        darkslategray: {
          "100": "#414141",
          "200": "#333",
          "300": "rgba(65, 65, 65, 0.25)",
        },
        dimgray: {
          "100": "#6f6f6f",
          "200": "#535353",
        },
        darkslateblue: "#3d5a98",
        cornflowerblue: "#3771c8",
      },
      spacing: {},
      fontFamily: {
        questrial: "Questrial",
        poppins: "Poppins",
        outfit: "Outfit",
      },
      borderRadius: {
        "49xl": "68px",
        "58xl": "77px",
        "46xl": "65px",
        "8xs": "5px",



        "63xl": "82px",
        "17xl": "36px",
        xl: "20px",
        "25xl": "44px",
        "10xl": "29px",
        "3xs": "10px",
      },
    },
    fontSize: {
      "5xl": "24px",
      lgi: "19px",
      "9xl": "28px",
      "3xl": "22px",
      lg: "18px",
      "109xl": "128px",
      "11xl": "30px",
      mini: "15px",
      "21xl": "40px",
      "41xl": "60px",
      "7xl": "26px",
      "2xl": "21px",
      "4xl": "23px",
      "20xl": "39px",
      mid: "17px",
      "12xl": "31px",
      xl: "20px",
      base: "16px",
      "8xl": "27px",
      "32xl": "51px",
      "13xl": "32px",
      "17xl": "36px",
      "10xl": "29px",
      "45xl": "64px",
      "19xl": "38px",
      "53xl": "72px",
      "39xl": "58px",
      "24xl": "43px",
      inherit: "inherit",
    },
    screens: {
      mq1325: {
        raw: "screen and (max-width: 1325px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq950: {
        raw: "screen and (max-width: 950px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq1725: {
        raw: "screen and (max-width: 1725px)",
      },
      mq1575: {
        raw: "screen and (max-width: 1575px)",
      },
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};