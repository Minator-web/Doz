import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from '@mui/material/Button';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [turn,setturn] = useState("X")
  const [b1, setb1] = useState()
  const [b2, setb2] = useState()
  const [b3, setb3] = useState()
  const [b4, setb4] = useState()
  const [b5, setb5] = useState()
  const [b6, setb6] = useState()
  const [b7, setb7] = useState()
  const [b8, setb8] = useState()
  const [b9, setb9] = useState()

  return (
    
  <div class="d-flex justify-content-center" style={{height:"937px",backgroundColor:"gray"}}>


  <div class="d-flex justify-content-center" style={{marginTop:"200px",backgroundColor:"gray"}}>
    <table style={{height:"100px",backgroundColor:"gray"}}>
  <thead>
    <tr class=" border-bottom border-3"> 
      <th ><Button variant="text" style={{ width: "110px", height: "100px",color:"black", fontSize:"30px"}} onClick={(e) => 
      {e.currentTarget.disabled != "" ? "" :
        setb1(turn)
      setturn(turn ==  "X" ? "O" : "X") != true ? "" : null
      
}}
      >{b1}</Button></th>
      <th  class="border border-top-0 border-3"><Button variant="text" style={{ width: "110px", height: "100px",color:"black", fontSize:"30px"}} onClick={() =>
         {setb2(turn)
          setturn(turn ==  "X" ? "O" : "X")
        }}>{b2}</Button></th>
      <td ><Button variant="text" style={{ width: "110px", height: "100px",color:"black", fontSize:"30px"}} onClick={() =>
          {setb3(turn)
            setturn(turn ==  "X" ? "O" : "X")
          }}>{b3}</Button></td>
    </tr>
  </thead>
  <tbody>
    <tr  class=" border-top border-3">
      <td ><Button variant="text" style={{width: "110px", height: "100px",color:"black", fontSize:"30px"}} onClick={() =>
         {setb4(turn)
          setturn(turn ==  "X" ? "O" : "X")
        }}>{b4}</Button></td>
      <td  class="border border-3"><Button variant="text" style={{width: "110px", height: "100px",color:"black", fontSize:"30px"}} onClick={() => 
         {setb5(turn)
          setturn(turn ==  "X" ? "O" : "X")
        }}>{b5}</Button></td>
      <td > <Button variant="text" style={{ width: "110px", height: "100px",color:"black", fontSize:"30px"}} onClick={() => 
         {setb6(turn)
          setturn(turn ==  "X" ? "O" : "X")
        }}>{b6}</Button></td>
    </tr>
    <tr  class=" border-top border-3"> 
      <th class="border border-bottom-0 border-start-0"><Button variant="text" style={{ width: "110px", height: "100px",color:"black", fontSize:"30px"}} onClick={() => 
         {setb7(turn)
          setturn(turn ==  "X" ? "O" : "X")
         }}>{b7}</Button></th>
      <td  class="border border-bottom-0"><Button variant="text" style={{ width: "110px", height: "100px",color:"black", fontSize:"30px"}} onClick={() => 
         {setb8(turn)
          setturn(turn ==  "X" ? "O" : "X")
        }}>{b8}</Button></td>
      <td class="border border-bottom-0 border-end-0"><Button variant="text" style={{ width: "110px", height: "100px",color:"black", fontSize:"30px"}} onClick={() => 
         {setb9(turn)
          setturn(turn ==  "X" ? "O" : "X")
        }}>{b9}</Button></td>
    </tr>
  </tbody>
</table>

</div>

        </div>
        

  );
}

export default App
