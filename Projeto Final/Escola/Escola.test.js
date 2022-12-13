const Escola = require('./Escola.js');

describe("Teste da classe Ecola", () => {
  test("verificar se instancia da Escola é feita corretamente", () => {
    const escola = new Escola();
    expect(escola instanceof Escola).toBe(true);
  });

  test("cadastrar Padrinho com dados válidos", () => {
    const padrinho = new Padrinho();
    const account = new Account();
    expect(padrinho.registroPadrinho("Ana", "1234567908", account, 4000)).toBe("Padrinho cadastrado");
  });

  test("cadastrar padrinho com dados inválidos", () => {
    const padrinho = new Padrinho();
    expect(() => padrinho.registroPadrinho("Ana", "1234567908", "não conta", 5000)).toThrow("Erro no cadastro, dados inválidos");
  });
});