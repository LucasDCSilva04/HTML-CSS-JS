let n1 = [3,4,1,5,9]
let n2 = [0,0,0,0,0]

for (let i=0; i<n1.length; i++){
     n2[(n1.length-1)-i] = n1[i]
}

console.log(n1)
console.log(n2)