const removeFromArray = function (array, ...valuesToRemove) {
    return array.filter(item => {
        return !valuesToRemove.includes(item);
    });
};

// Do not edit below this line
module.exports = removeFromArray;
