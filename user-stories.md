User Story
    As a user, I can ...

Acceptance Criteria
    Givem I am a user ...
    I should be able to ...
    The I should be able to ...





# Igual o QQEC
- [ ] pega título, quantidade e preço e retorna o preço por litro (ou quilo)
    - [X] Resultado deve ser 
    ```
    nome do produto: $ 0.00
    ```
    - [X] Pega esse resultado e mostra em uma lista
    - [X] Retorna o preço por litro ou quilo
## Título aceita qualquer valor
- [X] é required
- [X] tem que ter um caractere no mínimo
- [X] qualquer caractere é aceito
## Campos "Quantidade"
- [X] aceita apenas números inteiros
- [X] se inserir qualquer outra coisa, avisa que não pode quando apertar o botão
## "Preço"
- aceita floats   
- campo começa com 0.00
    - cada número novo é inserido pela direita
- esses inputs só aceitam números (floats)
- ponto é adicionado automaticamente
## Retorna o preço real por quilo com 2 decimais
## Apaga os valores inseridos nos input fields
- a nao ser que algum campo não foi preenchido
    - mostra o aviso [field] is required e não apaga os campos que já foram preenchidos          


# UI stuff
## Campos "Quantidade"
- [ ] apaga pontos e virgulas (nice to have)
- [ ] avisa que não pode ter pontos e vírgulas (nice to have)


# Extra features
- calcular preço por pound
    -  ter a opção de usar métrico ou retard
    - exibir ambos os resultados
- lembrar os resultados anteriores  
    - mostrar em algum lugar, separado por data
- fazer todos os campos serem required


---


