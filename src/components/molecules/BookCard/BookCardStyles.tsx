import { makeStyles } from "@mui/styles"; 

export const bookCardStyle = makeStyles((theme) => {
    return {
        bookCard :{

            height: "486px",
            width: "284px",

            /* White */

            background: "#FFFFFF",
            /* Grey/300 */

            border: "1px solid #E1ECFC",
            boxSizing: "border-box",
            borderRadius: "8px"
        },

        cardMedia :{
            height: "292px",
            width: "294.1px",
        },

        bookStatus: {
            display: "flex",
            alignItems: "center",
            paddingTop:"17px",
          },
        
        timeIcon:{
            "&.MuiSvgIcon-root": {
                left: "8.33%",
                right: "8.33%",
                top: "8.33%",
                bottom: "8.33%",
                width: "16.67px",
                height: "16.67px",
                marginRight: "5.67px",
                color: "#6D787E",
              },
        },

        personIcon:{
            paddingLeft:"47px",
            "&.MuiSvgIcon-root": {
                left: "16.67%",
                right: "16.67%",
                top: "4.17%",
                bottom: "8.33%",
                width: "16.67px",
                height: "17.5px",
                marginRight: "7.33px",
                color: "#6D787E",
              },
        },

        text: {
            left: "14.08%",
            top: "82.83%",
            bottom: "13.3%",
            
        },

        moreIcon: {
            paddingTop:"15px",
            marginLeft: "90%",
            left: "12.5%",
            right: "12.5%",
            top: "41.67%",
            bottom: "41.67%",
        },

        rectangle: {
            "&.MuiLinearProgress-root":{
            width: "283px",
            height: "15px",
            position: "absolute",
            /* Grey/100 */
            backgroundColor: "#F1F6F4",
            borderRadius: "0px 0px 8px 8px",
            },
            
        },

        readAgain:{
            "&.MuiLink-root":{
            color: "#0365F2",
            display: "flex",
            justifyContent: "center",
            paddingTop: "17px",
            paddingBottom: "8px"
            }
        },

        root:{
            "&.MuiButton-root":{
            height : "60px",
            border: "1px solid #E1ECFC",
            boxSizing: "border-box",
            borderRadius: "0px 0px 8px 8px",
            padding: "14px 24px"
            },
            "&:hover": {
                backgroundColor: "#0365F2",
                color:"#fff"
            }
        }

        
    };

});
