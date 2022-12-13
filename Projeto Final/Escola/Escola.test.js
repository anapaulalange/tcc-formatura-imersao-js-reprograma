const Escola = require('./Escola.js');

describe("Teste da classe Ecola", () => {
  test("verificar se instancia da Escola é feita corretamente", () => {
    const escola = new Escola();
    expect(escola instanceof Escola).toBe(true);
  });

  test("cadastrar Escola com dados válidos", () => {
    const escola = new Escola();
    expect(escola.registrarEscola('1', '44314086000100', 'Prof. Murilo do Amaral', 'Rua José Meyer, 200', '4132568976', 'eepsgmurilodoamaral@hotmail.com')).toBe("Escola cadastrado");
  });

  test("cadastrar padrinho com dados inválidos", () => {
    const padrinho = new Padrinho();
    expect(() => padrinho.registroPadrinho(0, asda, asda, 5000)).toThrow("Erro no cadastro, dados inválidos");
  });
});