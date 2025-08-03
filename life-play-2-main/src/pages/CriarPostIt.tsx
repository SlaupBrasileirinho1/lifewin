import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Check, StickyNote, List } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { addPostIt, createPostItTable, testConnection } from "@/lib/db";

const CriarPostIt = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [dbStatus, setDbStatus] = useState<'connecting' | 'connected' | 'error'>('connecting');
  const [formData, setFormData] = useState({
    titulo: "",
    descricao: "",
    participante: "",
    cor: "yellow"
  });
  
  // Testar conexão com o banco de dados e criar tabela se necessário
  useEffect(() => {
    const initializeDatabase = async () => {
      try {
        const connected = await testConnection();
        if (connected) {
          await createPostItTable();
          setDbStatus('connected');
        } else {
          setDbStatus('error');
        }
      } catch (error) {
        console.error('Erro ao inicializar banco de dados:', error);
        setDbStatus('error');
      }
    };
    
    initializeDatabase();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleColorChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      cor: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Verificar se o banco de dados está conectado
      if (dbStatus !== 'connected') {
        toast({
          title: "Erro de conexão",
          description: "Não foi possível conectar ao banco de dados. Tente novamente mais tarde.",
          variant: "destructive"
        });
        setIsLoading(false);
        return;
      }
      
      // Salvar o post-it no banco de dados
      const result = await addPostIt(formData);
      
      toast({
        title: "Post-it criado com sucesso!",
        description: `O post-it "${formData.titulo}" foi adicionado ao banco de dados.`,
        variant: "default"
      });
      
      // Limpar o formulário
      setFormData({
        titulo: "",
        descricao: "",
        participante: "",
        cor: "yellow"
      });
      
      // Redirecionar para a página de listar post-its
      navigate("/listar-post-its");
    } catch (error) {
      console.error('Erro ao salvar post-it:', error);
      toast({
        title: "Erro ao criar post-it",
        description: "Ocorreu um erro ao salvar os dados. Tente novamente mais tarde.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const colorOptions = [
    { value: "yellow", label: "Amarelo", bgClass: "bg-yellow-200" },
    { value: "blue", label: "Azul", bgClass: "bg-blue-200" },
    { value: "green", label: "Verde", bgClass: "bg-green-200" },
    { value: "pink", label: "Rosa", bgClass: "bg-pink-200" },
    { value: "purple", label: "Roxo", bgClass: "bg-purple-200" }
  ];

  return (
    <div className="min-h-screen bg-secondary p-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center justify-center mb-8">
            <StickyNote className="h-8 w-8 text-primary mr-3" />
            <h1 className="text-3xl font-bold">Criar Post-it</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="titulo" className="text-base font-medium">Título da Meta</Label>
              <Input
                id="titulo"
                name="titulo"
                value={formData.titulo}
                onChange={handleChange}
                placeholder="Ex: Ler 10 livros este ano"
                className="mt-1"
                required
              />
            </div>

            <div>
              <Label htmlFor="descricao" className="text-base font-medium">Descrição</Label>
              <Textarea
                id="descricao"
                name="descricao"
                value={formData.descricao}
                onChange={handleChange}
                placeholder="Descreva sua meta em detalhes..."
                className="mt-1"
                rows={4}
                required
              />
            </div>

            <div>
              <Label htmlFor="participante" className="text-base font-medium">Nome do Participante</Label>
              <Input
                id="participante"
                name="participante"
                value={formData.participante}
                onChange={handleChange}
                placeholder="Seu nome completo"
                className="mt-1"
                required
              />
            </div>

            <div>
              <Label className="text-base font-medium">Cor do Post-it</Label>
              <RadioGroup
                value={formData.cor}
                onValueChange={handleColorChange}
                className="grid grid-cols-5 gap-2 mt-2"
              >
                {colorOptions.map((color) => (
                  <div key={color.value} className="flex flex-col items-center">
                    <div className="relative">
                      <RadioGroupItem
                        value={color.value}
                        id={`color-${color.value}`}
                        className="sr-only"
                      />
                      <Label
                        htmlFor={`color-${color.value}`}
                        className={`${color.bgClass} h-12 w-12 rounded-md cursor-pointer flex items-center justify-center border-2 ${formData.cor === color.value ? 'border-primary' : 'border-transparent'}`}
                      >
                        {formData.cor === color.value && (
                          <Check className="h-6 w-6 text-primary" />
                        )}
                      </Label>
                    </div>
                    <span className="text-xs mt-1">{color.label}</span>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="pt-4">
              <div className="flex w-full gap-4">
              <Button 
                type="submit" 
                className="flex-1" 
                disabled={isLoading || dbStatus !== 'connected'}
              >
                {isLoading ? "Salvando..." : "Criar Post-it Vencedor"}
              </Button>
              
              <Button 
                type="button" 
                variant="outline" 
                className="flex-none"
                asChild
              >
                <Link to="/listar-post-its">
                  <List className="mr-2 h-5 w-5" />
                  Ver Post-its
                </Link>
              </Button>
            </div>
              
              {dbStatus === 'connecting' && (
                <p className="text-sm text-amber-500 mt-2 text-center">Conectando ao banco de dados...</p>
              )}
              
              {dbStatus === 'error' && (
                <p className="text-sm text-red-500 mt-2 text-center">
                  Erro ao conectar ao banco de dados. Verifique a conexão e tente novamente.
                </p>
              )}
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Crie seu post-it, complete suas metas e ganhe pontos no ranking!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CriarPostIt;