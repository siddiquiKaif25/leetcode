class Solution {
    public int[] twoSum(int[] nums, int target) {
        
        for(int i = 0; i < nums.length-1; i++){
            for(int j = i+1; j < nums.length ; j++){
                if(nums[i]+ nums[j] == target){
                    int[] tar = new int[2];
                    tar[0]= i;
                    tar[1]= j;
                    return tar;
                }
            }
        }
        return new int[0];
    }
}