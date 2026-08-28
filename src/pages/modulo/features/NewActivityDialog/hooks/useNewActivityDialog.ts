import {
  newActivitySchema,
  type NewActivityFormType,
} from '@/data/schemas/activity';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

export const useNewActivityDialog = () => {
  const navigate = useNavigate();
  const { cursoId, moduloId } = useParams();

  const methods = useForm<NewActivityFormType>({
    resolver: zodResolver(newActivitySchema),
  });

  const handleNewActivity = (data: NewActivityFormType) => {
    const activityData = {
      activityName: data.activityName,
      qtdQuestions: data.qtdQuestions,
    };

    const oldActivityData = localStorage.getItem('newActivityData');
    if (oldActivityData) localStorage.removeItem('newActivityData');

    localStorage.setItem('newActivityData', JSON.stringify(activityData));
    navigate(`/cursos/${cursoId}/modulos/${moduloId}/nova-atividade`);
  };

  return { methods, handleNewActivity };
};
