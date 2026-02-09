/*
    414. Third Maximum Number

    Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.
*/


const thirdMax = function(nums) {
    let uniqueNums = Array.from(new Set(nums));
    uniqueNums = uniqueNums.sort((a,b) => b - a);
    if(uniqueNums.length >= 3) {
        return uniqueNums[2];
    }
    return uniqueNums[0];
};

