
import { Box } from '@mui/material';
import banner1 from '../assets/images/sabado.jpeg';
import banner2 from '../assets/images/Servir.jpeg';
import banner3 from '../assets/images/quintas.jpeg';


const BannerSection = () => {
  const banners = [
    { id: 1, image: banner1},
    { id: 2, image: banner2},
    { id: 3, image: banner3},
  ];

  return (
    <Box 
      component="section" 
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: 5,
        justifyContent: 'center',
        alignItems: 'center',
        mt: 7,
      }}
    >
      {banners.map((banner) => (
        <Box 
          key={banner.id} 
          sx={{
            position: 'relative',
            width: { xs: '90%', sm: '20%' },
            height: 400,
            overflow: 'hidden',
            borderRadius: 2,
            boxShadow: 3,
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        >
          <img 
            src={banner.image} 
            alt={banner.title} 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }} 
          />
        
        </Box>
      ))}
    </Box>
  );
};

export default BannerSection;
