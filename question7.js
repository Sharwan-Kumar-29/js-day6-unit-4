let arr=[...Array(10).keys()].map((i)=>i+1);

function filterArray(arr,callback) {
    let newArray=arr.filter((x)=>callback(x))
    return newArray;
}
const isEven=(x)=>x%2==0;

console.log("Original Array: ",arr);
console.log("Filtered Array: ",filterArray(arr,isEven));