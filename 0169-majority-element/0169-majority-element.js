function majorityElement(nums) {
    let count = new Map();
    
    for (let num of nums) {
        count.set(num, (count.get(num) || 0) + 1);
        
        if (count.get(num) > Math.floor(nums.length / 2)) {
            return num;
        }
    }
}