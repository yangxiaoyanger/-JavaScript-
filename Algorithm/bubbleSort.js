/*
冒泡算法
将数组从小到大排列
*/

function bubbleSort (arr) {
    var len = arr.length;
    var temp;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

var arr = [4,5,2,9,1,5,3,10];
var arrTemp = bubbleSort(arr);
console.log(arrTemp);