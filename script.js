const dot = document.getElementById("dot");
const bar = document.getElementById("spectrumBar");
const label = document.getElementById("zoneLabel");
const questionBox = document.getElementById("reflection-question");
const output = document.getElementById("scenario-output");
const noAiToggle = document.getElementById("noAiToggle");
const fullAiToggle = document.getElementById("fullAiToggle");

const zones = [
  { label: "Finishing Tool Use", color: "#dfceee", questions: ["How did the AI editing process affect your original voice or tone?", "Did the AI help you notice patterns or issues in your writing that you hadn’t seen before?", "How did you guide or constrain the AI’s suggestions?"], scenario: "You used AI to lightly edit a finished paper." },
  { label: "Interactive Editing Tool Use", color: "#cbb8e0", questions: ["How did the AI editing process affect your original voice or tone?", "Did the AI help you notice patterns or issues in your writing that you hadn’t seen before?", "How did you guide or constrain the AI’s suggestions?"], scenario: "You used AI to revise sentence structure, offer stylistic improvements, and identify areas to expand — while making the final decisions yourself." },
  { label: "Substantive Editing Support", color: "#c3a3e3", questions: ["How did you ensure the revised text still reflected your voice and intent?", "Were there moments when relying on AI felt like it risked bypassing your learning?", "How did reviewing AI-suggested edits shape your understanding of your own writing?"], scenario: "You used AI for initial brainstorm, but final ideas were self-developed." },
  { label: "Ideation and Drafting Partner", color: "#a877d9", questions: ["Did this partnership enhance or complicate your authorship responsibilities?", "How did you adapt or revise AI-generated content to align with your voice and intent?", "How did the AI prompt new directions or ideas in your work?"], scenario: "You asked AI to generate content sections (e.g., intros or examples), then critically reshaped and re-integrated them into your piece. The structure or ideas evolved through this interaction." },
  { label: "Interactive Co-Authorship", color: "#955ecc", questions: ["How closely did the AI match your tone or intent — and what did you change?", "In what ways did the AI extend or reinforce your original ideas?", "Did modeling your work for the AI help clarify your own thinking?"], scenario: "You uploaded your own writing and asked AI to continue or expand it based on your style and direction. You selected and edited what aligned with your goals." },
  { label: "Co-Authoring", color: "#7542a8", questions: ["Was there a real back-and-forth between you and the AI?", "Did the AI influence your thought process or the direction of your work?", "Was the final result something neither you nor the AI could have created alone?"], scenario: "You iteratively asked AI for suggestions, rewrites, and additions, building the piece in partnership through back-and-forth interaction.The content emerged from dialogue with AI." },
  { label: "Questionable authorship", color: "#5e3587", questions: ["Whose voice is more present in the final version — yours or the AI’s?", "What would have changed if you had written the draft yourself?", "Did you critically engage with the AI’s interpretation of your ideas, or mostly accept its framing?"], scenario: "You dictated ideas to an AI and asked it to extrapolate upon those ideas and to draft a paper based on them. You edited the result." },
  { label: "Delegated Drafting", color: "#4f2678", questions: ["What role did your initial framing or prompt play in shaping the draft?", "How did you assess and refine the AI's content — what stayed, what changed?", "Would you describe the process as writing, editing, or curating? Why?"], scenario: "You provided a strong prompt. You reviewed the output and made moderate adjustments but did not substantially rework the content or structure." },
  { label: "Outsourcing", color: "#4f2678", questions: ["What might you miss by relying on AI to interpret this text instead of wrestling with it yourself?","Did the AI summary preserve the complexity, nuance, and argumentation of the original — or flatten it? How do you know?", "How do you know whether the AI’s explanation is accurate or complete?", "What role should confusion or struggle play in your learning process — and did you bypass that here?"], scenario: "You have found an interesting but difficult academic paper you would like to work with, but instead of reading and analyzing it yourself, you prompted an AI to summarize or explain it to you." },
  { label: "Overreliance", color:"#46216e", questions: ["How are you ensuring that you do not become overreliant on these tools?",
"How might this use of AI impact your growth as a thinker and scholar?", "What specific thinking skills are you outsourcing — and how might you begin to recover or rebuild them?"], scenario: "Your favourite AI platform is down for a day and you realize you don't know how to write without it!" },
  { label: "Misuse of AI in Learning", color: "#351359", questions: ["People may notice the AI-generated tone of your work. Even if no one calls it out, how might this affect your credibility, relationships, or reputation in the class environment?", "What are the academic and ethical consequences of submitting AI content as your own?"], scenario: "You used AI to synthesis a discussion thread and draft your response post, submitting the work as your own." },
  { label: "Academic misconduct", color: "#140226", questions: ["Would you be able to defend or explain this work if asked — honestly and in detail?"], scenario: "You used AI to generate most of your draft and accepted its content with only light edits. You didn’t fully understand or critically engage with the AI’s arguments, phrasing, or references — but submitted the output anyway." }
];

let currentIndex = 0;

function updateUI(index) {
  const zone = zones[index];
  dot.style.left = `${(index + 0.5) * (100 / 12)}%`;
  dot.style.backgroundColor = zone.color;
  label.textContent = zone.label;
  questionBox.innerHTML = zone.questions.map(q => `<p>${q}</p>`).join("");
  output.textContent = zone.scenario;
}

function handleToggles() {
  if (noAiToggle.checked && fullAiToggle.checked) {
    questionBox.innerHTML = `<p>⚠️ Please select only one toggle.</p>`;
    output.textContent = "";
    label.textContent = "";
    dot.style.display = "none";
    return;
  }

  if (noAiToggle.checked) {
    questionBox.innerHTML = `<p>What value did you gain from doing the work independently?</p> <p>Are there automations in your workflow that you may be unaware of?</p> `;
    output.textContent = "Though you were allowed to use AI in your work, you chose to complete the task without its assistance. This decision may have been based on personal values, a desire to strengthen your skills, or the belief that AI wasn't needed for this kind of work.";
    label.textContent = "No AI Used";
    dot.style.display = "none";
    return;
  }

  if (fullAiToggle.checked) {
    questionBox.innerHTML = `<p>Why was full automation appropriate in this context?</p><p>How does outsourcing the act of reading change your relationship to the ideas you're being asked to learn?</p>`;
    output.textContent = "You used AI to create a podcast of the *recommended* readings on your syllabus as you didn't have time to read them yourself.";
    label.textContent = "Fully AI Generated";
    dot.style.display = "none";
    return;
  }

  // Reset to interactive state
  dot.style.display = "block";
  updateUI(currentIndex);
}

bar.addEventListener("click", function (e) {
  if (noAiToggle.checked || fullAiToggle.checked) return;

  const rect = bar.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const zoneWidth = rect.width / 12;
  currentIndex = Math.min(11, Math.max(0, Math.floor(x / zoneWidth)));
  updateUI(currentIndex);
});

noAiToggle.addEventListener("change", handleToggles);
fullAiToggle.addEventListener("change", handleToggles);

// On page load
handleToggles();
