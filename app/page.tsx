import { DecisionStudio } from "@/components/decision-studio";

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#" aria-label="Veyro home">
          <span className="brandMark">V</span>
          Veyro
        </a>
        <span className="navLabel">Decision studio</span>
      </nav>

      <section className="hero">
        <div className="eyebrow"><span /> Less guessing. More clarity.</div>
        <h1>Make the choice<br /><em>you can explain.</em></h1>
        <p>Compare two options against what actually matters. Veyro turns uncertainty into a clear, weighted signal.</p>
      </section>

      <DecisionStudio />

      <footer>
        <span>Veyro / 2026</span>
        <span>Built by Tasarik</span>
      </footer>
    </main>
  );
}
