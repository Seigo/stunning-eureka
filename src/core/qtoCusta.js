function calculate(product, qtd, price) {
if (product === "") {
  console.log('Product name is required')
  return "ERROR: Product name is required"
}

else if (qtd.includes(".", ",") || isNaN(qtd)) {
  console.log("Qtd has to be an integer")
  return "ERROR: Qtd has to be an integer"
}

else {
  let result = (price * 1000) / qtd
  let X = product + ": $ " + result.toFixed(2)
  console.log('Resultado de ' + X)
  return X  
}
}

module.exports = {
  calculate
}