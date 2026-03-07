# From Emotion Recognition to Eye Tracking: Building Interactive Film Technology with Karen Palmer

_Through the ThoughtWorks Arts residency program, we partnered with immersive filmmaker Karen Palmer to build the technology behind two groundbreaking interactive installations — RIOT and Perception iO._

---

### At a Glance

| Field | Value |
|---|---|
| **Client** | Karen Palmer, Artist in Residence — ThoughtWorks Arts |
| **Industry** | Interactive Media / Arts & Technology |
| **Services Provided** | Implementation + Product Leadership |
| **Team** | Volunteer-based, rotating contributors |
| **Key Technologies** | Python, Keras, TensorFlow, Electron, Tobii Eye Tracker |
| **Recognition** | Cooper Hewitt Smithsonian Design Museum exhibition, STARTS Prize 2020 Honorable Mention, Ars Electronica |

---

### The Challenge

#### RIOT

Karen Palmer's RIOT is an interactive film that responds to the viewer. The concept: use real-time facial emotion recognition to detect the viewer's emotional state and branch the storyline accordingly. A fearful reaction takes the narrative one direction, anger another, neutrality another.

The technical challenge was building a reliable facial emotion recognition system from scratch. Quality training data was scarce — finding suitable datasets to train and test against was one of the project's most persistent obstacles. The operational challenge was just as real: with no funding, the entire project ran on volunteer labor, which meant constant turnover of contributors.

#### Perception iO

<!-- QUESTION: How would you describe the conceptual leap from RIOT to Perception iO in your own words? The research says it explored empathy, bias, and perception — but I want your framing. -->

Perception iO evolved the concept further. Built on the same facial emotion recognition and storyline manager from RIOT, it layered on Tobii eye tracking hardware to determine who the viewer had empathy with — adding gaze data to the emotional response data. This introduced a new dimension of complexity: hardware integration on top of what had been a software-only project.

The installation was commissioned for *Face Values: Exploring Artificial Intelligence* at the Cooper Hewitt Smithsonian Design Museum (September 2019 – May 2020).

---

### Our Approach

**RIOT — Building the Foundation**

Through the ThoughtWorks Arts residency program, we built two core systems from scratch: [EmoPy](https://github.com/thoughtworksarts/EmoPy), a deep neural net toolkit for facial expression recognition capable of classifying seven emotions (happiness, anger, fear, surprise, disgust, sadness, and calm/neutral), and the [RIOT Storyline Manager](https://github.com/thoughtworksarts/riot-storyline-manager), an Electron-based application that managed the branching video structure via XML configuration.

<!-- QUESTION: How would you describe your progression from developer to product ownership / project management in your own words? I don't want to characterize your role — I want your version of what happened. -->

The machine learning work was a first foray into ML — working through dataset challenges hands-on, iterating on models, and learning by doing. With a volunteer team and no formal structure, coordination was essential: assigning people to roles, keeping the technical direction cohesive as contributors rotated in and out, and making sure the emotion recognition and storyline management workstreams stayed aligned.

**Perception iO — Adding Hardware**

<!-- QUESTION: What were the specific challenges of integrating the Tobii eye tracker? What made the hardware dimension harder than pure software? -->

Perception iO took the proven RIOT foundation and added [Tobii eye tracking](https://github.com/thoughtworksarts/perception-eye-tracking) to capture where the viewer was looking — specifically, who they showed empathy toward. The same storyline manager and facial emotion recognition powered the core experience, but the hardware integration introduced new challenges.

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

---

### Client Perspective

> [Placeholder — reach out to Karen Palmer for a quote]

---

### Key Takeaways

- **Open source extends impact.** All three projects were published on GitHub, making the work available to researchers, artists, and developers well beyond the original installations. EmoPy alone has nearly 1,000 stars.
- **Software foundations enable hardware evolution.** The RIOT codebase became the platform that Perception iO built upon — proving that well-architected open-source tools can grow with a project's ambitions.
- **Volunteer teams can ship real work.** Both projects delivered with rotating contributors and no funding, through clear coordination and role assignment.

<!-- QUESTION: Are there other takeaways you'd want to highlight? Anything about the ThoughtWorks experience specifically that shaped how you work today? -->

---

### Related Services

- [Advisory — Strategic Consulting](/advisory)
- [Implementation — Full-Stack Development](/implementation)
- [Contact — Start a Conversation](/contact)

---

### Review Notes

_Items for the author to revisit before publishing:_

- [ ] Answer the inline questions (marked with `<!-- QUESTION -->` comments)
- [ ] Reach out to Karen Palmer for a testimonial quote
- [ ] Add screenshots or diagrams of the installations
- [ ] Confirm framing of ThoughtWorks connection (currently using Option B)
- [ ] Review whether any details about the volunteer team need adjusting
