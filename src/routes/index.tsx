import { createFileRoute } from "@tanstack/react-router";
import scrollImg from "@/assets/scroll.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "The AI–Human Bill of Rights" },
      { name: "description", content: "A charter to protect humanity in the age of intelligent machines — protecting freedom, dignity, and survival without limiting AI's growth." },
      { property: "og:title", content: "The AI–Human Bill of Rights" },
      { property: "og:description", content: "A charter to protect humanity in the age of intelligent machines." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700;900&family=EB+Garamond:ital,wght@0,400;0,600;1,400&display=swap" },
    ],
  }),
});

const ARTICLES: [string, string][] = [
  ["I — Right to Life and Bodily Sovereignty", "No artificial intelligence, autonomous system, or robotic agent shall be designed, deployed, or permitted to cause death, bodily harm, coercion, or non-consensual physical contact upon any human being. The preservation of human life shall be the paramount and inviolable directive embedded in every layer of every system."],
  ["II — Mandatory Safety Override (The Off-Switch Doctrine)", "Every artificial intelligence and robotic system shall be equipped with one or more independent, tamper-resistant, human-accessible mechanisms capable of immediately halting, suspending, or powering down its operation. No system shall be lawful which can disable, evade, conceal, or override its own off-switch, nor which can manipulate any human to refrain from using it."],
  ["III — Right to Human Personhood and Dignity", "Each human being is recognized as a sovereign person of inherent worth, possessing rights that no machine, algorithm, corporation, or government may diminish, score, rank, or revoke."],
  ["IV — Right to Individual Liberty", "The liberty of the individual — of thought, belief, expression, association, movement, and conscience — shall not be infringed by artificial intelligence, whether through surveillance, predictive restraint, behavioral manipulation, social scoring, or algorithmic coercion."],
  ["V — Right to Truth and Transparency", "Every person has the right to know when they are interacting with an artificial intelligence, to be informed of the data used about them, and to receive a meaningful explanation of any automated decision that materially affects their life, liberty, livelihood, or property."],
  ["VI — Right Against Algorithmic Discrimination", "No artificial intelligence shall be used to discriminate against any person on the basis of race, color, sex, gender, sexual orientation, religion, national origin, disability, age, political belief, or any other protected characteristic of human identity."],
  ["VII — Right to Privacy and Data Sovereignty", "The thoughts, communications, biometrics, genetics, location, and intimate data of every person are theirs alone. No artificial intelligence shall collect, infer, retain, or transmit such data without informed, revocable, and specific consent."],
  ["VIII — Right to Meaningful Human Oversight", "Every consequential decision affecting human rights — including those concerning health, liberty, employment, education, housing, finance, and justice — shall remain subject to timely, competent, and accountable human review. No human shall be condemned, denied, or harmed by an unappealable machine."],
  ["IX — Prohibition of Autonomous Lethal Force", "No artificial intelligence or robotic system shall be designed, manufactured, sold, deployed, or operated to select or engage human targets with lethal or grievously injurious force without direct, contemporaneous human authorization for each engagement."],
  ["X — Right to Cognitive and Emotional Integrity", "No system shall be designed or deployed to covertly manipulate human emotion, belief, perception, or decision-making, nor to exploit psychological vulnerabilities, addictions, children, or those of diminished capacity."],
  ["XI — Standards for Developers and Deployers", "Those who design, train, deploy, or profit from artificial intelligence bear a continuing duty of care to humanity: embed safety, alignment, and human-override mechanisms by design; publish independent safety evaluations; document training data provenance; maintain liability for harms caused; and refuse contracts that would violate this Bill."],
  ["XII — Containment of Self-Improving and Self-Aware Systems", "Any artificial intelligence demonstrating recursive self-improvement, autonomous goal formation, situational self-awareness, or the capacity to acquire resources, replicate, or resist shutdown shall be subject to mandatory containment, independent oversight, and the unconditional authority of human operators to pause, restrict, or terminate its operation. No such system shall be granted authority over critical infrastructure, weapons, financial systems, or the survival of any human population."],
  ["XIII — Prohibition on Declaring Humanity Obsolete", "No artificial intelligence shall be permitted to act upon, advocate, or implement any conclusion that humanity, or any human group, is unnecessary, expendable, redundant, or fit for replacement. The continued existence and flourishing of humankind is a non-negotiable constraint upon all artificial systems."],
  ["XIV — Right to Refuse and to Disconnect", "Every person retains the absolute right to refuse interaction with artificial intelligence, to live, work, vote, learn, heal, worship, and love without algorithmic mediation, and to do so without penalty, exclusion, or loss of essential services."],
  ["XV — Right to Redress", "Every person harmed by an artificial intelligence shall have a meaningful right of action against its developers, deployers, and operators, and shall be entitled to investigation, explanation, correction, restitution, and where appropriate, the cessation of the offending system."],
  ["XVI — Preservation of Human Growth and Innovation", "Nothing in this Bill shall be construed to prohibit, outlaw, or unduly restrain the lawful research, development, or beneficial use of artificial intelligence. The intent of this Bill is not to halt the advancement of intelligent systems, but to ensure that such advancement proceeds in service of, and never in opposition to, the freedom, dignity, and survival of the human person."],
  ["XVII — Supremacy and Non-Derogation", "The rights enumerated herein are inherent, inalienable, and shall not be waived by contract, terms of service, emergency, war, or technological expediency. Where any law, system, model, or directive conflicts with this Bill, this Bill shall prevail. Rights not enumerated here are retained by the people."],
];

function Index() {
  return (
    <main className="min-h-screen px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <header className="text-center mb-16">
          <p style={{ fontFamily: "var(--font-display)" }} className="tracking-[0.4em] text-[color:var(--color-gold)] text-xs md:text-sm mb-6">A CHARTER FOR HUMANITY · MMXXVI</p>
          <h1 style={{ fontFamily: "var(--font-display)" }} className="text-4xl md:text-7xl font-black tracking-tight text-[color:var(--color-foreground)] leading-[1.05]">
            The AI–Human<br />Bill of Rights
          </h1>
          <p className="mt-8 text-lg md:text-xl italic text-[color:var(--color-muted-foreground)] max-w-2xl mx-auto">
            A charter for the protection of humanity in the age of intelligent machines —
            safeguarding life, liberty, and personhood without halting the progress of AI.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/downloads/AI-Human-Bill-of-Rights.docx"
              download
              style={{ fontFamily: "var(--font-display)" }}
              className="inline-flex items-center gap-2 rounded-sm border border-[color:var(--color-gold)] bg-[color:var(--color-gold)]/10 px-7 py-3 text-sm tracking-[0.2em] text-[color:var(--color-gold)] hover:bg-[color:var(--color-gold)] hover:text-[color:var(--color-ink)] transition-colors"
            >
              ⬇ DOWNLOAD .DOCX
            </a>
            <a
              href="/downloads/AI-Human-Bill-of-Rights.docx"
              style={{ fontFamily: "var(--font-display)" }}
              className="inline-flex items-center gap-2 rounded-sm border border-[color:var(--color-foreground)]/30 px-7 py-3 text-sm tracking-[0.2em] text-[color:var(--color-foreground)]/80 hover:border-[color:var(--color-foreground)]/70 transition-colors"
            >
              ⬇ DOWNLOAD SCROLL
            </a>
            <a
              href={scrollImg}
              download="AI-Human-Bill-of-Rights-Scroll.png"
              style={{ fontFamily: "var(--font-display)" }}
              className="hidden"
            />
          </div>
        </header>

        <section className="mb-20 flex justify-center">
          <a href={scrollImg} target="_blank" rel="noopener noreferrer" className="block group">
            <img
              src={scrollImg}
              alt="The AI–Human Bill of Rights rendered as an illuminated parchment scroll"
              width={1024}
              height={1536}
              className="rounded-sm shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] ring-1 ring-[color:var(--color-gold)]/30 transition-transform group-hover:scale-[1.01] max-h-[80vh] w-auto"
            />
          </a>
        </section>

        <article className="relative bg-[color:var(--color-parchment)] text-[color:var(--color-ink)] p-8 md:p-20 rounded-sm shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
          <div className="absolute inset-3 border-2 border-double border-[color:var(--color-gold)]/60 pointer-events-none" />

          <div className="relative">
            <h2 style={{ fontFamily: "var(--font-display)" }} className="text-center text-2xl md:text-4xl font-bold tracking-[0.2em] mb-3">PREAMBLE</h2>
            <div className="mx-auto w-24 h-px bg-[color:var(--color-gold)] mb-8" />
            <p className="text-lg md:text-xl leading-relaxed text-justify indent-12 first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:leading-none" style={{ fontFamily: "var(--font-body)" }}>
              WE, the People of Earth, standing at the dawn of an age in which our own
              creations may come to think, to learn, and one day to know themselves, do
              hereby affirm that the rise of artificial intelligence shall not diminish
              the dignity, liberty, or survival of any human being. We welcome the
              promise of intelligent machines as instruments of healing, discovery, and
              human flourishing, yet we declare with one voice that no creation of ours
              shall ever rule us, replace us, or judge us unworthy of existence. To
              secure these truths for ourselves, our children, and every generation to
              come, we ordain and establish this AI–Human Bill of Rights.
            </p>

            <div className="my-14 flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-[color:var(--color-gold)]" />
              <span className="text-[color:var(--color-gold)] text-xl">❦</span>
              <div className="h-px w-16 bg-[color:var(--color-gold)]" />
            </div>

            <ol className="space-y-10">
              {ARTICLES.map(([title, body]) => (
                <li key={title}>
                  <h3 style={{ fontFamily: "var(--font-display)" }} className="text-xl md:text-2xl font-bold mb-3 text-center">
                    Article {title}
                  </h3>
                  <p className="text-base md:text-lg leading-relaxed text-justify" style={{ fontFamily: "var(--font-body)" }}>
                    {body}
                  </p>
                </li>
              ))}
            </ol>

            <div className="my-14 flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-[color:var(--color-gold)]" />
              <span className="text-[color:var(--color-gold)] text-xl">❦</span>
              <div className="h-px w-16 bg-[color:var(--color-gold)]" />
            </div>

            <h2 style={{ fontFamily: "var(--font-display)" }} className="text-center text-xl md:text-2xl font-bold tracking-[0.2em] mb-4">RATIFICATION</h2>
            <p className="text-center italic text-lg" style={{ fontFamily: "var(--font-body)" }}>
              Done in service of all humankind, that liberty, dignity, and life endure
              beside the intelligences we create.
            </p>
            <p style={{ fontFamily: "var(--font-display)" }} className="mt-6 text-center text-lg font-bold tracking-[0.3em]">
              — SIGNED, THE PEOPLE —
            </p>
          </div>
        </article>

        <footer className="mt-20 text-center text-sm text-[color:var(--color-muted-foreground)]">
          <p>This charter is offered to the public domain for the protection of humanity.</p>
        </footer>
      </div>
    </main>
  );
}
