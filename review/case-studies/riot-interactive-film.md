# From Emotion Recognition to Eye Tracking: Building Interactive Film Technology with Karen Palmer

_Through the ThoughtWorks Arts residency program, Webs contributed to the technology behind two interactive installations by immersive filmmaker Karen Palmer — RIOT and Perception iO._

---

### At a Glance

| Field | Value |
|---|---|
| **Artist** | Karen Palmer, Artist in Residence — ThoughtWorks Arts |
| **Industry** | Interactive Media / Arts & Technology |
| **Role** | Developer, Product & Project Leadership |
| **Team** | Volunteer-based, rotating contributors |
| **Key Technologies** | Python, Keras, TensorFlow, Electron, Tobii Eye Tracker |
| **Recognition** | Cooper Hewitt Smithsonian Design Museum exhibition, STARTS Prize 2020 Honorable Mention, Ars Electronica |

---

### The Challenge

#### RIOT

Karen Palmer's RIOT is an interactive film that responds to the viewer. The concept: use real-time facial emotion recognition to detect the viewer's emotional state and branch the storyline accordingly. A fearful reaction takes the narrative one direction, anger another, neutrality another.

The technical challenge was building a reliable facial emotion recognition system from scratch. Quality training data was scarce — finding suitable datasets to train and test against was one of the project's most persistent obstacles. The operational challenge was just as real: with no funding, the entire project ran on volunteer labor, which meant constant turnover of contributors.

#### Perception iO

Perception iO built on RIOT's foundation and added Tobii eye tracking to capture gaze and empathy data — who is the viewer looking at, and what does that reveal about their perception? This layered hardware complexity on top of what had been a software-only project: coordinating with the Tobii vendor, integrating their software, and designing the physical setup to trigger the installation for museum visitors.

The installation was commissioned for *Face Values: Exploring Artificial Intelligence* at the Cooper Hewitt Smithsonian Design Museum (September 2019 – May 2020).

---

### The Work

**RIOT — Building the Foundation**

Through the ThoughtWorks Arts residency program, Webs contributed to two core systems built from scratch: [EmoPy](https://github.com/thoughtworksarts/EmoPy), a deep neural net toolkit for facial expression recognition capable of classifying seven emotions (happiness, anger, fear, surprise, disgust, sadness, and calm/neutral), and the [RIOT Storyline Manager](https://github.com/thoughtworksarts/riot-storyline-manager), an Electron-based application that managed the branching video structure via XML configuration.

The machine learning work was a first foray into ML — working through dataset challenges hands-on, iterating on models, and learning by doing. With a volunteer team and no formal structure, coordination was essential: assigning people to roles, keeping the technical direction cohesive as contributors rotated in and out, and making sure the emotion recognition and storyline management workstreams stayed aligned. It was also a first taste of product and project leadership — discovering that skills honed over a decade of teaching could translate directly into guiding technical teams.

**Perception iO — Layering on Hardware**

Webs also contributed to Perception iO, which took the proven RIOT foundation and added [Tobii eye tracking](https://github.com/thoughtworksarts/perception-eye-tracking) to capture where the viewer was looking — specifically, who they showed empathy toward. The same storyline manager and facial emotion recognition powered the core experience, but hardware brought a new category of challenge: vendor coordination with Tobii, software integration, and designing the physical installation to work within the constraints of a museum environment.

---

### The Results

| Outcome | Detail |
|---|---|
| **EmoPy** | Open-source FER toolkit — 966 GitHub stars, 16+ contributors, 299 commits ([GitHub](https://github.com/thoughtworksarts/EmoPy)) |
| **RIOT Storyline Manager** | Open-source branching engine — 97 commits, 23 PRs ([GitHub](https://github.com/thoughtworksarts/riot-storyline-manager)) |
| **Perception Eye Tracking** | Tobii integration for gaze-based empathy detection ([GitHub](https://github.com/thoughtworksarts/perception-eye-tracking)) |
| **Cooper Hewitt Exhibition** | Perception iO shown at the Smithsonian Design Museum, Sept 2019 – May 2020 |
| **STARTS Prize 2020** | Honorable mention from the European Commission's Science, Technology & the Arts program |
| **Ars Electronica** | Exhibited at *In Kepler's Gardens* |
| **Thought Leadership** | Webs published [research on AI and criminal justice bias](https://www.thoughtworks.com/en-us/insights/blog/how-artificial-intelligence-transforming-criminal-justice-system) during the residency |

---

### Client Perspective

> [Placeholder — action item: reach out to Karen Palmer for a quote]

---

### Reflections

This work also prompted deeper research into how AI is applied in high-stakes domains like criminal justice. During the residency, Webs published an [article exploring AI bias in judicial decision-making](https://www.thoughtworks.com/en-us/insights/blog/how-artificial-intelligence-transforming-criminal-justice-system). That article cited research — including a widely referenced study on how judges' rulings varied based on whether they'd eaten lunch — that has since failed to replicate.

That experience reinforced something important: working in AI demands ongoing scrutiny of the research you build on, not just the code you write. Claims that feel intuitive aren't automatically valid, and the stakes of embedding flawed assumptions into automated systems are real. It's a lesson that continues to shape how Webs approaches AI and data-driven projects today — with more rigor, more skepticism, and a deeper respect for the gap between a compelling finding and a reliable one.

---

### Key Takeaways

- **Open source extends impact.** All three projects were published on GitHub, making the work available to researchers, artists, and developers well beyond the original installations. EmoPy alone has nearly 1,000 stars.
- **Software foundations enable hardware evolution.** The RIOT codebase became the platform that Perception iO built upon — proving that well-architected open-source tools can grow with a project's ambitions.
- **Volunteer teams can ship real work.** Both projects delivered with rotating contributors and no funding, through clear coordination and role assignment.
- **Intellectual honesty is a practice, not a moment.** Being willing to revisit and update your own thinking — even about your own published work — is part of doing responsible technology work.

---

### Related Services

- [Advisory — Strategic Consulting](/advisory)
- [Implementation — Full-Stack Development](/implementation)
- [Contact — Start a Conversation](/contact)

---

### Review Notes

_Items for the author to revisit before publishing:_

- [ ] Reach out to Karen Palmer for a testimonial quote
- [ ] Add screenshots or diagrams of the installations
- [ ] Review the Reflections section — does the tone feel right?
- [ ] Review whether any details about the volunteer team need adjusting
