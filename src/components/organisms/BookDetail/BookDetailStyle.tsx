import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
    subtitle: {
        fontFamily: "Cera Pro",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "20px",
        lineHeight: "25px",
        color: "#03314B",
    },
    body1:{
        fontFamily: "Cera Pro",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "16px",
        lineHeight: "20px",
        color: "#6D787E",
    },
    style: {
    "& .MuiTab-root": {
        fontFamily: "Cera Pro",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "16px",
        padding: "inherit",
        alignItems: "flex-start",
        width: "200px",
        textTransform: 'none',
        "&:hover": {
        color: "#03314B",
        },
        "&.Mui-selected": {
        color: "#03314B",
        },
    },
    },

});