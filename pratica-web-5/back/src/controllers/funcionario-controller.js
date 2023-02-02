const Funcionario = require("../models/funcionario-model");
const FuncionarioService = require("../services/funcionario-service");

var funcionarioService = new FuncionarioService();

exports.get = async (req, res)=>{
    res.json(await funcionarioService.getAll());
};

exports.getByCargo = async (req,res) =>{
    res.json(await funcionarioService.getByCargo(req.query.cargo));
};

exports.getById = async (req,res) =>{
    res.json(await funcionarioService.getById(req.query.id));
};

exports.getByQtd = async (req,res) =>{
    res.json(await funcionarioService.getByQtd(req.query.qtd));
};

exports.post = async (req, res) =>{
    res.json(await funcionarioService.add(
        new Funcionario(
            req.body.nome,
            req.body.cargo,
            req.body.dt_nascimento,
            req.body.dt_entrada
        )));
};

exports.put = async (req,res) =>{
    res.json(await funcionarioService.update(req.params.id,
        new Funcionario( 
            req.body.nome,
            req.body.cargo,
            req.body.dt_nascimento,
            req.body.dt_entrada
            )));
};

exports.delete = (req,res) =>{
    res.json(funcionarioService.delete(req.params.id));
};