const cidadeSelect = document.getElementById('cidade');

document.getElementById('estado').addEventListener('change', event => {
    const estadoId = event.target.value;

    if(estadoId) {
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoId}/municipios`)
            .then(response => response.json())
            .then(cidades => {
                cidades.sort((a, b) => a.nome.localeCompare(b.nome));
                cidades.forEach(cidade => {
                    const option = document.createElement('option');
                    option.value = cidade.id;
                    option.textContent = cidade.nome;
                    cidadeSelect.appendChild(option);
                });

            })
    }
});