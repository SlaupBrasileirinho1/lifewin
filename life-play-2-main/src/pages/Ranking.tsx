import { Trophy } from "lucide-react";

const Ranking = () => {
  const topUsers = [
    { name: "Maria S.", points: 125, position: 1 },
    { name: "João P.", points: 98, position: 2 },
    { name: "Ana C.", points: 87, position: 3 },
    { name: "Carlos M.", points: 76, position: 4 },
    { name: "Fernanda L.", points: 65, position: 5 },
    { name: "Roberto A.", points: 58, position: 6 },
    { name: "Juliana T.", points: 52, position: 7 },
    { name: "Marcos V.", points: 47, position: 8 },
    { name: "Patrícia S.", points: 43, position: 9 },
    { name: "Ricardo N.", points: 39, position: 10 },
  ];

  return (
    <div className="min-h-screen bg-secondary p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center justify-center mb-8">
            <Trophy className="h-10 w-10 text-yellow-500 mr-4" />
            <h1 className="text-3xl font-bold">Ranking dos Vencedores</h1>
          </div>

          <div className="overflow-hidden rounded-lg border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50 border-b">
                  <th className="h-12 px-4 text-left align-middle font-medium">Posição</th>
                  <th className="h-12 px-4 text-left align-middle font-medium">Nome</th>
                  <th className="h-12 px-4 text-right align-middle font-medium">Pontos</th>
                </tr>
              </thead>
              <tbody>
                {topUsers.map((user) => (
                  <tr
                    key={user.position}
                    className={`border-b transition-colors hover:bg-muted/50 ${user.position <= 3 ? 'bg-amber-50' : ''}`}
                  >
                    <td className="p-4 align-middle">
                      <div className="flex items-center gap-2">
                        {user.position === 1 && <Trophy className="h-5 w-5 text-yellow-500" />}
                        {user.position === 2 && <Trophy className="h-5 w-5 text-gray-400" />}
                        {user.position === 3 && <Trophy className="h-5 w-5 text-amber-700" />}
                        <span className={user.position <= 3 ? 'font-bold' : ''}>{user.position}º</span>
                      </div>
                    </td>
                    <td className="p-4 align-middle">{user.name}</td>
                    <td className="p-4 align-middle text-right font-medium">{user.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground">Atualize suas metas e ganhe mais pontos para subir no ranking!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ranking;