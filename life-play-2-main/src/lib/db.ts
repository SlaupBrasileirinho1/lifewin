// Simulação de banco de dados para o frontend
// Isso é necessário porque a biblioteca pg não funciona diretamente no navegador

// Tipo para os post-its
type PostIt = {
  id: number;
  titulo: string;
  descricao: string;
  participante: string;
  cor: string;
  created_at: string;
};

// Array para simular o armazenamento de dados
let postItsStorage: PostIt[] = [];

// Contador para simular IDs autoincrementais
let idCounter = 1;

// Função para testar a conexão com o banco de dados (simulada)
export const testConnection = async () => {
  try {
    // Simulando um pequeno atraso para parecer uma conexão real
    await new Promise(resolve => setTimeout(resolve, 500));
    console.log('Conexão com o banco de dados simulado estabelecida com sucesso!');
    return true;
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados simulado:', error);
    return false;
  }
};

// Função para criar a tabela de post-its (simulada)
export const createPostItTable = async () => {
  try {
    // Simulando um pequeno atraso para parecer uma operação real
    await new Promise(resolve => setTimeout(resolve, 300));
    console.log('Tabela post_its simulada inicializada com sucesso!');
    return true;
  } catch (error) {
    console.error('Erro ao inicializar tabela post_its simulada:', error);
    return false;
  }
};

// Função para adicionar um novo post-it (simulada)
export const addPostIt = async (postIt: {
  titulo: string;
  descricao: string;
  participante: string;
  cor: string;
}) => {
  try {
    // Simulando um pequeno atraso para parecer uma operação real
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const { titulo, descricao, participante, cor } = postIt;
    const now = new Date();
    
    const newPostIt: PostIt = {
      id: idCounter++,
      titulo,
      descricao,
      participante,
      cor,
      created_at: now.toISOString()
    };
    
    postItsStorage.push(newPostIt);
    return newPostIt;
  } catch (error) {
    console.error('Erro ao adicionar post-it:', error);
    throw error;
  }
};

// Função para obter todos os post-its (simulada)
export const getAllPostIts = async () => {
  try {
    // Simulando um pequeno atraso para parecer uma operação real
    await new Promise(resolve => setTimeout(resolve, 600));
    
    // Ordenando por data de criação (mais recentes primeiro)
    return [...postItsStorage].sort((a, b) => 
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
  } catch (error) {
    console.error('Erro ao obter post-its:', error);
    throw error;
  }
};

// Adicionando alguns post-its de exemplo para demonstração
const addExamplePostIts = async () => {
  if (postItsStorage.length === 0) {
    await addPostIt({
      titulo: "Bem-vindo ao Post-it Neon!",
      descricao: "Este é um exemplo de post-it. Você pode criar seus próprios post-its usando o formulário de criação.",
      participante: "Sistema",
      cor: "yellow"
    });
    
    await addPostIt({
      titulo: "Dica de uso",
      descricao: "Escolha diferentes cores para organizar seus post-its por categoria ou prioridade.",
      participante: "Sistema",
      cor: "blue"
    });
  }
};

// Inicializa os exemplos
addExamplePostIts();