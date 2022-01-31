import { makeStyles } from "@mui/styles";

export const styles = makeStyles({
    root:{
        "&.MuiButton-root":{
            color:"#042330",
            height : "20px",
            width : "75px",
            border: "none"
        },
        "&:hover": {
            borderBottom:"2px solid #22C870"
        }
    },

    body2: {
        fontFamily: "Cera Pro",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "16px",
        lineHeight: "20px",
    },

    link:{
        "&.MuiLink-root":{
            color:"#6D787E",
            display:"flex",
            alignItems:'center',
            paddingBottom:"20px"
            
        },
        "&:hover": {
            color:"#0365F2"
        }
    },

    menu:{
        "& .MuiPaper-root":{
            width: "100%",
            height:"398px",
            backgroundColor:"#F1F6F4",
            marginTop:"30px",
            boxShadow:"none"
        }
    },

    subtitle3:{
      fontFamily: "Cera Pro",
      fontStyle: "normal",
      fontSize: "16px",
      lineHeight: "20px",
      fontWeight: "700",
      
    }

})