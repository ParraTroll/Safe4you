import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Check, RotateCcw, X } from "lucide-react";
import { Layout, PageHeader } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/quiz")({
  head: () => ({
    meta: [
      { title: "Interactive Cyber Safety Quiz & Password Checker | Safe4you" },
      {
        name: "description",
        content:
          "Test your online safety knowledge with an interactive scam-spotting quiz and check how strong your password habits really are.",
      },
      { property: "og:title", content: "Cyber Safety Quiz | GuardUp" },
      {
        property: "og:description",
        content: "Spot the scam and test your password strength in this interactive quiz.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Quiz,
});

const QUESTIONS = [
  {
    q: "A text says: 'Your parcel is held. Pay $2.50 now: auspost-track.co/pay'. What do you do?",
    options: [
      "Pay it, it's only $2.50",
      "Delete it and check the real app yourself",
      "Reply STOP to see if it's real",
    ],
    correct: 1,
    why: "Never use a link from an unexpected message. Open the official app or type the site yourself.",
  },
  {
    q: "Which of these is the strongest password?",
    options: ["Summer2026!", "correct-otter-lamp-73", "P@ssw0rd"],
    correct: 1,
    why: "Length beats complexity. Four random words are far harder to crack than a short substituted word.",
  },
  {
    q: "A friend DMs asking you to send them a verification code that just arrived on your phone.",
    options: [
      "Send it — they're your friend",
      "Never send it; their account is likely hacked",
      "Send half the code to be safe",
    ],
    correct: 1,
    why: "Codes are never shared. This is the classic account-takeover scam using a hacked friend's profile.",
  },
  {
    q: "You're on free café Wi-Fi. What's the safest choice?",
    options: [
      "Log into your banking app",
      "Avoid sensitive logins, or use mobile data",
      "Shop online, it's encrypted anyway",
    ],
    correct: 1,
    why: "Public Wi-Fi can be monitored or spoofed. Save sensitive logins for a trusted network or mobile data.",
  },
  {
    q: "What does two-factor authentication (2FA) actually do?",
    options: [
      "Makes your password longer",
      "Adds a second proof, so a stolen password isn't enough",
      "Hides your account from search",
    ],
    correct: 1,
    why: "2FA means an attacker needs your password AND your device — it blocks most takeovers outright.",
  },
];

function scorePassword(pw: string) {
  let score = 0;
  if (pw.length >= 8) score += 1;
  if (pw.length >= 14) score += 1;
  if (pw.length >= 20) score += 1;
  if (/[a-z]/.test(pw) && /[A-Z]/.test(pw)) score += 1;
  if (/\d/.test(pw)) score += 1;
  if (/[^A-Za-z0-9]/.test(pw)) score += 1;
  if (/(password|1234|qwerty|admin|letmein)/i.test(pw)) score = Math.min(score, 1);
  return Math.min(score, 6);
}

const LABELS = ["Type something", "Very weak", "Weak", "Okay", "Good", "Strong", "Excellent"];

function PasswordMeter() {
  const [pw, setPw] = useState("");
  const score = useMemo(() => (pw ? scorePassword(pw) : 0), [pw]);

  return (
    <div className="rounded-3xl glass p-7">
      <h2 className="text-2xl font-bold">Passphrase strength lab</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Type a made-up password (never a real one) and watch the meter react.
      </p>
      <input
        value={pw}
        onChange={(e) => setPw(e.target.value)}
        placeholder="try: correct-otter-lamp-73"
        className="mt-5 w-full rounded-xl border border-input bg-background/50 px-4 py-3 text-foreground outline-none transition-shadow placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
      />
      <div className="mt-4 flex gap-1.5">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-2 flex-1 rounded-full transition-all duration-500",
              i < score ? "bg-[image:var(--gradient-brand)]" : "bg-secondary",
            )}
          />
        ))}
      </div>
      <p className="mt-3 text-sm font-semibold text-primary">{LABELS[score]}</p>
    </div>
  );
}

function Quiz() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const score = QUESTIONS.filter((q, i) => answers[i] === q.correct).length;
  const answered = Object.keys(answers).length;

  return (
    <Layout>
      <PageHeader
        eyebrow="Interactive"
        title="Spot the Scam: Test Your Safety Score"
        subtitle="Five quick scenarios. Pick an answer to see instantly whether it holds up."
      />

      <section className="mx-auto max-w-3xl px-5">
        <div className="sticky top-20 z-20 mb-6 rounded-2xl glass px-6 py-4">
          <div className="flex items-center justify-between gap-4">
            <span className="font-semibold">
              Score: <span className="text-gradient text-xl">{score}</span> / {QUESTIONS.length}
            </span>
            <button
              onClick={() => setAnswers({})}
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary/60"
            >
              <RotateCcw className="size-4" /> Reset
            </button>
          </div>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full bg-[image:var(--gradient-brand)] transition-[width] duration-500"
              style={{ width: `${(answered / QUESTIONS.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="space-y-5">
          {QUESTIONS.map((q, qi) => {
            const picked = answers[qi];
            return (
              <Reveal key={q.q} delay={qi * 70}>
                <article className="rounded-3xl glass p-6 sm:p-8">
                  <h2 className="text-lg font-semibold text-balance">
                    {qi + 1}. {q.q}
                  </h2>
                  <div className="mt-4 space-y-2.5">
                    {q.options.map((opt, oi) => {
                      const isPicked = picked === oi;
                      const isCorrect = oi === q.correct;
                      return (
                        <button
                          key={opt}
                          onClick={() => setAnswers((a) => ({ ...a, [qi]: oi }))}
                          className={cn(
                            "flex w-full items-center justify-between gap-3 rounded-xl border border-border px-4 py-3 text-left text-sm transition-all",
                            picked === undefined && "hover:border-primary/60 hover:bg-secondary/50",
                            isPicked && isCorrect && "border-primary bg-primary/15",
                            isPicked && !isCorrect && "border-destructive bg-destructive/15",
                            picked !== undefined &&
                              !isPicked &&
                              isCorrect &&
                              "border-primary/60 bg-primary/5",
                          )}
                        >
                          {opt}
                          {isPicked &&
                            (isCorrect ? (
                              <Check className="size-4 shrink-0 text-primary" />
                            ) : (
                              <X className="size-4 shrink-0 text-destructive" />
                            ))}
                        </button>
                      );
                    })}
                  </div>
                  <div
                    className={cn(
                      "grid transition-[grid-template-rows] duration-500",
                      picked !== undefined ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="mt-4 rounded-xl bg-secondary/60 px-4 py-3 text-sm text-muted-foreground">
                        {q.why}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-10">
          <Reveal>
            <PasswordMeter />
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
