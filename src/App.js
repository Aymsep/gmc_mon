import {one_person_id} from './api'
import {useState,useEffect} from 'react'

function App() {
  const [oneid, setoneid] = useState([])
  useEffect(()=>{
    one_person_id().then(res=>{
      oneid.push(res.data)
      console.log(oneid)
    })
  },[])
  return (
    <div className="App">
      <h1>one person using id</h1>
      {
        oneid.map(usr=>(
          <p>{usr.age}</p>
        ))
      }
    </div>
  );
}

export default App;
