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
  const [colunas, setColunas] = useState<Coluna[]>([
    { id: 'todo', titulo: 'A Fazer', tarefas: [] },
    { id: 'doing', titulo: 'Em Progresso', tarefas: [] },
    { id: 'done', titulo: 'Concluído', tarefas: [] },
  ])

  const [novaTarefa, setNovaTarefa] = useState({ titulo: '', descricao: '' })

  const removerTarefa = (idTarefa: number) => {
    const novasColunas = colunas.map(coluna => ({
      ...coluna,
      tarefas: coluna.tarefas.filter(t => t.id !== idTarefa)
    }))
    setColunas(novasColunas)
  }

  const adicionarTarefa = () => {
    if (novaTarefa.titulo.trim() === '') return

    const nova: Tarefa = {
      id: Date.now(),
      titulo: novaTarefa.titulo,
      descricao: novaTarefa.descricao,
    }

    const novasColunas = [...colunas]
    novasColunas[0].tarefas.push(nova)
    setColunas(novasColunas)
    setNovaTarefa({ titulo: '', descricao: '' })
  }

  const moverTarefa = (idTarefa: number, direcao: 'esquerda' | 'direita') => {
    const indexColuna = colunas.findIndex(col => col.tarefas.some(t => t.id === idTarefa))
    if (indexColuna === -1) return

    const colunaAtual = colunas[indexColuna]
    const tarefa = colunaAtual.tarefas.find(t => t.id === idTarefa)!
    const novaColunaIndex = direcao === 'direita' ? indexColuna + 1 : indexColuna - 1

    if (novaColunaIndex < 0 || novaColunaIndex >= colunas.length) return

    const novasColunas = [...colunas]
    novasColunas[indexColuna].tarefas = colunaAtual.tarefas.filter(t => t.id !== idTarefa)
    novasColunas[novaColunaIndex].tarefas.push(tarefa)
    setColunas(novasColunas)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Agendamentos</h1>

      <div className="flex gap-2 mb-6">
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
          className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition"
        >
          Adicionar
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {colunas.map((coluna, idx) => (
          <div key={coluna.id} className="bg-white rounded-xl shadow p-4">
            <h2 className="text-xl font-semibold text-center mb-4">{coluna.titulo}</h2>

            {coluna.tarefas.map(tarefa => (
              <div
                key={tarefa.id}
                className="bg-white border rounded-xl shadow-sm p-3 mb-3 hover:shadow-md transition"
              >
                <h3 className="font-bold text-gray-800">{tarefa.titulo}</h3>
                <p className="text-gray-600 text-sm">{tarefa.descricao}</p>

                <div className="flex justify-between mt-3">
                  <button
                    onClick={() => moverTarefa(tarefa.id, 'esquerda')}
                    className="text-xs text-blue-600 disabled:opacity-50"
                    disabled={idx === 0}
                  >
                    ← Mover
                  </button>
                  <button
                    onClick={() => moverTarefa(tarefa.id, 'direita')}
                    className="text-xs text-blue-600 disabled:opacity-50"
                    disabled={idx === colunas.length - 1}
                  >
                    Mover →
                  </button>

                <button
                  onClick={adicionarTarefa}
                  className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition"
                >
                  Adicionar
                </button>
                  <button
                    onClick={() => removerTarefa(tarefa.id)}
                    className="text-xs text-red-600 hover:underline"
                  >
                    Remover
                  </button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
