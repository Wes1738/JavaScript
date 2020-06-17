let nome = "Wesley";

for (let i = 0; i < 8; i++) {
    
    if (i == 3) {
        nome = "José";
    }

    if (i == 6 && nome == "José") {
        console.log("O nome agora é José, pode brekar!");
        break;
    }

    console.log(i);
    
}