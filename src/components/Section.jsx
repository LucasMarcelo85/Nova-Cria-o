import { Typography, Button, Box } from "@mui/material";


const Section = () => {
  return (
    
    <Box
      mt={4}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#fafafa",
        padding: "40px 20px",
        borderRadius: "12px",
        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.15)",
        marginTop: "20px",
        transition: "transform 0.3s, box-shadow 0.3s",
        maxWidth: "600px",
        margin: "auto",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0px 12px 24px rgba(0, 0, 0, 0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0px 8px 16px rgba(0, 0, 0, 0.15)";
      }}
    >
      <Typography variant="h4" style={{ fontSize: "1.5rem", fontWeight: "600", color: "#3b8ea7" }}>
        
        Igreja Nova Criação
      </Typography>
      <Typography variant="body1" style={{ marginTop: "10px", color: "#3b8ea7", textAlign: "center" }}>
        Clique abaixo para acompanhar nossos vídeos e cultos ao vivo!
      </Typography>
      <Button
        variant="contained"
        href="https://www.youtube.com/@IgrejaNovaCriacao"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "1.1rem",
          backgroundColor: "#3b8ea7",
          color: "#fff",
          textTransform: "none",
          transition: "background-color 0.3s, transform 0.3s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#B71C1C")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#D32F2F")}
      >
        Visitar Canal no YouTube
      </Button>

      <Box mt={3} style={{ width: "100%", paddingTop: "56.25%", position: "relative" }}>
        <iframe
          src="https://www.youtube.com/embed/wD4LU-bu7C0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "12px",
          }}
        ></iframe>
        
      </Box>
      
    </Box>
  );
};

export default Section;
