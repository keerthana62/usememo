import React,{useMemo, useState
} from 'react'

function Counter() {
 const[counterOne,setcounterOne]=useState(0)
 const[counterTwo,setcounterTwo]=useState(0)

 const incrementOne=()=>{
  setcounterOne(counterOne + 1)
 }
 //const isEven=()=>
 //{
 // let i=0
 //while(i<200000000) i++
 //return counterOne %2 ===0
 //}

 
 const isEven=useMemo(()=>{
 let i=0
 while(i<200000000) i++
 return counterOne %2 ===0
},[counterOne]
)
 const incrementTwo=()=>{
  setcounterTwo(counterTwo + 1)
 }


  return (
    <div>
     <div>
      <button onClick={incrementOne}>Count One - {counterOne}</button>
      <span>{isEven?'Even': 'Odd'}</span>
     </div>
     <div><button onClick={incrementTwo}>Count Two - {counterTwo}</button></div>
    </div>
  )
}

export default Counter