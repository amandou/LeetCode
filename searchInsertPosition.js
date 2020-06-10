/*Given a sorted array and a target value, return the index if the target is found.
 If not, return the index where it would be if it were inserted in order.
You may assume no duplicates in the array. */
var searchInsert = function(nums, target) {

    let index = 0
    let diffA, diffN
    let tam = nums.length - 1
    let v = []
    
    if (nums[tam] < target)
        return tam+1
    if (nums[0] > target)
        return 0
    
    for(let i = 0;i<nums.length;i++)
    {
        if (nums[i]== target)
            return i
        diffA = target - nums[i]
        if(diffA < target && diffA > 0)
            v.push(nums[i])
    }
    return v.length

};