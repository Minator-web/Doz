import { useState } from 'react'
import './App.css'
import Button from '@mui/material/Button';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [winer, setwinner] = useState("X")
  const [turn,setturn] = useState("X")
  const [b1, setb1] = useState(false)
  const [b2, setb2] = useState(false)
  const [b3, setb3] = useState(false)
  const [b4, setb4] = useState(false)
  const [b5, setb5] = useState(false)
  const [b6, setb6] = useState(false)
  const [b7, setb7] = useState(false)
  const [b8, setb8] = useState(false)
  const [b9, setb9] = useState(false);

  return (
    
  <div class="d-flex justify-content-center" style={{height:"937px",backgroundColor:"gray"}}>


  <div class="d-flex justify-content-center" style={{marginTop:"200px",backgroundColor:"gray"}}>
    <table style={{height:"100px",backgroundColor:"gray"}}>
  <thead>
    <tr class=" border-bottom border-3"> 
      <th ><Button variant="text" style={{ width: "110px", height: "100px",color:"black", fontSize:"30px"}}  disabled={b1} onClick={() => 
      {setb1(true)
        {setb1(turn)
      setturn(turn ==  "X" ? "O" : "X") != true ? "" : null
      
 }}}
      >{b1}</Button></th>
      <th  class="border border-top-0 border-3"><Button variant="text" style={{ width: "110px", height: "100px",color:"black", fontSize:"30px"}} disabled={b2}  onClick={() =>
         {setb2(true)
         {setb2(turn)
          setturn(turn ==  "X" ? "O" : "X")
        }}}>
          {b2}</Button></th>
      <td ><Button variant="text" style={{ width: "110px", height: "100px",color:"black", fontSize:"30px"}} disabled={b3} onClick={() =>
          {setb3(true)
          {setb3(turn)
            setturn(turn ==  "X" ? "O" : "X")
          }}}>
          {b3}</Button></td>
    </tr>
  </thead>
  <tbody>
    <tr  class=" border-top border-3">
      <td ><Button variant="text" style={{width: "110px", height: "100px",color:"black", fontSize:"30px"}} disabled={b4}  onClick={() =>
         {setb4(true)
         {setb4(turn)
          setturn(turn ==  "X" ? "O" : "X")
        }}}>
        {b4}</Button></td>
      <td  class="border border-3"><Button variant="text" style={{width: "110px", height: "100px",color:"black", fontSize:"30px"}} disabled={b5} onClick={() => 
         {setb5(true)
         {setb5(turn)
          setturn(turn ==  "X" ? "O" : "X")
        }}}
        >{b5}</Button></td>
      <td > <Button variant="text" style={{ width: "110px", height: "100px",color:"black", fontSize:"30px"}} disabled={b6} onClick={() => 
         {setb6(true)
         {setb6(turn)
          setturn(turn ==  "X" ? "O" : "X")
        }}}>
          {b6}</Button></td>
    </tr>
    <tr  class=" border-top border-3"> 
      <th class="border border-bottom-0 border-start-0"><Button variant="text" style={{ width: "110px", height: "100px",color:"black", fontSize:"30px"}} disabled={b7} onClick={() => 
         {setb7(true)
         {setb7(turn)
          setturn(turn ==  "X" ? "O" : "X")
         }}}>{b7}</Button></th>
      <td  class="border border-bottom-0"><Button variant="text" style={{ width: "110px", height: "100px",color:"black", fontSize:"30px"}} disabled={b8} onClick={() => 
         {setb8(true)
         {setb8(turn)
          setturn(turn ==  "X" ? "O" : "X")
        }}}>{b8}</Button></td>
      <td class="border border-bottom-0 border-end-0"><Button variant="text" style={{ width: "110px", height: "100px",color:"black", fontSize:"30px"}} disabled={b9}  onClick={() => 
         {setb9(true)
         {setb9(turn)
          setturn(turn ==  "X" ? "O" : "X")
        }}}>{b9}</Button></td>
    </tr>
  </tbody>
</table>

</div>

        </div>
        

  );
}

export default App
