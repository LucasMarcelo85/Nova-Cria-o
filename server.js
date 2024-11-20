import express from 'express';
import axios from 'axios';
import cors from 'cors';  // Importando o CORS

const app = express();
const port = 5000;

// Usando o middleware CORS para permitir solicitações de qualquer origem
app.use(cors());

app.get('/proxy', async (req, res) => {
  try {
    const response = await axios.get('https://www.youtube.com/feeds/videos.xml?channel_id=UC9iRB3-bkP9MJ68Vgq4sygg');
    res.set('Content-Type', 'application/xml');
    res.send(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao acessar o feed YouTube' });
  }
});

app.listen(port, () => {
  console.log(`Servidor proxy rodando em http://localhost:${port}`);
});
