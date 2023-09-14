import { createTheme } from "@mui/material/styles";

export const light_theme = createTheme({
    typography: {
        "fontFamily": `"BalooRegular"`,
    },
    palette: {
        primary: {
            main: '#FDE048',
        },
        secondary: {
            main: "#f44336",
        }
    },
});

export const dark_theme = createTheme({
    typography: {
        "fontFamily": `"BalooRegular"`,
    },
    palette: {
        mode: "dark",
        primary: {
            main: "#FDE048",
        },
        secondary: {
            main: "#f44336",
        }
    }
});
