import { Typography, Box } from "@mui/material";
import pastor from "../assets/images/pastor.png";
import cnicon from "../assets/images/NCicon.png";
import pastor1 from "../assets/images/pastor3.png";
import pastor2 from "../assets/images/pastora2.png";

const Section2 = () => {
  const pastoralTeam = [
    { name: "Joaquin", image: pastor1 },
    { name: "Jeanne", image: pastor2 },
    { name: "Pedro", image: pastor },
    { name: "Pastor 4", image: cnicon },
  ];

  return (
    <section id="pastoral">
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "60px" }}>
        {/* Foto principal */}
        <Box
          component="img"
          src={pastor}
          alt="Pastoral Team"
          sx={{
            width: "300px",
            height: "300px",
            borderRadius: "20%",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
          }}
        />

        {/* Logotipo */}
        <Box
          component="img"
          src={cnicon}
          alt="Logo"
          sx={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            marginTop: "-40px", // Sobreposição do logo na foto principal
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
          }}
        />

        {/* Texto "EU VEJO" */}
        <Typography variant="h6" sx={{ fontWeight: "bold", marginTop: "20px", color: "#00796b" }}>
          EU VEJO
        </Typography>

        {/* Frase */}
        <Typography variant="body1" sx={{ fontStyle: "italic", textAlign: "center", maxWidth: "400px", margin: "10px 0" }}>
          “Uma igreja onde cada membro é conhecido por Deus através de um profundo relacionamento com ele”
        </Typography>

        {/* Título "Equipe Pastoral" */}
        <Typography variant="h6" sx={{ fontWeight: "bold", marginTop: "30px", color: "#00796b" }}>
          Equipe Pastoral
        </Typography>

        {/* Fotos da equipe pastoral */}
        <Box sx={{ display: "flex", gap: "20px", marginTop: "20px" }}>
          {pastoralTeam.map((pastor, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                overflow: "hidden",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                "&:hover .pastor-name": {
                  opacity: 1,
                },
              }}
            >
              <Box
                component="img"
                src={pastor.image}
                alt={pastor.name}
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <Box
                className="pastor-name"
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  color: "white",
                  textAlign: "center",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                  padding: "5px 0",
                  fontSize: "12px",
                }}
              >
                {pastor.name}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </section>
  );
};

export default Section2;
