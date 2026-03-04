/* Given an array prices[] of non-negative integers, representing the prices of the stocks on different days. The task is to find the maximum profit possible by buying and selling the stocks on different days when at most one transaction is allowed. Here one transaction means 1 buy + 1 Sell. If it is not possible to make a profit then return 0.

Note: Stock must be bought before being sold.

Examples:

Input: prices[] = [7, 10, 1, 3, 6, 9, 2]
Output: 8
Explanation: You can buy the stock on day 2 at price = 1 and sell it on day 5 at price = 9. Hence, the profit is 8.

Input: prices[] = [7, 6, 4, 3, 1]
Output: 0 
Explanation: Here the prices are in decreasing order, hence if we buy any day then we cannot sell it at a greater price. Hence, the answer is 0.

Input: prices[] = [1, 3, 6, 9, 11]
Output: 10 
Explanation: Since the array is sorted in increasing order, we can make maximum profit by buying at price[0] and selling at price[n-1].*/



class Solution {
    maxProfit(prices) {
        // your code here
       let min = prices[0];
       let max_profit = 0;
       
       for(let i = 1; i < prices.length; i++){
           let cost = prices[i] - min;
           max_profit = Math.max(max_profit, cost);
           min = Math.min(min, prices[i]);
           
           if(max_profit < 0){
               max_profit = 0;
           }
       }
       
       return max_profit;
    }
}