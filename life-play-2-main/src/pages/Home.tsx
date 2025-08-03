import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Calendar, Award, BarChart3, Trophy, Info, Mail, Home as HomeIcon } from "lucide-react";

const Home = () => {
  // Navbar links
  const navLinks = [
    { title: "Início", href: "/", icon: <HomeIcon className="h-4 w-4 mr-1" /> },
    { title: "Ranking", href: "/ranking", icon: <Trophy className="h-4 w-4 mr-1" /> },
    { title: "Contato", href: "/contato", icon: <Mail className="h-4 w-4 mr-1" /> },
    { title: "Sobre", href: "/sobre", icon: <Info className="h-4 w-4 mr-1" /> },
  ];

  const features = [
    {
      title: "Defina Metas",
      description: "Crie e organize suas metas pessoais com post-its coloridos",
      icon: <Target className="h-8 w-8 text-primary" />,
    },
    {
      title: "Acompanhe Progresso",
      description: "Visualize seu progresso em atividades importantes",
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
    },
    {
      title: "Sorteios Mensais",
      description: "Participe de sorteios para aumentar sua motivação",
      icon: <Calendar className="h-8 w-8 text-primary" />,
    },
    {
      title: "Conquiste Recompensas",
      description: "Ganhe recompensas ao atingir suas metas",
      icon: <Award className="h-8 w-8 text-primary" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 to-secondary">
      {/* Navbar */}
      <nav className="bg-white/90 backdrop-blur-sm sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <span className="text-xl font-bold text-primary">Life Win</span>
              </Link>
            </div>
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="flex items-center text-sm font-medium text-gray-700 hover:text-primary transition-colors"
                >
                  {link.icon}
                  {link.title}
                </Link>
              ))}
            </div>
            <div className="md:hidden">
              {/* Mobile menu button would go here */}
              <button className="p-2 rounded-md text-gray-700 hover:text-primary">
                <span className="sr-only">Abrir menu</span>
                {/* Icon for menu */}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">Life Win</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Transforme suas metas em conquistas e torne-se um vencedor!
          </p>
          <p className="text-lg text-primary font-medium mb-8">
            Crie Post-its vencedores e alcance o topo do nosso ranking!
          </p>
          <Button asChild size="lg" className="rounded-full px-8">
            <Link to="/dashboard">
              Começar agora <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        {/* Features Section */}
        <div className="py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Como funciona</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="flex items-center justify-center pb-2">
                  {feature.icon}
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Ranking Preview Section */}
        <section className="py-12">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Ranking dos Vencedores</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="border-2 border-yellow-400 shadow-lg">
                <CardHeader className="pb-2 text-center">
                  <Trophy className="h-12 w-12 text-yellow-500 mx-auto" />
                  <CardTitle className="text-xl">1º Lugar</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="font-medium">Maria S.</p>
                  <p className="text-sm text-muted-foreground">125 pontos</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-gray-300 shadow-lg">
                <CardHeader className="pb-2 text-center">
                  <Trophy className="h-10 w-10 text-gray-400 mx-auto" />
                  <CardTitle className="text-lg">2º Lugar</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="font-medium">João P.</p>
                  <p className="text-sm text-muted-foreground">98 pontos</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-amber-600 shadow-lg">
                <CardHeader className="pb-2 text-center">
                  <Trophy className="h-8 w-8 text-amber-700 mx-auto" />
                  <CardTitle className="text-lg">3º Lugar</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="font-medium">Ana C.</p>
                  <p className="text-sm text-muted-foreground">87 pontos</p>
                </CardContent>
              </Card>
            </div>
            <div className="text-center">
              <Button asChild variant="outline">
                <Link to="/ranking">Ver ranking completo <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="py-16 text-center">
          <div className="bg-primary/10 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-4">Seja um vencedor!</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Crie seus Post-its, complete suas metas e ganhe pontos no ranking
            </p>
            <p className="font-medium text-primary-foreground mb-8">
              Quanto mais metas você completar, mais alto você chegará!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/criar-post-it">
                  Criar Post-it <Target className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/dashboard">
                  Acessar painel <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
              <Link to="/listar-post-its">
                <StickyNote className="mr-2 h-5 w-5" />
                Ver Post-its
              </Link>
            </Button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="py-8 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Life Play - Todos os direitos reservados</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;