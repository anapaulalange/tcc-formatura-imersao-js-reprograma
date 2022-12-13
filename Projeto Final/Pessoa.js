class Pessoa {
    nome;
    #cpf;
    email;
    id;
  
    constructor(nome, cpf, email, id) {
      this.nome = nome;
      this.#cpf = cpf;
      this.email = email;
      this.id = id;
    }
  
    get cpf() {
      return this.#cpf;
    }
  
  }
  
  module.exports = Pessoa;