const climbStairs = function (n) {
    let tmpObj = {};
    function helper(n) {
        if (n === 1) return 1;
        if (n === 2) return 2;

        if (tmpObj[n]) return tmpObj[n];

        let val = helper(n - 1) + helper(n - 2);
        tmpObj[n] = val;
        return val;
    }

    return helper(n);
}

console.log(climbStairs(3));