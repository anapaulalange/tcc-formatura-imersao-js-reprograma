const Padrinho = require('./Padrinho.js');

describe("Teste da classe Padrinho", () => {
  test("verificar se instancia do Padrinho é feita corretamente", () => {
    const padrinho = new Padrinho();
    expect(padrinho instanceof Padrinho).toBe(true);
  });

  test("cadastrar Padrinho com dados válidos", () => {
    const padrinho = new Padrinho();
    expect(padrinho.registrarPadrinho("Ana Paula", "anapaula.lange@gmail.com", "41997615297")).toBe("Padrinho cadastrado");
  });

  test("cadastrar padrinho com dados inválidos", () => {
    const padrinho = new Padrinho();
    expect(() => padrinho.registroPadrinho(12345, 12345678, "asda")).toThrow("Erro no cadastro, dados inválidos");
  });
});