let form = document.querySelector('.formm');
let resulConsGasolina = document.querySelector('.resultConsumoGas');
let resulConsKm = document.querySelector('.resultGasolinaKm');

function calculoGasolina(event) {
    event.preventDefault();

    let distancia = form.querySelector('.distancia').value;
    let consumoVeiculo = form.querySelector('.consumo').value;
    let valorGasolina = form.querySelector('.valor').value;

    let consumoGasolina = (distancia / consumoVeiculo) * valorGasolina;
    let gasolinaEmKm = distancia / consumoVeiculo;
    resulConsGasolina.innerHTML = `Preço </br></br> ${consumoGasolina.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`;
    resulConsKm.innerHTML = `Litro </br> </br> ${gasolinaEmKm.toLocaleString('PT')}𝓁`;
    

}

form.addEventListener('submit', calculoGasolina); /* Adicionando o evento de escuta, qualquer movimento que o usuário fizer, esse metodo vai acompanhar.
                                                    Nesse caso, ele vai acompanhar o botão submit. 
                                                    Ou seja, quando o usuário clicar no botão, quero que execute a função 'calculoGasolina' 
                                                    */