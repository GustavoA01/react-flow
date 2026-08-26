import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { cn } from '@/lib/utils';
import type { AtividadeType } from '@/data/types/api';
import type { StudentRowType } from '../features/hooks/useActivityMonitor';

type StudentsTablePropsType = {
  activity: AtividadeType;
  rows: StudentRowType[];
  onSelectStudent: (row: StudentRowType) => void;
};

export const StudentsTable = ({
  activity,
  rows,
  onSelectStudent,
}: StudentsTablePropsType) => (
  <section>
    <h2 className="font-fredoka text-lg font-semibold text-primary-dark mb-3">
      Por aluno
    </h2>
    <div className="rounded-xl border bg-white shadow-sm">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="pl-4">Aluno</TableHead>
            {activity.questoes.map((_, index) => (
              <TableHead key={index} className="text-center">
                Q{index + 1}
              </TableHead>
            ))}
            <TableHead className="pr-4 text-right">Pontos</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.student.id}>
              <TableCell className="pl-4">
                {row.attempt ? (
                  <button
                    type="button"
                    onClick={() => onSelectStudent(row)}
                    className="font-semibold text-primary hover:underline"
                  >
                    {row.student.nome}
                  </button>
                ) : (
                  <span className="text-zinc-400">{row.student.nome}</span>
                )}
              </TableCell>
              {row.answersByQuestion.map((letter, index) => {
                const question = activity.questoes[index];
                const correctIndex = question.alternativas.findIndex(
                  (alternative) => alternative.correta
                );
                const correctLetter = String.fromCharCode(65 + correctIndex);
                const isCorrect = letter === correctLetter;

                return (
                  <TableCell
                    key={question.id}
                    className={cn(
                      'text-center font-semibold',
                      !letter && 'text-zinc-300',
                      letter && isCorrect && 'text-green-600',
                      letter && !isCorrect && 'text-orange-600'
                    )}
                  >
                    {letter ?? '—'}
                  </TableCell>
                );
              })}
              <TableCell className="pr-4 text-right font-semibold text-zinc-600">
                {row.attempt ? row.attempt.pontuacaoObtida : '—'}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
    <p className="mt-2 text-xs text-zinc-400">
      Toque no nome para ver o gabarito ao lado do que o aluno marcou.
    </p>
  </section>
);
