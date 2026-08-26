interface UsuarioBase {
  id: string;
  nome: string;
  senha: string;
  cursoIds: string[];
}

export interface Aluno extends UsuarioBase {
  tipo: 'ALUNO';
  apelido: string;
  pontos: number;
  imagemPerfil: string;
  medalhas: Medalha[];
}

export interface Monitor extends UsuarioBase {
  tipo: 'MONITOR';
}

export type Usuario = Aluno | Monitor;

export interface Medalha {
  id: string;
  imagemUrl: string;
  pontosMin: number;
}

export interface Curso {
  id: string;
  nome: string;
  codigoAcesso: string;
  monitorId: string;
  modulos: Modulo[];
}

export interface Modulo {
  id: string;
  nome: string;
  cursoId: string;
  atividades: Atividade[];
}

export interface Atividade {
  id: string;
  titulo: string;
  quantQuestoes: number;
  moduloId: string;
  questoes: Questao[];
}

export interface Questao {
  id: string;
  enunciado: string;
  valor: number;
  alternativas: Alternativa[];
}

export interface Alternativa {
  id: string;
  descricao: string;
  correta: boolean;
}

export interface Tentativa {
  id: string;
  dataEnvio: string;
  pontuacaoObtida: number;
  alunoId: string;
  atividadeId: string;
  respostas: Resposta[];
}

export interface Resposta {
  id: string;
  correta: boolean;
  questaoId: string;
  alternativaId: string;
}
