import { useEffect, useState } from 'react';
import './App.css'
import { BtnTransposed } from './components/btnTransposed/BtnTransposed';
import { Form } from './components/form/Form';
import { InputsGrid } from './components/inputsGrid/InputsGrid';
import { TransposedGrid } from './components/transposedGrid/TransposedGrid';
import { resetValues } from './helpers/resetValues';

function App() {
  const [dimensions, setDimensions] = useState({
    rowNumber:0, 
    columnNumber:0,
    amountCells:0
  });
  const [cells, setCells] = useState([]);
  const [data, setData] = useState([]);
  const [showTransposed, setShowTransposed] = useState(false);
  const [show, setShow] = useState(false);
  
  useEffect(() => {
    setShowTransposed( true );
  }, [data]);

  const validateInputs = ( amountCells ) => {
    ( amountCells > 0)
      ? setShow( true )
      : alert('No se puede crear una matriz con estos valores')
  }
  
  const getParameters = ( rowNumber, columnNumber, amountCells ) =>{
    resetValues( setShow, setShowTransposed );
    setDimensions({rowNumber, columnNumber, amountCells});
    validateInputs( amountCells );
  }
  
  return (<>
    <Form getParameters={ getParameters }/>

    {
      show && <InputsGrid 
        amountCells={ dimensions.amountCells }
        rowNumber={ dimensions.rowNumber }
        columnNumber={ dimensions.columnNumber }
        cells={ cells }
        setCells={ setCells }
        />
    }
    {
      show && <BtnTransposed 
        setData={ setData }
      />
    }
    {
      showTransposed && <TransposedGrid 
        rowNumber={ dimensions.rowNumber }
        columnNumber={ dimensions.columnNumber }
        amountCells={ dimensions.amountCells }
        data={ data }
        
        />
    }
  </>)
    
}

export default App
