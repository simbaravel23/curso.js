let valores = [1, 4, 6 ,9, 3]
valores.sort(

)
console.log(valores)

/*for(let pos = 0; pos <valores.length; pos++){
 console.log(`a posição ${pos} tem o valor` )
}
   */
for (let pos in valores){
     console.log(`a posição ${pos} tem o valor ${valores[pos]}` )
}