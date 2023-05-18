let ano = Number(prompt("Digite o ano para saber se ele é bissexto, isto é, tem 366 dias:"));
if(ano%4==0 && (ano%100!==0) || (ano%400==0)){
    document.write(`O ano ${ano} é bissexto.`);
} else {
    document.write(`O ano ${ano}, não é bissexto.`);
}