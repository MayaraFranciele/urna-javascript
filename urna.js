function urnaEletronica () {

    let Candidato_1 = 0, Candidato_2 = 0, Candidato_3 = 0, Branco = 0, Nulo = 0, Total = 0;
    let PorcentCand_1, PorcentCand_2, PorcentCand_3, PorcentNulo, PorcentBranco;  
    let Encerrar = 'N';
    let EncerrarVotos = false, VotosInvalidos = false;
    let Senha = 123456;
    
    var NomeCandidato_1 = prompt("Digite o nome do CANDIDATO(A) 1: ");
    var NomeCandidato_2 = prompt("Digite o nome do CANDIDATO(A) 2: ");
    var NomeCandidato_3 = prompt("Digite o nome do CANDIDATO(A) 3: ");
    
    console.clear()
    
    do {
        var VotoEscolhido = parseInt(prompt(" Digite 1 para votar no (a) "+NomeCandidato_1+ "\n Digite 2 para votar no (a) "+NomeCandidato_2+ "\n Digite 3 para votar no (a) "+NomeCandidato_3+ "\n Para votar em  BRANCO digite 5 \n Para votar em NULO digite 8 \n Para encerrar digite a SENHA \n Digite seu voto: "))
    
        if (VotoEscolhido !== null){
            VotoEscolhido = parseInt(VotoEscolhido)
        } else {
            break;
        }
    
        switch (VotoEscolhido) {
            case 1:
                Candidato_1++
                Total++
            break;
            case 2:
                Candidato_2++
                Total++
            break;
            case 3:
                Candidato_3++
                Total++
            break;
            case 5: 
                Branco++
                Total++
            break;
            case 8:
                Nulo++
                Total++
            break;
            case 123456:
                let Encerrar = prompt("Deseja realmente encerrar? Digite S/N?")
                if (Encerrar == 'S' || Encerrar == 's') {
                    EncerrarVotos = true
                }
            break;
            default: 
                VotosInvalidos == true
        }
        console.clear()
    
    } while (!EncerrarVotos)
    
        Total =  Candidato_1 + Candidato_2 + Candidato_3 + Branco + Nulo
    
        PorcentCand_1 = (Candidato_1 * 100.0) / Total
    
        PorcentCand_2 = (Candidato_2 * 100.0) / Total
    
        PorcentCand_3 = (Candidato_3 * 100.0) / Total

        PorcentBranco = (Branco * 100.0) / Total

        PorcentNulo = (Nulo * 100.0) / Total
    
    
        window.alert("Porcentagem do CANDIDATO(A) "+NomeCandidato_1+": "+PorcentCand_1.toFixed(2)+ "% \n")
        window.alert("Porcentagem do CANDIDATO(A) "+NomeCandidato_2+": "+PorcentCand_2.toFixed(2)+ "% \n")
        window.alert("Porcentagem do CANDIDATO(A) "+NomeCandidato_3+": "+PorcentCand_3.toFixed(2)+ "% \n")
        window.alert("Porcentagem de votos em BRANCO: "+PorcentBranco.toFixed(2)+ "% \n")
        window.alert("Porcentagem de votos NULOS: "+PorcentNulo.toFixed(2)+ "% \n")
    
        if (PorcentCand_1 > PorcentCand_2 && PorcentCand_1 > PorcentCand_3) {
            window.alert("RESULTADO: O vencedor foi o "+NomeCandidato_1+" com "+PorcentCand_1.toFixed(2)+ PorcentBranco.toFixed(2)+ "% de votos. \n")
        } else if (PorcentCand_2 > PorcentCand_1 && PorcentCand_2 > PorcentCand_3) {
            window.alert("RESULTADO: O vencedor foi o "+NomeCandidato_2+" com "+PorcentCand_2.toFixed(2) + PorcentBranco.toFixed(2)+ "% de votos. \n")
        } else if (PorcentCand_3 > PorcentCand_1 && PorcentCand_3 > PorcentCand_2) {
            window.alert("RESULTADO: O vencedor foi o "+NomeCandidato_3+" com "+PorcentCand_3.toFixed(2) + PorcentBranco.toFixed(2)+ "% de votos. \n")
        } else {
            window.alert("RESULTADO: Empate")
        }

}

function confirmaVoto(){
    let audio = new Audio('confirma-urna.mp3');
    audio.play();
}



