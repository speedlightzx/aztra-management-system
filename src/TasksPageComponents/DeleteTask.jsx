import { ClockIcon, SquareIcon, X } from 'lucide-react'
import '../global.css'
import { useState } from 'react'

function TasksModal({ selectedTasks, tasks, deleteTasks, closeModal }) {

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

return (

    <div className="fixed bg-blue-400 inset-0 bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-[#F5F5DC] w-[600px] h-[560px] p-6 rounded-lg shadow-lg border-6 border-black relative">
      
      <button className="absolute top-3 right-3 cursor-pointer text-xl font-bold" onClick={closeModal}>
        <X size={40}/>
      </button>
      
      <h2 className="text-center text-3xl font-bold underline mb-10">
        Apagar Tarefa
      </h2>

      <h1 className='absolute right-5 top-47 text-center text-2xl font-bold mb-4'>Você tem certeza que quer apagar essas tarefas selecionadas?</h1>

      <div className="flex gap-x-1 items-center justify-start border-4 overflow-x-auto overflow-y-hidden w-full max-w-full border-black h-50 rounded-2xl relative top-40">
    
    {tasks.map((element, index) => {
        {if(!selectedTasks.includes(element.id)) return}
return (
    
<div key={index}>
<div className={`bg-[#F5F5DC] w-[220px] h-[180px] border-7 ${categoriaCoresBORDER[element.categoria]} rounded-2xl mt-2 ml-1`}>
<div className={`w-[110px] place-self-center ${categoriaCoresBG[element.categoria]} rounded-4xl font-bold text-center`}>{element.categoria}</div>
<p className='font-bold text-[10.5px] text-center underline'>{element.titulo}</p>

<p className='font-bold text-[11px] text-left flex-wrap'> 
  <span className="text-red-500">Responsável: </span> {element.responsavel}
</p>

<p className='font-bold text-[11px] text-left'> 
  <span className="text-red-500">Prazo: </span> {element.prazo}
</p>

<p className='font-bold text-[11px] text-left'> 
  <span className="text-red-500">Criado em: </span> {element.criadoEm}
</p>

<div className='flex flex-wrap font-bold underline'>
  <ClockIcon size={20} className='mt-1.5'/>
  <p className='mt-0.5'>{element.prazo}</p>
</div>

<p className='text-[12px] text-gray-400 font-bold'>ID: {element.id}</p>

<div className='flex'>
  <button className={`w-[60px] ml-18 text-center border-2 rounded-4xl font-bold text-[12px] ${categoriaCoresBG[element.categoria]}`}>
    NOTA
  </button>
</div>
</div>
</div>
)
})}

        </div>
        
        <button onClick={() => {
            deleteTasks()
            closeModal()
        }} className='absolute right-50 top-120 cursor-pointer bg-black border-4 border-white text-white w-[200px] h-[50px] font-bold text-2xl rounded-2xl'>
        CONFIRMAR
        </button>

        </div>
    </div>

)

}

function DeleteTask({ tasks, selectedTasks, deleteTasks }) {

    const [deleteModal, setDeleteModal] = useState(false)

    return (
    <div className='bg-blue-400 w-[screen] h-[screen]'>

     <button onClick={() => {
        if(selectedTasks.length == 0) return alert('Nenhuma tarefa foi selecionada.')
        setDeleteModal(!deleteModal)
     }} className='w-[200px] h-[50px] cursor-pointer absolute top-20 right-105 text-black p-2 bg-red-500 hover:bg-red-600 rounded-2xl font-bold border-5 border-white ml-100 text-[17px] justify-center'>
      Apagar Tarefa
      </button>
     
     {deleteModal && <TasksModal selectedTasks={selectedTasks} tasks={tasks} deleteTasks={deleteTasks} closeModal={() => setDeleteModal(!deleteModal)} />}

      </div>


    )
}

export default DeleteTask