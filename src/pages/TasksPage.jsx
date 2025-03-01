import { ArrowLeft, Check, CheckCheckIcon, CheckIcon, ClockIcon, SquareIcon } from 'lucide-react'
import '../global.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AddTask from '../TasksPageComponents/AddTask'
import DeleteTaskID from '../TasksPageComponents/DeleteTaskID'
import ChangeTask from '../TasksPageComponents/ChangeTask'
import DeleteTask from '../TasksPageComponents/DeleteTask'
import Note from '../TasksPageComponents/Note'

function TasksPage() {

    const navigate = useNavigate()

    const [noteModal, setNoteModal] = useState(false)
    const [info, setInfo] = useState("")

    const [tasks, setTask] = useState(JSON.parse(localStorage.getItem('tasks')) || [])

    const funcionarios = ['Allan Herbert Sancho', 'Funcionário 2', 'Funcionário 3']
    const [selectedTasks, setSelectTask] = useState([])

    const selectTask = (taskID) => {
        if(selectedTasks.includes(taskID)) {
            var newSelectedTasks = selectedTasks.filter((element) => element != taskID)
            setSelectTask(newSelectedTasks)
        } else {
            setSelectTask([...selectedTasks, taskID])
        }
    }

    const checkSelect = (taskID) => {
        if(selectedTasks.includes(taskID)) {
            return true
        } else {
            return false
        }
    }

    const deleteTaskID = (taskID) => {
        var newTasks = tasks.filter((task) => task.id != taskID)
        setTask(newTasks)
    }

    const deleteTasks = () => {
        var newTasks = []
        tasks.map((element, index) => {
            if(!selectedTasks.includes(element.id)) newTasks.push(element)
        })
        setSelectTask([])
        setTask(newTasks)
    }

    const changeTask = (task) => {
        let temparray = []
        temparray = tasks.filter((element) => element.id != task.id)
        temparray.push(task)
        setTask(temparray)
    }

    useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const timer = (prazo) => {
        if(prazo == 'Indeterminado') return "Indeterminado"
        const partes = prazo.split("/");
        const prazoFormatado = `${partes[2]}-${partes[1]}-${partes[0]}`;
    
        const hoje = new Date();
        const dataPrazo = new Date(prazoFormatado);
        const diferencaMs = dataPrazo - hoje;
        const diasRestantes = Math.ceil(diferencaMs / (1000 * 60 * 60 * 24));
    
        if (diasRestantes > 0) {
            return `${diasRestantes} dia(s) restantes`;
        } else if (diasRestantes === 0) {
            return "Hoje!";
        } else {
            return "Expirado";
        }
    };

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
    <div className='bg-blue-400 w-[screen] h-screen'>

    {noteModal && <Note desc={info} closeModal={() => setNoteModal(false)} />}

    <AddTask staff={funcionarios} tasks={tasks} setTask={setTask}/>

      <button className='w-[200px] h-[50px] absolute top-38 right-165 text-black p-2 bg-yellow-300 rounded-2xl font-bold border-5 border-white ml-100 text-[17px] justify-center'>
      Ver todas as tarefas
      </button>

    <ChangeTask changeTask={changeTask} staff={funcionarios} tasks={tasks} setTask={setTask}/>

    <DeleteTask selectedTasks={selectedTasks} tasks={tasks} deleteTasks={deleteTasks} />

    <DeleteTaskID tasks={tasks} deleteTask={deleteTaskID}/>

    <button onClick={ () => navigate('/menu') }>
    <ArrowLeft className='cursor-pointer absolute right-300 top-20' size={40}/>
    </button>

    <h1 className='font-bold absolute top-53 right-158 text-[20px]'>Últimas tarefas adicionadas</h1>
      <div className=' bg-blue-900 absolute top-60 p-5 right-103 w-[685px] h-[500px] border-5 border-white rounded-2xl'>
            
      <div className="h-[400px] overflow-y-auto flex flex-wrap gap-4 justify-center">

        {tasks.slice(0, 10).map((task, index) =>
        <div key={index} className={`bg-[#F5F5DC] w-[220px] h-[180px] border-7 ${categoriaCoresBORDER[task.categoria]} rounded-2xl`}> 

        <div className={`w-[110px] place-self-center ${categoriaCoresBG[task.categoria]} rounded-4xl font-bold text-center`}>
        {tasks[index].categoria}
        </div>

        <p className=' font-bold text-[10.5px] text-center underline'>{tasks[index].titulo}</p>
        
        <p className=' font-bold text-[11px] text-left flex-wrap'> 
                <span className="text-red-500">Responsável: </span>
                {tasks[index].responsavel}
        </p>

        <p className=' font-bold text-[11px] text-left'> 
        <span className="text-red-500">Prazo: </span> 
        {tasks[index].prazo}
        </p>

        <p className=' font-bold text-[11px] text-left'> 
                <span className="text-red-500">Criado em: </span> 
                {tasks[index].criadoEm}
        </p>

        <div className='flex flex-wrap font-bold underline'>
            <ClockIcon size={20} className='mt-1.5'/>
            <p className='mt-0.5'>{timer(tasks[index].prazo)}</p>

        </div>

        <p className=' text-[12px] text-gray-400 font-bold'>
        ID: {tasks[index].id
        }</p>
        
            <div className='flex'>
                <button onClick={() => {
                    setNoteModal(true)
                    setInfo(tasks[index].nota)
                }}
                className={`w-[60px] cursor-pointer ml-18 text-center border-2 rounded-4xl font-bold text-[12px] ${categoriaCoresBG[task.categoria]}`}>
                    NOTA
                </button>

<label className="flex items-center ml-9 relative cursor-pointer">
  <input
    type="checkbox"
    className="hidden peer absolute inset-0 cursor-pointer w-6 h-6"
     onClick={() => selectTask(task.id)}
     checked={checkSelect(task.id)}
     />
  <div className="border-2 border-black w-6 h-6 items-center justify-center peer-checked:bg-blue-400" />
  <Check size={16} className="hidden peer-checked:block ml-[-20px]" />
</label>

            </div>

        </div>

        
        )}
        </div>



        </div>

        </div>

    )
}

export default TasksPage