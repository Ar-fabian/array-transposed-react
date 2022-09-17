

export const resetValues = (setShow, setShowTransposed) =>{
    setShow(false);
    setShowTransposed(false);
    document.querySelectorAll('.input').forEach( input =>{
        input.value = '';
    });
}