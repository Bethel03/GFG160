/* You are given an array arr[] of non-negative integers. You have to move all the zeros in the array to the right end while maintaining the relative order of the non-zero elements. The operation must be performed in place, meaning you should not use extra space for another array.

Examples:

Input: arr[] = [1, 2, 0, 4, 3, 0, 5, 0]
Output: [1, 2, 4, 3, 5, 0, 0, 0]
Explanation: There are three 0s that are moved to the end.

Input: arr[] = [10, 20, 30]
Output: [10, 20, 30]
Explanation: No change in array as there are no 0s.

Input: arr[] = [0, 0]
Output: [0, 0]
Explanation: No change in array as there are all 0s. */


class Solution {
    pushZerosToEnd(arr) {
        // code here
        let none_zero = 0;
        let zero = 0;
        
        if(arr.length == 0 || arr.length == 1){
            return arr;
        }
        
        while(none_zero < arr.length){
            
            if(arr[none_zero] !== 0){
                let temp = arr[none_zero];
                
                arr[none_zero] = arr[zero];
                arr[zero] = temp;
                
                none_zero ++;
                zero ++;
            }else{
                none_zero ++;
            }
        }
        
        return arr;
    }
}