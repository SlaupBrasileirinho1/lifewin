
import { useState } from "react";
import PostIt from "@/components/PostIt";
import ProgressTracker from "@/components/ProgressTracker";
import LotteryTable from "@/components/LotteryTable";
import { Plus } from "lucide-react";

const activities = [
  {
    name: "Leitura",
    progress: [30, 45, 60, 75, 90, 85, 95],
  },
  {
    name: "Exercícios",
    progress: [20, 35, 40, 55, 70, 80, 85],
  },
  {
    name: "Meditação",
    progress: [10, 25, 35, 50, 65, 70, 75],
  },
];

const Index = () => {
  const [postIts, setPostIts] = useState([
    { id: 1, content: "Minha primeira meta!", color: "yellow" as const },
  ]);

  const colors = ["yellow", "pink", "blue", "green"] as const;

  const addPostIt = () => {
    const color = colors[Math.floor(Math.random() * colors.length)];
    setPostIts([
      ...postIts,
      {
        id: Date.now(),
        content: "Nova meta...",
        color,
      },
    ]);
  };

  const deletePostIt = (id: number) => {
    setPostIts(postIts.filter((postIt) => postIt.id !== id));
  };

  return (
    <div className="min-h-screen bg-secondary p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-primary-foreground mb-2">Life Play</h1>
          <p className="text-secondary-foreground">Transforme suas metas em conquistas</p>
        </header>

        <section className="bg-white rounded-lg p-6 shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Minhas Metas</h2>
            <button
              onClick={addPostIt}
              className="p-2 bg-primary rounded-full hover:opacity-90 transition-opacity"
            >
              <Plus size={24} />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {postIts.map((postIt) => (
              <PostIt
                key={postIt.id}
                initialContent={postIt.content}
                color={postIt.color}
                onDelete={() => deletePostIt(postIt.id)}
              />
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Meu Progresso</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <ProgressTracker key={index} activity={activity} />
            ))}
          </div>
        </section>

        <section>
          <LotteryTable />
        </section>
      </div>
    </div>
  );
};

export default Index;
