/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let numbers = [];
    let left = 0;
    let right = nums.length - 1 ;
    let position = right;
     while (left <= right) {
        if (nums[left] ** 2 > nums[right] ** 2) {
            numbers[position--] = nums[left++] ** 2;
        } else {
            numbers[position--] = nums[right--] ** 2;
        }
    }
    return numbers;
};