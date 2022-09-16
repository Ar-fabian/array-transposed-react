import { useEffect, useState } from "react";
import { useForm } from "../../hooks/useForm";

export const InputsGrid = ({amountCells, columnNumber, rowNumber}) => {
    const [inputsNames, setInputsNames] = useState({})
    const [cells, setCells] = useState([]);

    const { formState, onInputChange } = useForm(inputsNames);
    useEffect(() => {
        const names = cells.map(({props}) =>{
            const { name } = props
            return name;
        });
        setInputsNames( names );
    }, [cells])


    const rowsColumns ={
        'gridTemplateColumns': `repeat(${ columnNumber}, minmax(5px,1fr) )`,
        'gridTemplateRows': `repeat(${ rowNumber }, min-content )`
    }

    useEffect(() => {
        let temp = new Array(amountCells);
        for(let i=0; i < amountCells; i++){
          temp[i] = <input 
                        key={i} 
                        className='input' 
                        name={'input' + i} 
                        // value={ 'input' + i}
                        onChange={ onInputChange }    
                        />
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
