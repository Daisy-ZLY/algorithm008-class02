var moveZeroes = function(nums) {
	let insertZero = 0;
	for(let i = 0;i < nums.length; i++){
		if(nums[i]!= 0){
			nums[insertZero++] = nums[i]
		}
	}
	while(insertZero<nums.length){
		nums[insertZero++] = 0
	}
	return nums
};
console.log(moveZeroes([0,1,0,3,12]))
console.log(moveZeroes([0,0,1]))
