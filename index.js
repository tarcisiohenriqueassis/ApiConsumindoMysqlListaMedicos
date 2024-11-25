import express from 'express';
import cors from 'cors';

import { retornaListaMedicos,retornaMedicoID,retornaEspecialidadeMedica,retornaTelefoneMedico } from './service/service.js';

const app = express();
app.use(cors());

app.get('/medicos', async (req,res)=>{

    let especialidade= req.query.especialidade;

    const retornaListaMedicos_bd = await retornaListaMedicos();
    res.json( await retornaListaMedicos_bd)
})

app.get('/medicos/:id', async (req,res)=>{

    let id = req.params.id;
    
    if(isNaN(id)){
        res.status(400).json({mensagem:'Digite apenas numeros'})
        return;
    }
    
    let resultadoBuscaID = await retornaMedicoID(parseInt(id));
    
    if( resultadoBuscaID.length > 0 ){
        res.json(resultadoBuscaID );
    }
    else{
        res.status(404).json({mensagem :'Médico não encontrado'})
    }
})

app.listen(8080,() =>{
    
    console.log('servidor iniciado na portaria 8080');
});