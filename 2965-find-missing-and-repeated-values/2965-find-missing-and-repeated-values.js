function findMissingAndRepeatedValues(grid) {
    let count = new Map();
    let n = 0;
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            count.set(grid[i][j], (count.get(grid[i][j]) || 0) + 1);
            n++;
        }
    }
    
    let duplicate = -1;
    let missing = -1;
    
    for (let num = 1; num <= n; num++) {
        if (count.get(num) === 2) {
            duplicate = num;
        } else if (!count.get(num)) {
            missing = num;
        }
    }
    
    return [duplicate, missing ];
}
