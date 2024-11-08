import { Typography, Box } from "@mui/material";
import conta from "../assets/images/conta.jpeg";

const Section3 = () => {
  return (
    <section id="generosidade">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
          backgroundColor: "#f0f4f8",
          borderRadius: "8px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          maxWidth: "600px",
          margin: "auto",
        }}
      >
        <Typography variant="h4" align="center" sx={{ fontWeight: "bold", color: "#00796b", marginBottom: "8px" }}>
          Amar a Deus
        </Typography>
        <Typography variant="h6" align="center" sx={{ color: "#00796b", marginBottom: "20px" }}>
          e servir o próximo
        </Typography>
        
        <Box
          component="img"
          src={conta}
          alt="Dados Bancários"
          sx={{
            width: "100%",
            borderRadius: "8px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            marginBottom: "20px",
          }}
        />

        <Typography variant="body1" align="center" sx={{ color: "#333" }}>
          Se você deseja contribuir, utilize os dados bancários acima. Sua generosidade faz a diferença!
        </Typography>
      </Box>
    </section>
  );
};

export default Section3;
