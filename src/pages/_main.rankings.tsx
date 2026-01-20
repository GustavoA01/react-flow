import { RankTable } from "@/features/RanksTable/container/RanksTable";
import { createFileRoute } from "@tanstack/react-router";

const Rankings = () => {
  return (
    <div className="flex justify-center">
      <RankTable />
    </div>
  );
};

export const Route = createFileRoute("/_main/rankings")({
  component: Rankings,
});
