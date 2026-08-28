import { CourseSharedHeader } from './Header/CourseSharedHeader';

export const ResourceNotFound = ({ label }: { label: string }) => (
  <div className="flex h-dvh flex-col">
    <header className="bg-blue-puc px-4 pt-4 pb-8 sm:px-8 sm:pt-8">
      <CourseSharedHeader />
    </header>
    <p className="mt-8 text-center font-semibold text-zinc-500">{label}</p>
  </div>
);
