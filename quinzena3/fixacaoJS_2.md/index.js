```function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
salarioFixo = 2000
    if(qtdeCarrosVendidos !== 0) {
        const valorTotal = valorTotalVendas / qtdeCarrosVendidos
        let comissaoDeVendas = qtdeCarrosVendidos * (100 + valorTotal * 0.05)
        let salarioDoMes = comissaoDeVendas + salarioFixo
        return salarioDoMes
    } else {
        return salarioFixo
    }
}```


```function calculaPrecoTotal(quantidade){
    if(quantidade>=12){
      return quantidade*1.00
    }else{
      return quantidade*1.30
    }
  }```