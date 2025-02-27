import { ClockIcon, SquareIcon, X } from 'lucide-react';
import '../global.css'
import { useState } from "react";

function TaskInfos({ changeTask, closeModal, setTask, tasks, funcionarios }) {

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

    const [taskModal, setTaskModal] = useState(false)
    const [taskID, setTaskID] = useState("")

    const [task, setTaskInfo] = useState({})

    const [titulotarefa, setTituloTarefa] = useState("")
    const [nota, setNota] = useState("")
    const [staff, setStaff] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

      const changedTask = {
        id: task?.id,
        categoria: task?.categoria,
        titulo: titulotarefa ? titulotarefa : task?.titulo ,
        responsavel: staff ? staff : task?.responsavel,
        prazo: task?.prazo,
        criadoEm: task?.criadoEm,
        nota: nota ? nota : task?.nota
      }


      changeTask(changedTask)
      closeModal()
    }

    return (

     <div className='fixed bg-blue-400 inset-0 bg-opacity-50 flex items-center justify-center z-50'>
    <div className={`bg-[#F5F5DC] w-[600px] h-[560px] p-6 rounded-lg shadow-lg border-6 border-black relative`}>

    <button className="absolute cursor-pointer top-3 right-3 text-xl font-bold" onClick={closeModal}>
        <X size={40}/>
        </button>

        <h1 className='text-center text-3xl font-bold underline mb-4'>Alterar Tarefa</h1>

        {!taskModal && 
        
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
            const find = tasks.find((element) => element.id == taskID)
            if(find) {
                setTaskInfo(tasks.find((element) => element.id == taskID))
                return setTaskModal(true)
            } else {
                alert('Nenhuma tarefa encontrada com esse id.')
            }
        }}
         className='absolute right-58 top-66 cursor-pointer bg-black border-4 border-white text-white w-[150px] h-[50px] font-bold text-2xl rounded-2xl'>
        BUSCAR
        </button>
        </div>
            
        }

        <div/>

        {taskModal && 
        
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className='flex gap-x-1'>            
            <label className=" text-[20px] underline font-bold">Responsável:</label>
            <select value={staff} onChange={(e) => setStaff(e.target.value)} className="border text-center h-8 w-50 bg-white p-2 rounded-4xl text-xs">
            <option value="" disabled></option>
            {funcionarios.map((staff, index) => 
            <option value={staff} key={index}>{staff}</option>
            )}
            </select>
            </div>

  
            <div className="flex gap-3">
              <div className="flex gap-x-1">
                <label className="text-[20px] underline font-bold">Tarefa:</label>
                <input value={titulotarefa} onChange={(e) => setTituloTarefa(e.target.value)} type="text" className="border p-2 bg-white rounded-4xl text-xs h-8 w-50" />
              </div>

            </div>
  
            <label className="underline text-[20px] text-center font-bold">Nota:</label>
            <textarea value={nota} onChange={(e) => setNota(e.target.value)} className="border p-2 rounded-md bg-white h-20"></textarea>
    
             <div className="relative flex flex-col top-45">


    <div className={`bg-[#F5F5DC] w-[220px] h-[180px] border-7 ${categoriaCoresBORDER[task?.categoria]} rounded-2xl absolute left-37 transform -translate-y-full`}>
    <div className={`w-[110px] place-self-center ${categoriaCoresBG[task?.categoria]} rounded-4xl font-bold text-center`}>{task?.categoria}</div>
    <p className='font-bold text-[10.5px] text-center underline'>{titulotarefa ? titulotarefa : task?.titulo}</p>
    
    <p className='font-bold text-[11px] text-left flex-wrap'> 
      <span className="text-red-500">Responsável: </span> {staff ? staff : task?.responsavel}
    </p>

    <p className='font-bold text-[11px] text-left'> 
      <span className="text-red-500">Prazo: </span> {task?.prazo}
    </p>

    <p className='font-bold text-[11px] text-left'> 
      <span className="text-red-500">Criado em: </span> {task?.criadoEm}
    </p>

    <div className='flex flex-wrap font-bold underline'>
      <ClockIcon size={20} className='mt-1.5'/>
      <p className='mt-0.5'>{(task?.prazo)}</p>
    </div>

    <p className='text-[12px] text-gray-400 font-bold'>ID: {task?.id}</p>
    
    <div className='flex'>
      <button className={`w-[60px] ml-18 text-center border-2 rounded-4xl font-bold text-[12px] ${categoriaCoresBG[task?.categoria]}`}>
        NOTA
      </button>
    </div>
  </div>

            <button type='submit' className="bg-black text-white cursor-pointer relative top-3 left-45 p-3 rounded-md font-bold flex justify-center items-center gap-2 w-[150px]">
              ALTERAR <span>🚀</span>
            </button>
            </div>


          </form>
            
        }

        </div>

        </div>

    )

}
 
function ChangeTask({ changeTask, tasks, setTask, staff }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>

    <button onClick={() => setIsModalOpen(!isModalOpen)} className='w-[200px] h-[50px] cursor-pointer absolute top-20 right-165 text-black p-2 bg-orange-500 hover:bg-orange-600 rounded-2xl font-bold border-5 border-white ml-100 text-[17px] justify-center'>
      Alterar Tarefa
      </button>

      {isModalOpen && <TaskInfos changeTask={changeTask} funcionarios={staff} tasks={tasks} setTask={setTask} closeModal={() => setIsModalOpen(false)} />}

    </div>
  );
}

export default ChangeTask