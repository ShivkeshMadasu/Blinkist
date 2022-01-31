import { ThemeProvider } from '@emotion/react';
import { Card, CardActionArea, CardContent, CardMedia, Link,} from '@mui/material';
import React from 'react';
import { customTheme } from '../../../theme/CustomTheme';
import { bookCardStyle } from './BookCardStyles';
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import LinearProgress from "@mui/material/LinearProgress";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import TypographyTag from '../../atoms/typography/TypographyTag';
import CustomButton from '../../atoms/Button/CustomButton';
import AddIcon from '@mui/icons-material/Add';



interface bookCardProps{
  title: string;
  author: string;
  image: string;
  readingTime: string;
  userCount: string;
  progress?: number;
  status: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  category:string
}

function BookCard(props:bookCardProps) {
    const className = bookCardStyle()
  return <div>
      <ThemeProvider theme={customTheme}>
          <Card className={className.bookCard} onClick={props.onClick}>
            <CardActionArea>
                <CardMedia
                    className={className.cardMedia}
                    component="img"
                    image={props.image}
                    alt={props.title}
                />
                <CardContent>
                    <TypographyTag sx={{paddingTop:"10px"}} variant="subtitle1" component="div">
                        {props.title}
                    </TypographyTag>
                    <TypographyTag sx={{ paddingTop: "12px" }} variant="body1" color="text.secondary">
                        {props.author}
                    </TypographyTag>

                    <div className={className.bookStatus}>
                        <AccessTimeIcon className={className.timeIcon} />
                        <TypographyTag variant="caption" className={className.text}>
                            {props.readingTime}
                        </TypographyTag>
                        <PersonOutlineIcon className={className.personIcon} />
                        <TypographyTag variant="caption">
                            {props.userCount}
                        </TypographyTag>
                    </div>
                    {props.status === "currently reading" && (<MoreHorizIcon className={className.moreIcon} /> )}
                    
                    {props.status === "finished" && (
                        <Link className={className.readAgain} underline='none'>
                            Read Again
                        </Link>
                    )}
                </CardContent>

                {props.status !== "explore" && (<LinearProgress className={className.rectangle} variant="determinate" value={props.progress}  /> )}
                {props.status === "explore" && (
                    <CustomButton variant="text" startIcon={<AddIcon/>} children="Add to library" className={className.root}/>
                )}
            </CardActionArea>
            
          </Card>
      </ThemeProvider>
  </div>;
}

export default BookCard;








//className={className.text}