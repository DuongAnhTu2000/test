import {useState} from 'react'

const courses = [
  {
    id: 1,
    name: 'HTML, CSS'
  },
  {
    id: 2,
    name: 'Javascript'
  },
  {
    id: 3,
    name: 'ReactJS'
  }
]

  function App() {
    const [checked, setChecked] = useState([])
    console.log(checked);
    const handleChecked = (id) => {
      setChecked(prev => {
        const isChecked = checked.includes(id)
        if(isChecked) {
          return checked.filter(item => item !== id)
        } else {
          return [...prev, id]
        }
      })
    }
    const handleSubmit = () => {
      console.log({id:checked});
    }
    return (
      <div style={{padding: 32}}>
        {courses.map(course => 
        <div key={course.id}>
          <input type="checkbox" 
          checked = {checked.includes(course.id)}
          onChange={()=> handleChecked(course.id)}
          />
          {course.name}
        </div>
      )}
        <button onClick={handleSubmit}>Register</button>
      </div>
    )
  }



export default App


/* random gift 


const gifts = [
  'i9',
  'ram 32g ',
  'ssd 1tb',
]

  function App() {
    const [gift, setGift] = useState()
    const randomGift = () => {
      const index = Math.floor(Math.random() * gifts.length)
      setGift(gifts[index])
    }
    return (
      <div style={{padding: 32}}>
        <h1>{gift || 'chưa có phần thưởng'}</h1>
        <button onClick={randomGift}>Lấy phần thưởng</button>
      </div>
    )
  }

  // two-way binding

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = () => {
    console.log({
      name,
      email
    })
  }
  return (
    <div style={{padding: 32}}>
      <input value={name}
       onChange={e => setName(e.target.value)}
      />
      <input value={email}
       onChange={e => setEmail(e.target.value)}
      />
      <button onClick={handleSubmit}>Register</button>
    </div>
  ) 
  */

