const fibonacci = function(n) {
    let tmpObj = {};
    function helper(n) {
        if (n === 1) return 0;
        if (n === 2) return 1;

        if (tmpObj[n]) return tmpObj[n];

        let val = helper(n - 1) + helper(n - 2);
        tmpObj[n] = val;
        return val;
    }

    return helper(n);
}

console.log(fibonacci(5));