function somar() {
    let mensal1 = document.getElementById('mensal');
    let ali = document.getElementById('ali');
    let result = document.getElementById('res');
    let result2 = document.getElementById('somaresult');

    let mensal = parseFloat(mensal1.value); // Converte o valor para número

    if (isNaN(mensal)) { // Verifica se não é um número válido
        result.innerHTML = ("Por favor, digite um valor válido.");
        ali.innerHTML = "";
        return; // Sai da função se não for um número válido
    }

    let resultSoma1 = parseFloat(result2.value); // Converte o valor para número
    let resultSoma2 = Number(resultSoma1 / 12);
    let soma = Number(resultSoma2 * 12);

    let centoEOitenta = 180000;
    let trezentosESecenta = 360000;
    let setecentosEVinte = 720000;
    let umMilhaoEOitocentos = 1800000;
    let tresMilhoesESeiscentos = 3600000;
    let quatroMilhoesEOitocentos = 4800000;


    if (soma <= centoEOitenta) {
        let resultadoUm = (((soma * 0.04) - 0) / soma)
        ali.innerHTML = (`Esta é a aliquota efetiva ${resultadoUm.toLocaleString('pt-BR', { style: 'percent', currency: 'BRL' })}`);
        let valorAPagarUm = resultadoUm * mensal
        result.innerHTML = (`Seu imposto a pagar é:  ${valorAPagarUm.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
    } else if (soma > centoEOitenta && soma <= trezentosESecenta) {
        let resultadoDois = (((soma * 0.073) - 5490) / soma);
        ali.innerHTML = (`Esta é a aliquota efetiva ${resultadoDois.toLocaleString('pt-BR', { style: 'percent', currency: 'BRL' })}`);
        let valorAPagarDois = resultadoDois * mensal;
        result.innerHTML = (`Seu imposto a pagar é:  ${valorAPagarDois.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
    } else if (soma > trezentosESecenta && soma <= setecentosEVinte) {
        let resultadoTres = (((soma * 0.095) - 13860) / soma)
        ali.innerHTML = (`Esta é a aliquota efetiva ${resultadoTres.toLocaleString('pt-BR', { style: 'percent', currency: 'BRL' })}`);
        let valorAPagarTres = resultadoTres * mensal;
        result.innerHTML = (`Seu imposto a pagar é: ${valorAPagarTres.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
    } else if (soma > setecentosEVinte && soma <= umMilhaoEOitocentos) {
        let resultadoQuatro = (((soma * 0.107) - 22500) / soma);
        ali.innerHTML = (`Esta é a aliquota efetiva ${resultadoQuatro.toLocaleString('pt-BR', { style: 'percent', currency: 'BRL' })}`);
        let valorAPagarQuatro = resultadoQuatro * mensal;
        result.innerHTML = (`Seu imposto a pagar é: ${valorAPagarQuatro.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
    } else if (soma > umMilhaoEOitocentos && soma <= tresMilhoesESeiscentos) {
        let resultadoCinco = (((soma * 0.143) - 87300) / soma);
        ali.innerHTML = (`Esta é a aliquota efetiva ${resultadoCinco.toLocaleString('pt-BR', { style: 'percent', currency: 'BRL' })}`);
        let valorAPagarCinco = resultadoCinco * mensal;
        result.innerHTML = (`Seu imposto a pagar é: ${valorAPagarCinco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
    } else if (soma > tresMilhoesESeiscentos && soma <= quatroMilhoesEOitocentos) {
        let resultadoSeis = (((soma * 0.19) - 378800) / soma);
        ali.innerHTML = (`Esta é a aliquota efetiva: ${resultadoSeis.toLocaleString('pt-BR', { style: 'percent', currency: 'BRL' })}`);
        let valorAPagarSeis = resultadoSeis * mensal;
        result.innerHTML = (`Seu imposto a pagar é: ${valorAPagarSeis.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);      
    } else{

        result.innerHTML = ("ATENÇÃO: RTB12 acima de R$ 4.800.000,00. Causa de exclusão do Simples Nacional.");

        ali.innerHTML = "";
  

    }

}
 



