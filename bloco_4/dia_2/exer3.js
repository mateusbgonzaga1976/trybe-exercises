let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0, count = 0;

for(let index = 0; index < numbers.length; index += 1){
    sum += numbers[index];
    count += 1;
}
console.log('Sum = ', sum);

let avg = sum / count;

console.log('Average = ', avg.toFixed(2));