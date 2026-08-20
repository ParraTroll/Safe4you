import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Fingerprint, KeyRound, Lock, ShieldAlert, Wifi } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import staySafeKeyboard from "@/assets/stay-safe-keyboard.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Safe4you | Online Safety & Security for Young People" },
      {
        name: "description",
        content:
          "Safe4you is a Year 9 digital wellbeing site helping teens stay safe online with strong passwords, scam spotting, privacy tips and interactive tools.",
      },
      { property: "og:title", content: "Safe4you | Online Safety & Security" },
      {
        property: "og:description",
        content: "Interactive guide to staying safe and secure online, made for young people.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const PILLARS = [
  {
    icon: KeyRound,
    title: "Strong Passwords",
    text: "Long passphrases plus two-factor authentication stop almost every basic account takeover.",
  },
  {
    icon: ShieldAlert,
    title: "Scam Spotting",
    text: "Urgency, prizes and weird links are the three biggest giveaways of a phishing message.",
  },
  {
    icon: Lock,
    title: "Privacy Settings",
    text: "Locking down who can see your posts, location and friend list shrinks your risk fast.",
  },
  {
    icon: Wifi,
    title: "Safe Networks",
    text: "Free public Wi-Fi is convenient — but never bank, shop or log in to anything important on it.",
  },
  {
    icon: Fingerprint,
    title: "Your Digital Identity",
    text: "Once personal details are out there, they are almost impossible to take back.",
  },
];

const TEAM = ["Ibrahim Mollah", "Abdullah Ibn Usman", "Zaid Munir"];

function Home() {
  return (
    <Layout>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pt-16 pb-20 lg:grid-cols-2 lg:pt-24">
          <div>
            <h1
              className="animate-rise text-5xl font-extrabold text-balance sm:text-6xl"
              style={{ animationDelay: "80ms" }}
            >
              Safe<span className="text-gradient">4you</span> - Online Safety
            </h1>
            <p
              className="animate-rise mt-5 max-w-xl text-lg text-pretty text-muted-foreground"
              style={{ animationDelay: "160ms" }}
            >
              A practical guide to online safety and cyber security for young people — how to lock
              down your accounts, spot scams before they hook you, and stay in control of your
              digital life.
            </p>

            <div
              className="animate-rise mt-8 flex flex-wrap gap-3"
              style={{ animationDelay: "240ms" }}
            >
              <Link
                to="/quiz"
                className="group inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-6 py-3 font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
              >
                Test your safety score
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/feature"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-semibold text-foreground transition-colors hover:bg-secondary/60"
              >
                Read the feature article
              </Link>
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Created by:</span> {TEAM.join(" · ")}
            </p>
          </div>

          <Reveal className="relative">
            <div className="overflow-hidden rounded-3xl glass transition-transform duration-500 hover:animate-float hover:scale-[1.02]">
              <img
                src={staySafeKeyboard.url}
                alt="Brass key resting on a laptop keyboard above a green STAY SAFE key"
                width={1920}
                height={1280}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="rounded-3xl glass p-8 sm:p-10">
            <h2 className="text-3xl font-bold">Why online safety matters</h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Almost everything we do — school work, friendships, music, games, money — now runs
              through a screen. That convenience comes with real risk: scam messages, hacked
              accounts, data leaks and strangers who are not who they claim to be. Being targeted
              online is not just a technical problem; losing an account, having private photos
              shared or being scammed causes genuine stress, embarrassment and anxiety.
            </p>
            <p className="mt-4 text-pretty text-muted-foreground">
              The good news is that cyber security is a skill, not a talent. A few habits — unique
              passwords, two-factor authentication, tight privacy settings and a healthy pause
              before clicking — block the overwhelming majority of attacks that target teenagers.
              This site walks you through those habits, with real facts, real advice and
              interactive tools to practise on.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-16">
        <h2 className="text-center text-3xl font-bold">Five pillars of staying secure</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <article className="group h-full rounded-2xl glass p-6 transition-transform duration-300 hover:-translate-y-1.5">
                <span className="grid size-12 place-items-center rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground transition-transform duration-300 group-hover:rotate-6">
                  <p.icon className="size-6" />
                </span>
                <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
              </article>
            </Reveal>
          ))}
          <Reveal delay={400}>
            <Link
              to="/advice"
              className="flex h-full flex-col justify-between rounded-2xl border border-dashed border-primary/50 bg-primary/5 p-6 transition-colors hover:bg-primary/10"
            >
              <h3 className="text-xl font-semibold">Got a question?</h3>
              <span className="mt-4 inline-flex items-center gap-2 font-semibold text-primary">
                Ask the Cyber Guardian <ArrowRight className="size-4" />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
