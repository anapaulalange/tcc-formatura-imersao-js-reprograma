# Padrinho Literário :books:

## Objetivo:
O projeto Padrinho Literário é uma iniciativa de um clube de leitura localizado na cidade de Curitiba que  visa promover o incentivo à leitura de crianças - estudantes da rede pública - na faixa etária entre 08 a 14 anos. O hábito de ler é essencial para a formação intelectual, cognitiva e cultural da criança. Por isso, é extremamente importante incentivar a leitura no Ensino Fundamental para desenvolver, ainda na infância, capacidades primordiais para toda a vida acadêmica, profissional e social do ser humano. Alguns benefícios da leitura: estímulo à criatividade, vocabulário mais rico, ampliação das capacidades cognitivas, como compreensão de ideias e organização de linhas coerentes de pensamento, maior capacidade de concentração, habilidade de interpretação de texto, ensina sobre sentimentos e desenvolve capacidades socioemocionais, incentiva a busca pelo conhecimento entre outros.

Obs.: O projeto de código aqui feito trata-se de um MVP portanto a doação foi restrita a um livro com potencial de escala na próxima etapa de desenvolvimento, assim como outras melhorias aplicáveis. É um projeto que pode ser desenvolvido por outros grupos de padrinhos como por exemplo, empresas com responsabilidade social, entidades públicas, etc.

## Regras de negócio:

Há uma lista de padrinhos e cada padrinho irá "apadrinhar" uma criança de uma determinada escola pública da cidade de Curitiba - PR. O projeto inicial se baseia em uma lista de interessados extraída do clube de leitura responsável por esse projeto.

- "Apadrinhamento" = O padrinho fará uma doação (livro), melhoria para a próxima etapa = doação de livro + presente + brinquedo conforme a carta que a criança escreveu. A seleção do tema da doação é perante uma carta que a criança escreve ao seu padrinho contando sobre suas preferências e atividades.
No dia da doação é realizado um evento na escola com os estudantes envolvidos, esse evento é promovido pelos próprios padrinhos e é composto por brincadeiras lúdicas, apresentação de shows musicas, comidas e bebidas e claro a entrega dos presentes. Esse evento comemorativo pode abranger os familiares das crianças.

- Séries escolares atendidas pelo projeto = Do 4º ao 9º ano escolar (3ª à 8ª série).

- Rodízio no atendimento das séries escolares = Serão atendidas uma série escolar por vez ou conforme a capacidade do projeto.

## Composição técnica do projeto:

Padrinho :family:
- atributos 
  - `id`
  - `nome`
  - `email`
  - `telefone`
  - `presente`
 - metodos
   - registrar um padrinho
   - vincular uma criança

Escola :school_satchel:
- atributos 
  - `id`
  - `lista de alunos` 
  - `lista de séries`
 - metodos
      - registrar uma escola
      - vincular uma série escolar

Estudante :girl::boy:
- atributos 
  - `id`
  - `nome`
  - `série`
  - `escola`
 - metodos
      - registrar uma criança
      - vincular a uma série escolar e um padrinho


