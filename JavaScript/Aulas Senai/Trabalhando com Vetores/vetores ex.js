var num = [20,2,18,17,16,5,8,13,12,0,10,9,14,7,6,15,4,3,19,1,11]
var aux

for(i = 0; i<num.length; i++)
     for (j = 0; j<num.length-1; j++){
          if (num[j] > num[j+1]){
               aux = num[j]
               num[j] = num[j+1]
               num[j+1] = aux
               console.log(num)
          }
     }

console.log(num)