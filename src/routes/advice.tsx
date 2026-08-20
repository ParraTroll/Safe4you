import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Mail } from "lucide-react";
import { Layout, PageHeader } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/advice")({
  head: () => ({
    meta: [
      { title: "Ask the Cyber Guardian | Online Safety Advice Column | Safe4you" },
      {
        name: "description",
        content:
          "Real-sounding reader questions about hacked accounts, scam DMs and oversharing online — answered with friendly, practical cyber safety advice.",
      },
      { property: "og:title", content: "Ask the Cyber Guardian" },
      {
        property: "og:description",
        content: "Friendly, practical answers to real online safety worries.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Advice,
});

const LETTERS = [
  {
    from: "Locked Out in Year 9",
    q: "Dear Cyber Guardian, someone logged into my Instagram and changed the email. My friends are getting weird money messages from 'me' and I feel sick about it. What do I do?",
    a: [
      "First: this is not your fault, and it is fixable. Go straight to Instagram's 'Need more help?' / hacked account flow — because the email was changed, they will send a recovery code to your original address or ask you to verify with a video selfie.",
      "While you wait, post from another account or message a group chat telling friends the messages are a scam and not to click anything. That stops the damage spreading.",
      "Once you are back in, change the password to a long passphrase you use nowhere else, turn on two-factor authentication, and check Settings → Security → Login activity to kick out unknown devices. Finally, change the password on any other account that used the same one.",
    ],
  },
  {
    from: "Nearly Got Me",
    q: "Dear Cyber Guardian, I got a text saying my parcel couldn't be delivered and I had to pay $2.50. It looked completely real and I almost typed my card in. How do I tell what's fake?",
    a: [
      "Great instinct for stopping. Delivery scams are the single most common text scam right now, and they work because everyone is waiting on something.",
      "Three quick checks: does it create urgency or a tiny fee (a classic hook)? Does the link domain look slightly off, like 'auspost-delivery.co'? And were you actually expecting a parcel from that company?",
      "The golden rule is never use the link in the message. Open the real app or type the company's website yourself. If you already entered card details, tell a parent straight away and call the bank to freeze the card — fast action usually means no money is lost.",
    ],
  },
  {
    from: "Oversharer",
    q: "Dear Cyber Guardian, I post a lot — my school jumper, my suburb, my routine. My mum says it's dangerous but I think she's being dramatic. Is she right?",
    a: [
      "She has a point, but you do not have to stop posting. The risk is not any single post; it is the pattern. Uniform plus suburb plus 'walking home from training' tells a stranger exactly where to find you on a Thursday.",
      "Try this: keep your account private, review your follower list and remove anyone you have never met, turn off location tagging, and post activities after they happen rather than live.",
      "A useful test before posting: would I be comfortable if this appeared on a screen in front of the whole school? If not, it probably does not need to go up.",
    ],
  },
];

function Letter({ letter, index }: { letter: (typeof LETTERS)[number]; index: number }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <Reveal delay={index * 100}>
      <article className="overflow-hidden rounded-3xl glass">
        <div className="flex items-start gap-4 p-6 sm:p-8">
          <span className="mt-1 grid size-10 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground">
            <Mail className="size-5" />
          </span>
          <div>
            <p className="text-lg leading-relaxed italic">"{letter.q}"</p>
            <p className="mt-3 text-sm font-semibold text-primary">— {letter.from}</p>
          </div>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-3 border-t border-border px-6 py-4 text-left text-sm font-semibold transition-colors hover:bg-secondary/50 sm:px-8"
        >
          {open ? "Hide the Guardian's reply" : "Read the Guardian's reply"}
          <ChevronDown className={cn("size-4 transition-transform", open && "rotate-180")} />
        </button>

        <div
          className={cn(
            "grid transition-[grid-template-rows] duration-500 ease-out",
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          )}
        >
          <div className="overflow-hidden">
            <div className="space-y-4 bg-primary/5 px-6 py-6 text-pretty text-muted-foreground sm:px-8">
              {letter.a.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function Advice() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Advice Column"
        title="Ask the Cyber Guardian"
        subtitle="Real worries from real-sounding readers, answered without the lecture."
      />
      <div className="mx-auto max-w-3xl space-y-6 px-5">
        {LETTERS.map((l, i) => (
          <Letter key={l.from} letter={l} index={i} />
        ))}
      </div>
    </Layout>
  );
}
