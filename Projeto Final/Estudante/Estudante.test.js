const Estudante = require('./Estudante.js');

describe("Teste da classe Estudante", () => {
  test("verificar se instancia do Estudante é feita corretamente", () => {
    const estudante = new Estudante();
    expect(estudante instanceof Estudante).toBe(true);
  });

  test("cadastrar Padrinho com dados válidos", () => {
    const padrinho = new Padrinho();
    const account = new Account();
    expect(padrinho.registrarEstudante("Ana", "1234567908", account, 4000)).toBe("Padrinho cadastrado");
  });

  test("cadastrar padrinho com dados inválidos", () => {
    const padrinho = new Padrinho();
    expect(() => padrinho.registroPadrinho("Ana", "1234567908", "não conta", 5000)).toThrow("Erro no cadastro, dados inválidos");
  });
});