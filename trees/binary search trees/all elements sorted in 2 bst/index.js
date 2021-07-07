const getAllElements = (root1, root2) => mergeArrays(traverse(root1), traverse(root2));

const traverse = (root) => {
    if (!root) return [];
    const result = [];
    if (root.left !== null) result.push (...traverse (root.left));
    result.push(root.val);
    if (root.right !== null) result.push (...traverse (root.right));
    return result;
}

const mergeArrays = (arr1, arr2) => {
    const merged = [];
    while (arr1.length && arr2.length) merged.push(arr1[0] < arr2[0] ? arr1.shift() : arr2.shift());
    return [...merged, ...arr1, ...arr2];
}
