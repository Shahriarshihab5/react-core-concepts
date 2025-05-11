import './App.css'
import Counter from './count';
import Team from './Team';
import Users from './Users';
import Friends from './friends';

function App() {
 
function handleClick (){

  alert('button clicked');

}
 const handleClick2 = ()=>{

  alert('button 2 clicked');

}
const addto5 =(num)=>{
alert (num+5);

}
  
  return (
    <>

      <h3>React core concepts</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click</button>
      <button onClick = {() => addto5(3) }>Click 3</button>

    </>
  )
}

export default App
