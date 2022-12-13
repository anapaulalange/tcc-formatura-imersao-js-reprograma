// const database = require("./database.json");
const readline = require("readline-sync");

// class Padrinho{
//   estudanteVinculado;
//   idEstudante = returnIdEstudante();
//   livro = doarLivro();
//   nome;
//   email;
//   telefone;

//   constructor(nome, sobrenome, email, telefone){
//     this.nome = nome;
//     this.sobrenome = sobrenome;
//     this.email = email;
//     this.telefone = telefone;
//   }
// }

class Padrinho extends Pessoa {
  #cpf;
  estudanteVinculado;
    
  constructor (id, cpf, nome, email, telefone) {
    super(nome, cpf, email, id);
    
    this.id = id; //retornarId
    this.#cpf = cpf;
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
  }

registrarPadrinho(nome, email, telefone) {
    if (padrinho instanceof Padrinho) {
      this.nome = nome;
      this.email = email;
      this.telefone = telefone;
      return "Padrinho cadastrado."
    } else {
      throw new Error("Erro no cadastro, dados inválidos.");
    }

  function returnIdEstudante(){
    return idEstudante
  } 

  function vincularEstudante(estudante){
    // percorre a lista de estudantes
    // this.criancaVinculada = receber id do estudante
  }  

  function doarLivro() {
  const listAll = database.map((livro) => {
    return {
      id: livro.id,
      nome: livro.nome,
      classificacao: livro.classificacao,
    };
  });

}




