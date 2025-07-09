"use client";

import { useState } from "react";
import { User, Lock } from "lucide-react";
import Settings from "./Settings";
import Profile from "./Profile";

const tabs = [
  { id: "details", label: "My Details" },
  { id: "profile", label: "Profile",  },
  { id: "password", label: "Password"},
  { id: "team", label: "Team"},
  { id: "plan", label: "Plan"},
  { id: "billing", label: "Billing"},
  { id: "email", label: "Email"},
  { id: "notifications", label: "Notifications"},
  { id: "integrations", label: "Integrations"},
  { id: "api", label: "API" },
];


export function Form (){
  const [activeTab, setActiveTab] = useState("details");

  return (
    <div>
      {/* Aba superior */}
      <div className="flex border-b border-gray-200">
        {tabs.map(({ id, label}) => (
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
        {activeTab === "details" && <Settings/>}
        {activeTab === "profile" && <Profile/>}
      </div>
    </div>
  );
    

}