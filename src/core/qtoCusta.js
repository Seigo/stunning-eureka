function calculate(qtd, price) {
  let X = qtd * price
  console.log('Resultado de ' + X)
  return X
}

module.exports = {
  calculate
}