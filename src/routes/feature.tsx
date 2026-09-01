import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Layout, PageHeader } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
const phishing = "/personal-data-phishing.png";
const nightPhone = "/night-phone.png";

export const Route = createFileRoute("/feature")({
  head: () => ({
    meta: [
      { title: "Feature Article: Why Cyber Security Matters for Teens | Safe4you" },
      {
        name: "description",
        content:
          "A feature article on scams, hacked accounts and data breaches affecting young Australians, with referenced statistics and practical protection steps.",
      },
      { property: "og:title", content: "Why Cyber Security Matters for Teens" },
      {
        property: "og:description",
        content: "Referenced facts on scams, breaches and account security for young people.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Feature,
});

function Counter({
  to,
  suffix = "",
  prefix = "",
}: {
  to: number;
  suffix?: string | undefined;
  prefix?: string | undefined;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      if (!entries[0]?.isIntersecting) return;
      obs.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / 1400, 1);
        setVal(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);

  return (
    <span ref={ref} className="text-gradient text-4xl font-extrabold tabular-nums sm:text-5xl">
      {prefix}
      {val.toLocaleString()}
      {suffix}
    </span>
  );
}

const STATS = [
  {
    value: 2000,
    prefix: "$",
    suffix: "m+",
    label: "Reported to Scamwatch in a single year",
    source: "Scamwatch / NASC, Targeting Scams report 2024",
  },
  {
    value: 44,
    suffix: "%",
    label: "Of young people have had a negative online experience",
    source: "eSafety Commissioner, Australia, 2024",
  },
  {
    value: 81,
    suffix: "%",
    label: "Of hacking-related breaches involve weak or stolen passwords",
    source: "Verizon Data Breach Investigations Report",
  },
];

function Feature() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Feature Article"
        title="Hooked in Ten Seconds: Why Cyber Security Matters for Teenagers"
        subtitle="Scammers do not need to be genius hackers. They just need you to be tired, rushed and holding a phone."
      />

      <article className="mx-auto max-w-3xl px-5">
        <Reveal>
          <figure className="overflow-hidden rounded-3xl glass">
            <img
              src={phishing}
              alt="A masked figure phishing for personal data across two laptops"
              width={1200}
              height={800}
              loading="lazy"
              className="w-full object-cover"
            />
            <figcaption className="px-5 py-3 text-sm text-muted-foreground">
              Phishing tricks people into handing over personal data by pretending to be someone or
              something trustworthy.
            </figcaption>
          </figure>
        </Reveal>

        <Reveal delay={80}>
          <p className="mt-8 text-lg leading-relaxed text-pretty">
            Most people envision cyber attacks as some sophisticated scheme, with a group of hooded people Infront of giant supercomputer, cracking at code. In reality, the attacks that hit young people the most often, are far more simple and personal, phising attacks. It could be like a message that a young person gets, saying your gaming account will be deleted, if you don't log into this website. Or a "friend" who's account has been hacked sends you a message with a promise or free money or game items. Or a free in game currency website asks you for your login info. Every one of these relies on a simple trick, making you feel a sense of urgency, making you act on impulse, not on thought. Often when a hacker finds a password, they'll try it everywhere, seeing if it works, often people reuse the same passwords for multiple sites, which can be very dangerous, because it often works. 

          </p>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-6 text-lg leading-relaxed text-pretty">
            The consequences are often not just limited to game items being lost, losing control of accounts can mean bad actors stealing money, viewing private messages, photos and seeing who's on your friends list, possibly making them their next victims. This loss can effect people mentally, causing a lack of sleep, anxiety and stress. There are 3 main habits which can aid you in ensuring that you don't fall prey to these attacks, having a unique password for each account, having two-factor authentication on (using a separate account to authenticate whether the person signing in is actually you) and actually thinking before you press on a link, who sent it to you, what it is and is it too good to be true? 

          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <div className="h-full rounded-2xl glass p-6 text-center">
                <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />
                <p className="mt-3 text-sm font-medium">{s.label}</p>
                <p className="mt-2 text-xs text-muted-foreground">Source: {s.source}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <figure className="mt-12 overflow-hidden rounded-3xl glass">
            <img
              src={nightPhone}
              alt="An adult scrolling on a phone in bed late at night"
              width={1200}
              height={800}
              loading="lazy"
              className="w-full object-cover"
            />
            <figcaption className="px-5 py-3 text-sm text-muted-foreground">
              Late-night scrolling is when people are most likely to click without thinking.
            </figcaption>
          </figure>
        </Reveal>

        <Reveal>
          <section className="mt-12 rounded-3xl glass p-8">
            <h2 className="text-2xl font-bold">References</h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                National Anti-Scam Centre (2024). <em>Targeting Scams: Report on scam activity</em>.
                Australian Competition and Consumer Commission. scamwatch.gov.au
              </li>
              <li>
                eSafety Commissioner (2024). <em>Young people's experiences online</em>. Australian
                Government. esafety.gov.au
              </li>
              <li>
                Verizon (2024). <em>Data Breach Investigations Report</em>. verizon.com/dbir
              </li>
            </ul>
          </section>
        </Reveal>
      </article>
    </Layout>
  );
}
