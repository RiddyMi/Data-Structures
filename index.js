//problem 1
function findDistinctSum(set1, set2) {
    // Initialize sum
    let sum = 0;
  
    // Compare each element of set1 with set2 and add distinct elements to sum
    for (const element of set1) {
      if (!set2.includes(element)) {
        sum += element;
      }
    }
   //
    // Compare each element of set2 with set1 and add distinct elements to sum
    for (const element of set2) {
      if (!set1.includes(element)) {
        sum += element;
      }
    }
  
    return sum;
  }
  const set1 = [3, 1, 7, 9];
  const set2 = [2, 4, 1, 9, 3];
  const result = findDistinctSum(set1, set2);
  console.log(result); // Output: 13 (distinct elements 4, 7, 2)