import { createFileRoute } from "@tanstack/react-router";
import { Lightbulb, Repeat, Sparkles } from "lucide-react";
import { Layout, PageHeader } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/reflection")({
  head: () => ({
    meta: [
      { title: "Personal Reflection on Digital Wellbeing | Safe4you" },
      {
        name: "description",
        content:
          "Personal reflections on what we learned about online safety, the digital habit we want to change, and how it will benefit our health and wellbeing.",
      },
      { property: "og:title", content: "Personal Reflection | Safe4you" },
      {
        property: "og:description",
        content: "What we learned, what we'll change, and why it matters for wellbeing.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Reflection,
});

const ENTRIES = [
  {
    icon: Lightbulb,
    q: "Personal Reflection: Ibrahim Mollah",
    a: "Honestly, this project has taught me one big thing: that the internet can be one scary place, but there are ways of protecting yourself, like how we mentioned two-factor authentication, it crazy how just making a login two steps instead of one can improve account security leaps and bounds! If I’m going to take anything away from this project, it’s that I'm going to now have two-factor authentication on everything I own. I really think with this, past the fact that my account security will be upgraded, ill have more peace of mind, knowing that my accounts are all safe.",
  },
  {
    icon: Repeat,
    q: "Personal Reflection: Zaid Munir",
    a: "This project has taught me definitely taught me about digital well-being; the biggest thing in my opinion, is maintaining your online presence. From making sure you aren’t posting personal identifying information carelessly, possibly exposing yourself to who knows who- predators, bullies and whatnot. If I’m going to learn anything, it’s most definitely that I will not be posting anything personal online. Of course, I’m going to still post, but I’ll monitor what I post, who can see and what it reveals. This mindset will surely improve my overall well-being and happiness, knowing I’m putting in the right precautions to ensure random strangers don’t know where I live or go to school.",
  },
  {
    icon: Sparkles,
    q: "Personal Reflection: Abdullah Ibn Usman ",
    a: "This was an amazing project; I enjoyed it. If I’m going to learn anything from it, it 100% would be that you should really check what links you're pressing online, even if it’s from friends. Me especially, I sometimes do press on shady links; luckily nothing's happened yet. I'm smart enough not to put my personal information in, but from now on, if it’s really shady, I’m not even going to risk it. I’m 100% sure that by doing this, I won't have to worry ever again about my accounts getting hacked by pressing a shady link; this will definitely give me some peace of mind.",
  },
];

function Reflection() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Personal Reflection"
        title="What This Project Changed for Us"
        subtitle="Three honest answers about learning, habits and wellbeing."
      />

      <div className="mx-auto max-w-3xl space-y-6 px-5">
        {ENTRIES.map((e, i) => (
          <Reveal key={e.q} delay={i * 100}>
            <article className="rounded-3xl glass p-7 sm:p-9">
              <div className="flex items-center gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <e.icon className="size-5" />
                </span>
                <h2 className="text-xl font-bold text-balance">{e.q}</h2>
              </div>
              <p className="mt-5 leading-relaxed text-pretty text-muted-foreground">{e.a}</p>
            </article>
          </Reveal>
        ))}

        <Reveal delay={320}>
          <div className="rounded-3xl border border-dashed border-primary/50 bg-primary/5 p-8 text-center">
            <p className="text-lg font-semibold">
              Our one-line takeaway: staying safe online is a habit, not a setting you switch on
              once.
            </p>
          </div>
        </Reveal>
      </div>
    </Layout>
  );
}
