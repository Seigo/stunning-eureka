function calculate(product, qtd, price) {
  if (product !== "") {
    let result = (price * 1000) / qtd
    let X = product + ": $ " + result.toFixed(2)
    console.log('Resultado de ' + X)
    return X  
  }
  else {
    console.log('Product name is required')
    return "Product name is required"
  }
}

module.exports = {
  calculate
}