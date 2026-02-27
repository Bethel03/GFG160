/* Given an array arr[] consisting of n integers, the task is to find all the array elements which occurs more than floor(n/3) times.

Note: The returned array of majority elements should be sorted.

Examples:

Input: arr[] = [2, 2, 3, 1, 3, 2, 1, 1]
Output: [1, 2]
Explanation: The frequency of 1 and 2 is 3, which is more than floor n/3 (8/3 = 2).

Input:  arr[] = [-5, 3, -5]
Output: [-5]
Explanation: The frequency of -5 is 2, which is more than floor n/3 (3/3 = 1).

Input:  arr[] = [3, 2, 2, 4, 1, 4]
Output: []
Explanation: There is no majority element. */



class Solution {
    findMajority(arr) {
        // code here
        let element1 = null;
        let element2 = null;
        let count1 = 0;
        let count2 = 0;
        let n = arr.length;
        
        for(let i = 0; i < n; i++){
            if(element1 == arr[i]){
                count1 ++;
            } else if(element2 == arr[i]){
                count2 ++;
                
            } else if(count1 == 0 && arr[i] !== element2){
                element1 = arr[i];
                count1 = 1;
            } else if(count2 == 0 && arr[i] !== element1){
                element2 = arr[i];
                count2 = 1;
            } else{
                count1 --;
                count2 --;
            }
        }
        
        let result = [];
        count1 = 0;
        count2 = 0;
        
        for(let i = 0; i < n; i++){
            if(arr[i] == element1){
                count1++;
            }
            
            if(arr[i] == element2){
                count2 ++;
            }
        }
        
        let floor = n/3;
        
        if(count1 > floor){
            result.push(element1);
        }
        
        if(count2 > floor && element2 !== element1){
            result.push(element2);
        }
        
        result.sort((a, b) => a - b);
        return result;
    }
}