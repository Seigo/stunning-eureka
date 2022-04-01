Feature: Qto custa?
  Everybody wants to know qto custa?

  Scenario Outline: Result should be a simple multiplication
    Given qtd is "<qtd>"
    Given price is "<price>"
    When I ask Qto Custa?
    Then I really should be told <answer>

  Examples:
    | qtd | price | answer |
    | 1   | 1     | 1      |
    | 2   | 1     | 2      |
    | 2.2   | 2.2     | 4.840000000000007      |
