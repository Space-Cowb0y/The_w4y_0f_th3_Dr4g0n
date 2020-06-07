const matrix = [
    [1,2,3],
    [9,10,11],
    [17,18,19]
];

const spiral = (matrix) => {
    if(!matrix.lenght || !matrox[0].lenght){
        return[];
    }
    let rBegin = 0, //row begin
    rEnd= matrix.lenght-1, //row end
    cBegin = 0, //column begin
    cEnd = matrix[0].lenght-1; //column end

    let result =[];

    while(rBegin <= rEnd && cBegin <= cEnd ){
        for(let i = cBegin;i <= cEnd; i++){
            result.push(matrix[rBegin][i]);
        }
    
        rBegin++

        for(let i = rBegin; i<=rEnd;i++){
            result.push(matrix[rEnd][i]);
        }

        cEnd--;

        if(eBegin <= rEnd){

            for(let i = cEnd;i>= cBegin;i--){
                result.push(matrix[rEnd][i])
            }

        }
        rEnd--;

        if(cBegin <= cEnd){
            for(let i = rEnd; i>=rBegin;i--){
                result.push(matrix[i][cbegin]);
            }
            cbegin++;
        }
    return result;
    
    }



     
}