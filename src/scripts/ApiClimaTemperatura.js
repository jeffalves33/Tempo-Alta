function managerInformations(){
    const cidade = document.getElementById('cidade').value;
    const estado = document.getElementById('estado').value;
    const pais   = 'BR';
    const chave  = '25ad43b5d2b3a95ddd19222c3b328357';
    const url    = `https://api.openweathermap.org/data/2.5/weather?q=${cidade},${estado},${pais}&appid=${chave}`;

    if(cidade != "sua cidade" && estado != "seu estado") {    
        const elementOutput = document.createElement('p');

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const temperatura     = (data.main.temp - 273.15).toFixed(1) + '°C';
                const sensacaoTermica = (data.main.feels_like - 273.15).toFixed(1) + '°C';
                const velocidadeVento = (data.wind.speed * 3.6).toFixed(1) + 'km/h';

                elementOutput.textContent = cidade.concat(
                    " - ", estado,
                    " temperatura: ", temperatura,
                    " sensação térmica: ", sensacaoTermica,
                    " velocidade do vento: ", velocidadeVento);
            })
            .catch(error => alert(error));
        
        document.getElementById('mainRow').appendChild(elementOutput);
    }
}