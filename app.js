const express  = require('express');
    const dotenv       = require('dotenv');
    const conectarBanco = require('./config/db');
    const carroRoutes  = require('./routes/carroRoutes')
    dotenv.config();       // Carrega as variáveis do .env"
    const app = express();
    
    // Middleware: interpreta o corpo das requisições como JSON
    app.use(express.json())
    // Registra as rotas da API sob o prefixo /api/carros
    app.use('/api/carros', carroRoutes);

    // Conecta ao banco e sobe o servidor
    conectarBanco();
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))
