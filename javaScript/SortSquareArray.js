const sqa = ((array) => {
    fparray = 0
    lparray = array.length-1
    let aux = [];
    for(let i =  array.length - 1; i >= 0 ; i--){
        if(Math.abs(array[fparray]) > array[lparray]){
            aux[i] = (array[fparray] * array[fparray])
            fparray++;
        }else{
            aux[i] = (array[lparray] * array[lparray])
            lparray--;
        }
    }
    return aux;
});


var a = [-6,-4,0,1,2,3,5];
console.log(sqa(a));
