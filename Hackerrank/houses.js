cellCompete = (cells, days) => {
    // Do the process once per day
    for (let i = 1; i <= days; i++) {
        // Store the temp values
        let dayResults = [];
        // Iterate the last status of the cells
        cells.forEach((_cellState, index) => {
            // Left value: if we are on the first cell, we assume a left value of 0,
            // otherwise we get the value of the previous cell
            let leftValue = (index == 0) ? 0 : cells[index - 1];
            // Right value: if we are on the last cell, we assume a right value of 0,
            // otherwise we get the value of the next cell
            let rightValue = (index == cells.length - 1) ? 0 : cells[index + 1];
            // We store on the temp array the new value, if both neighborns are equal (both 0 or both 1)
            // we store a 1 (inactive), if both neighborns are different each other, we store 1 (active)
            dayResults[index] = (leftValue == rightValue) ? 0 : 1;
        });
        // At the end of the day, we store the new values on the cells array
        // to start the new day process with the new values
        cells = dayResults
    }

    // Return the last value of the cells
    return cells;
}

cellCompete([1,0,0,0,0,1,0,0], 1); // [0,1,0,0,1,0,1,0]
cellCompete([1,1,1,0,1,1,1,1], 2); // [0,0,0,0,0,1,1,0]
