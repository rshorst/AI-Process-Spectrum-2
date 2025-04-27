const dot = document.getElementById("dot");
const bar = document.getElementById("spectrumBar");
const label = document.getElementById("zoneLabel");
const questionBox = document.getElementById("reflection-question");
const output = document.getElementById("scenario-output");
const noAiToggle = document.getElementById("noAiToggle");
const fullAiToggle = document.getElementById("fullAiToggle");

const zones = [
  { label: "Tool Use", color: "#4CAF50", questions: ["How did AI support (not replace) your thinking?", "What decisions did you make independently of the AI?"], scenario: "You used AI to generate a list of key terms to explore further on your own." },
  { label: "Tool Use", color: "#5EB84A", questions: ["How did you transform AI suggestions into your own ideas?", "Did you rewrite, reframe, or challenge what the AI offered?"], scenario: "You asked AI to rephrase your draft sentence, then rewrote it again yourself." },
  { label: "Tool Use", color: "#7BC343", questions: ["Were you primarily the author of your ideas?", "How did the AI's role stay in the background?"], scenario: "You used AI for initial brainstorm, but final ideas were self-developed." },
  { label: "Tool Use", color: "#9DCE3B", questions: ["Did AI act more like a reference than a writer?", "How did you filter the suggestions through your own lens?"], scenario: "You asked AI for examples but used them only to verify your own understanding." },
  { label: "Co-Authorship", color: "#C6D835", questions: ["What parts did you revise or critically reshape?", "How much of your own judgment guided the final product?"], scenario: "You had AI write a paragraph, then rewrote it in your voice, integrating your own insights." },
  { label: "Co-Authorship", color: "#E0CC35", questions: ["Did you engage in dialogue or iteration with AI?", "How did the back-and-forth shape your thinking?"], scenario: "You iteratively asked AI for ideas and responded critically, revising and dialoguing." },
  { label: "Co-Authorship", color: "#F6B833", questions: ["How did you guide the AI's contributions?", "Was your voice clearly present throughout?"], scenario: "You used AI to co-write a lesson plan, with clear adjustments and decisions by you." },
  { label: "Co-Authorship", color: "#FF9E32", questions: ["Was authorship shared—but still reflective of your judgment?", "Did you critique and curate the AI's ideas?"], scenario: "You structured a piece based on AI-generated outline, with mixed AI/human contributions." },
  { label: "Appropriate Outsourcing", color: "#FF7C30", questions: ["Was the task suitable for automation or delegation?", "Did you still understand and take responsibility for the outcome?"], scenario: "You took AI-generated paragraph and edited for grammar, but didn't change core ideas." },
  { label: "Risk of Overreliance", color: "#F9572F", questions: ["Did you rely too heavily on AI without questioning the output?", "What parts of your own learning were missed?"], scenario: "You submitted mostly AI-written draft, making only small surface changes." },
  { label: "Problematic Outsourcing", color: "#EC2F2D", questions: ["Did AI bypass your learning process or reflective thinking?", "Would a reader assume this was your own work?"], scenario: "You used AI to answer assignment questions without verifying accuracy." },
  { label: "Problematic Outsourcing", color: "#F44336", questions: ["Was this a case of full delegation to AI without authorship?", "How might this undermine trust or authenticity?"], scenario: "You copy-pasted full AI-generated response with no edits." }
];

function updateUI(index) {
  const zone = zones[index];
  dot.style.left = `${(index + 0.5) * (100 / 12)}%`;
  dot.style.backgroundColor = zone.color;
  label.textContent = zone.label;
  questionBox.innerHTML = `<p>${zone.questions[0]}</p><p>${zone.questions[1]}</p>`;
  output.textContent = zone.scenario;
}

// Click interaction
bar.addEventListener("click", function (e) {
  if (noAiToggle.checked || fullAiToggle.checked) return;

  const rect = bar.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const zoneWidth = rect.width / 12;
  const index = Math.min(11, Math.max(0, Math.floor(x / zoneWidth)));
  updateUI(index);
});

// Toggle logic
function handleToggles() {
  if (noAiToggle.checked && fullAiToggle.checked) {
    questionBox.innerHTML = `<p>⚠️ Please select only one toggle.</p>`;
    output.textContent = "";
    dot.style.display = "none";
    label.textContent = "";
    return;
  }

  if (noAiToggle.checked) {
    questionBox.innerHTML = `<p>Why did you choose not to use AI for this task?</p><p>What value did you gain from doing the work independently?</p>`;
    output.textContent = "You opted for full human authorship to deepen your own thinking and practice.";
    label.textContent = "No AI Used";
    dot.style.display = "none";
    return;
  }

  if (fullAiToggle.checked) {
    questionBox.innerHTML = `<p>Why was full automation appropriate in this context?</p><p>How did you ensure ethical, accurate, and transparent use?</p>`;
    output.textContent = "You intentionally used AI to fully automate the task, ensuring ethical and appropriate use.";
    label.textContent = "Fully AI Generated";
    dot.style.display = "none";
    return;
  }

  // Default
  dot.style.display = "block";
  updateUI(0);
}

noAiToggle.addEventListener("change", handleToggles);
fullAiToggle.addEventListener("change", handleToggles);

// Initialize
updateUI(0);
