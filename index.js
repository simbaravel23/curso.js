let num = [5,8,2,9,3]
num.push(1)
num.short()
console.log(num)
console.log(`o vetor tem ${num.length} posições` )
console.log(`o primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(4)

if (pos == -1){
    console.log(`o valor não foi encontrado`)
}else {
    console.log (`o valor está na posição ${pos}`)
}