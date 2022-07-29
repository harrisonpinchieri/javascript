var alunos = ['alex','maria','julia','harrison','monise','lea','isis','pedro','francisca','joaquim'];

var sala1 = alunos.slice(0,alunos.length/2);
var sala2 = alunos.slice(alunos.length/2);

console.log(`alunos da sala 1: ${sala1} Alunos da sala 2: ${sala2}`);

for (let i = 0; i < sala1.length; i++) {
    console.log(sala1[i] + ` ${i}`);

    
}