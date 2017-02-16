/**
 * Quick sort function,
 * needs highest value to last array index,
 * so Infinity is pushed before sorting and popped after 
 */
function quickSort(array, startIndex, endIndex) {
    
    var sort = function(arr, start, end){
        
        if (start < end) {
        
            var i = start + 1;
            var j = end + 1;
            var destructor = arr[start];
            
            while (i < j) {
                
                while (arr[i] < destructor) {
                    i++;
                }    
                    
                while (arr[j] > destructor) {
                    j--;
                }
                
                if (i < j) {
                    var curr = arr[i];
                    arr[i] = arr[j];
                    arr[j] = curr;
                    
                    console.log("i: " + i);
                    console.log("j: " + j);
                }
                
            }
    
            var tappi = j;
            arr[start] = arr[tappi];
            arr[tappi] = destructor;
            
            arr = sort(arr, start, tappi - 1);
            arr = sort(arr, tappi + 1, end);
            
            return arr;

         } else return arr;
    
    }
    
    array.push(Infinity);
    var sorted = sort(array, startIndex, endIndex);
    sorted.pop();
    
    return sorted;
    
}

var a = [25, 50, 40, 20, 10, 15, 30, 35];
var b = [25, 50, 40, 20, 1, 867835,25, 50, 467567886, 15, 30, 35, 456456, 234, 7655767657667576576, 243324, 1, 2];

console.log(quickSort(a, 0, a.length-1));