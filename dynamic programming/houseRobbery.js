function robbery(houses) {

    let tmpObj = {};
    function helper(i) {
        if (i === 0) return houses[0];
        if (i === 1) return Math.max(houses[0], houses[1]);

        if (tmpObj[i]) return tmpObj[i];
        tmpObj[i] = Math.max(helper(i - 1), helper(i - 2) + houses[i]);
        return tmpObj[i];
    }

    return helper(houses.length - 1);
}


console.log(robbery([1,2,3,1,4]))
console.log(robbery([1,2,3,1,4,10]))