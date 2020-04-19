/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/**
 * 升维思想，空间换时间
 * 1.遍历数组，将所有的值两两组合
 * 2.在新的数组中寻找是否匹配
 */
// var twoSum = function(nums, target) {
// 	let obj = {}
// 	for(let i = 0;i < nums.length-1 ;i++){
// 		for(let j = i+1;j < nums.length ;j++){
//             obj[nums[i]+nums[j]] = [i,j]
// 		}
// 	}
//     return obj[target]
// };
/**
 * 使用单层遍历实现
 * 1.遍历数组，将差值和下标放入哈希表中
 * 2.再次遍历数组，当数组中的值与哈希表的key相同，则将当前下标值和value值进行合并，返回结果
 */
var twoSum = function(nums, target) {
	let obj = {}
	for(let i = 0;i < nums.length;i++){
		let diff = target - nums[i]
		obj[diff] = i
	}
	console.log(obj)
	for(let j = 0;j < nums.length;j++){
		let value = obj[nums[j]]
		console.log(value)
		if(value && value !== j){
			return [Math.min(value,j),Math.max(value,j)]
		}
	}
}
