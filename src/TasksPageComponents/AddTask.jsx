import { X } from 'lucide-react';
import '../global.css'
import { useState } from "react";

function NewTask({ closeModal, setarTarefa, tarefas, funcionarios }) {
    const [prazo, setPrazo] = useState("");
    const [isIndeterminado, setIsIndeterminado] = useState(false);
    const [titulotarefa, setTituloTarefa] = useState("")

    const [nota, setNota] = useState("")
    const [staff, setStaff] = useState("")
    const [area, setArea] = useState("")

    const handleSubmit = (e) => {
      var prazo2;
      e.preventDefault();
      if(prazo) {
        const [ano, mes, dia] =  prazo.split('-')
        prazo2 = `${dia}/${mes}/${ano}`
      } else {
        prazo2 = prazo
      }

    const novaTarefa = {
      id: tarefas.length + 1,
      categoria: area,
      titulo: titulotarefa,
      responsavel: staff,
      prazo: isIndeterminado ? "Indeterminado" : prazo2,
      criadoEm: `${new Date().toLocaleDateString("pt-BR")}`,
      nota: nota
    }
    tarefas.map((element) => {
      if(element.id == novaTarefa.id) novaTarefa.id += 1
    })

    setarTarefa([...tarefas, novaTarefa])
    closeModal()
  }

    return (
      <div className="fixed bg-blue-400 inset-0 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-[#F5F5DC] w-[600px] p-6 rounded-lg shadow-lg border-6 border-black relative">
          
          <button className="absolute cursor-pointer top-3 right-3 text-xl font-bold" onClick={closeModal}>
            <X size={40}/>
          </button>
          
          <h2 className="text-center text-3xl font-bold underline mb-10">
            Adicionar nova tarefa
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className='flex gap-x-1'>            
            <label className=" text-[20px] underline font-bold">Responsável:</label>
            <select required value={staff} onChange={(e) => setStaff(e.target.value)} className="border text-center h-8 w-50 bg-white p-2 rounded-4xl text-xs">
            <option value="" disabled></option>
            {funcionarios.map((staff, index) => 
            <option value={staff} key={index}>{staff}</option>
            )}
            </select>
            </div>

  
            <div className="flex gap-3">
              <div className="flex gap-x-1">
                <label className="text-[20px] underline font-bold">Tarefa:</label>
                <input required value={titulotarefa} onChange={(e) => setTituloTarefa(e.target.value)} type="text" className="border p-2 bg-white rounded-4xl text-xs h-8 w-50" />
              </div>

            </div>

            <div className="flex">
                <label className=" underline text-[20px] font-bold">Área:</label>
                <select required value={area} onChange={(e) => setArea(e.target.value)} className="border text-center text-xs rounded-4xl bg-white h-8 w-50">
                  <option value="" disabled></option>
                  <option value='Design'>Design</option>
                  <option value='SQL'>SQL</option>
                  <option value='Script'>Script</option>
                </select>
              </div>

            <div className="flex items-center gap-2">
              <label className="text-[20px] underline font-bold">Prazo:</label>
              <input
                required
                type="date"
                className="border p-2 rounded-4xl bg-white h-8 w-50"
                value={prazo}
                onChange={(e) => setPrazo(e.target.value)}
                disabled={isIndeterminado}
              />
              <label className="flex items-center gap-1 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isIndeterminado}
                  onChange={() => setIsIndeterminado(!isIndeterminado)}
                />
                Indeterminado
              </label>
            </div>
  
            <label className="underline text-[20px] text-center font-bold">Nota:</label>
            <textarea value={nota} onChange={(e) => setNota(e.target.value)} className="border p-2 rounded-md bg-white h-20"></textarea>
            
            <button className="bg-black text-white cursor-pointer relative left-45 p-3 rounded-md font-bold flex justify-center items-center gap-2 w-[150px]">
              ENVIAR <span>🚀</span>
            </button>
          </form>
        </div>
      </div>
    );
  }
 
function AddTask({ tasks, setTask, staff }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>

    <button onClick={() => setIsModalOpen(true)} className='w-[200px] h-[50px] cursor-pointer absolute top-38 right-225 text-black p-2 bg-blue-500 hover:bg-blue-600 rounded-2xl font-bold border-5 border-white ml-100 text-[17px] justify-center'>
      Adicionar Tarefa
      </button>

      {isModalOpen && <NewTask funcionarios={staff} tarefas={tasks} setarTarefa={setTask} closeModal={() => setIsModalOpen(false)} />}

    </div>
  );
}

export default AddTask