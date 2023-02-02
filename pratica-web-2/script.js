function onFormSubmit(){      
    inserir(ler());
}

function ler(){
    var dados = {};

    dados.titulo = document.getElementById('titulo').value
    dados.descricao = document.getElementById('descricao').value
    dados.quartos = document.getElementById('quartos').value
    dados.vagasGaragem = document.getElementById('vagas-garagem').value
    dados.areaTerreno = document.getElementById('area-terreno').value
    dados.areaConstruida = document.getElementById('area-construida').value
    dados.localidade = document.getElementById('localidade').value
    dados.preco = document.getElementById('preco').value
    dados.imagem = document.getElementById('imagem').value

    return dados;
}


function validaCampos(dados){
    if(dados.titulo === "" || dados.descricao === "" || dados.quartos === "" || dados.vagasGaragem === "" || dados.areaTerreno === "" ||
    dados.areaConstruida === "" || dados.localidade === ""|| dados.preco === "" || dados.imagem === "" ){
        return false
    }
    else return true
}

function inserir(dados){
    if(validaCampos(dados)){ 
        var lista = document.getElementById('lista')
        lista.classList.add('font-weight-normal')

        var campoTitulo = document.createElement('p')
        var campoDescri = document.createElement('p')
        var campoQuartos = document.createElement('p')
        var campoVagaGara = document.createElement('p')
        var campoAreaTerreno = document.createElement('p')
        var campoAreaconstru = document.createElement('p')
        var campoLocalidade = document.createElement('p')
        var campoPreco = document.createElement('p')
        var campoImagem = document.createElement('img')
        campoImagem.classList.add('w-25')
        var campoEspaco = document.createElement('hr')

        campoTitulo.innerHTML = "TÍTULO: " + dados.titulo
        campoDescri.innerHTML = "DESCRIÇÃO: " + dados.descricao
        campoQuartos.innerHTML = "QUARTOS: " + dados.quartos
        campoVagaGara.innerHTML = "VAGAS DE GARAGEM: " + dados.vagasGaragem
        campoAreaTerreno.innerHTML = "ÁREA DO TERRENO: " + dados.areaTerreno + " m²"
        campoAreaconstru.innerHTML = "ÁREA CONSTRUÍDA: " + dados.areaConstruida + " m²"
        campoLocalidade.innerHTML = "LOCALIDADE: " + dados.localidade
        campoPreco.innerHTML = "PREÇO: R$ " + dados.preco + "/mês"
        campoImagem.src = dados.imagem


        lista.appendChild(campoTitulo)
        lista.appendChild(campoDescri)
        lista.appendChild(campoQuartos)
        lista.appendChild(campoVagaGara)
        lista.appendChild(campoAreaTerreno)
        lista.appendChild(campoAreaconstru)
        lista.appendChild(campoLocalidade)
        lista.appendChild(campoPreco)
        lista.appendChild(campoImagem)
        lista.appendChild(campoImagem)
        lista.appendChild(campoEspaco)

    } 
    else alert("Preencha todos os campos")
}