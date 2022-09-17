


export const validateCells = () =>{
    let emptyCell = [];
    let fullCell = [];
    const $cells = document.querySelectorAll('.input');

    $cells.forEach( cell =>{
        ( cell.value === '')
            ? emptyCell.push(cell)
            : fullCell.push(cell.value); 
    });

    return {
        fullCell,
        okCell: emptyCell.length > 0 
    } ;
    
}