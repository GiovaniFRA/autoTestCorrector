
let botao = document.getElementById("montar");

function reponseGrade(tamnho){
    let gradeIni = '<div class="responseGrade">';
    let gradeEnd = '</div>';
    let gradeMidle = '';
    
    for(let i=0;i<tamnho;i++){
        gradeMidle += `<div class="option">${String.fromCharCode(97+i)}<span class="circle"></span></div>`
    }
    return gradeIni+gradeMidle+gradeEnd;
}

function montarGrade(numOpcoes,tamnho){
  let responseGrade = document.getElementsByClassName("responseGrade"); 
  let grade = reponseGrade(numOpcoes)       
    for(let i=0;i<=tamnho;i++){
        let li = document.createElement('li');
        li.innerHTML = grade;
        responseGrade[0].appendChild(li);
    }
}

botao.addEventListener('click',montarGrade(4,5));

