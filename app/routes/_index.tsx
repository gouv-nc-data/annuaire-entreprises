import type { MetaFunction } from "@remix-run/node";

import { Button } from "~/components/ui/button"

export const meta: MetaFunction = () => {
  return [
    { title: "Annuaire entreprise | Site" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <h1>Annuaire entreprise</h1>
      <Button>Click me</Button>
    </div>
  );
}
