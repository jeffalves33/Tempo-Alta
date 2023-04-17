const estadoSelect = document.getElementById('estado');

fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    .then(response => response.json())
    .then(estados => {
        estados.sort((a, b) => a.nome.localeCompare(b.nome));
        estados.forEach(estado => {
            const option = document.createElement('option');
            option.value = estado.sigla;
            option.textContent = estado.sigla.concat(" - ", estado.nome);
            estadoSelect.appendChild(option);
        });
    });
