function solution(nums) {
    var answer = nums.length / 2 > [...new Set(nums)].length ? [...new Set(nums)].length : nums.length / 2;
    return answer;
}