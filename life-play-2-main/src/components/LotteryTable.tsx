
import { useState } from "react";

interface Participant {
  name: string;
  numbers: number[];
}

const LotteryTable = () => {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [name, setName] = useState("");

  const availableNumbers = Array.from({ length: 100 }, (_, i) => i + 1);

  const addParticipant = () => {
    if (!name) return;
    const numbers = [];
    for (let i = 0; i < 2; i++) {
      const randomIndex = Math.floor(Math.random() * availableNumbers.length);
      numbers.push(availableNumbers[randomIndex]);
    }
    setParticipants([...participants, { name, numbers }]);
    setName("");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Sorteio Mensal</h2>
      <div className="grid grid-cols-2 gap-8 mb-8">
        <div className="bg-postit-yellow p-4 rounded-lg">
          <h3 className="text-lg font-medium mb-4">Tabela 1</h3>
          <div className="grid grid-cols-5 gap-2">
            {Array.from({ length: 50 }, (_, i) => (
              <div key={i} className="aspect-square flex items-center justify-center border rounded">
                {i + 1}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-postit-pink p-4 rounded-lg">
          <h3 className="text-lg font-medium mb-4">Tabela 2</h3>
          <div className="grid grid-cols-5 gap-2">
            {Array.from({ length: 50 }, (_, i) => (
              <div key={i} className="aspect-square flex items-center justify-center border rounded">
                {i + 51}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Seu nome"
          className="flex-1 p-2 border rounded"
        />
        <button
          onClick={addParticipant}
          className="px-4 py-2 bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity"
        >
          Participar
        </button>
      </div>
      <div className="border rounded p-4">
        <h3 className="text-lg font-medium mb-4">Participantes</h3>
        <div className="space-y-2">
          {participants.map((participant, index) => (
            <div key={index} className="flex justify-between items-center">
              <span>{participant.name}</span>
              <span>Números: {participant.numbers.join(", ")}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LotteryTable;
