import { ClockIcon, SquareIcon, X } from 'lucide-react'
import '../global.css'
import { useState } from 'react'

function FindTask({ Task, closeModal, deleteTask }) {

    const [taskID, setTaskID] = useState("")
    const [deleteModal, setDeleteModal] = useState(false)

    const categoriaCoresBG = {
        Design: "bg-yellow-400",
        SQL: "bg-blue-400",
        Script: "bg-red-400",
      };

      const categoriaCoresBORDER = {
        Design: "border-yellow-400 border-yellow-600",
        SQL: "border-blue-400 border-blue-600",
        Script: "border-red-400 border-red-600",
      };

      const [task, setTaskInfo] = useState({})

return (

    <div className='fixed bg-blue-400 inset-0 bg-opacity-50 flex items-center justify-center z-50'>

        
<div className='bg-[#F5F5DC] w-[600px] h-[560px] p-6 rounded-lg shadow-lg border-6 border-black relative'>

        <button className="absolute top-3 right-3 cursor-pointer text-xl font-bold" onClick={closeModal}>
        <X size={40}/>
        </button>

            <h1 className='text-center text-3xl font-bold underline mb-4'>Apagar tarefa por ID</h1>

            {!deleteModal &&
<div>

<h1 className='absolute right-47 top-40 text-center text-3xl font-bold underline mb-4'>BUSCAR TAREFA</h1>
<input 
value={taskID}
onChange={(e) => setTaskID(e.target.value)}
type='number'
placeholder='Insira o ID'
className='absolute right-52 top-53 text-center w-[200px] h-[45px] bg-white border-2 text-[22px] border-black rounded-2xl text-black'>
</input>

<button
onClick={() => {
    const find = Task.find((element) => element.id == taskID)
    if(find) {
        setTaskInfo(Task.find((element) => element.id == taskID))
        return setDeleteModal(true)
    } else {
        alert('Nenhuma tarefa encontrada com esse id.')
    }
}}
 className='absolute right-58 top-66 cursor-pointer bg-black border-4 border-white text-white w-[150px] h-[50px] font-bold text-2xl rounded-2xl'>
BUSCAR
</button>
</div>
            }

{deleteModal && 
            <div>

        <h1 className='text-center justify-center relative top-20 text-3xl font-bold mb-4'>Você tem certeza que quer apagar essa tarefa?</h1>

        <div className={`bg-[#F5F5DC] w-[220px] absolute top-60 right-48 h-[180px] border-7 ${categoriaCoresBORDER[task?.categoria]} rounded-2xl`}> 
        <div className={`w-[110px] place-self-center ${categoriaCoresBG[task?.categoria]} rounded-4xl font-bold text-center`}>{task?.categoria}</div>
        <p className=' font-bold text-[10.5px] text-center underline'>{task?.titulo}</p>
        
        <p className=' font-bold text-[11px] text-left flex-wrap'> 
                <span className="text-red-500">Responsável: </span>
                {task?.responsavel}
                </p>

        <p className=' font-bold text-[11px] text-left'> 
        <span className="text-red-500">Prazo: </span> 
        {task?.prazo}
        </p>

        <p className=' font-bold text-[11px] text-left'> 
                <span className="text-red-500">Criado em: </span> 
                {task?.criadoEm}
        </p>

        <div className='flex flex-wrap font-bold underline'>
            <ClockIcon size={20} className='mt-1.5'/>
            <p className='mt-0.5'>{(task?.prazo)}</p>

        </div>

        <p className=' text-[12px] text-gray-400 font-bold'>ID: {task?.id}</p>
        
            <div className='flex'>
                <button className={`w-[60px] ml-18 text-center border-2 rounded-4xl font-bold text-[12px] ${categoriaCoresBG[task?.categoria]}`}>
                    NOTA
                </button>

            </div>

        </div>

<button
onClick={() => {
    deleteTask(task.id)
    closeModal()
}}
className='absolute right-58 top-120 cursor-pointer bg-black border-4 border-white text-white w-[150px] h-[50px] font-bold text-2xl rounded-2xl'>
Confirmar
</button>
            
            
            </div>
            }

        </div>

        </div>

)

}

function DeleteTaskID({ tasks, deleteTask }) {

    const [stModal, setSTModalOpen] = useState(false)

    return (
        <div className='bg-blue-400 w-[screen] h-[screen]'>

    <button onClick={() => setSTModalOpen(!stModal)} className='w-[200px] h-[50px] cursor-pointer absolute top-38 right-105 text-black p-2 bg-red-500 hover:bg-red-600 rounded-2xl font-bold border-5 border-white ml-100 text-[17px] justify-center'>
      Apagar Tarefa por ID
      </button>

      {stModal && <FindTask Task={tasks} deleteTask={deleteTask} closeModal={() => setSTModalOpen(!stModal)} />}

      </div>


    )
}

export default DeleteTaskID