import { AbrigoAnimais } from "./abrigo-animais";

describe("Exemplos do enunciado", () => {
  test("Caso válido", () => {
    const r = new AbrigoAnimais().encontraPessoas(
      "RATO,BOLA",      // brinquedos pessoa 1
      "RATO,NOVELO",    // brinquedos pessoa 2
      "Rex,Fofo"        // ordem dos animais (entrada)
    );
    console.log("Saída caso válido:", r);
    // esperado no enunciado:
    // { lista: ['Fofo - abrigo', 'Rex - pessoa 1'] }
  });

  test("Caso inválido", () => {
    const r = new AbrigoAnimais().encontraPessoas(
      "CAIXA,RATO",
      "RATO,BOLA",
      "Lulu"
    );
    console.log("Saída caso inválido:", r);
    // esperado no enunciado:
    // { erro: 'Animal inválido' }
  });
});
