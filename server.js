import express from 'express';  // Usando ESModules, se seu projeto for configurado para isso
import axios from 'axios';
import cors from 'cors';

// Criar a instância do servidor
const app = express();

// Usar o middleware CORS antes de configurar qualquer rota
app.use(cors());

const port = 5000;

// Endpoint para o proxy (feed do YouTube)
app.get('/proxy', async (req, res) => {
  try {
    const response = await axios.get('https://www.youtube.com/feeds/videos.xml?channel_id=UC9iRB3-bkP9MJ68Vgq4sygg');
    res.set('Content-Type', 'application/xml');
    res.send(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao acessar o feed YouTube' });
  }
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
