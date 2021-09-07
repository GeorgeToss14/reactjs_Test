import React ,{useState} from "react"
import './App.css';
import axios from "axios"

const App = () => {

  const [code, setcode] = useState('')
  const [reqest , setseqest]=useState('')

const  sendCode = () => {
  axios(`https://test-node1234.herokuapp.com/`, { params: { code: code}, method: "get"})
      .then(res => {
        console.log(res.data)
        const ff = res.data.output
        setseqest(ff)
      }).catch(err => {
      console.log(err)
      })
  }
  return (
    <div>
      <textarea onChange={(e) => setcode(e.target.value)}></textarea>
      <button onClick={()=>sendCode()}>click</button>


      <div>{reqest}</div>
    </div>
  )
}

export default App;
