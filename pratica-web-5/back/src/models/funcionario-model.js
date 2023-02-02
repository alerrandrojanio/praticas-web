class Funcionario{
    constructor(nome, cargo, dt_nascimento, dt_entrada){
        this.nome = nome;
        this.cargo = cargo;
        this.dt_nascimento = dt_nascimento;
        this.dt_entrada = dt_entrada;
    }
}

module.exports = Funcionario;