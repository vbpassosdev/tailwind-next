'use client'

import React, { useState } from 'react'

type Tarefa = {
  id: number
  titulo: string
  descricao: string
}

type Coluna = {
  id: string
  titulo: string
  tarefas: Tarefa[]
}


export default function Agendamentos() {
    const [colunas, setColunas] = useState<Coluna[0]>([
    { id: 'todo', titulo: 'A Fazer', tarefas: [] },
    { id: 'doing', titulo: 'Em Progresso', tarefas: [] },
    { id: 'done', titulo: 'Concluído', tarefas: [] },
  ])
    const [novaTarefa, setNovaTarefa] = useState({ titulo: '', descricao: '' })

  const adicionarTarefa = () => {
    if (novaTarefa.titulo.trim() === '') return
    const nova = {
      id: Date.now(),
      titulo: novaTarefa.titulo,
      descricao: novaTarefa.descricao,
    }
    const novasColunas = [...colunas]
    novasColunas[0].tarefas.push(nova)
    setColunas(novasColunas)
    setNovaTarefa({ titulo: '', descricao: '' })
  }

  const moverTarefa = function (idTarefa: number, direcao: 'esquerda' | 'direita') {
    const indexColuna = colunas.findIndex(col => col.tarefas.some(t => t.id === idTarefa)
    )

    if (indexColuna === -1) return

    const colunaAtual = colunas[indexColuna]
    const tarefa = colunaAtual.tarefas.find(t => t.id === idTarefa)!
    const novaColunaIndex = direcao === 'direita' ? indexColuna + 1 : indexColuna - 1

    if (novaColunaIndex < 0 || novaColunaIndex >= colunas.length) return

    const novasColunas = [...colunas]
    novasColunas[indexColuna].tarefas = colunaAtual.tarefas.filter(
      t => t.id !== idTarefa
    )
    novasColunas[novaColunaIndex].tarefas.push(tarefa)

    setColunas(novasColunas)
  }

  return (
  <>
   
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mb-6 flex gap-2">
        <input
          type="text"
          placeholder="Título"
          value={novaTarefa.titulo}
          onChange={e => setNovaTarefa({ ...novaTarefa, titulo: e.target.value })}
          className="border px-2 py-1 rounded w-full"
        />
        <input
          type="text"
          placeholder="Descrição"
          value={novaTarefa.descricao}
          onChange={e => setNovaTarefa({ ...novaTarefa, descricao: e.target.value })}
          className="border px-2 py-1 rounded w-full"
        />
        <button
          onClick={adicionarTarefa}
          className="bg-blue-500 text-white px-4 py-1 rounded"
        >
          Adicionar
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {colunas.map((coluna, idx) => (
          <div key={coluna.id} className="bg-white rounded shadow p-4">
            <h2 className="text-xl font-semibold mb-4">{coluna.titulo}</h2>
            {coluna.tarefas.map(tarefa => (
              <div key={tarefa.id} className="bg-gray-100 p-2 mb-2 rounded border">
                <strong>{tarefa.titulo}</strong>
                <p>{tarefa.descricao}</p>
                <div className="flex justify-between mt-2">
                  <button
                    onClick={() => moverTarefa(tarefa.id, 'esquerda')}
                    className="text-sm text-blue-600"
                    disabled={idx === 0}
                  >
                    ←
                  </button>
                  <button
                    onClick={() => moverTarefa(tarefa.id, 'direita')}
                    className="text-sm text-blue-600"
                    disabled={idx === colunas.length - 1}
                  >
                    →
                  </button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </>
)
}