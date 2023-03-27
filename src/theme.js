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
    },
    MuiTab: {
      styleOverrides: {
        root: {
          width: 200,
          fontSize: 16,
          backgroundColor: '#F4F4F2',
          '&.Mui-selected': {
            background: '#495464',
            color: 'white'
          }
        }
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontWeight: 700,
        },
      }
    }
  }
});