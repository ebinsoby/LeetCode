/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let i=0, j=nums.length -1;
    let temp;
    for (let k=0; k<nums.length && k<=j; k++){
        if(nums[k]===0){
            temp = nums[k];
            nums[k] = nums[i];
            nums[i] = temp
            i++
        }
        else if(nums[k] === 2){
            temp = nums[k];
            nums[k] = nums[j];
            nums[j] = temp
            k--
            j--
        }
    }
    return nums
};