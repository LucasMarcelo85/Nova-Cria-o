import { Typography, Box, Grid } from "@mui/material";
import quintas from "../assets/images/quintas.jpeg";
import banner from "../assets/images/banner3.png";
import celebrar from "../assets/images/celebrar.png";
import oracao from "../assets/images/oracao.png";

const Section1 = () => {
  const locations = [
    {
      name: "Igreja Nova Criaçao",
      image: banner,
      sundayTimes: "Culto aos Domingos",
      wednesdayTime: "de 10h e 18h",
      address: "Av. Eng. Santana Jr., 692 - Papicu, Fortaleza - CE, 60175-652",
    },
    {
      name: "Culto de Oração",
      image: oracao,
      sundayTimes: "Terça-Feira",
      wednesdayTime: "as 19:30",
      address: "Av. Eng. Santana Jr., 692 - Papicu, Fortaleza - CE, 60175-652",
    },
    {
      name: "Oração Profética",
      image: quintas,
      sundayTimes: "Quinta-Feira",
      wednesdayTime: "18h30",
      address: "Av. Eng. Santana Jr., 692 - Papicu, Fortaleza - CE, 60175-652",
    },
    {
      name: "Celebrando a Recuperação",
      image: celebrar,
      sundayTimes: "Quinta-Feira",
      wednesdayTime: "19h30",
      address: "Av. Eng. Santana Jr., 692 - Papicu, Fortaleza - CE, 60175-652",
    },
  ];

  return (
    <section id="programacao">
      <Typography variant="h4" align="center" gutterBottom style={{ color: "#00796b", fontWeight: "bold" }}>
         PROGRAMAÇÕES
      </Typography>
      <Box sx={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
        {locations.map((location, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              backgroundColor: "#e0f7fa",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              marginBottom: "20px",
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "scale(1.02)",
                boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.15)",
              },
            }}
          >
            <Box
              component="img"
              src={location.image}
              alt={location.name}
              sx={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                marginRight: { md: "20px" },
                marginBottom: { xs: "10px", md: "0" },
              }}
            />
            <Box>
              <Typography variant="h6" style={{ fontWeight: "bold", color: "#00796b" }}>
                {location.name}
              </Typography>
              <Typography variant="body1">
                <strong>Dia da semana</strong> - {location.sundayTimes}
              </Typography>
              <Typography variant="body1">
                <strong>Horários</strong> - {location.wednesdayTime}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {location.address}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </section>
  );
};

export default Section1;
