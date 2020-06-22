// ● Retorna um array a partir de outro array;
// ● O array retornado é determinado pelos parâmetros que são os
// índices de início e fim do novo array;

let nums = [0,1,2,3,4,6,5,2,9,8,7,10,12,54,23,32,24,27,17,38];

console.log(nums.slice(6));
console.log(nums.slice(6,7));
console.log(nums.slice(6,10));
console.log(nums.slice(-3)); //Pega ao inverso
console.log(nums.slice(3, -3)); //Esse vai a partir do elemento no indice 3 mas retira os tres ultimos elementos

