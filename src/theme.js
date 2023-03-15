import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: '#495464',
    },
    secondary: {
      main: '#BBBFCA'
    },
    triadic: {
      main: '#E8E8E8',
      light: '#F4F4F2'
    }
  },
  typography: {
    allVariants: {
      fontFamily: "Inter",
      textTransform: 'none',
      fontSize: 16,
    }
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          [`& fieldset`]: {
            borderRadius: 8
          },
        }
      }
    }
  }
});