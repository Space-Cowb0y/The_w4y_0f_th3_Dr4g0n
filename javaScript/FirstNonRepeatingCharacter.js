//receber um vetor 
//criar um vetor aux
function fnrc(arr){
    var i, n = arr.length, charmap = {};
    for(let i=0;i<arr.length;i++){
        charmap[arr[i]]=(charmap[arr[i]] || 0) + 1;
    }
    for (i = 0; i<n ;i++){
        if(charmap[arr[i]]===1){
            console.log(arr[i]);
            return arr[i];
            
        }

    }
    console.log('_');
    return '_';
}

arr = 'aaabggghytttyy'
;
fnrc(arr);