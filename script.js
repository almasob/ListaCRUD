var nome = document.querySelector('#nm')  //input nome
var n1 = document.querySelector('#n1')  //input n1
var n2 = document.querySelector('#n2')  //input n2
var n3 = document.querySelector('#n3')  //input n3
var btAd = document.querySelector('#btn-add') //botao adicionar
var lista = document.getElementById('corpo-tabela') //section que envolve a table

nome.focus() //foco no input nome ao carregar página

btAd.addEventListener('click',()=>{
    //se algum campo estiver em branco da erro
    if(nome.value == 0 || n1.value.length == 0 || n2.value.length == 0 || n3.value.length == 0){
        alert('Preencha os campos corretamente!')
        }//se algum numero for maior que 10, da erro
        else if( n1.value > 10 || n2.value > 10 || n3.value > 10){
            alert('Notas de 1 á 10!')
        }else{
            //transformando os valores do input em Number
            var nn1 = Number(n1.value)
            var nn2 = Number(n2.value)
            var nn3 = Number(n3.value)
            //criando a linha que será inserida na tabela, com os valores recebidos
            var linha = document.createElement('tr')
            //adicionando o ID para pegar estilo CSS
            linha.id = 'dadosTb'

            var media = (nn1+nn2+nn3)/3
            var situação;

            //inserindo informações e classe de acordo com a média
            if(media > 5){
                situação = 'Aprovado'
                linha.className = 'ap'

            }else{
                situação = 'Reprovado'
                linha.className = 'rp'
            }

            //conteudo que iremos inserir na LINHA criada
            var conteudo = `
            <td>${nome.value}</td>
            <td>${nn1}</td>
            <td>${nn2}</td>
            <td>${nn3}</td>
            <td class='m'>${media.toFixed(2)}</td>
            <td class='m'>${situação}</td>
            <td><input id ='btn-e' type="button" value=""><input id='btn-r' type="button" value=""></td>
            `

            linha.innerHTML = conteudo;
            //adicionando a linha, já preenchida com o conteudo, á section LISTA
            lista.appendChild(linha)


            //limpando os inputs após adição
            nome.value = ''
            n1.value = ''
            n2.value = ''
            n3.value = ''
}

        //foco volta pro input nome
        nome.focus()


})

