import styles from "../../assets/styles/button.module.scss";
import { Button, IconButton } from "@mui/material"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Botn = ({ children, color, background, font, handleClick, arrow = 'down' | 'right' }) => {


    const styleProps = {
        color: color,
        backgroundColor: background,
        fontSize: font
    };
     const arrowIcon = {
      
        down: <ArrowDownwardIcon />,
        right: <ArrowForwardIcon />
    }[arrow]


    return (

        <Button onClick={handleClick} size="large"
          endIcon={arrow === 'right' ? <ArrowForwardIcon /> : <ArrowDownwardIcon />}
          style={styleProps} 
         variant="contained" className={styles.containerButton} disableElevation>
            {children}

        </Button>
    )
}

export default Botn

