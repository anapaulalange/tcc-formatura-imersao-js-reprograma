const Pessoa = require('./Pessoa');

class Estudante extends Pessoa{
  #cpf
  id;
  nome;
  serie;
  escola;

  constructor(cpf, idEstudante, nome, serie, escola) {
    super(nome, cpf, email, id);
    this.#cpf = cpf;
    this.id = idEstudante;
    this.nome = nome;
    this.serie = serie;
    this.escola = escola;
  }
}

registrarEstudante(idEstudante, nomeEstudante) {
  if (estudante instanceof Estudante) {
    this.id = idEstudante;
    this.nome = nomeEstudante;
  return "Estudante cadastrado."
  } else {
    throw new Error("Erro no cadastro, dados inválidos.");
  }    
}