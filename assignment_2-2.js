/**
 * Lisäyslajittelu - O(n^2)
 * @param arr
 */
function insertionSort(arr) { 
    
    var n = arr.length;
    
    var comparisons = 0;
    
    for (var next_i = 1; next_i < n; next_i++) {
        
        var next = arr[next_i];
        var j = next_i-1;

        while (j >= 0 && (next < arr[j])) {
            arr[j+1] = arr[j];
            j--;
            comparisons++;
        }
        
        arr[j+1] = next;
        
    }
    
    console.log("Amount of comparisons: " + comparisons);
    return arr;
    
}

var array = [50, 70, 30, 2, 40, 24, 19, 60];
console.log(insertionSort(array));