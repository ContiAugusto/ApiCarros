const express         = require('express');
        const router          = express.Router();
        const carroController = require('../controllers/carroController');
        
        // Lista todos os carros
        router.get('/',    carroController.getAllCarros);
        
        // Busca um carro por ID
        router.get('/:id', carroController.getCarroById);
        
        // Cadastra um novo carro
        router.post('/',   carroController.createCarro);
        
        // Atualiza um carro existente
        router.put('/:id', carroController.updateCarro);
        
        // Remove um carro
        router.delete('/:id', carroController.deleteCarro);
        
        module.exports = router;
