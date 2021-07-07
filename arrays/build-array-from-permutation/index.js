var buildArray = function(nums) {
    const res = [];
    const len = nums.length;
    for (let i = 0; i < len; i++) res.push (nums[nums[i]]);
    return res;
};

// https://leetcode.com/problems/build-array-from-permutation/