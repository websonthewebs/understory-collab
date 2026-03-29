# Crisis Types & White Paper Outlines

## Overview

The "What's On Fire?" quiz lands users in one of four crisis types. Each type has a distinct profile, a results-screen description, and a corresponding white paper that serves as the gated lead-gen offer.

The white papers follow Chet Holmes T1 rules: **educate only, do not pitch.** Understory should be the obvious answer by the end, but the paper never says so directly.

---

## Crisis Type 1: Brush Fire

**Score range:** 6–9 points

### Profile
Things are mostly healthy. There are some known issues — a legacy system here, a manual process there — but nothing is actively threatening the business. The risk is complacency: brush fires left unattended become something worse.

### Results Screen Copy

> **Your understory is mostly healthy.**
>
> You've got some dry brush — areas of tech debt or process friction that haven't caught fire yet. That's good news. The risk is that brush fires are easy to ignore until conditions change: a key person leaves, a big customer shows up, or the market shifts. The organizations that stay healthy are the ones that clear brush before fire season.

### White Paper: "Before Fire Season — A Leader's Guide to Preventive Technical Health"

**Thesis:** The best time to address tech debt is when you're not in crisis.

**Outline:**
1. Why healthy organizations still accumulate tech debt (it's not a failure — it's physics)
2. The 5 most common "brush" patterns: test gaps, deployment friction, undocumented tribal knowledge, deferred upgrades, one-customer features
3. How to assess severity without over-investing (lightweight audit frameworks)
4. Building a "controlled burn" practice: scheduled, intentional debt reduction
5. Warning signs that brush is becoming something worse
6. Case pattern: An organization that cleared brush proactively vs. one that didn't (anonymized composite)

---

## Crisis Type 2: Smolder

**Score range:** 10–14 points

### Profile
No visible flames, but there's heavy smoke. Systems work but they're fragile. The team knows where the problems are but hasn't had time (or permission) to fix them. Knowledge is concentrated. Releases are careful rather than confident. The danger is that a smolder can look stable from the outside while the foundation weakens.

### Results Screen Copy

> **There's smoke under your canopy.**
>
> Things are running, but your team knows it's fragile. Releases require more coordination than they should. Knowledge lives in a few heads. You've been saying "we'll get to that" about the same systems for a while now. Smolders are deceptive — they look stable to leadership and customers, but the people closest to the code know the truth. The fix is visibility and prioritization, not panic.

### White Paper: "Smoke Signals — Recognizing and Addressing Hidden Technical Risk"

**Thesis:** The most dangerous tech debt is the kind that doesn't show up in dashboards.

**Outline:**
1. Why smolders are the most common state (and why they persist)
2. The visibility gap: what leadership sees vs. what the team knows
3. Knowledge concentration as a risk multiplier (the bus factor problem)
4. Mapping your smolder: lightweight methods for surfacing hidden risk without launching a formal audit
5. The "permission to fix" problem: how to make the business case for addressing debt that isn't yet on fire
6. Building burn-down momentum: small wins that create political capital for bigger investments
7. Case pattern: How a smolder became a crown fire (and how a similar org prevented it)

---

## Crisis Type 3: Crown Fire

**Score range:** 15–19 points

### Profile
The fire is in the canopy — it's visible to customers, leadership, and the board. Escalations are frequent. Releases are painful. The team is reactive, spending more time fighting fires than building. Growth opportunities create anxiety rather than excitement because the platform can't reliably support them.

### Results Screen Copy

> **The fire has reached your canopy.**
>
> This isn't hidden anymore. Leadership is involved in technical issues regularly. Releases are events, not routines. Your team is spending more energy keeping things running than building what's next. And when a big opportunity shows up, the honest reaction is anxiety — because you're not sure the platform can handle it. The good news: crown fires are addressable. But they require focused, experienced intervention — not just more headcount.

### White Paper: "When the Canopy Burns — A Playbook for Engineering Organizations in Active Crisis"

**Thesis:** You can't hire your way out of a crown fire. You need a different kind of intervention.

**Outline:**
1. How crown fires develop: the escalation from smolder to visible crisis
2. Why adding headcount often makes it worse (onboarding burden, architecture confusion, coordination overhead)
3. The triage framework: what to stabilize first, what to let burn, what to rebuild
4. Deployment pipeline as the first domino: why fixing how you ship unlocks everything else
5. Managing stakeholders during crisis: communication frameworks for leadership and customers
6. The 90-day stabilization pattern: a realistic timeline for getting from reactive to proactive
7. When to bring in outside specialists (and how to evaluate them without getting burned again)

---

## Crisis Type 4: Firestorm

**Score range:** 20–24 points

### Profile
Multiple fronts. Self-sustaining. The technical problems are now business problems. Turnover is elevated because good engineers don't want to work in a burning building. Revenue opportunities are being declined or botched. The magic wand answer is existential — not "fix the CI pipeline" but "start over." This is where organizations either transform or slowly decline.

### Results Screen Copy

> **You're in a firestorm.**
>
> Multiple things are on fire and they're feeding each other. Technical debt is driving turnover, turnover is concentrating knowledge, concentrated knowledge is slowing releases, slow releases are frustrating customers. You've probably been here for a while — firestorms don't start overnight. The magic wand question hit different for you. Here's what we'll say: organizations come back from this, but not by doing more of what got them here. It takes an honest assessment, hard prioritization, and experienced people who've seen this pattern before.

### White Paper: "After the Firestorm — Rebuilding Technical Organizations from Crisis to Confidence"

**Thesis:** Firestorms are survivable, but recovery requires a fundamentally different approach than what created the crisis.

**Outline:**
1. Anatomy of a firestorm: how technical, organizational, and business crises compound
2. The turnover-knowledge spiral: why your best people are leaving and what it's costing
3. Honest assessment: what to save, what to sunset, what to rebuild (and how to make those calls)
4. The "revenue discipline" problem: undoing the damage of one-off customer commitments
5. Stabilize, then modernize: why jumping straight to a rewrite usually fails
6. Rebuilding team confidence: the human side of technical recovery
7. The 6-month transformation pattern: realistic milestones from firestorm to functioning
8. Case pattern: An organization that came back (anonymized composite)

---

## White Paper Production Notes

- **Write the most common crisis type first.** Anonymous quiz analytics will tell us which type lands most often. That's your first white paper.
- **Length:** Aim for 2,500–4,000 words per paper. Long enough to be substantive, short enough to actually get read.
- **Tone:** Authoritative but empathetic. These people are in pain. Don't lecture.
- **Branding:** Subtle Understory presence. Logo, brief "about" section at the end. No sales pitch in the body.
- **Format:** PDF, designed. Not a Google Doc. This is a credibility artifact.

---

## Analytics-Driven Prioritization

Once the quiz is live (even before white papers exist), track:

1. **Which crisis type is most common?** Write that white paper first.
2. **Which questions produce the most severe answers?** Those pain points are your best content topics for social/blog.
3. **What's the email capture rate per crisis type?** Firestorm users may convert highest (most urgent pain). Brush Fire users may convert lowest (less urgency). This informs how aggressive the CTA should be per type.
