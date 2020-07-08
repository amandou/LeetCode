function dec2bin(n){
    return (n >>> 0).toString(2);
}

var hammingDistance = function(x, y) {
    let n = dec2bin(x ^ y);
    let count = 0;
    for (let i=0;i<n.length;i++){
        if(n[i]==1)
            count++
    }
    return count
};