import { useState } from "react";
import { Typography, IconButton, Drawer, List, ListItem, ListItemText, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import icon from "../assets/images/NCicon.png";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: "Inicio", link: "#" },
    { text: "Igreja", link: "#pastoral" },
    { text: "Generosidade", link: "#generosidade" },
    { text: "Programação", link: "#programacao" },
    { text: "Estudo Biblico", link: "https://www.ignovacriacao.com.br/", external: true },
    { text: "Confêrencia", link: "https://www.ignovacriacao.com.br/", external: true }
  ];

  return (
    <header>
      <Box display="flex" justifyContent="space-between" alignItems="center" p={2} boxShadow={1}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "white" }}>
          <img src={icon} alt="icon"/><em>Nova Criação</em>
        </Typography>

        {/* Botão de Menu Sanduíche para telas menores */}
        <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)} sx={{ display: { xs: "block", md: "none" } }}>
          <MenuIcon fontSize="large" />
        </IconButton>

        {/* Menu para telas maiores */}
        <Box component="nav" sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
          {menuItems.map((item, index) => (
            <Typography
              key={index}
              component="a"
              href={item.link}
              target={item.external ? "_blank" : "_self"}
              rel="noopener noreferrer"
              sx={{
                color: "#fff",
                textDecoration: "none",
                fontWeight: "bold",
                "&:hover": {
                  color: "#97ddec",
                  textDecoration: "underline",
                },
              }}
            >
              {item.text}
            </Typography>
          ))}
        </Box>

        {/* Drawer (Menu Sanduíche) para telas menores */}
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          <Box sx={{ width: 250, display: "flex", flexDirection: "column" }}>
            <IconButton onClick={toggleDrawer(false)} sx={{ alignSelf: "flex-end", m: 1 }}>
              <CloseIcon />
            </IconButton>
            <List>
              {menuItems.map((item, index) => (
                <ListItem button key={index} component="a" href={item.link} target={item.external ? "_blank" : "_self"} rel="noopener noreferrer">
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Box>
    </header>
  );
};

export default Header;
