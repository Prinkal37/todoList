import './todo.css'
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { RiDeleteBin6Fill } from "react-icons/ri";

const TodoEnv = ({index,title, description, deleteTodo, markAsDone, completed}) => {
  return (
    <div className='container2' key={index} style={{color: completed ? 'grey' : 'black', borderColor: completed ? 'grey' : 'black'}}>
      <div className='todos'>
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
      <div className='icons'>
        <IoCheckmarkDoneSharp onClick={()=>markAsDone(index)} />
        <RiDeleteBin6Fill onClick={()=>deleteTodo(index)} />
      </div>
    </div>
  )
}

export default TodoEnv
