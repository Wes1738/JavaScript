let nome = prompt("Qual é o seu nome?");

switch (nome) {
    case "Wesley":
        console.log("Seu nome é Wesley!");        
        break;
    case "Ana":
        console.log("Seu nome é Ana!");
        break;
    default:
        console.log(`Seu nome é ${nome}`);
        break;
}