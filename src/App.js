import React, { useState } from "react";
import Tweet from "./tweet";

function App() {

  

  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);
  const [user, setUser] = useState([
    {name:'kc', tweet: 'Hello!', likes:45},
    {name:'ck', tweet: 'Hello!', likes:'45 likes'},
    {name:'kk', tweet: 'Hello!', likes:'45 likes'}
  ])

  const increment = () => {
    setCount(count + 1);
    setRed(!isRed);
  }

  return <div className="app">
    {/* <Tweet name="kc" likes="42" tweet="okay na"/> */}

    {/* <h1 className={isRed ? "red" : ""}>Change My color</h1>
    <button onClick={increment}>Increment</button>
    <h1>{count}</h1>  */}

  {user.map(user=>(
    <Tweet name={user.name} tweet={user.tweet} likes={user.likes}/>
  ))}

  </div>;
}

export default App;
