function verificaTipo(arg) {
    
    if (typeof arg === 'boolean') {
        console.log("Boolean");
    } else if (typeof arg == 'number') {
        console.log("Number");
    } else if (typeof arg === 'string') {
        console.log("String");
    }
}

verificaTipo(25);
verificaTipo(false);
verificaTipo("Wesley");
verificaTipo(true);
verificaTipo("Rodrigues");