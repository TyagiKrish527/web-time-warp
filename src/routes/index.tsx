import { createFileRoute } from "@tanstack/react-router";
import { TimeMachine } from "@/components/time-machine/TimeMachine";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Internet Time Machine — Travel Through the Web" },
      { name: "description", content: "Explore the changing design, technology and culture of the internet from 1990 to a speculative 2050." },
      { property: "og:title", content: "Internet Time Machine" },
      { property: "og:description", content: "Travel through the evolution of the web in an interactive digital archive." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TimeMachine,
});
