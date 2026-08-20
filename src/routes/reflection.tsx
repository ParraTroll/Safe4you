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
    q: "What's one thing I've learned about digital wellbeing?",
    a: "The biggest thing I learned is that cyber security is mostly about people, not computers. Before this unit I assumed getting hacked meant someone had broken through complicated code. Researching it showed me that the overwhelming majority of attacks on young people are social — a message designed to make you panic, a fake login page, a 'friend' asking for a code. That completely changed how I see my own risk: I do not need to be a tech expert to be safe, I need to be someone who pauses before reacting.",
  },
  {
    icon: Repeat,
    q: "What's one digital habit I'd like to improve or change?",
    a: "I want to stop reusing the same two passwords across almost every account. It felt harmless because remembering unique passwords seemed impossible, but I now understand that one leaked password effectively unlocks everything else I own. My plan is to move my important accounts — email, banking, socials and school — onto unique passphrases stored in a password manager, and to switch on two-factor authentication for each one. I also want to break the habit of opening links straight from notifications late at night.",
  },
  {
    icon: Sparkles,
    q: "How could this change benefit my health and wellbeing?",
    a: "Practically, it protects my accounts, my money and my private conversations. Emotionally, the benefit is bigger: a lot of stress online comes from the fear of losing control — being locked out, having something private shared, or being scammed and having to explain it. Knowing my accounts are properly secured takes that background worry away. It also means I can enjoy being online, keep up friendships and use technology for school without that low-level anxiety following me around.",
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
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground">
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
