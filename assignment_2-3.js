function bubbleSort(arr, n){
    
    var last_i = n - 1;
    
    for (var i=0;i<last_i;i++) {
        
        comparisons++;

        if (arr[i] > arr[i+1]) {
            var curr = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = curr;
        }
        
    }
    
    if (n > 2) return bubbleSort(arr, n - 1);
    else {
        console.log("comparisons: " + comparisons); 
        return arr;
    }
    
}

var comparisons = 0;
var arrayA = [9, 3, 11, 2];
var arrayB = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("a) array length: " + arrayA.length);
console.log(bubbleSort(arrayA, arrayA.length));
console.log("-----------------");

//  O(N) = N + (N-1) + ... + 2 + 1 = N * (N-1) / 2 
comparisons = 0;
console.log("b) array length: " + arrayB.length);
console.log(bubbleSort(arrayB, arrayB.length));