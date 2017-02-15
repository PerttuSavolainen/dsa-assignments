function quickSort(arr, start, end) {
    
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
        
        arr = quickSort(arr, start, tappi - 1);
        arr = quickSort(arr, tappi + 1, end);
        
        return arr;
        
    } else return arr;
    
}

var array = [25, 50, 40, 20, 10, 15, 30, 35];

var start = 0,
    end = array.length-1;
    
array.push(Infinity);    
var sorted = quickSort(array, start, end);
sorted.pop();

console.log(sorted);