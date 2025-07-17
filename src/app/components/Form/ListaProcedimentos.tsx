'use client'

import React, { useState } from 'react'

interface Procedimento {
  id: number
  nome: string
  cliente: string
  data: string
  valor?: string // opcional
}


export default function ListaProcedimentos() {
  const [procedimentos, setProcedimentos] = useState<Procedimento[]>([
    { id: 1, nome: 'Corte de cabelo', cliente: 'Maria', data: '10/07/2025' },
    { id: 2, nome: 'Coloração', cliente: 'João', data: '09/07/2025' },
    { id: 3, nome: 'Manicure', cliente: 'Ana', data: '08/07/2025' },
  ])

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Realizados
      </h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Pesquisar procedimentos..."
          className="w-full p-2 border border-gray-300 rounded"
        />

      </div>
      

      <ul className="bg-white rounded shadow divide-y divide-gray-200">
        {procedimentos.map(procedimento => (
          <li key={procedimento.id} className="p-4 hover:bg-gray-50 flex justify-between">
            <div>
              <p className="font-semibold">{procedimento.nome}</p>
              <p className="text-sm text-gray-600">
                Cliente: {procedimento.cliente} — Data: {procedimento.data} - Valor: {procedimento.valor || 'R$ 0,00'}
              </p>
            </div>
          
          </li>
        ))}
      </ul>
    </div>
  )
}
