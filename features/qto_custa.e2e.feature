Feature: Qto custa? --> Web page

  Scenario: test title and calculation (e2e test)
    Given is selenium test
    Given QCEC is open
    Given selenium product is "banana"
    Given selenium qtd is "100"
    Given selenium price is "50"
    Then title should be "QtoCusta?"
    Then Result should be "banana: $ 500.00"
    