import { useEffect } from "react";

export const InputsGrid = ({amountCells, columnNumber, rowNumber, setCells, cells}) => {
    
    const rowsColumns ={
        'gridTemplateColumns': `repeat(${ columnNumber}, minmax(5px,1fr) )`,
        'gridTemplateRows': `repeat(${ rowNumber }, min-content )`
    }

    useEffect(() => {
        let temp = new Array(amountCells);
        for(let i=0; i < amountCells; i++){
          temp[i] = <input key={i} className='input' />
        }
        
        setCells(temp);
    }, [amountCells])
    

  return (
    <section className='container' style={ rowsColumns }>
    {
        cells.map( cell =>{
            return cell
        })
    }
    </section>
  )
}
