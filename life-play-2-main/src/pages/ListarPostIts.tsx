import { useState, useEffect } from "react";
import { getAllPostIts } from "@/lib/db";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StickyNote, RefreshCw, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

type PostIt = {
  id: number;
  titulo: string;
  descricao: string;
  participante: string;
  cor: string;
  created_at: string;
};

const ListarPostIts = () => {
  const [postIts, setPostIts] = useState<PostIt[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPostIts = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getAllPostIts();
      setPostIts(data);
    } catch (err) {
      console.error("Erro ao buscar post-its:", err);
      setError("Não foi possível carregar os post-its. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPostIts();
  }, []);

  const getColorClass = (cor: string) => {
    switch (cor) {
      case "yellow":
        return "bg-yellow-200 border-yellow-400";
      case "blue":
        return "bg-blue-200 border-blue-400";
      case "green":
        return "bg-green-200 border-green-400";
      case "pink":
        return "bg-pink-200 border-pink-400";
      case "purple":
        return "bg-purple-200 border-purple-400";
      default:
        return "bg-yellow-200 border-yellow-400";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-secondary p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <StickyNote className="h-8 w-8 text-primary mr-3" />
            <h1 className="text-3xl font-bold">Post-its Salvos</h1>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" onClick={fetchPostIts} disabled={loading}>
              <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
              Atualizar
            </Button>
            <Button asChild>
              <Link to="/criar-post-it">
                <StickyNote className="h-4 w-4 mr-2" />
                Novo Post-it
              </Link>
            </Button>
          </div>
        </div>

        {error && (
          <div className="bg-destructive/10 text-destructive p-4 rounded-md mb-6 flex items-center">
            <AlertCircle className="h-5 w-5 mr-2" />
            {error}
          </div>
        )}

        {loading ? (
          <div className="text-center py-12">
            <RefreshCw className="h-8 w-8 animate-spin mx-auto mb-4 text-primary" />
            <p>Carregando post-its...</p>
          </div>
        ) : postIts.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <StickyNote className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-xl font-semibold mb-2">Nenhum post-it encontrado</h2>
            <p className="text-muted-foreground mb-6">Comece criando seu primeiro post-it!</p>
            <Button asChild>
              <Link to="/criar-post-it">Criar Post-it</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {postIts.map((postIt) => (
              <Card 
                key={postIt.id} 
                className={`${getColorClass(postIt.cor)} border-2 shadow-md hover:shadow-lg transition-shadow`}
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">{postIt.titulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="whitespace-pre-wrap mb-4">{postIt.descricao}</p>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>Por: {postIt.participante}</span>
                    <span>{formatDate(postIt.created_at)}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ListarPostIts;