const matrix = [
    [1,2,3],
    [9,10,11],
    [17,18,19]
];

function spiral(matrix) {
    if(!matrix.length || !matrix[0].length){
        return[];
    }
    var rBegin = 0, //row begin
    rEnd= matrix.length-1, //row end
    cBegin = 0, //column begin
    cEnd = matrix[0].length-1; //column end

    var result =[];

    while(rBegin <= rEnd && cBegin <= cEnd ){
        for(let i = cBegin;i <= cEnd; i++){
            result.push(matrix[rBegin][i]);
        }
    
        rBegin++

        for(let i = rBegin; i<=rEnd;i++){
            result.push(matrix[i][cEnd]);
        }

        cEnd--;

        if(rBegin <= rEnd){

            for(let i = cEnd;i>= cBegin;i--){
                result.push(matrix[rEnd][i])
            }

        }
        rEnd--;

        if(cBegin <= cEnd){
            for(let i = rEnd; i>=rBegin;i--){
                result.push(matrix[i][cBegin]);
            }
            
        }

        cBegin++;
    
    
    }

    console.log(result);
    return result;

};

spiral(matrix);