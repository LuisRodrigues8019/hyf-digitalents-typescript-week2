function sumOfMultiple(limit: number): number {
    // Your code goes here
    let countArr : number[] = []
    let sum : number = 0;
  
    for (let i : number = 0; i < limit; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
        countArr.push(i);
      }
    }
    
    return countArr.reduce((acc, curr) => acc + curr);
   
}
sumOfMultiple(1000);

module.exports = sumOfMultiple;

