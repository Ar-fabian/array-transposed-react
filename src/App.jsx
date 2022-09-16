import { useEffect, useRef, useState } from 'react';
import './App.css'
import { Form } from './components/form/Form';
import { InputsGrid } from './components/inputsGrid/InputsGrid';
import { useForm } from './hooks/useForm'

function App() {
  const [dimensions, setDimensions] = useState({
    rowNumber:0, 
    columnNumber:0,
    amountCells:0
  })
  const [numberCells, setNumberCells] = useState(0);
  const [cells, setCells] = useState([]);
  const [cellsTr, setCellsTr] = useState([]);
  const [showGrid, setShowGrid] = useState(false);
  const [show, setShow] = useState(false);
  // const { formState, rows, columns, onInputChange} = useForm({
  //   rows:'',
  //   columns:''
  // });
  
  const containerRef = useRef();
  const container2Ref = useRef();
  const transponerRef = useRef();




  const createNewGrid = ( array, rows, columns ) =>{
    let i = 0;
    let temp = new Array(numberCells);
    for(let column=0; column< columns ; column++){
        for( let row=0; row < rows; row++){
            temp[i] = <p key={i} className='text'>{array[column][row]}</p>
            i = i + 1;
        }
    }
    setCellsTr(temp);
    container2Ref.current.style.gridTemplateColumns = `repeat(${rows}, minmax(5px,1fr) )`;
    container2Ref.current.style.gridTemplateRows = `repeat(${columns}, min-content )`;
  }
  const getTransposedArray = ( data ) =>{
    let step=0;
    let transposedArray= new Array( columnNumber);
    for (let i = 0; i < columnNumber ; i++) {
        transposedArray[i] = new Array( rowNumber);
    }
    for(let row=0; row < rowNumber; row++ ){
      for(let column=0; column < columnNumber; column++){
          transposedArray[column][row] = data[step];
          step = step + 1;
      }
    }
    createNewGrid(transposedArray, rowNumber, columnNumber);
    
  }

  const validateCells = () =>{
    let emptyCell = [];
    let fullCell = [];
    const $cells = document.querySelectorAll('.input');

    $cells.forEach( cell =>{
        ( cell.value === '')
            ? emptyCell.push(cell)
            : fullCell.push(cell.value); 
    });

    (emptyCell.length > 0)
        ? alert('Por favor complete toda la matriz')
        : getTransposedArray( fullCell );
  }
  
  const createInputs = () =>{
    setShowGrid( true );
    let temp = new Array(numberCells);
    for(let i=0; i < numberCells; i++){
      temp[i] = <input key={i} className='input'></input>
    }
    const $cells = document.querySelectorAll('.input');

    $cells.forEach( cell =>{
        cell.value = '' 
    });
    setCells(temp);
    containerRef.current.style.gridTemplateColumns = `repeat(${columns}, minmax(5px,1fr) )`;
    containerRef.current.style.gridTemplateRows = `repeat(${rows}, min-content )`;
    transponerRef.current.style.display = 'block';
  }

  const validateInputs = ( amountCells ) => {
    ( amountCells > 0)
      ? setShow( true )
      : alert('No se puede crear una matriz con estos valores')
  }
  
  const getParameters = ( rowNumber, columnNumber, amountCells ) =>{
    setDimensions({rowNumber, columnNumber, amountCells});
    validateInputs( amountCells );
    // setShowGrid(false);
    // setCells([]);
    // setCellsTr([]);
    // validateInputs();
  }
  

  return (<>

    <Form getParameters={ getParameters }/>
    {
      show && <InputsGrid 
        amountCells={ dimensions.amountCells }
        rowNumber={ dimensions.rowNumber }
        columnNumber={ dimensions.columnNumber }

        />
    }
    {
      show && <button 
      className='btnTransponer'
      ref={ transponerRef }
      onClick={ validateCells }
      > Transponer 
      </button>
    }







    

      <section className='container' ref={ container2Ref } >
      {
        showGrid && cellsTr.map( cellTr =>{
          return cellTr
        })
      }
      </section>
  </>)
    
}

export default App
