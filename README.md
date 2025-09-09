# Abrigo de Animais — StartDB 2025

## Agradecimentos
Primeiramente agradeço à DB pela oportunidade de participar do processo seletivo e pelo desafio proposto. Foi uma experiência valiosa para exercitar raciocínio.

## Estrutura do projeto
.
├─ jest.config.js

├─ package.json

└─ src

   ├─ abrigo-animais.js              # implementação da solução
   ├─ abrigo-animais.test.js         # testes base do desafio
   └─ abrigo-animais.exemplo.test.js # testes dos exemplos do enunciado

## O que foi feito em cada arquivo .js

**src/abrigo-animais.js**

- Implementa a classe AbrigoAnimais com o método encontraPessoas (ponto único de entrada exigido no desafio).
- Parsing/normalização das três strings de entrada (split por vírgula, trim, toUpperCase para brinquedos).
- Validações:
   animais vazios/duplicados → { erro: 'Animal inválido' }
   brinquedo fora da lista → { erro: 'Animal inválido' } (compatível com o teste base)
   brinquedos vazios/duplicados → { erro: 'Brinquedo inválido' }
- Regras de adoção:
   Favoritos por tipo (solução simples): cachorro → ['BOLA']; gato → ['NOVELO','LASER'].
   Heurística de tipo para manter o desafio simples: nome com até 3 letras = cachorro, senão gato (ex.: Rex = cachorro; Fofo/Mimi/Bola = gato).
   O 1º favorito precisa estar exatamente no “turno” do animal (na mesma posição do índice). Os demais favoritos podem aparecer depois, com intercalação de outros brinquedos.
   Bloqueio de índices usados por gatos para que não “dividam brinquedos”.
   Empate (as duas pessoas atendem) → abrigo.
   Limite de 3 adoções por pessoa.
Retorna { lista: [...] } com os nomes em ordem alfabética e o destino de cada animal.

**src/abrigo-animais.test.js**
Testes base do desafio:
  rejeita “animal inválido” (compatível com brinquedo fora da lista)
  encontra pessoa para um animal
  valida o caso de intercalar brinquedos, respeitando o “turno”

**src/abrigo-animais.exemplo.test.js**
Testes didáticos reproduzindo os exemplos do enunciado (um caso válido e um inválido), com console.log para visualizar a saída no terminal.

