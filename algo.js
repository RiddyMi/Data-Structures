//problem2
function dot_product(v1, v2, ps) {
    ps = 0;
    for (let i = 0; i < v1.length; i++) {
        ps += v1[i] * v2[i];
    }
}
// check Orthogogonality
function checkOrthogonality() {
    const n = Number(prompt("Enter the number of pairs of vectors:"));
    
    for (let k = 1; k <= n; k++) {
        const v1 = prompt("Enter vector v1 (comma-separated values):").split(',').map(Number);
        const v2 = prompt("Enter vector v2 (comma-separated values):").split(',').map(Number);

        let ps = 0;
        dot_product(v1, v2, ps);
        
        if (ps === 0) {
            console.log("Vectors v1 and v2 are orthogonal");
        } else {
            console.log("Vectors v1 and v2 are NOT orthogonal");
        }
    }
}

checkOrthogonality();