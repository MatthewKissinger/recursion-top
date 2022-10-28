
// 1) create a fibonacci sequence function using iteration

// ex: fibs(8) -> [0, 1, 1, 2, 3, 5, 8, 13]

function fibs(num) {
    let array = [];

    for (let i = 0; i <= num - 1; i++) {
        if (i === 0 ){
            array.push(0);
        } else if (i === 1) {
            array.push(1);
        } else {
            array.push(array[i - 1] + array[i - 2]);
        }
    }
    return array;
}

// console.log(fibs(8));

// 2) create a fibonacci sequence function using recursion

function fibsRecursive (n) {
    if (n < 2) {
        return n;
    } else {
        return fibsRecursive(n - 1) + fibsRecursive(n -2);
    };
};
// console.log(fibsRecursive(8));

// Merge Sort Function
// sorts an array from lowest to highest number given that the numbers are greater than zero

// Recursive Function

function mergeSort(array) {
    if (array.length <= 2) {
        // sort array[0] and array [1] with a comparison operator
        let a = array[0];
        let b = array[1];
        let c = [];

        if (a < b) {
            c[0] = a;
            c[1] = b;
        } else {
            c[0] = b;
            c[1] = a;
        }

        console.log(c);

        return c;
    } else {
        // splitting array in half
        let half = Math.ceil(array.length / 2);
        let firstHalf = array.slice(0, half);
        let secondHalf = array.slice(half);

        // sorting each array
        return mergeSort(firstHalf).concat(mergeSort(secondHalf));
    }
}

console.log(mergeSort([5, 1, 2, 3]));