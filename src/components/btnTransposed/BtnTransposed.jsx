import { validateCells } from "../../helpers/validateCells";

export const BtnTransposed = ({ setData }) => {
    const showResult = () =>{
        const { okCell, fullCell } = validateCells();
      
        ( okCell )
            ? alert('Por favor complete toda la matriz')
            : setData( fullCell )
      }
      
  return (
    <button 
      className='btnTransponer'
      onClick={ showResult }
      > Transponer 
      </button>
  )
}
