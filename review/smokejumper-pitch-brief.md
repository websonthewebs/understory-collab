# Smokejumper Homepage Redesign — Team Pitch Brief

## The Concept in One Sentence

We're repositioning Understory Collaborative around a smokejumper metaphor — elite specialists who jump in early to prevent tech debt from burning down the business — and using an interactive self-assessment quiz as our primary top-of-funnel education tool.

---

## Why Smokejumpers?

Smokejumpers are elite, highly trained wildland firefighters who parachute into remote, inaccessible areas to suppress wildfires during their initial stages. The parallel to what we do:

- We're specialists, not generalists
- We drop into situations early, before the fire spreads
- We protect what's underneath — the understory — the foundational systems that make growth possible
- The name "Understory Collaborative" already sets up this metaphor perfectly

**Visual tone:** Clean, stylized vector illustration. Not gritty or photorealistic. Think Stripe or Linear — purposeful, minimal, slightly sophisticated. Subtle forest/canopy/root-system imagery. Warm-to-cool color gradients (healthy green to warning amber to crisis red) that tie into the quiz crisis types.

**How literal?** Subtle. The language carries the metaphor. The visuals support it without beating anyone over the head. No parachutes on the homepage. More like stylized forest cross-sections, layered canopy imagery, root systems.

---

## The Funnel (Chet Holmes Education-Based Model)

| Stage | What It Is | Smokejumper Version |
|---|---|---|
| **Mass market** | 7 weapons, one unified message | Homepage, social, content — all point to "Is your understory on fire?" |
| **Education offer** | Interactive self-assessment | "What's On Fire?" quiz — 5-7 multiple choice questions, self-serve, ungated |
| **Lead capture** | Contact info exchanged for value | Quiz results screen: "We wrote a field guide for this. Want it?" Email for white paper. |
| **T1: White paper** | Educate only, not a pitch | Crisis-type-specific white paper delivered. 4 types = 4 papers. |
| **T2+: Nurture** | Multi-touch, new value every 2 weeks | Follow-up sequence tailored to their crisis type |

**Key insight:** The quiz IS the education. By the time they finish, they've diagnosed themselves. The white paper deepens the wound. Understory is the obvious solution by the end.

---

## What the Quiz Does

- **5-7 multiple choice questions** written in a peer-to-peer voice (not a vendor checklist)
- **No gate to take the quiz** — self-serve, no email required to get results
- **Lands you in one of 4 crisis types** with a description of what that means
- **Lead capture at the result screen** — offer a crisis-specific white paper in exchange for email
- **Anonymous analytics** — track aggregate results (which crisis type is most common, answer distributions, drop-off rates) without capturing PII. This tells us which white paper to write first and where our audience's pain actually is.

---

## Primary Quiz Audience

Mapped to our personas, the quiz targets **Technical Tom** (CTO / VP of Engineering) most directly, with secondary relevance to **Strategic Sara** (VP of Digital Transformation) and **Founder Frankie**. The questions are designed to resonate with people who live close enough to the code and the team to know the honest answers.

---

## What Needs to Be Built

| Deliverable | Status | Notes |
|---|---|---|
| Quiz questions + scoring logic | Drafted | See: `review/whats-on-fire-quiz.md` |
| 4 crisis type descriptions | Drafted | See: `review/crisis-types-and-white-papers.md` |
| Homepage copy (new messaging) | Not started | Needs copywriter + design direction |
| Stylized illustrations | Not started | Potential Gemini-generated graphics as starting point |
| Quiz UI component | Not started | Interactive, accessible, works on mobile |
| Anonymous analytics integration | Not started | Simple event logging per completion |
| 4 white papers | Not started | Quiz analytics will tell us which one to write first |
| Nurture email sequence | Not started | Depends on white papers existing |

---

## What We're Replacing on the Homepage

Current homepage messaging:
- "We meet you where you are."
- "We create the conditions for people and organizations to flourish — through accessible, ethical technology and collaborative practice."

Proposed direction:
- Lead with the fire / understory protection framing
- Quiz as a primary CTA alongside "Get in Touch"
- Services section reframed around the types of fires we fight
- "How We Work" section (Root / Rise / Flourish) may still work — roots and growth already fit the metaphor

---

## Discussion Questions for the Team

1. Does the smokejumper metaphor resonate or is it too niche?
2. How much of the existing homepage structure do we keep vs. rebuild?
3. Are 4 crisis types the right number, or do we need more/fewer?
4. Who writes the white papers? What's the timeline?
5. Do we launch the quiz before the white papers exist (capture interest, deliver papers later)?
6. What's our plan for driving traffic to the quiz? (Social, LinkedIn, paid, organic?)
