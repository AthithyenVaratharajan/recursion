const nums = [4, 56, 5, 3, 34, 37, 89, 57, 98];
function sort(nums, sorted = []) {
    // your code here
    if(nums.length === 0) return sorted;
    return nums.sort()
  }

  console.log(sort(nums));
