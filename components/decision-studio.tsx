"use client";

import { useMemo, useState } from "react";

type Criterion = { id: number; name: string; weight: number; a: number; b: number };
const initial: Criterion[] = [
  { id: 1, name: "Impact", weight: 5, a: 8, b: 6 },
  { id: 2, name: "Effort", weight: 3, a: 5, b: 8 },
  { id: 3, name: "Excitement", weight: 4, a: 9, b: 7 },
];

export function DecisionStudio() {
  const [optionA, setOptionA] = useState("Build the idea");
  const [optionB, setOptionB] = useState("Wait and refine");
  const [criteria, setCriteria] = useState(initial);

  const scores = useMemo(() => {
    const totalWeight = criteria.reduce((sum, item) => sum + item.weight, 0) || 1;
    const a = criteria.reduce((sum, item) => sum + item.a * item.weight, 0) / totalWeight;
    const b = criteria.reduce((sum, item) => sum + item.b * item.weight, 0) / totalWeight;
    return { a, b };
  }, [criteria]);

  const update = (id: number, key: keyof Criterion, value: string | number) => {
    setCriteria((items) => items.map((item) => item.id === id ? { ...item, [key]: value } : item));
  };

  const addCriterion = () => {
    setCriteria((items) => [...items, { id: Date.now(), name: "New criterion", weight: 3, a: 5, b: 5 }]);
  };

  const winner = Math.abs(scores.a - scores.b) < 0.05 ? "It’s a tie" : scores.a > scores.b ? optionA : optionB;
  const confidence = Math.min(99, Math.round(55 + Math.abs(scores.a - scores.b) * 8));

  return (
    <section className="studio" aria-label="Decision comparison">
      <div className="studioHeader">
        <div><span className="step">01</span><h2>Name the options</h2></div>
        <button className="reset" onClick={() => setCriteria(initial)}>Reset</button>
      </div>

      <div className="optionGrid">
        <label className="optionCard optionA">
          <span>Option A</span>
          <input value={optionA} onChange={(event) => setOptionA(event.target.value)} aria-label="Option A" />
          <strong>{scores.a.toFixed(1)}</strong>
        </label>
        <label className="optionCard optionB">
          <span>Option B</span>
          <input value={optionB} onChange={(event) => setOptionB(event.target.value)} aria-label="Option B" />
          <strong>{scores.b.toFixed(1)}</strong>
        </label>
      </div>

      <div className="criteriaHead"><span className="step">02</span><h2>Score what matters</h2></div>
      <div className="criteria">
        <div className="tableHead"><span>Criterion</span><span>Weight</span><span>A</span><span>B</span><span /></div>
        {criteria.map((item) => (
          <div className="criterion" key={item.id}>
            <input className="criterionName" value={item.name} onChange={(e) => update(item.id, "name", e.target.value)} aria-label="Criterion name" />
            <label><small>{item.weight}</small><input type="range" min="1" max="5" value={item.weight} onChange={(e) => update(item.id, "weight", Number(e.target.value))} aria-label={`${item.name} weight`} /></label>
            <input className="scoreInput" type="number" min="1" max="10" value={item.a} onChange={(e) => update(item.id, "a", Number(e.target.value))} aria-label={`${item.name} option A score`} />
            <input className="scoreInput" type="number" min="1" max="10" value={item.b} onChange={(e) => update(item.id, "b", Number(e.target.value))} aria-label={`${item.name} option B score`} />
            <button className="remove" onClick={() => setCriteria(criteria.filter((x) => x.id !== item.id))} aria-label={`Remove ${item.name}`}>×</button>
          </div>
        ))}
        <button className="add" onClick={addCriterion}>+ Add criterion</button>
      </div>

      <div className="result">
        <div className="resultGlow" />
        <div>
          <span className="step">03 / SIGNAL</span>
          <p>Veyro leans toward</p>
          <h2>{winner}</h2>
        </div>
        <div className="confidence"><strong>{confidence}%</strong><span>confidence</span></div>
      </div>
    </section>
  );
}
