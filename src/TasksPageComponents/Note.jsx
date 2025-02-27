import { ClockIcon, SquareIcon, X } from 'lucide-react'
import '../global.css'
import { useState } from 'react'

function Note({ desc, closeModal }) {

    return (
    <div className='bg-blue-400 inset-0 z-50 fixed w-[screen] h-[screen]'>

<div className="bg-[#F5F5DC] overflow-y-auto w-[500px] inset-0 z-50 h-[400px] p-6 rounded-lg shadow-lg border-6 border-black relative left-100 top-50">

<button className="absolute top-3 right-3 text-xl font-bold" onClick={closeModal}>
            <X size={40}/>
</button>

<h1 className='place-self-center text-3xl font-bold underline'>Nota:</h1>
<h1 className='place-self-center text-[20px] relative top-5'>{desc}</h1>

</div>
    
    </div>


    )
}

export default Note