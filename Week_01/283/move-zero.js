/**
 *
	给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

	示例:

	输入: [0,1,0,3,12]
	输出: [1,3,12,0,0]
	说明:

	必须在原数组上操作，不能拷贝额外的数组。
	尽量减少操作次数。
 */
/**
 * 遇0删除，尾部填充
 */
// var moveZeroes = function(nums) {
// 	for(var index = nums.length;index--;){
// 		if(nums[index]=== 0){
// 			nums.splice(index,1)
// 			nums.push(0)
// 		}
// 	}
// };
/**
 * 遇0位置交换,数组结构赋值
 * 1.定义快慢两个指针，快指针i表示数组遍历下标，慢指针j表示数组内第一个值为0的下标
 * 2.遍历数组，当值不为0，则交换i，j下标对应的值,j++
 */
function moveZeroes(nums){
	for(let i = 0,j = 0;i < nums.length;i++){
		if(nums[i] !== 0){
			[nums[j++],nums[i]] = [nums[i],nums[j]]
		}
	}
	return nums
}
console.log(moveZeroes([0,1,0,3,12]))
console.log(moveZeroes([0,0,1]))
