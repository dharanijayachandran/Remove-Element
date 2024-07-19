var removeElement = function(nums, val) {
    let re =0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] != val){
            nums[re]=nums[i];
            re++;
        }
    }
    console.log(".."+nums)
    return re;
};
let nums = [2,1,2,2];
let val = 2;
let result = removeElement(nums,val);
console.log("result:"+result)