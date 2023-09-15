import { useEffect,useState } from 'react';
import './todo.css';

export default function App(){
  const[list,setList]=useState([])
  const [task, setNewTask]=useState("")

  function submit(e){
      e.preventDefault()
      setList(current=>{
        return [...current, {id:crypto.randomUUID(), title: task, completed:false}]
      })
  }


  function deleteTodo(id){
    setList(current=>{
      return current.filter(i=>i.id!==id)
    })

  }

  function updateTodo(id) {
    setList((current) => {
      return current.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed }; 
        }
        return item;
      });
    });
  }


  useEffect(() => {
    console.log(list)
  }, [list])
  

  return (
    <>
     <form onSubmit={submit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item : {task} </label>
        <input
          value={task}
          onChange={e => setNewTask(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
    
    <ul className='list'>
      {
        list?.map(i=>(
          <li className={`${i.completed===false?'': 'singleItem'} `}>
            {i.title}
            <button onClick={() => deleteTodo(i.id)} className="btn btn-danger">
               Delete
            </button>
            <button onClick={() => updateTodo(i.id)} className="btn btn-danger">
               {
                i.completed===true?'UnDone': 'Done'
               }
            </button>
          </li>
        ))
      }
    </ul>


    </>

  )
}
