

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

// function fibsRecursive(num) {

//     if (num === 0) {
//         return [0];
//     } else if (num === 1) {
//         return [0, 1];
//     }

//     let array = fibsRecursive(num - 1);
//     return [...array, array[num - 1] + array[num - 2]];
// }

function fibsRecursive (n) {
    if (n === 1) {
        return [0];   
    }
    if (n === 2) {
        return [0, 1];
    }

    let array = fibsRecursive(n - 1);
    array.push(array[n - 2] + array[n - 3]);
    return array;
};
console.log(fibsRecursive(8));