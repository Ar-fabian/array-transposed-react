


export const createTransposedArray = ( rowNumber, columnNumber, data ) =>{
   
    let step=0;
    let transposedArray = new Array( columnNumber);

    for (let i = 0; i < columnNumber ; i++) {
        transposedArray[i] = new Array( rowNumber);
    }
    for(let row=0; row < rowNumber; row++ ){
        for(let column=0; column < columnNumber; column++){
            transposedArray[column][row] = data[step];
            step = step + 1;
        }
    }
    return transposedArray;
}