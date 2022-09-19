import { getNumericDimensions } from "../../helpers/getNumericDimensions";
import { useForm } from "../../hooks/useForm";

export const Form = ( { getParameters } ) => {

    const { rows, columns, onInputChange} = useForm({
        rows:'',
        columns:''
    });
  
    const { rowNumber, columnNumber, amountCells, message } = getNumericDimensions( rows, columns );

    const sendData = (e) =>{
        e.preventDefault();
        ( message !== '')
          ?alert(message)
          :getParameters( rowNumber, columnNumber, amountCells);
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
