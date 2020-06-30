let p = Promise.resolve(10+7);

console.log("Outros códigos...");

console.log(p);

p.then((value) => {console.log(`O Valor é ${value}`)})
  .then((value) =>{return value + 21});



