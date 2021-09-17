function verificar() {
    var data = new Date ()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'm-criança.png')
            }else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'm-jovem.png')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'm-adulto.png')
            }else{
                //idoso
                img.setAttribute('src', 'm-idoso.png')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'f-criança.png')
            }else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'f-jovem.png')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'f-adulta.png')
            }else{
                //idoso
                img.setAttribute('src', 'f-idoso.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Informações pertencentes à ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}