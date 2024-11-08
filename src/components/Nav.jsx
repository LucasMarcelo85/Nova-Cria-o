import { Typography } from "@mui/material";
import banner from "../assets/images/cida.jpg";


const Nav = () => {
  return (
    <nav>
      <Typography>
        <img src={banner} alt="banner" />
      </Typography>
    </nav>
  );
};

export default Nav;
