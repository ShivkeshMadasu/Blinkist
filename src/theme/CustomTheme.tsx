import { createTheme } from "@mui/material/styles";

export const customTheme = createTheme({
  palette: {
    primary: {
      main: "#22C870",
    },
    secondary: {
      main: "#0365F2",
    },
  },
  typography: {
    h1: {
      "&.MuiTypography-h1":{
      fontFamily: "Cera Pro",
      fontStyle: "normal",
      fontSize: "36px",
      lineHeight: "45px",
      fontWeight: "700",
      color: "#03314B",
      }
    },

    h3: {
      "&.MuiTypography-h3":{
      fontFamily: "Cera Pro",
      fontStyle: "normal",
      fontSize: "24px",
      lineHeight: "30px",
      fontWeight: "700",
      color: "#03314B",
      }
    },

    subtitle1: {
      /* Subtitle 1 */

      fontFamily: "Cera Pro",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "18px",
      lineHeight: "23px",
      /* identical to box height */

      /* Text/high_emphasis */

      color: "#03314B",
    },
    
    subtitle2: {
      /* Subtitle 1 */

      fontFamily: "Cera Pro",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "18px",
      lineHeight: "23px",
      /* identical to box height */

      /* Text/high_emphasis */

      color: "#6D787E",
    },

    body1: {
      fontFamily: "Cera Pro",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "20px",
    },

    body2: {
      fontFamily: "Cera Pro",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "24px",
    },
   
    caption: {
      fontFamily: "Cera Pro",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "14px",
      lineHeight: "18px",
      color: "#6D787E",
    },

  },

  components: {
   
    MuiLinearProgress: {
      styleOverrides: {
        barColorPrimary: {
          backgroundColor: "#E1ECFC",
        },
      },
    },
    MuiTab:{
      styleOverrides:{
        root:{
          textTransform: 'none',
          color:"#6D787E",
          width: "304px",
          alignItems: "start",
          fontFamily: "Cera Pro",
          fontStyle: "normal",
          fontWeight: "bold",
          fontSize: "18px",
          lineHeight: "23px",
          padding:"inherit"
        },
        textColorPrimary: {
          "&:hover": {
            color: "#22C870",
          },
        }
      }

    },

    MuiButton:
    {
      styleOverrides:{
        root:{
          textTransform: 'none'
        }
      }
    }



  }

});

















/*
subtitle2: {
      fontFamily: "Cera Pro",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "18px",
      lineHeight: "23px",
    },

     body2: {
      fontFamily: "Cera Pro",
      fontSize: "16px",
      lineHeight: "24px",
      fontStyle: "normal",
      fontWeight: "bold",
      color: "#6D787E",
    },
*/