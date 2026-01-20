import { createFileRoute } from "@tanstack/react-router";

const MedalsPage = () => {
  return <div>Medalhas</div>;
};

export const Route = createFileRoute("/medalhas/")({ component: MedalsPage });
