import type { Curso, Usuario } from "@/data/types/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useCursos = (isAluno: boolean, user: Usuario) => {
  const navigate = useNavigate();
  const [openCodeDialog, setOpenCodeDialog] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Curso | null>(null);

  const isLocked = (cursoId: string) =>
    isAluno && !user.cursoIds.includes(cursoId);

  const openCourse = (curso: Curso) => navigate(`/cursos/${curso.id}`);

  const handleCourseClick = (curso: Curso) => {
    if (!isLocked(curso.id)) {
      openCourse(curso);
      return;
    }
    setSelectedCourse(curso);
    setOpenCodeDialog(true);
  };

  const handleCodeSubmit = (code: string) => {
    if (!selectedCourse) return 'Curso não encontrado';
    if (code.toUpperCase() !== selectedCourse.codigoAcesso.toUpperCase()) {
      return 'Código inválido';
    }
    openCourse(selectedCourse);
  };

  return {
    openCodeDialog,
    setOpenCodeDialog,
    isLocked,
    handleCourseClick,
    handleCodeSubmit,
  };
}