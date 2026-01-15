import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';

const Skill = ({ img, text }) => {

    const avatar = (
        <Avatar alt="Natacha" src={img}
            sx={{
                objectFit: "contain !important",
            }}

        />

    )
    return (
        <div style={{ position: "relative", marginLeft: "auto", marginRight: "auto",
         display: "grid", placeItems: "center" }}>
            <Chip
                avatar={avatar}
                label={text}
                sx={{ color: "#fff", backgroundColor: "#42414d", marginLeft: "auto", marginRight: "auto" }}
            />

        </div>

    )
}

export default Skill



