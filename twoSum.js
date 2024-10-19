const twoSum = (nums, target) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) return [map.get(complement), i];
    map.set(nums[i], i);
  }
};

// const result = twoSum([1, 7, 2, 15], 9);

// console.log("result", result);

const newMap = new Map();

newMap.set(3, 10);
console.log("newMap", newMap);
