import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Fingerprint, KeyRound, Lock, ShieldAlert, Wifi } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import staySafeKeyboard from "@/assets/stay-safe-keyboard.png.asset.json";
import gallery2 from "@/assets/gallery-2.png.asset.json";
import gallery3 from "@/assets/gallery-3.png.asset.json";
import gallery4 from "@/assets/gallery-4.png.asset.json";
import gallery5 from "@/assets/gallery-5.png.asset.json";

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
    image: staySafeKeyboard,
    detail: "Use 12+ character passphrases, a password manager, and turn on 2FA everywhere you can.",
  },
  {
    icon: ShieldAlert,
    title: "Scam Spotting",
    text: "Urgency, prizes and weird links are the three biggest giveaways of a phishing message.",
    image: gallery2,
    detail: "If a message rushes you, promises free money, or hides the sender, stop and verify first.",
  },
  {
    icon: Lock,
    title: "Privacy Settings",
    text: "Locking down who can see your posts, location and friend list shrinks your risk fast.",
    image: gallery4,
    detail: "Set accounts to private, limit location sharing, and review friend lists regularly.",
  },
  {
    icon: Wifi,
    title: "Safe Networks",
    text: "Free public Wi-Fi is convenient — but never bank, shop or log in to anything important on it.",
    image: gallery5,
    detail: "Use mobile data or a VPN for sensitive tasks. Avoid unknown hotspots.",
  },
  {
    icon: Fingerprint,
    title: "Your Digital Identity",
    text: "Once personal details are out there, they are almost impossible to take back.",
    image: gallery3,
    detail: "Think before you post. Personal details can be used to impersonate or target you.",
  },
];

const TEAM = ["Ibrahim Mollah", "Abdullah Ibn Usman", "Zaid Munir"];

const GALLERY = [
  {
    src: staySafeKeyboard.url,
    alt: "Brass key resting on a laptop keyboard above a green STAY SAFE key",
  },
  { src: gallery2.url, alt: "Stack of Visa, Mastercard and American Express credit cards" },
  { src: gallery3.url, alt: "Illustration explaining identity theft" },
  { src: gallery4.url, alt: "Collage of popular social media app logos" },
  { src: gallery5.url, alt: "Hand holding a smartphone showing the home screen" },
];

function GallerySlideshow() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % GALLERY.length), 4000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl glass">
        {GALLERY.map((g, i) => (
          <img
            key={g.src}
            src={g.src}
            alt={g.alt}
            loading={i === 0 ? "eager" : "lazy"}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <div className="mt-4 flex justify-center gap-2">
        {GALLERY.map((g, i) => (
          <button
            key={g.src}
            type="button"
            aria-label={`Show image ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-primary" : "w-2 bg-border hover:bg-primary/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

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
              Safe<span className="text-gradient">4Cyber</span> - Online Safety & Securtiy
            </h1>
            <p
              className="animate-rise mt-5 max-w-xl text-lg text-pretty text-muted-foreground"
              style={{ animationDelay: "160ms" }}
            >
              A guide on staying safe online. Lock down accounts, protect personal info, media literacy, avoid misinformation and be cyber-smart!
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
              <span className="font-semibold text-foreground">Website by:</span> {TEAM.join(" · ")}
            </p>
          </div>

          <Reveal className="relative">
            <GallerySlideshow />
          </Reveal>

        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="rounded-3xl glass p-8 sm:p-10">
            <h2 className="text-3xl font-bold">Why is Online Safety & Security important?</h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              
            </p>
            <p className="mt-4 text-pretty text-muted-foreground">
              In today's day and age, malicious parties, with a single click can acsess thousands of peoples personal information, login info, credit card information, phone number, passwords, search history and habits along with multitudes of other information that you wouldn't want someone having. Out of those thousands, you could be one. It might be quite scary knowing that someone could have your personal information, but luckily there are ways to prevent for malicious people getting things you dont want them to. Thats called being cyber-smart, our website provides a thourough explaination and guide into how to become cyber-smart and protect your information.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-16">
        <h2 className="text-center text-3xl font-bold">How to stay secure.</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <article className="group relative h-full rounded-2xl glass transition-transform duration-300 hover:-translate-y-1.5">
                <div className="p-6">
                  <span className="grid size-12 place-items-center rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground transition-transform duration-300 group-hover:rotate-6">
                    <p.icon className="size-6" />
                  </span>
                  <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
                </div>

                <div className="absolute -right-6 -bottom-6 z-30 w-80 origin-top-left scale-0 rounded-2xl border border-primary/30 bg-background p-5 opacity-0 shadow-2xl transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100 sm:w-96">
                  <div className="absolute -left-2 top-4 h-4 w-4 rotate-45 border-b border-l border-primary/30 bg-background" />
                  <div className="flex flex-col gap-4">
                    <img
                      src={p.image.url}
                      alt={p.title}
                      className="h-36 w-full rounded-xl object-cover"
                    />
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">{p.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {p.detail}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
          <Reveal delay={400}>
            <Link
              to="/advice"
              className="flex h-full flex-col justify-between rounded-2xl border border-dashed border-primary/50 bg-primary/5 p-6 transition-colors hover:bg-primary/10"
            >
              <h3 className="text-xl font-semibold">Questions?</h3>
              <span className="mt-4 inline-flex items-center gap-2 font-semibold text-primary">
                Visit our Q&A page <ArrowRight className="size-4" />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
