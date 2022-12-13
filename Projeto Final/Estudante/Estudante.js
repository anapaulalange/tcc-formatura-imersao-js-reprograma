// const Pessoa = require('./Pessoa');
class Estudante{
  idEstudante;
  nome;
  serie;
  escola;

  constructor(idEstudante, nome, serie, escola) {
    this.id = idEstudante;
    this.nome = nome;
    this.serie = serie;
    this.escola = escola;
  }
}

// class Estudante extends Pessoa {
//   #cpf;
  
    
//   constructor (id, cpf, nome, serie, escola) {
//     super(nome, cpf, email, id);
    
//     this.id = id;
//     this.#cpf = cpf;
//     this.nome = nome;
//     this.serie = serie;
//     this.escola = escola;
//   }
// }  

registrarEstudante(idEstudante, nomeEstudante) {
  if (estudante instanceof Estudante) {
    this.id = idEstudante;
    this.nome = nomeEstudante;
  return "Estudante cadastrado."
  } else {
    throw new Error("Erro no cadastro, dados inválidos.");
  }    
}