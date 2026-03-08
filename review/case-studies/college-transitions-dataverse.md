# Migrating a Public-Facing Data Product from Google Sheets to Aurora for College Transitions

_College Transitions' Dataverse — hundreds of sortable tables serving millions of visitors annually — was running entirely on Google Sheets. Webs migrated their core product data to AWS Aurora across a multi-phase engagement that started with a strategic assessment, moved through a full database migration, and continued into ongoing feature development._

---

### At a Glance

| Field | Value |
|---|---|
| **Client** | College Transitions |
| **Industry** | EdTech / College Admissions |
| **Services Provided** | Advisory & Implementation |
| **Engagement Duration** | June 2020 – 2021+ (3 SOWs across multiple phases) |
| **Team Size** | Solo consultant |
| **Key Technologies** | AWS Aurora, AWS Lambda, Vue.js, SheetDB, Google Sheets, DBeaver |

---

### The Challenge

College Transitions is a college admissions consulting firm that helps students, parents, and counselors navigate the admissions process with data. Their flagship resource is the Dataverse — over 150 pages of sortable tables covering admissions data across thousands of schools, receiving millions of visits per year. Originally built for high school counselors, it has grown into one of the most comprehensive free admissions data resources available.

In 2020, all of that data lived in Google Sheets.

This wasn't back-office operational data — this was their public-facing product. The Dataverse and their College Investigator comparison tool both pulled from a web of Google Sheets connected through SheetDB. The architecture had 86 tables with duplicate data points across them. Multiple team members entering data simultaneously risked collisions. There was no single source of truth. Updates to the data only reached users once every 24 hours, on application deployment. And because the Vue application pulled all data from SheetDB at deploy time and cached it as a JSON file, the architecture was going to buckle as the dataset grew.

It was a setup that made sense when College Transitions was starting out, and they wisely recognized they'd outgrow it. The question wasn't whether to migrate — it was how to do it without disrupting workflows, overengineering the solution for their current stage of business, or breaking a product that millions of people relied on.

---

### The Work

**Root — Assessment & Architecture (SOW #01)**

Before writing any migration code, Webs conducted a full strategic assessment of College Transitions' technical landscape. This started with the prior developer's Vue.js build for College Investigator. The assessment covered:

- **Data architecture** — Diagramming the existing data flow for both College Investigator and the Dataverse, mapping the 86 tables and identifying duplicate data points across them
- **Push vs. pull architecture** — Evaluating the tradeoffs between the existing push model (data cached as JSON at deploy) and a pull model (data retrieved on request), and recommending a phased transition
- **Observability** — Recommending monitoring for the customer experience: time to first byte, search performance, SSL validity, deployment health
- **Identity and access management** — Evaluating Netlify Identity, AWS Cognito, and Auth0, ultimately recommending Auth0 for its flexibility, documentation, and marketing analytics integrations
- **Business intelligence** — Evaluating Tableau and AWS QuickSight for internal and customer-facing reporting

The assessment didn't just catalog what existed — it laid out a roadmap for what the architecture needed to become, while being honest about what was right-sized for College Transitions' current stage and funding.

**Rise — The Migration (SOW #02)**

The core engagement: a 16-week sprint to move both College Investigator and the Dataverse off Google Sheets and onto AWS Aurora. The scope included:

- Migrating all product data from Google Sheets to the new database
- Ensuring both College Investigator and the Dataverse used the new database
- Keeping the existing team workflow intact during the transition — the College Transitions team couldn't stop entering data while the migration happened
- Producing an Architectural Decision Record documenting which database options were considered, the requirements, and the rationale for choosing Aurora
- Diagramming the new data flow for both products
- Documentation and enablement for the College Transitions team to enter data into the new database

This was a migration that had to be invisible to the millions of people using the Dataverse. The data couldn't go stale, the tables couldn't break, and the team couldn't lose a beat in their data entry workflow.

**Flourish — Continued Evolution (SOW #03)**

After the migration, the engagement shifted to an ongoing advisory and development pace at 10 hours per week. This phase included building new features — including Find Opportunities — while continuing to bridge the remaining Google Sheets/SheetDB dependencies and building on the new architecture.

Webs also taught the College Transitions team how to use DBeaver to navigate and manage their database directly, and provided recommendations for what to look for in a full-time engineer who could take over ongoing development. The goal was always to leave them self-sufficient, not dependent.

---

### The Results

| Outcome | Detail |
|---|---|
| **Data Consolidation** | 86 tables with duplicate data points consolidated into a single source of truth |
| **Collision Elimination** | Team members could update data simultaneously without overwriting each other's work |
| **Product Continuity** | Millions of annual visitors experienced zero disruption during migration |
| **Team Enablement** | College Transitions team trained on DBeaver and database management |
| **Hiring Guidance** | Provided profile and recommendations for an FTE to take over development |
| **Engagement Arc** | Assessment to migration to ongoing feature development — three SOWs built on growing trust |

---

### Client Perspective

> [Placeholder — action item: pending response from College Transitions on using their name and providing a quote]

---

### Reflections

[Placeholder — possible angles to develop:
- The discipline of right-sizing a technical solution for a company's stage. Aurora was the right call, but an enterprise data warehouse would have been overengineering it.
- The value of the assessment phase (SOW #01) in building trust and making the migration (SOW #02) go smoothly — by the time we were migrating data, we understood the system deeply.
- Teaching a non-technical team to navigate a real database. The migration wasn't done when the data moved — it was done when the team could manage it independently.]

---

### Key Takeaways

- **The product was the data.** This wasn't a database migration in the abstract — the Dataverse *is* College Transitions' core offering. The stakes of getting it wrong were existential, not just operational.
- **Right-sizing matters.** The solution had to match College Transitions' funding, team capacity, and stage of business. An enterprise-grade data platform would have been as much of a problem as Google Sheets — just a different kind.
- **Assessment earns trust.** Starting with a thorough, honest evaluation of the existing system — rather than jumping straight to implementation — built the foundation for a multi-phase engagement that scaled naturally.
- **Enablement is the deliverable.** Database training, documentation, and hiring guidance ensured College Transitions could sustain and evolve the system independently after the engagement ended.

---

### Related Services

- [Advisory — Strategic Consulting](/advisory)
- [Implementation — Full-Stack Development](/implementation)
- [Contact — Start a Conversation](/contact)

---

### Review Notes

_Items for the author to revisit before publishing:_

- [ ] Confirm permission from College Transitions (outreach sent)
- [ ] Get a testimonial quote from College Transitions
- [ ] Confirm why Aurora was specifically chosen — the ADR was produced but the rationale isn't recalled; check if you still have the ADR
- [ ] Clarify how long SOW #03 lasted and whether Find Opportunities is still live
- [ ] Confirm "millions of visits per year" — this is what's stated publicly but a specific number would strengthen the case study
- [ ] Add a before/after architecture diagram if possible
- [ ] Determine whether Auth0 should be mentioned (it was recommended but not implemented)
- [ ] Review whether the push-to-pull architecture narrative belongs in this case study or is too technical for the audience
