let valores = [1, 4, 3, 6, 4, 3, 7, 2]

// for(let i = 0; i < valores.length; i++) {
//     console.log(`A posição ${i} possui o valor ${valores[i]}`)
// }

for(let i in valores) {
    console.log(`A posição ${i} possui o valor ${valores[i]}`)
}