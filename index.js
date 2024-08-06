let num = [5,8,2,9,3]
num.push(0)//inlui numero
num.sort( )//coloca em ordem
console.log(num)
console.log(`o vetor tem ${num.length} posições` )//quantidade de array
console.log(`o primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(5)//qual posição do array

if (pos == -1){
    console.log(`o valor não foi encontrado`)
}else {
    console.log (`o valor está na posição ${pos}`)
}