export const quizQuestions = [
  {
    id: 1,
    question: "What percentage of your customers escalated a problem last year?",
    answers: [
      { label: "A", text: "Less than 5%.", points: 1 },
      { label: "B", text: "10–20%.", points: 2 },
      { label: "C", text: "30% or more.", points: 3 },
      { label: "D", text: "We don't know.", points: 4 },
    ],
  },
  {
    id: 2,
    question: "How often do you release to production?",
    answers: [
      { label: "A", text: "Multiple times a day or on-demand.", points: 1 },
      { label: "B", text: "Weekly or bi-weekly on a regular cadence.", points: 2 },
      { label: "C", text: "Monthly, sometimes less. We batch things up.", points: 3 },
      { label: "D", text: "It varies. Releases are a big event and sometimes they slip.", points: 4 },
    ],
  },
  {
    id: 3,
    question: "Something breaks in production right now. It needs a code fix. How long until that fix is live?",
    answers: [
      { label: "A", text: "Under an hour. We have a clear hotfix path.", points: 1 },
      { label: "B", text: "Same day. We'd need to coordinate but it would happen.", points: 2 },
      { label: "C", text: "A day or two. There are approvals, environments, and testing to get through.", points: 3 },
      { label: "D", text: "Hard to say. It depends on who's available and what else is in flight.", points: 4 },
    ],
  },
  {
    id: 4,
    question: "A customer offers you a multi-million dollar deal. It requires custom work. What's the first thing that happens?",
    answers: [
      { label: "A", text: "We'd need to understand what they're actually asking for before we could answer.", points: 1 },
      { label: "B", text: "We'd figure out how to make it work.", points: 2 },
      { label: "C", text: "We'd take it. That's a lot of money.", points: 3 },
      { label: "D", text: "We'd already be planning the implementation.", points: 4 },
    ],
  },
  {
    id: 5,
    question: "Think of a bad idea you've had. Among the people you currently work with, name the specific individuals who would tell you it's a bad idea. How many can you name?",
    answers: [
      { label: "A", text: "I'm struggling to name anyone.", points: 4 },
      { label: "B", text: "1 person, maybe.", points: 3 },
      { label: "C", text: "2–3 people. A small circle, but they're honest with me.", points: 2 },
      { label: "D", text: "4 or more. I can name them right now.", points: 1 },
    ],
  },
  {
    id: 6,
    question: "If you had a magic wand and could change one thing about your technical environment, how big is that change?",
    answers: [
      { label: "A", text: "It's a nice-to-have. Things are working, I'd just polish the edges.", points: 1 },
      { label: "B", text: "It's a meaningful improvement. There's something specific holding us back and I know what it is.", points: 2 },
      { label: "C", text: "It's a major overhaul. I'd rip out and replace a significant part of how we work.", points: 3 },
      { label: "D", text: "I'd start over. What we have isn't going to get us where we need to go.", points: 4 },
    ],
  },
];

export const crisisTypes = {
  brushFire: {
    id: "brush-fire",
    name: "Brush Fire",
    scoreRange: [6, 9],
    description:
      "Your understory is mostly healthy.",
    details:
      "You've got some dry brush — areas of tech debt or process friction that haven't caught fire yet. That's good news. The risk is that brush fires are easy to ignore until conditions change: a key person leaves, a big customer shows up, or the market shifts. The organizations that stay healthy are the ones that clear brush before fire season.",
    whitePaper:
      "Before Fire Season — A Leader's Guide to Preventive Technical Health",
  },
  smolder: {
    id: "smolder",
    name: "Smolder",
    scoreRange: [10, 14],
    description:
      "There's smoke under your canopy.",
    details:
      "Things are running, but your team knows it's fragile. Releases require more coordination than they should. Knowledge lives in a few heads. You've been saying \"we'll get to that\" about the same systems for a while now. Smolders are deceptive — they look stable to leadership and customers, but the people closest to the code know the truth. The fix is visibility and prioritization, not panic.",
    whitePaper:
      "Smoke Signals — Recognizing and Addressing Hidden Technical Risk",
  },
  crownFire: {
    id: "crown-fire",
    name: "Crown Fire",
    scoreRange: [15, 19],
    description:
      "The fire has reached your canopy.",
    details:
      "This isn't hidden anymore. Leadership is involved in technical issues regularly. Releases are events, not routines. Your team is spending more energy keeping things running than building what's next. And when a big opportunity shows up, the honest reaction is anxiety — because you're not sure the platform can handle it. The good news: crown fires are addressable. But they require focused, experienced intervention — not just more headcount.",
    whitePaper:
      "When the Canopy Burns — A Playbook for Engineering Organizations in Active Crisis",
  },
  firestorm: {
    id: "firestorm",
    name: "Firestorm",
    scoreRange: [20, 24],
    description:
      "You're in a firestorm.",
    details:
      "Multiple things are on fire and they're feeding each other. Technical debt is driving turnover, turnover is concentrating knowledge, concentrated knowledge is slowing releases, slow releases are frustrating customers. You've probably been here for a while — firestorms don't start overnight. The magic wand question hit different for you. Here's what we'll say: organizations come back from this, but not by doing more of what got them here. It takes an honest assessment, hard prioritization, and experienced people who've seen this pattern before.",
    whitePaper:
      "After the Firestorm — Rebuilding Technical Organizations from Crisis to Confidence",
  },
};

export function getCrisisType(score) {
  for (const type of Object.values(crisisTypes)) {
    const [min, max] = type.scoreRange;
    if (score >= min && score <= max) {
      return type;
    }
  }
  return crisisTypes.firestorm;
}
