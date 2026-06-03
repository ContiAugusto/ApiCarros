const Carro = require('../models/carroModel');
        
        // GET /api/carros — Retorna todos os carros
        exports.getAllCarros = async (req, res) => {
          try {
            const carros = await Carro.find();
            res.json(carros);
          } catch (err) {
            res.status(500).json({ mensagem: 'Erro ao buscar carros', erro: err.message });
          }
        };
        
        // GET /api/carros/:id — Retorna um carro pelo ID
        exports.getCarroById = async (req, res) => {
          try {
            const carro = await Carro.findById(req.params.id);
            if (!carro) return res.status(404).json({ mensagem: 'Carro não encontrado' });
            res.json(carro);
        } catch (err) {
            res.status(500).json({ mensagem: 'Erro ao buscar carro', erro: err.message });
          }
        };
        
        // POST /api/carros — Cria um novo carro",
        exports.createCarro = async (req, res) => {
          try {
            const novoCarro = new Carro(req.body);
            await novoCarro.save();
            res.status(201).json(novoCarro);
          } catch (err) {
            res.status(400).json({ mensagem: 'Erro ao criar carro', erro: err.message });
          }
        };
        
        // PUT /api/carros/:id — Atualiza um carro existente",
        exports.updateCarro = async (req, res) => {
          try {
            const carroAtualizado = await Carro.findByIdAndUpdate(
              req.params.id,
              req.body,
              { new: true }  // Retorna o documento já atualizado"
            );
            if (!carroAtualizado) return res.status(404).json({ mensagem: 'Carro não encontrado' });
            res.json(carroAtualizado);
          } catch (err) {
            res.status(400).json({ mensagem: 'Erro ao atualizar carro', erro: err.message });
          }
        };
        
        // DELETE /api/carros/:id — Remove um carro"
        exports.deleteCarro = async (req, res) => {
          try {
            const carroRemovido = await Carro.findByIdAndDelete(req.params.id);
            if (!carroRemovido) return res.status(404).json({ mensagem: 'Carro não encontrado' });
            res.status(24).end();  // 204 = sucesso sem conteúdo para retornar"
          } catch (err) {
            res.status(500).json({ mensagem: 'Erro ao excluir carro', erro: err.message });
          }
        };
