import { IconButton, Stack } from '@mui/material'
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
const Social = ({ marginTop }) => {
    return (
        <Stack spacing={1} direction="row" sx={{ marginTop: marginTop }}>
            <IconButton sx={{
                transition: "background-color 0.3s ease",
                "&:hover": {
                    backgroundColor: "#42414d",
                    "& > svg": {
                        opacity: 1, // Cambiar la opacidad del icono 
                    },
                },
            }} 
                href="https://github.com/renatogastonruizgithub?tab=repositories" target={"_blank"}
            >
                <GitHubIcon sx={{ color: "#fff", opacity: ".7 ", fontSize: "2rem" }} />
            </IconButton>
            <IconButton sx={{
                transition: "background-color 0.3s ease",
                "&:hover": {
                    backgroundColor: "#42414d",
                    "& > svg": {
                        opacity: 17
                    },
                },
            }}
            href="https://www.linkedin.com/in/renato-gaston-ruiz/" target={"_blank"}
            >
                <LinkedInIcon sx={{ color: "#fff", opacity: ".7 ", fontSize: "2rem" }} />
                
            </IconButton>
           
        </Stack>
    )
}

export default Social