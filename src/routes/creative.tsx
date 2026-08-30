import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Heart, MessageCircle, Send } from "lucide-react";
import { Layout, PageHeader } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";
import scenario from "@/assets/scenario.jpg";

export const Route = createFileRoute("/creative")({
  head: () => ({
    meta: [
      { title: "Creative Corner: Cyber Safety Posts & Story | Safe4you" },
      {
        name: "description",
        content:
          "A creative take on online safety — an illustrated scam scenario and a set of social posts showing how one suspicious message plays out.",
      },
      { property: "og:title", content: "Creative Corner | Safe4you" },
      {
        property: "og:description",
        content: "An illustrated scenario and social posts about spotting an online scam.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Creative,
});

const POSTS = [
  {
    handle: "@safe4you.official",
    caption:
      "That 'free V-Bucks' link your mate sent? Their account is hacked, not generous. Never log in through a link someone DMs you. 🎣",
    tag: "#PhishingIsNotFishing",
    likes: 1284,
    art: "linear-gradient(135deg, oklch(0.32 0.14 55), oklch(0.24 0.1 45))",
    emoji: "🎣",
  },
  {
    handle: "@safe4you.official",
    caption:
      "Your password should be a passphrase: 4 random words beats P@ssw0rd1 every single time. Then switch on 2FA and go live your life. 🔐",
    tag: "#PassphraseNotPassword",
    likes: 967,
    art: "linear-gradient(135deg, oklch(0.3 0.12 60), oklch(0.22 0.1 50))",
    emoji: "🔐",
  },
  {
    handle: "@safe4you.official",
    caption:
      "Uniform + suburb + daily routine = a map to you. Post the memory, not the location. 📍",
    tag: "#ThinkBeforeYouTag",
    likes: 1533,
    art: "linear-gradient(135deg, oklch(0.34 0.15 45), oklch(0.2 0.08 55))",
    emoji: "📍",
  },
];

const COMIC = [
  {
    label: "Panel 1",
    text: "Sarah is on her bed when she receives a message from one of her 'friends' about a free superhero movie.",
  },
  { label: "Panel 2", text: "She goes to click it, then remembers her teacher's warning about suspicious links" },
  {
    label: "Panel 3",
    text: "She stops. Sarah goes and tells her mother about her concern.",
  },
  {
    label: "Panel 4",
    text: "Her mother tells her that she was sent a phishing link; she tells her that they should use legitimate sites instead",
  },
];

function Post({ post, index }: { post: (typeof POSTS)[number]; index: number }) {
  const [liked, setLiked] = useState(false);
  return (
    <Reveal delay={index * 100}>
      <article className="overflow-hidden rounded-3xl glass">
        <header className="flex items-center gap-3 p-4">
          <span className="grid size-9 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
            G
          </span>
          <span className="text-sm font-semibold">{post.handle}</span>
        </header>
        <div
          className="grid aspect-square place-items-center text-7xl"
          style={{ backgroundImage: post.art }}
          role="img"
          aria-label={`Illustrated post: ${post.tag}`}
        >
          <span className="animate-float">{post.emoji}</span>
        </div>
        <div className="p-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLiked((v) => !v)}
              aria-label="Like post"
              className="transition-transform active:scale-125"
            >
              <Heart
                className={cn(
                  "size-6 transition-colors",
                  liked ? "fill-primary text-primary" : "text-muted-foreground",
                )}
              />
            </button>
            <MessageCircle className="size-6 text-muted-foreground" />
            <Send className="size-6 text-muted-foreground" />
          </div>
          <p className="mt-3 text-sm font-semibold">
            {(post.likes + (liked ? 1 : 0)).toLocaleString()} likes
          </p>
          <p className="mt-2 text-sm text-muted-foreground">{post.caption}</p>
          <p className="mt-2 text-sm font-semibold text-primary">{post.tag}</p>
        </div>
      </article>
    </Reveal>
  );
}

function Creative() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Creative Corner"
        title="One Text Message, Two Endings"
        subtitle="An illustrated scenario and a campaign of social posts about spotting a scam before it hooks you."
      />

      <section className="mx-auto max-w-5xl px-5">
        <Reveal>
          <figure className="overflow-hidden rounded-3xl glass">
            <img
              src={scenario}
              alt="Illustration of a teen receiving a suspicious message while an adult points to a security shield"
              width={1200}
              height={800}
              loading="lazy"
              className="w-full object-cover"
            />
            <figcaption className="px-5 py-3 text-sm text-muted-foreground">
              Illustrated scenario: the safest move is almost always to slow down and tell someone.
            </figcaption>
          </figure>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {COMIC.map((panel, i) => (
            <Reveal key={panel.label} delay={i * 90}>
              <div className="h-full rounded-2xl glass p-5 transition-transform duration-300 hover:-translate-y-1.5">
                <span className="text-xs font-bold tracking-widest text-primary uppercase">
                  {panel.label}
                </span>
                <p className="mt-3 text-sm leading-relaxed">{panel.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pt-16">
        <h2 className="text-center text-3xl font-bold">The Safe4you example Instagram feed</h2>
        <p className="mt-3 text-center text-muted-foreground">
          Three posts we designed to make cyber safety actually shareable. Tap the hearts.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {POSTS.map((p, i) => (
            <Post key={p.tag} post={p} index={i} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
