Feature: Qto custa? --> Web page

  # Scenario: test the title (e2e test)
  #   Given is selenium test
  #   Given I am on the QtoCusta home page
  #   Then the page title should be "QtoCusta?"

  Scenario: test the calculation (e2e test)
    Given is selenium test
    Given I am on the QtoCusta home page
    When I fill QTD with "100"
    When I fill PRICE with "200"
    When I fill PRODUCT with "banana"
    When I submit
    Then the first result in the list should be "banana: 2000.00"
