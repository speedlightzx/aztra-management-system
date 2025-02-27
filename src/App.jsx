import { CircleUserRoundIcon, ClipboardIcon, LogOutIcon, SquareCheckIcon } from 'lucide-react'
import './global.css'
import { useNavigate } from 'react-router-dom'

function App() {

  const navigate = useNavigate()

  return (
    <div className='bg-blue-400 w-[screen] h-screen'>

    <div className='justify-center items-center flex absolute top-73 right-110'>
      <h1 className='font-extrabold text-6xl text-stroke-blue'>Aztra <br /> Management <br /> System</h1>
    </div>

    <button>
    <LogOutIcon className=' absolute right-80 top-30' size={40}/>
    </button>

    <div className='flex flex-col gap-y-5'>

    <button onClick={() => navigate('/tasks')} className='w-[130px] h-[130px] cursor-pointer text-black p-2 bg-blue-500 hover:bg-blue-600 rounded-md font-bold border-4 border-white ml-100 mt-40 text-[20px] justify-center'>
      <ClipboardIcon color='white' className='ml-3'  size={80}/>
      Tarefas
      </button> 

     <button className='w-[130px] h-[130px] text-black p-2 bg-blue-500 cursor-pointer rounded-md font-bold hover:bg-blue-600 border-4 border-white ml-100 text-[20px] justify-center'>
      <CircleUserRoundIcon color='white' className='ml-3' size={80}/>
      Usuários
      </button>

    <button className='w-[130px] h-[130px] text-black p-2 bg-blue-500 cursor-pointer rounded-md font-bold hover:bg-blue-600 border-4 border-white ml-100 text-[20px] justify-center'>
      <SquareCheckIcon color='white' size={80} className='ml-3'/>
      Progressos
      </button>

    </div>
    </div>
    
  )
}

export default App