function sockMerchant(n,ar){
    const sockHash = {};
    let sockCount = 0;
    ar.forEach((socksColor) => {
        if(!sockHash[socksColor]){
            sockHash[socksColor] = 1;
            return;
        }
        sockCount++;
        delete sockHash[socksColor];
    });
    return sockCount;
}

let n = 10;
let ar = [1,2,1,1,2,3,2,2,3,1];
let result = sockMerchant(n,ar);
console.log(result);