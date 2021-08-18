const calcular = document.getElementById('calcular');


function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(1);


        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso. Alimente-se melhor!';
        }else if (valorIMC < 25) {
            classificacao = 'com o peso ideal pra você. Maravilha!';
        }else if (valorIMC < 30){
            classificacao = 'acima do peso. Atenção!';
        }else if (valorIMC < 35){
            classificacao = 'com obesidade grau I. Se cuide!';
        }else if (valorIMC < 40){
            classificacao = 'com obesidade grau II. Se cuide!';
        }else {
            classificacao = 'com obesidade grau III. Cuidado!!!';
        }
        

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
        
    }else {
        resultado.textContent = 'Preencha os campos vazios!';
    }

}

calcular.addEventListener('click', imc);