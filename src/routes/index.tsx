import { createFileRoute } from "@tanstack/react-router";
import { CheckPage } from "@/components/analyzer/check-page";
import { SiteShell } from "@/components/site-shell";

type Search = {
  sample?: string;
};

export const Route = createFileRoute("/")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    sample: typeof search.sample === "string" ? search.sample : undefined,
  }),
  component: Home,
});

function Home() {
  const { sample } = Route.useSearch();
  return (
    <SiteShell current="check">
      <CheckPage sampleId={sample} />
    </SiteShell>
  );
}
