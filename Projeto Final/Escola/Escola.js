const readline = require('readline-sync')

class Escola {
  id;
  cnpj;
  nome;
  endereco;
  telefone;
  email;
  
  constructor(id, cnpj, nome, endereco, telefone, email) {
    this.id = id;
    this.cnpj = cnpj;
    this.nome = nome;
    this.endereco = endereco;
    this.telefone = telefone,
    this.email = email;
    }

  // métodos  
    registrarEscola(idEscola, idSerie, nomeEscola) {
      if (escola instanceof Escola) {
        this.idEscola = idEscola;
        this.idSerie = idSerie;
        this.nome = nomeEscola;
      return "Escola cadastrada."
      } else {
        throw new Error("Erro no cadastro, dados inválidos.");
    }    
  }

  // vincularSerieEscolar(serie){
    // percorre a lista de series escolares
    // this.serieVinculada = receber idSerie
  // }  
  
}
  
module.exports = Escola;