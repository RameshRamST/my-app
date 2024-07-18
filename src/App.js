import './App.css'; 
import { useState } from 'react'
function Button({ value, initChange }) {
    return (<button className="ind-square" onClick={initChange}>{value}</button>);
}



export default function MyApp() {
  const [isx, setIsX] = useState(true);
  const [box, setBox] = useState(Array(9).fill(null));


  
  function manage(i) {
    
    const tempe = box.slice();
    if (box[i]||isFind(i)) {
      return;
    }
    if (isx) {
      tempe[i] = "X";
    } else {
      tempe[i] = "O";
    }
    setIsX(!isx);
    setBox(tempe);

  }
  function isFind() {
  const lines=[ [0,1,2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]]
  for ( let j = 0; j < lines.length; j++){
    const[a,b,c]=lines[j]
    if (box[a] && box[b] === box[a] && box[a] === box[c]) {
      return (box[a]);
    }
    
     
    
  }
     return null;
  }

  const winner = isFind();
  let status;
    if (winner) {
      status=winner+"is the winner"
    } else {
      status = "next paly is " + (isx ? "X":"o")
    }
   

  

  return (
    <div className="big-box">
      <div className="nothing">{status}</div>
      <div className='border-row'>
        <Button value={box[0]} initChange={() => manage(0)} />
        <Button value={box[1]} initChange={() => manage(1)} />
        <Button value={box[2]} initChange={() => manage(2)} />
      </div>
      <div className='border-row'>
        <Button value={box[3]} initChange={() => manage(3)} />
        <Button value={box[4]} initChange={() => manage(4)} />
        <Button value={box[5]} initChange={() => manage(5)} />
      </div>
      <div className='border-row'>
        <Button value={box[6]} initChange={() => manage(6)} />
        <Button value={box[7]} initChange={() => manage(7)} />
        <Button value={box[8]} initChange={() => manage(8)} />
      </div>
    </div>
  );

}
