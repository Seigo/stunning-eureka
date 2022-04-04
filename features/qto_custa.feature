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
    | a       | 1          | 1          | a: $ 1.00                     |
    | b       | 2          | 1          | b: $ 2.00                     |
    | c       | 2.2        | 1          | c: $ 2.20                     |
    | d       | 1          | 0.2        | d: $ 0.20                     |
    | e       | 3.456767   | 6.223434   | e: $ 21.51                    |
    |         | 2          | 1          | Product name is required      |


