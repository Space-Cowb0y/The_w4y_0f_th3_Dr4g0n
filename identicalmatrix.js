//funcao recebe duas matrizes
//retorna 1 se elas forem iguais e 0 se forem diferentes

function checkMatrix(a,b){

    var ar = a.length,
        ac =a[0].length,
        br = b.length,
        bc = b[0].length;
    
    if(ar != br && ac!=bc){
        return false
    }

    for(let i = 0; i< ar;i++){
        for(let j=0;j<bc;j++){
            if(a[i][j]!=b[i][j]){
                console.log(false);
                return 0;

            }
        }
    }
    console.log(true);
    return 1;

} 
const a = [
    [1,2,3],
    [9,10,11],
    [17,18,19]
];

const b = [
    [1,2,3],
    [9,10,11],
    [17,18,19]
];

checkMatrix(a,b);