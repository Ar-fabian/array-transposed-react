import { useEffect } from "react";
import { useForm } from "../../hooks/useForm";

export const Form = ( { getParameters } ) => {
    let rowNumber;
    let columnNumber;
    let amountCells;

    const { rows, columns, onInputChange} = useForm({
        rows:'',
        columns:''
    });

    rowNumber = parseInt( rows );
    columnNumber = parseInt( columns );
    amountCells = rowNumber * columnNumber;

    const sendData = (e) =>{
        e.preventDefault();
        getParameters( rowNumber, columnNumber, amountCells);
    }
 
  return (
    <form className='form'>
      <div className='form__field'>
        <label htmlFor="">Filas</label>
        <input 
          type="text"
          name='rows'
          value={rows}
          onChange={ onInputChange }
          />
      </div>
      <div className='form__field'>
        <label htmlFor="">Columnas</label>
        <input 
          type="text"
          name='columns'
          value={ columns }
          onChange={ onInputChange }
          />
      </div>

      <button onClick={ sendData }>Crear</button>
    </form>
  )
}
