document.querySelector('.out').innerHTML = meanArifmetic([1, 2, 3])

function meanArifmetic(arr){
    return arr.reduce((acc, cur) => Math.floor((acc + cur) / arr.length)) 
}

function imperativeMeanArifmetic(arr){
    let acc = 0
    for(let i = 0; i < arr.length; i++){
        acc = acc + arr[i] 
    }
     return Math.floor(acc / arr.length)
}

console.log(meanArifmetic([1, 2, 3]))
console.log(meanArifmetic([5, 3, 8]))
console.log(meanArifmetic([11, 21, 73]))
console.log(imperativeMeanArifmetic([51, 1232, 150]))