import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { customTheme } from "../../../theme/CustomTheme";
import { ReactNode } from "react";

type TypographyTagProps = {
    children:string | ReactNode,
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "caption" | "button" | "overline" | "inherit",
    className?:string,
    sx?:any,
    component?:any,
    color?:any
}
export default function TypographyTag(props:TypographyTagProps){
    return(
        <ThemeProvider theme={customTheme}>
            <Typography sx={props.sx} className={props.className} variant={props.variant} component={props.component} color={props.color}>{props.children}</Typography>
        </ThemeProvider>
    )
}