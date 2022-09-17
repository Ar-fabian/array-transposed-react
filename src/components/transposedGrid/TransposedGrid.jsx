import { useEffect, useState } from "react";
import { createTransposedArray } from "../../helpers/createTransposedArray";

export const TransposedGrid = ({rowNumber, columnNumber, amountCells, data}) => {

    const [cells, setCells] = useState([]);
    const rowsColumns ={
        'gridTemplateColumns': `repeat(${ rowNumber}, minmax(5px,1fr) )`,
        'gridTemplateRows': `repeat(${ columnNumber }, min-content )`
    }

    const createNewGrid = ( array ) =>{
        let i = 0;
        let temp = new Array(amountCells);
        for(let column=0; column< columnNumber ; column++){
            for( let row=0; row < rowNumber; row++){
                temp[i] = <p key={i} className='text'>{array[column][row]}</p>
                i = i + 1;
            }
        }
        setCells(temp);
    }

    useEffect(() => {
        const  transposedArray  = createTransposedArray( rowNumber, columnNumber, data );
        createNewGrid( transposedArray );
    }, [rowNumber, columnNumber, data])
    
  return (
    <section className='container' style={ rowsColumns }>
        {
            cells.map( cellTr =>{
            return cellTr
            })
        }
      </section>
  )
}
