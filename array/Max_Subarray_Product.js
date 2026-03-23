/* Given an array arr[] that contains positive and negative integers (may contain 0 as well). Find the maximum product that we can get in a subarray of arr[].

Note: It is guaranteed that the answer fits in a 32-bit integer.

Examples

Input: arr[] = [-2, 6, -3, -10, 0, 2]
Output: 180
Explanation: The subarray with maximum product is [6, -3, -10] with product = 6 * (-3) * (-10) = 180.

Input: arr[] = [-1, -3, -10, 0, 6]
Output: 30
Explanation: The subarray with maximum product is [-3, -10] with product = (-3) * (-10) = 30.

Input: arr[] = [2, 3, 4] 
Output: 24 
Explanation: For an array with all positive elements, the result is product of all elements. */



class Solution {
    maxProduct(arr) {
        // code here
        let n = arr.length;
        let result = arr[0];
        let left_right  = 1;
        let right_left = 1;
        
        for(let i = 0; i < n; i++){
            if(left_right == 0){
                left_right = 1;
            }
            if(right_left == 0){
                right_left = 1;
            }
            
            left_right  *= arr[i];
            right_left *= arr[n - i - 1];
            result = Math.max(left_right, right_left, result);
        }
        
        return result;
    }
}