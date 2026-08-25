import { useMediaDevice } from '@/hooks/useMediaDevice';
import { useState } from 'react';
import {
  useActivityMonitor,
  type StudentRowType,
} from '../hooks/useActivityMonitor';
import type { Atividade } from '@/data/types/api';
import { MonitorHeader } from '../../components/MonitorHeader';
import { SummaryCards } from '../../components/SummaryCards';
import { QuestionsAccordion } from '../../components/QuestionsAccordion';
import { StudentsTable } from '../../components/StudentsTable';
import { AttemptDialog } from '../../components/AttemptDialog';

type MonitoramentoContentPropsType = {
  activity: Atividade;
};

export const MonitoramentoContent = ({
  activity,
}: MonitoramentoContentPropsType) => {
  const { containerClassName } = useMediaDevice();
  const [selectedStudent, setSelectedStudent] =
    useState<StudentRowType | null>(null);
  const {
    classSize,
    submissions,
    totalXp,
    averageScore,
    averageAccuracy,
    questionStats,
    studentRows,
  } = useActivityMonitor(activity);

  const hardestQuestion = [...questionStats].sort(
    (a, b) => a.accuracyPercent - b.accuracyPercent
  )[0]?.number;

  return (
    <div className="flex flex-col h-dvh overflow-hidden">
      <MonitorHeader activity={activity} totalXp={totalXp} />

      <div
        className={`flex-1 min-h-0 overflow-y-auto custom-bar space-y-6 pb-20 ${containerClassName}`}
      >
        <SummaryCards
          submissions={submissions}
          classSize={classSize}
          averageAccuracy={averageAccuracy}
          averageScore={averageScore}
          hardestQuestion={hardestQuestion}
        />
        <QuestionsAccordion questionStats={questionStats} />
        <StudentsTable
          activity={activity}
          rows={studentRows}
          onSelectStudent={setSelectedStudent}
        />
      </div>

      <AttemptDialog
        activity={activity}
        row={selectedStudent}
        onClose={() => setSelectedStudent(null)}
      />
    </div>
  );
};
