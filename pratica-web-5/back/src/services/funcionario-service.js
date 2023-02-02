const funcinarioRepository = require("../repositories/funcionario-repository");
class FuncionarioService{
    
  add(funcionario){
    return funcinarioRepository.save(funcionario);
  }
  
  getAll(){
    return funcinarioRepository.findAll();
  }
    
  getByCargo(cargo){
    return funcinarioRepository.findByCargo(cargo);
  }

  getById(id){
    return funcinarioRepository.findById(id);
  }

  getByQtd(qtd){
    return funcinarioRepository.findByQtd(qtd);
  }
  
  update(id, funcionario){
    return funcinarioRepository.update(id, funcionario);
  }
    
  delete(id){
    return funcinarioRepository.delete(id);
  }
}
    
module.exports = FuncionarioService;