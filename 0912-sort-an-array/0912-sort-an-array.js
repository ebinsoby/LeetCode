/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
     mergeSort(nums,0, nums.length -1)
    return nums
};

function mergeSort(nums, start, end){
    if(start >= end){
        return nums;
    }
    let middle = Math.floor((start + end) / 2);
    mergeSort(nums, start, middle);
    mergeSort(nums, middle+1, end);
    
    return mergeArrays(nums,start,middle,end);
}

function mergeArrays(nums,start,middle,end){
    let leftArray = nums.slice(start, middle+1);
    let rightArray = nums.slice(middle+1, end+1);
    let main = start, left=0, right=0;
        while(left<leftArray.length && right<rightArray.length){
            if(leftArray[left]<=rightArray[right]){
                nums[main] = leftArray[left];
                left++
            }
            else{
                nums[main] = rightArray[right]
                right++
            }
            main++
        }
    while(left < leftArray.length){
        nums[main] = leftArray[left];
        left++;
        main++;
    }
    
    while(right < rightArray.length){
        nums[main] = rightArray[right];
        right++;
        main++;
    }
    
}