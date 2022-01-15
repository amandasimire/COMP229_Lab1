function sum(a,b,...args){// rest operator 
    let numSum = 0; 
    for(const arg of args){ 
        numSum+=arg; 
    } 
    return [X,numSum]; }