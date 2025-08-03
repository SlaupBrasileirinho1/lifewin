import { Award, Target, Heart, Users } from "lucide-react";

const Sobre = () => {
  const teamMembers = [
    {
      name: "Ana Silva",
      role: "Fundadora & CEO",
      bio: "Especialista em produtividade e desenvolvimento pessoal com mais de 10 anos de experiência."
    },
    {
      name: "Carlos Mendes",
      role: "Desenvolvedor Chefe",
      bio: "Programador full-stack com paixão por criar interfaces intuitivas e experiências de usuário excepcionais."
    },
    {
      name: "Juliana Ferreira",
      role: "Designer UX/UI",
      bio: "Designer criativa focada em criar experiências visuais atraentes e funcionais para os usuários."
    },
    {
      name: "Ricardo Torres",
      role: "Especialista em Gamificação",
      bio: "Especialista em transformar tarefas cotidianas em experiências envolventes e motivadoras."
    }
  ];

  return (
    <div className="min-h-screen bg-secondary p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-2">Sobre o Life Win</h1>
          <p className="text-muted-foreground">Transformando metas em conquistas desde 2023</p>
        </header>

        {/* Missão, Visão e Valores */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center">Nossa Missão</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Missão</h3>
              <p className="text-muted-foreground">
                Ajudar pessoas a transformarem suas metas em conquistas reais através de ferramentas simples e motivadoras.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Visão</h3>
              <p className="text-muted-foreground">
                Ser a plataforma de referência em gestão de metas pessoais, reconhecida pela simplicidade e eficácia.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Valores</h3>
              <p className="text-muted-foreground">
                Simplicidade, motivação, persistência, celebração de conquistas e melhoria contínua.
              </p>
            </div>
          </div>
        </section>

        {/* Nossa História */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Nossa História</h2>
          
          <p className="mb-4">
            O Life Win nasceu da necessidade de transformar a maneira como as pessoas lidam com suas metas e objetivos pessoais. 
            Fundado em 2023, nosso aplicativo combina a simplicidade dos post-its tradicionais com elementos de gamificação para 
            tornar o processo de alcançar objetivos mais divertido e motivador.
          </p>
          
          <p className="mb-4">
            Nossa abordagem única de transformar metas em um jogo com recompensas e reconhecimento tem ajudado milhares de 
            pessoas a manterem o foco e a motivação necessários para conquistar seus objetivos, sejam eles pessoais ou profissionais.
          </p>
          
          <p>
            Hoje, continuamos evoluindo nossa plataforma com base no feedback dos usuários, sempre mantendo nosso compromisso 
            com a simplicidade e a eficácia, porque acreditamos que grandes conquistas começam com pequenos passos consistentes.
          </p>
        </section>

        {/* Nossa Equipe */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center justify-center mb-8">
            <Users className="h-6 w-6 text-primary mr-2" />
            <h2 className="text-2xl font-bold">Nossa Equipe</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-primary text-sm mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sobre;