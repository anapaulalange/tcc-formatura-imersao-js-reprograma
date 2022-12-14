const Estudante = require('./Estudante.js');

describe("Teste da classe Estudante", () => {
  test("verificar se instancia do Estudante é feita corretamente", () => {
    const estudante = new Estudante();
    expect(estudante instanceof Estudante).toBe(true);
  });

  test("cadastrar estudante com dados válidos", () => {
    const estudante = new Estudante();
    expect(estudante.registrarEstudante("Ana", "1234567908", account, 4000)).toBe("Estudante cadastrado");
  });

  test("cadastrar estudante com dados inválidos", () => {
    const estudante = new Estudante();
    expect(() => estudante.registrarEstudante("Ana", "1234567908", "não conta", 5000)).toThrow("Erro no cadastro, dados inválidos");
  });
});