import React, { useState } from 'react'

function Calculator() {
      
    const [value1 , setValue1] = useState();
    const [value2 , setValue2] = useState();
    const [calculatedValue,setCalculatedValue] = useState(0);

    console.log(value1);
    console.log(value2);

    console.log(calculatedValue);
    

    function implementAddition(e){
      e.preventDefault();
      if(!value1 || !value2){
        prompt('Please fill all fields');
        setCalculatedValue(0);
      }
      setCalculatedValue((+value1) + (+value2));
    }

    function implementSubtraction(e){
      e.preventDefault();
        if(!value1 || !value2){
        prompt('Please fill all fields');
        setCalculatedValue(0);
      }
      setCalculatedValue(value1 - value2);
      
    }
    function implementMultiplication(e){
      e.preventDefault();
        if(!value1 || !value2){
        prompt('Please fill all fields');
        setCalculatedValue(0);
      }
      setCalculatedValue(value1 * value2);

    }
    function implementDivision(e){
      e.preventDefault();
        if(!value1 || !value2){
        prompt('Please fill all fields');
        setCalculatedValue(0);
      }
      setCalculatedValue(value1 / value2);
    }
    function implementModulo(e){
      e.preventDefault();
        if(!value1 || !value2){
        prompt('Please fill all fields');
        setCalculatedValue(0);
      }
      setCalculatedValue(value1 % value2);
    }



  return (
    <div className="h-screen flex justify-center place-items-center content-center bg-gradient-to-b 
    from-green-200  to-green-500">
        <div className="grid  place-items-center text-center h-3/5 w-2/5 m-auto rounded-xl  bg-gradient-to-b 
                 from-green-100 to-green-200 content-center">
        <div>
          <h2 className='text-5xl font-bold text-red-400'>React Calculator</h2>
          </div>
        <form action="Calculation">
          <div className="input1 mt-12 ">
            <label htmlFor="firstNumber"></label>
             <input className='w-96 h-10 rounded-lg'
                    type="number" 
                    id='firstNumber'
                    placeholder='   Enter First Number'
                    onChange={e => setValue1(e.target.value)}
                    value={value1}
             />
          </div>

          <div className='input2 mt-5'>
                  <label htmlFor="secondNumber"> </label>
                   <input className='w-96 h-10 rounded-lg '
                          type="number" 
                          id='secondNumber' 
                          placeholder='   Enter Second Number'
                          onChange={e => setValue2(e.target.value)}
                          value={value2}
                    />
          </div>
             
          <div className="buttons mt-6 ml-10
           flex flex-row">
            <div>
                <button type='submit' className='h-10 w-11 bg-green-400 mr-10 rounded-md  font-bold text-xl text-slate-100' onClick={implementAddition}><span>&#43;</span></button>
            </div>
            <div>
                <button type='submit' className='h-10 w-11 bg-green-400 mr-10 rounded-md  font-bold text-xl text-slate-100' onClick={implementSubtraction}><span>&#8722;</span></button>
            </div>
            <div>
                <button type='submit' className='h-10 w-11 bg-green-400 mr-10 rounded-md  font-bold text-xl text-slate-100' onClick={implementMultiplication}><span>&#215;</span></button>
            </div>
            <div>
                <button type='submit' className='h-10 w-11 bg-green-400 mr-10 rounded-md  font-bold text-xl text-slate-100' onClick={implementDivision}><span>&#247;</span></button>
            </div>
            <div>
                <button type='submit' className='h-10 w-11 bg-green-400 mr-10 rounded-md  font-bold text-xl text-slate-100' onClick={implementModulo}><span>&#37;</span></button>
            </div>
          </div>
           <div className='mt-8 flex justify-center place-items-center h-10 w-40 bg-green-400 text-slate-200 rounded-lg  font-bold text-xl ml-36'> <button>Reset<i className="material-icons">&#8634;</i></button></div>

             
        </form>
        
        {
           <div className='mt-10 flex justify-center place-items-center h-14 w-80 bg-red-400 text-slate-100 rounded-lg  font-bold text-2xl'>Result : {calculatedValue}</div>
        }
        </div>
        
       
    </div>
  )
}

export default Calculator;