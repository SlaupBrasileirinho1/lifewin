import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria implementada a lógica para enviar o formulário
    alert("Mensagem enviada com sucesso!");
    setFormData({ nome: "", email: "", mensagem: "" });
  };

  return (
    <div className="min-h-screen bg-secondary p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-2">Entre em Contato</h1>
          <p className="text-muted-foreground">Estamos aqui para ajudar você a alcançar suas metas</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-6">Envie uma mensagem</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium mb-1">Nome</label>
                <Input 
                  id="nome" 
                  name="nome" 
                  value={formData.nome} 
                  onChange={handleChange} 
                  placeholder="Seu nome completo" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  placeholder="seu.email@exemplo.com" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium mb-1">Mensagem</label>
                <Textarea 
                  id="mensagem" 
                  name="mensagem" 
                  value={formData.mensagem} 
                  onChange={handleChange} 
                  placeholder="Digite sua mensagem aqui..." 
                  rows={5} 
                  required 
                />
              </div>
              
              <Button type="submit" className="w-full">
                <Send className="mr-2 h-4 w-4" /> Enviar mensagem
              </Button>
            </form>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-6">Informações de contato</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-primary mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">contato@lifewin.com.br</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-primary mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium">Telefone</h3>
                  <p className="text-muted-foreground">(11) 99999-9999</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-primary mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium">Endereço</h3>
                  <p className="text-muted-foreground">
                    Av. Paulista, 1000 - Bela Vista<br />
                    São Paulo - SP, 01310-100<br />
                    Brasil
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-primary/5 rounded-lg">
              <h3 className="font-medium mb-2">Horário de atendimento</h3>
              <p className="text-sm text-muted-foreground">
                Segunda a Sexta: 9h às 18h<br />
                Sábado: 9h às 13h<br />
                Domingo e Feriados: Fechado
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contato;