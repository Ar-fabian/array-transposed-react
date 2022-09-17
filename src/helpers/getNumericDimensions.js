

export const getNumericDimensions = ( rows, columns ) => {
    let rowNumber = parseInt( rows );
    let columnNumber = parseInt( columns );
    let amountCells = rowNumber * columnNumber;

    return{
        rowNumber,
        columnNumber,
        amountCells
    }
}