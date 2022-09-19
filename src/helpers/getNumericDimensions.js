

export const getNumericDimensions = ( rows, columns ) => {
    let rowNumber = parseInt( rows );
    let columnNumber = parseInt( columns );
    let message = ''
    if( rowNumber < 0 || columnNumber < 0){
        message = 'No se pueden crear matrices con negativos';
    }
    let amountCells = rowNumber * columnNumber;
    return{
        rowNumber,
        columnNumber,
        amountCells,
        message
    }
}