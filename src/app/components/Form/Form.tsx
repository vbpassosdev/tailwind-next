"use client";

import { useState } from "react";
import Procedimentos from "./Procedimentos";
import Agendamentos from "./Agendamentos";
import ListaProcedimentos from "./ListaProcedimentos";

const tabs = [
  { id: "dashboard", label: "Dashboard" },
  { id: "procedimentos", label: "Procedimentos" },  // id corrigido
  { id: "historico", label: "Historico" },
  { id: "equipe", label: "Equipe" },
  { id: "notificacoes", label: "Notificações" },

];

export function Form() {
  const [activeTab, setActiveTab] = useState(tabs[0].id); // inicializa com o primeiro tab

  return (
    <div>
      {/* Aba superior */}
      <div className="flex border-b border-gray-200">
        {tabs.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
              activeTab === id
                ? "border-violet-500 text-violet-600"
                : "border-transparent text-gray-500 hover:text-violet-600"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Conteúdo da aba */}
      <div className="p-4 bg-white border border-t-0 rounded-b-md">
        {activeTab === "procedimentos" && <Procedimentos />}
        {activeTab === "dashboard" && <Agendamentos />}
         {activeTab === "historico" && <ListaProcedimentos />}
       
      </div>
    </div>
  );
}
