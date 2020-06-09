function sockMerchant(n,ar){
    const sockHash = {}; //hashmap
    let sockCount = 0; //socks count
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
//test
let n = 10;
let ar = [1,2,1,1,2,3,2,2,3,1];
let result = sockMerchant(n,ar);
console.log(result);