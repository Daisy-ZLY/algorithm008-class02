/**
 * 图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
 */
//解题思路，使用两边向中间的方式进行查找，计算盛水面积最多的容器
// 双层遍历，时间复杂度为O(n^2)
// var maxArea = function(height) {
//     let area = 0;
//     for(let i = 0;i < height.length;i++){
//         for(let j = height.length;j--;){
//             area = Math.max(area,(j-i) * Math.min(height[i],height[j]))
//         }
//     }
//     return area;
// };
/**
 * 单层遍历
 * 1.设置两个变量，从左向右i，从右向左j； let i = 0,j = height.length-1
 * 2.计算两个柱子之间的面积 area = (j-i) * Math.min(height(i),height(j))
 * 3.若i下标对应的柱子高，则j向左移动(j--)，若j下标对应的柱子高，则i向右移动(i++)
 * 4.当不满足i<j条件时，则表明循环已结束
 */

var maxArea = function (height) {
	let area = 0;
	let i = 0, j = height.length - 1;
	while (i < j) {
		area = height[i] < height[j] ? (Math.max(area, (j - i) * height[i++])) : (Math.max(area, (j - i) * height[j--]))
	}
	return area
}
