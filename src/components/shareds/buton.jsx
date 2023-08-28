import styles from "../../assets/styles/button.module.scss";
import { Button, IconButton } from "@mui/material"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const Botn = ({ children, color, background, font, handleClick }) => {


    const styleProps = {
        color: color,
        backgroundColor: background,
        fontSize: font
    };
    return (

        <Button onClick={handleClick} size="small" endIcon={<ArrowForwardIcon />} style={styleProps} variant="contained" className={styles.containerButton} disableElevation>
            {children}

        </Button>
    )
}

export default Botn

