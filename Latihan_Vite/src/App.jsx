import { useState } from 'react'
import Header from './components/Header'
import Calon from './components/Calon'

function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [count3, setCount3] = useState(0)
  const [count4, setCount4] = useState(0)

  const  pilih1 = () => setCount1(count1 +1)
  const  pilih2 = () => setCount2(count2 +1)
  const  pilih3 = () => setCount3(count3 +1)
  const  pilih4 = () => setCount4(count4 +1)
  const totalsuara = (count1 + count2 + count3 + count4)
  const totalsah = (count1 + count2 + count3)
  const tidaksah = (count4)

    const persentotalsah = totalsah > 0 ? (totalsah /totalsuara*100).toFixed(2):0;
    const persentidak = totalsuara > 0 ? (count4 / totalsuara * 100).toFixed(2):0;

  return (
    <>
      <Header />  
      <div className="row">
        <Calon nama='tyr' counter={count1} onClick={pilih1}/>
        <Calon nama='Bruce Wayne' counter={count2} onClick={pilih2}/>
        <Calon nama='Clark Ken' counter={count3} onClick={pilih3}/>
        <Calon nama='tidak sah' counter={count4} onClick={pilih4}/>
      </div>
      <div className='text-center'>
        <h2>Total Suara : {totalsuara} </h2>
        <h2>Total Sah : {totalsah} ({persentotalsah}%)</h2>
        <h2>Total Tidak sah : {tidaksah} ({persentidak}%  )</h2>
      </div>
    </>
  )
}

export default App
