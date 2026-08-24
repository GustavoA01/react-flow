export type TipoUsuario = 'ALUNO' | 'MONITOR';

type UsuarioBase = {
  id: string;
  nome: string;
  senha: string;
};

export type Aluno = UsuarioBase & {
  tipo: 'ALUNO';
  apelido: string;
  pontos: number;
  imagemPerfil: string;
  cursoIds: string[];
  medalhas: Medalha[];
};

export type Monitor = UsuarioBase & {
  tipo: 'MONITOR';
  cursoIds: string[];
};

export type Usuario = Aluno | Monitor;

export type Medalha = {
  id: string;
  imagemUrl: string;
  pontosMin: number;
};

export type Curso = {
  id: string;
  nome: string;
  codigoAcesso: string;
  modulos: Modulo[];
};

export type Modulo = {
  id: string;
  nome: string;
  cursoId: string;
  atividades: Atividade[];
};

export type Atividade = {
  id: string;
  titulo: string;
  quantQuestoes: number;
  moduloId: string;
  questoes: Questao[];
};

export type Questao = {
  id: string;
  enunciado: string;
  valor: number;
  alternativas: Alternativa[];
};

export type Alternativa = {
  id: string;
  descricao: string;
  correta: boolean;
};

export type Tentativa = {
  id: string;
  dataEnvio: string;
  pontuacaoObtida: number;
  alunoId: string;
  atividadeId: string;
  respostas: Resposta[];
};

export type Resposta = {
  id: string;
  correta: boolean;
  questaoId: string;
  alternativaId: string;
};
