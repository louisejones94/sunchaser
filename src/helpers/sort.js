// Function to sort an array of objects by a given key
function sortByKey(array, key) {
    array.sort((a, b) => {
        let ak = a[key].toLowerCase(),
            bk = b[key].toLowerCase();
    
        if (ak < bk) {
            return -1;
        }
        if (ak > bk) {
            return 1;
        }
        return 0;
    });
}

// Function to sort an array of objects by a given numerical key
function sortByNumericalKey(array, key) {
    array.sort((a, b) => {
        let ak = Number(a.key),
            bk = Number(b.key);

        
    })
}

export {sortByKey, sortByNumericalKey}