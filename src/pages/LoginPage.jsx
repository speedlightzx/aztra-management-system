import '../global.css'
import { useNavigate } from 'react-router-dom'

function LoginPage() {

  const navigate = useNavigate()

  return (
    <div className=' flex items-center justify-center bg-blue-400 w-screen h-screen'>

        <div className='flex flex-col w-[450px] h-[600px] justify-center items-center text-center border-4 border-purple-500 rounded-[20px]'>

        <h1 className='absolute top-40 underline text-stroke-black text-5xl font-bold'>LOGIN</h1>

        <form onSubmit={() => navigate('/menu')} className='flex flex-col gap-y-4'>

            <input className='text-[20px] placeholder-white text-black text-center border-1 border-white rounded-[10px]'
             type="email"
             value='teste@gmail.com'
            placeholder='Email' />
            <input className='text-[20px] placeholder-white text-black text-center border-1 border-white rounded-[10px]'
             type="password"
             value="teste123"
             placeholder='Senha' />
            <label className='text-left text-[15px] text-white'>
            <input type="checkbox" id='manterconectado'></input>    
            Manter conectado
            </label>
                      
                      
          <button type='submit' className="bg-black text-white py-2 rounded-md text-lg shadow-md transition hover:opacity-80">
           Login
           </button>

            {/* <div className="flex justify-between text-sm text-white">
            
              <h1 className='underline'>Esqueceu a senha?</h1>
              <h1 className='underline'>Cadastre-se</h1>
            
          </div>

          
          <div className="flex items-center my-2">
            <div className="flex-grow border-t border-white"></div>
            <span className="mx-2 text-white text-sm">OU</span>
            <div className="flex-grow border-t border-white"></div>
          </div> */}

          {/* <button className="flex items-center justify-center bg-white text-black py-2 rounded-md shadow-md gap-2 transition hover:opacity-80">
            <CarIcon size={24} />
            Continuar com o Google
          </button> */}
          
        </form>
        
        </div>

    </div>
  )
}

export default LoginPage