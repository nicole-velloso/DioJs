
let nomeHeroi = prompt("Digite o nome do herói:");
let experiencia = parseInt(prompt("Digite a quantidade de experiência (XP) do herói:"));


let nivel;


if (experiencia < 1000) {
    nivel = "Ferro";
} else if (experiencia <= 2000) {
    nivel = "Bronze";
} else if (experiencia <= 5000) {
    nivel = "Prata";
} else if (experiencia <= 7000) {
    nivel = "Ouro";
} else if (experiencia <= 8000) {
    nivel = "Platina";
} else if (experiencia <= 9000) {
    nivel = "Ascendente";
} else if (experiencia <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}


console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);
