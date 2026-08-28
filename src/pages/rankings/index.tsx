import { RankTable } from '@/features/RanksTable/container/RanksTable';

export const RankingsPage = () => (
  <div className="flex justify-center p-5 pb-24 sm:pb-8">
    <RankTable floating={false} />
  </div>
);
