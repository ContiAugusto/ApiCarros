const mongoose = require('mongoose');
        
        const carroSchema = new mongoose.Schema({
          marca: {
            type: String,
            required: [true, 'A marca é obrigatória']
          },
          modelo: {
            type: String,
            required: [true, 'O modelo é obrigatório']
          },
          ano: {
            type: Number,
            required: [true, 'O ano é obrigatório']
          },
          cor: {
            type: String,
            required: [true, 'A cor é obrigatória']
          },
          placa: {
            type: String,
            required: [true, 'A placa é obrigatória'],
            unique: true   // Cada carro deve ter uma placa única",
          },
          preco: {
            type: Number,
            required: [true, 'O preço é obrigatório']
          }
        }, {
          timestamps: true  // Cria automaticamente createdAt e updatedAt
        });
        
        module.exports = mongoose.model('Carro', carroSchema);