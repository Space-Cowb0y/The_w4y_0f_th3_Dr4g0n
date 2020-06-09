tokfunction gcd(a, b) 
    { 
        if (a === 0){ 
            return b;
        }
        return gcd(b % a, a); 
    } 
  
    // Function to find gcd of array of 
    // numbers 
    function findGCD(arr, n) 
    { 
        let result = arr[0]; 
        for (int i = 1; i < n; i++){ 
            result = gcd(arr[i], result); 
  
            if(result == 1) 
            { 
               return 1; 
            } 
        } 
  
        return result; 
    } 
