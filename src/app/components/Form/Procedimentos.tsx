"use client";

import { SettingsTabs } from '@/components/SettingsTabs'
import * as Input from '@/components/Input'
import { Mail } from 'lucide-react'

import { JSXElementConstructor, Key, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, useState } from 'react'

export default function Procedimentos() {
      const [dataInput, setDataInput] = useState("")
    const [datas, setDatas] = useState<DataItem[0]>([ ])

    function adicionarData() {
      if (dataInput.trim() !== "") {
        setDatas([...datas, { data: dataInput, concluida: false }])
        setDataInput("")
      }
    }

    function removerData(index: number) {
      const novasDatas = datas.filter((_: any, i: number) => i !== index)
      setDatas(novasDatas)
    }

    function toggleConcluida(index: number) {
      const novasDatas = [...datas]
      novasDatas[index].concluida = !novasDatas[index].concluida
      setDatas(novasDatas)
    }
  return (
    <>
    
    <h1 className="to-zinc-900 text-3xl font-medium">Informações do Procedimento</h1>

    
      <div className="mt-6 flex flex-col">
    
        <form
          id="procedimentos"
          className="mt-6 flex w-full flex-col gap-5 "
        >

         <div className="grid grid-cols-form gap-3">
          <label
            htmlFor="cliente"
            className="text-sm font-medium text-zinc-700"
          >
            Cliente
          </label>
          
          <select
            id="cliente"
            name="cliente"
            className="w-full border border-zinc-300 rounded px-3 py-2 text-sm text-zinc-700"
            defaultValue=""
          >
            <option value="" disabled>Selecione um cliente</option>
            <option value="1">João Silva</option>
            <option value="2">Maria Oliveira</option>
            <option value="3">Vanessa Passos</option>
          </select>
        </div>


          <div className="grid grid-cols-form gap-3">
            <label
              htmlFor="procedimento"
              className="text-sm font-medium text-zinc-700"
            >
              Procedimento
            </label>
            <div className="grid grid-cols-2 gap-6">
              <select
                    id="procedimento"
                    name="procedimento"
                    className="w-[300px] border border-zinc-300 rounded px-3 py-2 text-sm text-zinc-700"
                    defaultValue=""
                >
                    <option value="" disabled>Selecione um procedimento</option>
                    <option value="corte">Corte de cabelo</option>
                    <option value="escova">Escova</option>
                    <option value="manicure">Manicure</option>
                    <option value="pedicure">Pedicure</option>
                    <option value="Pacote-manicure-pedicure">Pacote Manicure/Pedicure</option>
                    <option value="pacote-hidratacao">Pacote Hidratação</option>
                </select>
            </div>
          </div>

        {/* Duração*/}
        <div className="grid grid-cols-form gap-3">
            <label
              htmlFor="duracao"
              className="text-sm font-medium text-zinc-700"
            >
              Duração
            </label>
            <div className="grid grid-cols-2 gap-6">
              <select
                    id="duracao"
                    name="duracao"
                    className="border border-zinc-300 rounded px-3 py-2 text-sm text-zinc-700"
                    defaultValue=""
                >
                        <option value="" disabled>Selecione a duração</option>
                        <option value="15">15 minutos</option>
                        <option value="30">30 minutos</option>
                        <option value="45">45 minutos</option>
                        <option value="60">1 hora</option>
                        <option value="90">1h 30min</option>
                </select>
            </div>
          </div>

        {/* Valor*/}
        <div className="grid grid-cols-form gap-3">
            <label
              htmlFor="valor"
              className="text-sm font-medium text-zinc-700"
            >
              Valor
            </label>
            <div className="grid grid-cols-2 gap-6">
                <input
                  type="number"
                  step="0.01"
                  placeholder="R$ 0,00"
                  className="w-full border border-zinc-300 rounded px-3 py-2 text-sm text-zinc-700">
                </input>
            </div>
          </div>

           {/* Categoria*/}

          <div className="grid grid-cols-form gap-3">
            <label
                htmlFor="categoria"
                className="text-sm font-medium text-zinc-700"
            >
                Categoria
            </label>

            <select
                id="categoria"
                name="categoria"
                className="border border-zinc-300 rounded px-3 py-2 text-sm text-zinc-700"
                defaultValue=""
            >
                <option value="" disabled>Selecione uma categoria</option>
                <option value="cabelo">Cabelo</option>
                <option value="unha">Unha</option>
                <option value="estetica">Estética</option>
                <option value="sobrancelha">Sobrancelha</option>
                <option value="depilacao">Depilação</option>
            </select>
            </div>

            {/* Descrição*/}

            <div className="grid grid-cols-form gap-3">
            <label
                htmlFor="descricao"
                className="text-sm font-medium text-zinc-700"
            >
                Descrição
            </label>

            <textarea
                id="descricao"
                name="descricao"
                rows={4}
                placeholder="Digite uma descrição do procedimento..."
                className="border border-zinc-300 rounded px-3 py-2 text-sm text-zinc-700 resize-none"
            />
            </div>



          {/* Datas de execução */}
          <div className="grid grid-cols-form gap-3">
            <label className="text-sm font-medium text-zinc-700">Datas de execução</label>
            
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="dd/mm"
                  value={dataInput}
                  onChange={(e) => setDataInput(e.target.value)}
                  className="w-32 border border-zinc-300 rounded px-3 py-2 text-sm text-zinc-700"
                />
                <button
                  type="button"
                  onClick={adicionarData}
                  className="rounded bg-violet-500 text-white px-3 py-2 text-sm hover:bg-violet-600"
                >
                  Adicionar
                </button>

                
              </div>

              <ul className="space-y-1">
                {datas.map((item: { concluida: boolean | undefined; data: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; }, index: Key | null | undefined) => (
                  <li key={index} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={item.concluida}
                      onChange={() => toggleConcluida(index)}
                    />
                    <span className={item.concluida ? "text-gray-500" : ""}>
                      {item.data}
                    </span>

                     <button
                        type="button"
                        onClick={() => removerData(index)}
                        className="text-red-500 text-sm hover:underline"
                      >
                        Remover
                      </button>
                      
                  </li>
                ))}
              </ul>
            </div>
          </div>


          <div className="flex items-center justify-end gap-2 pt-5">
            <button
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
