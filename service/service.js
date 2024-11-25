import pool from "../conexao/conexao.js";

async function executaQuery(conexao,query) {
    
    const resultado_bd = await conexao.query(query);
    const resultado = resultado_bd[0];

    return resultado;
}

async function retornaListaMedicos() {
    
    const conexao = await pool.getConnection();
    const query = 'SELECT id,nome,email,telefone,descricao,especialidade FROM medicos';

    const retorno_bd = await executaQuery(conexao,query);

    conexao.release();

    return retorno_bd;
}

async function retornaMedicoID(id) {
    
    const conexao = await pool.getConnection();
    const query = 'SELECT id,nome,email,descricao,especialidade FROM medicos WHERE id ='+id;

    const retorno_bd = await executaQuery(conexao,query);

    conexao.release();

    return retorno_bd;
}

async function retornaEspecialidadeMedica(especialidade) {
    
    const conexao = await pool.getConnection();
    const query = 'SELECT * FROM medicos WHERE especialidade ='+ ''+especialidade+'';

    const retorno_bd = await executaQuery(conexao,query);

    conexao.release();

    return retorno_bd;
}

async function retornaTelefoneMedico(telefone) {
    
    const conexao = await pool.getConnection();
    const query = 'SELECT id,nome, telefone, email, especialidade FROM medicos WHERE  telefone'+telefone;

    const retorno_bd = executaQuery(conexao,query);

    conexao.release();

    return retorno_bd;

}
export {retornaListaMedicos,retornaMedicoID,retornaEspecialidadeMedica, retornaTelefoneMedico};