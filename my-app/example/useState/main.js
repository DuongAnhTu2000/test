import {useState} from 'react'

const orders = [100,200,300]
function App() {
  const [counter, setCounter] = useState(() => {
    const total = orders.reduce((total, cur) => total + cur)
    console.log(total);
    return total
  })
  const handleIncrease = () => {

    setCounter(counter +1)
  }
  return (
    <div className="App" style={{padding: 20}}>
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>
        Increase
      </button>
    </div>
  );
}
export default App;

// update info user

// function App() {
//   const [info, setInfo] = useState({
//     name: 'anh tu',
//     age: 18,
//     address: 'vietnam'
//   })

//   const handleUpdate = () => {
//     setInfo({
//       ...info,
//       bio: 'this is a bio',
//     })
//   }
//   return (
//     <div className="App" style={{padding: 20}}>
//       <h1>{JSON.stringify(info)}</h1>
//       <button onClick={handleUpdate}>Update</button>
//     </div>
//   );
// }

// callBack state

// function App() {
//   const [counter,useCounter] = useState(1)
    // const handleIncrease = () => {
      //     setCounter(prevState => prevState + 1)
      //     setCounter(prevState => prevState + 1)
      //     setCounter(prevState => prevState + 1)
      // }
// return (
//   <div className="App" style={{padding: 20}}>
//     <h1>{counter}</h1>
//     <button onClick={handleIncrease}>Increase</button>
//   </div>
// );
// }



