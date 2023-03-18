import { useState,useEffect } from 'react'
import './App.css'
import Button from '@mui/material/Button';
import 'bootstrap/dist/css/bootstrap.css';
import { Alert } from 'bootstrap';

function App() {
  

  const [winner, setwinner] = useState()
  const [turn,setturn] = useState("X")
  const [b1, setb1] = useState("")
  const [b2, setb2] = useState("")
  const [b3, setb3] = useState("")
  const [b4, setb4] = useState("")
  const [b5, setb5] = useState("")
  const [b6, setb6] = useState("")
  const [b7, setb7] = useState("")
  const [b8, setb8] = useState("")
  const [b9, setb9] = useState("");
  const h = [localStorage.getItem('history')]
  const v = String(h).split(',')



  useEffect(() => {
    
      if(b1 == b2 && b1 == b3 && b1) {
        setwinner(`${b1}'won!`)
        h.push({b1})
        localStorage.setItem('history',b1)
      }

      if(b4 == b5 && b4 == b6 && b4) {
        setwinner(`${b4}won!`)
        h.push({b4})
        localStorage.setItem('history',b4)

      }

      if(b7 == b8 && b7 == b9 && b7) {
        setwinner(`${b7} won!`)
        h.push({b7})
        localStorage.setItem('history',b7)

      }
      if(b1 == b4 && b1 == b7 && b1) {
        setwinner(`${b1}won!`)
        h.push({b1})
        localStorage.setItem('history',b1)
      }

      if(b2 == b5 && b2 == b8 && b2) {
        setwinner(`${b2}won!`)
        h.push({b2})
        localStorage.setItem('history',b2)
  
      }

      if(b3 == b6 && b3 == b9 && b3) {
        setwinner(`${b3}won!`)
        h.push({b3})
        localStorage.setItem('history',b3)
      }

      if(b1 == b5 && b1 == b9 && b1) {
        setwinner(`${b1}won!`)
        h.push({b1})
        localStorage.setItem('history',b1)
    
      }
  
      if(b3 == b5 && b3 == b7 && b3) {
        setwinner(`${b3}won!`)
        h.push({b3})
        localStorage.setItem('history',b3)
      }else{
      if(b1 != '' && b2 != '' && b3 != '' && b4 != '' && b5 != '' && b6 != '' && b7 != '' && b8 != '' && b9 != '' )
            setwinner('Game has been draw')
      }
   
  },[b1,b2,b3,b4,b5,b6,b7,b8,b9])
  
  
  


  return (
    
    


  <div className="d-flex justify-content-center" style={{height:"937px",backgroundColor:"gray"}}>  
  
  
    <table style={{width:"200px",marginTop:"250px",height:"100px",backgroundColor:"gray"}}>
      
  <thead>
    <tr className=" border-bottom border-3"> 
      <th><Button variant="text" style={{ width: "110px", height: "100px",color:"black", fontSize:"30px"}}  disabled={b1} onClick={() => 
      {setb1(turn)
      setturn(turn ==  "X" ? "O" : "X")  
         
 }}

      >{b1}</Button></th>
 
      <th  className="border border-top-0 border-3"><Button variant="text" style={{ width: "110px", height: "100px",color:"black", fontSize:"30px"}} disabled={b2}  onClick={() => 
    
         {setb2(turn)
          setturn(turn ==  "X" ? "O" : "X") 
        }}>
          {b2}</Button></th>
      <td ><Button variant="text" style={{ width: "110px", height: "100px",color:"black", fontSize:"30px"}} disabled={b3} onClick={() =>
          {setb3(turn)
            setturn(turn ==  "X" ? "O" : "X")
          }}>
          {b3}</Button></td>
    </tr>
  </thead>
  <tbody>
    <tr  className=" border-top border-3">
      <td ><Button variant="text" style={{width: "110px", height: "100px",color:"black", fontSize:"30px"}} disabled={b4}  onClick={() => 
      {
         {setb4(turn)
          setturn(turn ==  "X" ? "O" : "X")
        }}}>
        {b4}</Button></td>
      <td  className="border border-3"><Button variant="text" style={{width: "110px", height: "100px",color:"black", fontSize:"30px"}} disabled={b5} onClick={() => 
      {
         {setb5(turn)
          setturn(turn ==  "X" ? "O" : "X")
        }}}
        >{b5}</Button></td>
      <td > <Button variant="text" style={{ width: "110px", height: "100px",color:"black", fontSize:"30px"}} disabled={b6} onClick={() =>
       {
         {setb6(turn)
          setturn(turn ==  "X" ? "O" : "X")
        }}}>
          {b6}</Button></td>
    </tr>
    <tr  className=" border-top border-3"> 
      <th className="border border-bottom-0 border-start-0"><Button variant="text" style={{ width: "110px", height: "100px",color:"black", fontSize:"30px"}} disabled={b7} onClick={() => 
      {
         {setb7(turn)
          setturn(turn ==  "X" ? "O" : "X")
         }}}>{b7}</Button></th>
      <td  className="border border-bottom-0"><Button variant="text" style={{ width: "110px", height: "100px",color:"black", fontSize:"30px"}} disabled={b8} onClick={() => 
      {
         {setb8(turn)
          setturn(turn ==  "X" ? "O" : "X")
        }}}>{b8}</Button></td>
      <td className="border border-bottom-0 border-end-0"><Button variant="text" style={{ width: "110px", height: "100px",color:"black", fontSize:"30px"}} disabled={b9}  onClick={() =>
      {
         {setb9(turn)
          setturn(turn ==  "X" ? "O" : "X")
        }}}>{b9}</Button></td>
    </tr>
  </tbody>
  <div>
    <p className="h1">{winner}</p>
    <p>Last  5 won:
      <p>{v[v.length - 1]}</p> 
      <p>{v[v.length - 2]}</p>
      <p>{v[v.length - 3]}</p>
      <p>{v[v.length - 4]}</p>
      <p>{v[v.length - 5]}</p>

      </p>
  </div>
</table>
  
  

</div>

 

  

  );
}

export default App
