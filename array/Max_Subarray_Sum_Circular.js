/* You are given a circular array arr[] of integers, find the maximum possible sum of a non-empty subarray. In a circular array, the subarray can start at the end and wrap around to the beginning. Return the maximum non-empty subarray sum, considering both non-wrapping and wrapping cases.

Examples:

Input: arr[] = [8, -8, 9, -9, 10, -11, 12]
Output: 22
Explanation: Starting from the last element of the array, i.e, 12, and moving in a circular fashion, we have max subarray as 12, 8, -8, 9, -9, 10, which gives maximum sum as 22.

Input: arr[] = [10, -3, -4, 7, 6, 5, -4, -1]
Output: 23
Explanation: Maximum sum of the circular subarray is 23. The subarray is [7, 6, 5, -4, -1, 10].

Input: arr[] = [5, -2, 3, 4]
Output: 12
Explanation: The circular subarray [3, 4, 5] gives the maximum sum of 12. */





class Solution {
    maxCircularSum(arr) {
        // code here
        let total_sum = 0;
        let current_max = 0;
        let current_min = 0;
        let max_sum = arr[0];
        let min_sum = arr[0];
        
        for(let i = 0; i < arr.length; i++){
            current_max = Math.max(current_max + arr[i], arr[i]);
            max_sum = Math.max(max_sum, current_max);
            
            current_min = Math.min(current_min + arr[i], arr[i]);
            min_sum = Math.min(min_sum, current_min);
            
            total_sum += arr[i];
        }
        
        let normal_sum = max_sum;
        let circular_sum = total_sum - min_sum;
        
        if(min_sum == total_sum){
            return normal_sum;
        }else{
            return Math.max(normal_sum, circular_sum);
        }
    }
}