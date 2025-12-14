import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Chip,
  Stack,
  Box
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

const ProjectCard = ({
  title,
  description,
  image,
  technologies = [],
  demoUrl,
  codeUrl
}) => {
  return (
    <Card
      sx={{
        backgroundColor: "#121212",
        color: "#fff",
        borderRadius: 3,
        maxWidth: 380,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "all .3s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 12px 30px rgba(0,0,0,.6)"
        }
      }}
    >
      {/* Imagen */}
      <CardMedia
        component="img"
        height="180"
        image={image}
        alt={title}
        sx={{ objectFit: "cover" }}
      />

      {/* Contenido */}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          {title}
        </Typography>

        <Typography
          variant="body2"
          sx={{ opacity: 0.8, mb: 2 }}
        >
          {description}
        </Typography>

        {/* Tecnologías */}
        <Stack direction="row" spacing={1} flexWrap="wrap">
          {technologies.map((tech, index) => (
            <Chip
              key={index}
              label={tech}
              size="small"
              sx={{
                backgroundColor: "rgba(255,255,255,0.08)",
                color: "#fff"
              }}
            />
          ))}
        </Stack>
      </CardContent>

      {/* Acciones */}
      <Box
        sx={{
          p: 2,
          pt: 0,
          display: "flex",
          justifyContent: "space-between",
          gap: 1
        }}
      >
        {codeUrl && (
          <Button
            variant="outlined"
            size="small"
            startIcon={<GitHubIcon />}
            href={codeUrl}
            target="_blank"
            sx={{
              color: "#ff7a00",
              borderColor: "#ff7a00",
              "&:hover": {
                backgroundColor: "rgba(255,122,0,.1)",
                borderColor: "#ff7a00"
              }
            }}
          >
            Código
          </Button>
        )}

        {demoUrl && (
          <Button
            variant="contained"
            size="small"
            endIcon={<LaunchIcon />}
            href={demoUrl}
            target="_blank"
            sx={{
              backgroundColor: "#ff7a00",
              "&:hover": {
                backgroundColor: "#ff8f26"
              }
            }}
          >
            Demo
          </Button>
        )}
      </Box>
    </Card>
  );
};

export default ProjectCard;
