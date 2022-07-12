function ganhoPorHora(salario, horasTrabalhadasNoMes) {

  const salarioHora = (salario / horasTrabalhadasNoMes);

  //return Math.round(salarioHora);
  //return salarioHora.toFixed(2);
  return salarioHora.toLocaleString('pt-BR',{style:'currency', currency: 'BRL'});
}

console.log(ganhoPorHora(10000, 160));


var lista = [10,1, 5, 9, 8, 12, 15];


console.log(lista.sort((a,b) => a-b));