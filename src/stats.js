exports.max = numbers => Math.max(...numbers);
exports.min = numbers => Math.min(...numbers);
exports.avg = numbers => {
    const sum = numbers.reduce((acc,current) => acc + current, 0);
    return sum / numbers.length;
}
exports.sort = numbers => numbers.sort((a,b)=> a-b);
exports.median = numbers => {
    const middle = Math.floor(numbers.length / 2);

    if(numbers.length % 2) {
        // 홀수
        return numbers[middle];
    }
    return (numbers[middle-1] + numbers[middle]) / 2;
}