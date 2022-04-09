Feature: Qto custa?
  Everybody wants to know qto custa?

  Scenario Outline: Result should be a simple multiplication
    Given product is "<product>"
    Given qtd is "<qtd>"
    Given price is "<price>"
    When I ask Qto Custa?
    Then I really should be told "<answer>" 

  Examples:
    | product | qtd        | price      | answer                        |
    | a       | 100        | 10         | a: $ 100.00                   |
    | b       | 200        | 10         | b: $ 50.00                    |
    | c       | 200        | 100.2      | c: $ 501.00                   |
    | d       | 10         | 0.2        | d: $ 20.00                    |
    | e       | 3.456767   | 6.223434   | Qtd has to be an integer      |
    |         | 2          | 1          | Product name is required      |
    | 🎉      | 10         | 0.2        |  🎉: $ 20.00                 |
    | f       | 10.2       | 0.2        | Qtd has to be an integer      |
    | g       | aaaa       | 0.2        | Qtd has to be an integer      |
