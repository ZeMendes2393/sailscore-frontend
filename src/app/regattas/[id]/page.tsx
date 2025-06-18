"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Regatta {
  id: number;
  name: string;
  location: string;
  start_date: string;
  end_date: string;
  description?: string;
  poster_url?: string;
  notice_board_url?: string;
  entry_list_url?: string;
  online_entry_url?: string;
}

export default function RegattaDetailsPage() {
  const { id } = useParams();
  const [regatta, setRegatta] = useState<Regatta | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRegatta = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:8000/regattas/${id}`);
        const data = await res.json();
        setRegatta(data);
      } catch (err) {
        console.error("Erro ao buscar regata:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchRegatta();
  }, [id]);

  if (loading) return <div className="p-8">⏳ A carregar detalhes da regata...</div>;
  if (!regatta) return <div className="p-8 text-red-600">Regata não encontrada.</div>;

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-6 md:px-20">
      <div className="bg-white shadow rounded-lg p-6">
        <h1 className="text-3xl font-bold text-blue-800 mb-2">{regatta.name}</h1>
        <p className="text-gray-600 mb-4">
          📍 {regatta.location} | 📅 {regatta.start_date} – {regatta.end_date}
        </p>

        {/* Poster da regata */}
        {regatta.poster_url && (
          <img
            src={regatta.poster_url}
            alt="Poster da Regata"
            className="w-full max-w-md rounded shadow mb-6"
          />
        )}

        {/* Descrição */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Sobre o Evento</h2>
          <p className="text-gray-700 whitespace-pre-line">
            {regatta.description || "Sem descrição disponível."}
          </p>
        </div>

        {/* Links úteis */}
        <div className="flex flex-wrap gap-4">
          {regatta.notice_board_url && (
            <a
              href={regatta.notice_board_url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-4 py-2 rounded shadow hover:bg-red-700"
            >
              Notice Board
            </a>
          )}
          {regatta.entry_list_url && (
            <a
              href={regatta.entry_list_url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
            >
              Entry List
            </a>
          )}
          {regatta.online_entry_url && (
            <a
              href={regatta.online_entry_url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700"
            >
              Online Entry
            </a>
          )}
        </div>
      </div>
    </main>
  );
}
