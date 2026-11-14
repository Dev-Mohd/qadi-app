# Y Combinator directory: recent themes (2024-2026) adaptable to Saudi Arabia / the Gulf, and YC companies already in MENA

Research date: 2026-11-14.

**How to read the evidence labels**

- **[DIR]** = taken from the full YC company directory dataset, pulled 2026-11-14 from the open mirror `https://yc-oss.github.io/api/companies/all.json` (6,397 launched companies; the mirror's meta file says `last_updated: 2026-11-14`). It mirrors the same fields ycombinator.com/companies shows (batch, status, team size, location, regions, one-liner, long description). Each company link below points to its ycombinator.com page, but I did **not** fetch those pages individually. Descriptions and traction numbers in the directory are **self-reported by the founders**.
- **[FETCHED]** = page fetched and read.
- **[SNIPPET]** = search-result snippet only, not opened.
- The live directory pages (`ycombinator.com/companies/location/...`) did not filter when fetched (JavaScript); they returned the default top-50 list, so the mirror dataset is the basis for all counts.
- Directory `status` is coarse (Active / Inactive / Acquired / Public). "Active" only means not marked dead; it lags reality and says nothing about traction.

---

## Q1. What do YC's latest Requests for Startups ask for, and which are feasible for a solo developer?

### Takeaway
The RFS has moved sharply toward hard tech (space, robots, defense, chips, data centers); only a minority of requests are laptop-buildable. The solo-feasible ones relevant to this founder are: an adaptive tutor for young children ("The Primer"), mass-market consumer AI, the software slice of AI for the aging population, AI-native service companies, the "$15-an-hour expert", and narrow "SaaS challenger" rebuilds.

### Cited Findings
**Winter 2027 edition (current on ycombinator.com/rfs, 11 requests) [FETCHED]** — [YC RFS](https://www.ycombinator.com/rfs)
- Startups in a World of Abundant Space Access (Ankit Gupta); Robots Made in America (Diana Hu); Wall Street for the Physical Buildout (Brad Flora); Vertical Foundation Models (Diana Hu); Data Center Supply Chain (Jared Friedman); AI for the Air-Gapped Economy (Brad Flora); Own Your Intelligence (Jon Xu) — all capital- or research-heavy.
- **The $15-an-Hour Expert** (Brad Flora): AI that lets workers without formal credentials do specialist work in fields like tax, insurance, medical billing.
- **LLMs That Write Well** (Jared Friedman): recent LLMs write more robotically; wants a model people enjoy conversing with.
- **Plaid for Government Benefits** and **AI for City Hall** (Gustaf Alströmer): consented verification of government records; AI for permitting, 311, records, inspections.

**Fall 2026 edition (13 requests), via aggregator, published 2026-07-25 [FETCHED aggregator, not YC primary]** — [Superframeworks](https://superframeworks.com/articles/yc-fall-2026-rfs-indie-hacker-plays)
- **The Primer** (Andrew Miklas): adaptive tutor teaching young children reading, writing, arithmetic at consumer scale.
- **AI-Powered Consumer Products for 1 Billion People** (Raphael Schaad): mass-market consumer AI as inference gets cheap.
- **AI for the Aging Population** (Max Kolysh): AI for older adults and caregivers, incl. robotics and monitoring.
- **A Cloud for Small Software** (Pete Koomen); **Multiplayer AI** (Aaron Epstein); **Proving You're Human** (Max Kolysh); **AI-Native Compliance Infrastructure** (Daivik Goel); **Self-Maintaining APIs** (Harsha Gaddipati).
- Hard tech / other: The Future of American Defense (by the US Secretary of the Army, Daniel P. Driscoll), Compute at Sea, New Operating Systems for the Physical World, Data for the Real World, The Best Time to Build in Crypto.
- The aggregator's own (not YC's) "solo fit" picks: Cloud for Small Software, Self-Maintaining APIs, Multiplayer AI, AI-Native Compliance, and the software slice of AI for the Aging Population (voice check-ins, family dashboards, care coordination).

**Summer 2026 edition (15 categories), via aggregator [FETCHED aggregator]** — [Superframeworks](https://superframeworks.com/articles/yc-summer-2026-rfs-hard-tech-pivot)
- Software-reachable: **AI-Native Service Companies** (Gustaf Alströmer: run the regulated service firm yourself on AI instead of selling software to it), **SaaS Challengers** (Jared Friedman), **Company Brain** (Tom Blomfield), **Software for Agents** (Aaron Epstein), **Dynamic Software Interfaces**, **The AI Operating System for Companies**, **AI Personalized Medicine**, Startups That Want to Sell to Huge Companies.
- Hard tech: low-pesticide agriculture robots, counter-swarm defense, electronics in space, lunar industry, inference chips, semiconductor supply chain, hardware supply chain.
- Published late April 2026, framed as a hard-tech pivot [SNIPPET] — [The Next Web](https://thenextweb.com/news/yc-summer-2026-rfs-hard-tech-pivot)

**Spring 2026 edition (8 categories)** — only four named by the aggregator: AI agencies, AI for product management, stablecoin tools, AI dev tools; described as "all reachable from a laptop" [FETCHED aggregator] — [Superframeworks](https://superframeworks.com/articles/yc-summer-2026-rfs-hard-tech-pivot)

### Inferences
- Solo-feasible AND within this founder's allowed scope: (1) The Primer-style Arabic early-literacy/numeracy tutor; (2) aging-population software (family check-in/dashboard) — culturally strong fit where elders live with or near family; (3) "$15-an-hour expert" narrowed to one Saudi paperwork domain; (4) a single-workflow "SaaS challenger" for one small-business type.
- Not solo-feasible or excluded: everything hardware/space/defense/chips; crypto and stablecoins (fintech exclusion); "AI-native service company" in regulated fields needs licences (law, accounting, insurance) — a solo founder would need a licensed partner.
- Several Winter 2027 government requests (benefits verification, city hall) are US-specific; in Saudi Arabia government digital services are run centrally, so this is a vendor/procurement game rather than a bootstrap one.

### Gaps
- Could not fetch the Spring/Summer/Fall 2026 lists from ycombinator.com itself (the page only served Winter 2027); those three editions rest on one aggregator, and four of eight Spring 2026 items are unnamed.
- 2025 RFS editions were not retrieved (`?year=2025` returned the Winter 2027 list).

---

## Q2. Which YC companies target MENA / Saudi Arabia, and which verticals are taken?

### Takeaway
YC's MENA footprint is small and dominated by fintech and logistics: 54 non-Israeli companies carry the MENA region tag out of 6,397, only 5 are Saudi-based (all 2022-2023 batches, 3 of them fintech), and no Saudi-based company appears in any 2024-2026 batch. Consumer, community, family, education and small-business vertical AI in Arabic are essentially untouched by YC-backed players.

### Cited Findings
All rows [DIR] unless noted — dataset: [yc-oss mirror](https://yc-oss.github.io/api/companies/all.json)

**Counts**
- 92 companies carry the "Middle East and North Africa" region tag; 38 are Israel; 54 remain (this includes Turkey and Georgia).
- Country tags: United Arab Emirates 18, Egypt 15.
- MENA-tagged companies in 2024-2026 batches: only 7, none in the Gulf except Ovlo (Dubai, but serves London startups).

**Saudi Arabia-based**
| Company | Batch | What | Status / team | Funding known |
|---|---|---|---|---|
| [Drahim](https://www.ycombinator.com/companies/drahim) | S22 | "WealthFront for Saudi & Middle East" (fintech) | Active, 8 | not found |
| [erad](https://www.ycombinator.com/companies/erad) | S22 | Non-dilutive funding and payments (fintech) | Active, 5 | $16M pre-Series A reported April 2025 [SNIPPET] — [Arab News](https://www.arabnews.pk/node/2600961) |
| [Levers](https://www.ycombinator.com/companies/levers) | S22 | Accounts-receivable collection SaaS, Jeddah | Active, 8 | not found |
| [Sirdab](https://www.ycombinator.com/companies/sirdab) | W23 | Cloud warehousing and logistics | Active, team n/a | not found |
| [Skillza](https://www.ycombinator.com/companies/skillza) | W22 | Assessment tools for teachers/schools in MEA (Dubai/Cairo/Riyadh) | **Inactive**, 20 | not found |

**UAE / Gulf-based (non-fintech first)**
| Company | Batch | What | Status / team |
|---|---|---|---|
| [Mantys](https://www.ycombinator.com/companies/mantys) | W23 | AI agents for hospital insurance eligibility / prior auth in GCC; claims 100+ facilities, 40,000 patients/day (self-reported) | Active, 10 |
| [Cercli](https://www.ycombinator.com/companies/cercli) | S23 | AI HR and recruitment platform | Active, 28 |
| [Kaso](https://www.ycombinator.com/companies/kaso) | W22 | AI group purchasing for restaurants | Active, 20 |
| [TENDERD](https://www.ycombinator.com/companies/tenderd) | S18 | AI for heavy-equipment operations | Active, 60 |
| [Atmana](https://www.ycombinator.com/companies/atmana) | S21 | Apps against tech addiction (blocking + peer support); second line: hiring engineers from India | Active, 8 |
| [Mailwarm](https://www.ycombinator.com/companies/mailwarm) | S20 | Email deliverability | Active, 10 |
| [inFeedo AI](https://www.ycombinator.com/companies/infeedo-ai) | S20 | Employee-engagement AI | Active, 150 |
| [Ovlo](https://www.ycombinator.com/companies/ovlo) | W25 | Founder-led hiring for London startups | Active, 2 |
| Fintech (excluded scope, listed for completeness): [Alaan](https://www.ycombinator.com/companies/alaan) W23 (team 250), [Ziina](https://www.ycombinator.com/companies/ziina) W21, [Baraka](https://www.ycombinator.com/companies/baraka) S21, [Nomod](https://www.ycombinator.com/companies/nomod) S21, [FinFlx](https://www.ycombinator.com/companies/finflx) W22, [Elevate](https://www.ycombinator.com/companies/elevate) W22, [Amal Invest](https://www.ycombinator.com/companies/amal-invest) W22 (Bahrain, Shariah-compliant investing, team 3) | | | |
- Alaan raised a $48M Series A led by Peak XV with YC participating, reported in late 2025, and is expanding in Saudi Arabia [SNIPPET] — [Startup Researcher](https://www.startupresearcher.com/news/startup-researcher-middle-east-week-45-2025)

**Jordan / Egypt / North Africa / Iraq**
| Company | Batch | What | Status / team |
|---|---|---|---|
| [Open (OpenCX)](https://www.ycombinator.com/companies/open) | W24 | Enterprise AI customer support across email, web, phone, SMS, WhatsApp | Active, 21 |
| [Darsel](https://www.ycombinator.com/companies/darsel) | W22 | K-12 math chatbot over SMS/WhatsApp/Messenger, Amman | Active, 5 |
| [Luciq (formerly Instabug)](https://www.ycombinator.com/companies/luciq) | W16 | Mobile observability, Cairo | Active, 250 |
| [Sakneen](https://www.ycombinator.com/companies/sakneen) | W20 | "Shopify for real estate developers", Cairo | Active, 9 |
| [Pylon](https://www.ycombinator.com/companies/pylon) | S21 | Software for water/electricity utilities | Active, 72 |
| [Sapien](https://www.ycombinator.com/companies/outrove) | S25 | Synthetic populations for decisions, Cairo | Active, 2 |
| [RASPIRE](https://www.ycombinator.com/companies/raspire) | Spring 2026 | Runtime security, Cairo | Active, 5 |
| Logistics / commerce / delivery / fintech: Breadfast S19, Lezzoo W19 (Iraq), Yassir W20 (Algeria), Trella S19, ShipBlu S21, Flextock W21, Chari S21, Freterium S21, Lynks W16, Thndr S20, Amenli S21, Dayra W21, peopleCQ W21, WaystoCap W17 (acquired) | | | |
- OpenCX raised $7M in January 2026 led by Y Combinator and X by Unifonic with Shorooq participating; Saudi Arabia is the priority expansion market. Outlets disagree on HQ (Jordan vs UAE/Dubai); the YC directory lists Amman [SNIPPET] — [Wamda](https://www.wamda.com/2026/01/opencx-raises-7-million-ahead-saudi-expansion)

**Outside the region but serving Arab / Muslim users**
- [Muzz](https://www.ycombinator.com/companies/muzz) S17, London: Muslim marriage app; claims 10M+ members and 500,000 weddings; team 104.
- [Durioo](https://www.ycombinator.com/companies/durioo) W22, Malaysia: subscription streaming of Islamic cartoons for children; team 50.
- [Manara](https://www.ycombinator.com/companies/manara) W21: interview prep and referrals placing Arab-world engineers in global tech jobs; team 10.
- [Munify](https://www.ycombinator.com/companies/munify) S25: cross-border neobank for the Middle East; $3M seed led by YC reported September 2025 [SNIPPET] — [Arab News](https://www.arabnews.pk/node/2649625/business-economy)
- [Brickwise](https://www.ycombinator.com/companies/brickwise) F25, London: AI property manager; says it has customers "from San Francisco to Dubai" and raised over $3M.

### Inferences
- "Taken" by funded YC players in the region: fintech (payments, wealth, spend, lending), logistics/warehousing, delivery super-apps, hospital insurance operations (Mantys), enterprise customer support (OpenCX), HR (Cercli). Most are outside this founder's scope anyway.
- Open in the YC set: Arabic consumer apps, family/kids, couples, community, exam prep, teacher tools, and AI front-desk tools for small clinics, salons, workshops and property offices.
- The one YC attempt at Arabic teacher tooling, Skillza, is marked Inactive — a warning that selling to schools in the region is slow, not that the need is absent.
- Three of the strongest "Muslim consumer" YC companies (Muzz, Durioo, Amal) were built outside the Gulf for the diaspora and Southeast Asia, where users pay by card and app-store subscription.

### Gaps
- The directory has no per-company funding field; funding is only known where press snippets surfaced it. No funding figures found for Drahim, Levers, Sirdab, Mantys, Cercli, Kaso, Darsel.
- Why Skillza became inactive: no source found.
- TechCrunch / MENAbytes were not individually searched; corroboration rests on Wamda and Arab News snippets.
- Companies that serve the Gulf without tagging the region or mentioning it in their description would be missed by this method.

---

## Q3. Which recent YC themes are "vertical AI for one small-business type", and are there Arabic equivalents?

### Takeaway
This is the single most repeated pattern in 2024-2026 batches: an AI front desk / phone agent / back office for one trade, with dental, home services, law-firm intake, restaurants, property management and car dealers each funded several times. Arabic equivalents already exist in Saudi Arabia (Velents, WideBot, Ehlan.ai, BASMA, Clearvision), so the category is validated but not empty; the remaining room is in narrower verticals and WhatsApp-first products.

### Cited Findings
All [DIR] — [yc-oss mirror](https://yc-oss.github.io/api/companies/all.json)

**Scale of the theme:** of 2,060 companies in 2024-2026 batches, 1,251 (61%) are B2B; 1,083 carry the "AI" tag.

**By vertical (batch in brackets)**
- **Dental / clinics front desk:** [Dodo](https://www.ycombinator.com/companies/dodo) (S24; calls and texts for "thousands of clinics", team 10), [Avora](https://www.ycombinator.com/companies/avora) (F24), [10x](https://www.ycombinator.com/companies/10x) (W25), [Toothy AI](https://www.ycombinator.com/companies/toothy-ai) (W25, team 15), [Patientdesk.ai](https://www.ycombinator.com/companies/patientdeskai) (W26), [Kairos Health](https://www.ycombinator.com/companies/kairos-health) (F26; calls overdue patients and books them), [Penciled](https://www.ycombinator.com/companies/penciled) (W24; physical therapy scheduling, reminders, waitlist), [Dime](https://www.ycombinator.com/companies/dime-2) (W24), [Tepali](https://www.ycombinator.com/companies/tepali) (W26; EMR + front desk for medspas), [Klarify](https://www.ycombinator.com/companies/klarify) (Spring 2026; therapists' admin), [Vetnio](https://www.ycombinator.com/companies/vetnio) and [Scritch](https://www.ycombinator.com/companies/scritch) (vets).
- **Home services / trades:** [Feldy](https://www.ycombinator.com/companies/feldy) (W24), [Drillbit](https://www.ycombinator.com/companies/drillbit) (S24), [Hey Telo](https://www.ycombinator.com/companies/hey-telo) (W25), [Cactus](https://www.ycombinator.com/companies/oncactus) (Spring 2025), [Cohesive](https://www.ycombinator.com/companies/cohesive) (Spring 2025), [Stormy](https://www.ycombinator.com/companies/stormy) (S25), [Robby](https://www.ycombinator.com/companies/robby) (W26), [CentralComs](https://www.ycombinator.com/companies/centralcoms) (Spring 2026), [Fleety](https://www.ycombinator.com/companies/fleety) (F26; AI dispatcher for plumbing/HVAC), [Rezora IO](https://www.ycombinator.com/companies/rezora-io) (F26).
- **Restaurants (phone and reservations):** [Certus AI](https://www.ycombinator.com/companies/certus-ai) (S25, team 8), [Elyra](https://www.ycombinator.com/companies/elyra) (Spring 2026, Stockholm), [Marble](https://www.ycombinator.com/companies/joinmarble) (S26), [TryNearby](https://www.ycombinator.com/companies/trynearby) (S26; local creators for restaurants, claims 100+ restaurants).
- **Property management:** [AveryIQ](https://www.ycombinator.com/companies/averyiq) (W24), [ProhostAI](https://www.ycombinator.com/companies/prohostai) (S24), [Wayline](https://www.ycombinator.com/companies/wayline) (S25), [Brickwise](https://www.ycombinator.com/companies/brickwise) (F25), [Atlia](https://www.ycombinator.com/companies/atlia) (S26).
- **Law-firm intake:** [Caseflood.ai](https://www.ycombinator.com/companies/caseflood-ai), [OpenIntake](https://www.ycombinator.com/companies/openintake) (both W25), [Praxis](https://www.ycombinator.com/companies/praxis) (F26); plus a run of "AI-native law firms" in 2026.
- **Auto:** [Sandra AI](https://www.ycombinator.com/companies/sandra-ai) (F24, car dealers), [Flai](https://www.ycombinator.com/companies/flai) (S25, team 40), [Parrot](https://www.ycombinator.com/companies/useparrot) (Spring 2026, auto repair shops).
- **Hotels:** [Riviera](https://www.ycombinator.com/companies/riviera) (W25; phone receptionist).
- **Generic small business:** [LemonLime](https://www.ycombinator.com/companies/lemonlime) (S26; automated sales/marketing), [Theo](https://www.ycombinator.com/companies/theo) (F26; AI builds and maintains the website), [Boom AI](https://www.ycombinator.com/companies/boom-ai) (F25, Mexico City; win-back conversations over SMS/email/WhatsApp/phone).
- **2026 shift:** many entries are now "AI-native firm" rather than software — accounting ([Rational](https://www.ycombinator.com/companies/rational), [Bear](https://www.ycombinator.com/companies/bear-inc), [Billow AI Labs](https://www.ycombinator.com/companies/billow-ai-labs), [Balance](https://www.ycombinator.com/companies/getbalance)), law ([LegalOS](https://www.ycombinator.com/companies/legalos), [Wingman Law](https://www.ycombinator.com/companies/wingman-law)), insurance brokerage ([Kinro](https://www.ycombinator.com/companies/kinro)).

**Arabic-language equivalents [all SNIPPET, company-reported]**
- Velents.ai (Saudi) raised $1.5M in October 2025 to launch Agent.sa, an Arabic "AI employee" covering calls and WhatsApp; targets enterprises generally — [Wamda](https://www.wamda.com/2025/10/velents-raises-1-5-million-investment-propel-launching-agentsa)
- WideBot AI launched an Arabic voice agent for WhatsApp Business calls in October 2025 (bookings, inquiries), aimed at governments and enterprises — [Mubasher](https://en.sharikatmubasher.com/media-hub/news/21511395/widebot-ai-unveils-groundbreaking-arabic-voice-ai-for-whatsapp-business)
- Ehlan.ai: Saudi-dialect voice and chat agents with WhatsApp booking for clinics and other businesses — [VoiceAISpace listing](https://www.voiceaispace.com/tool/ehlanai)
- BASMA (BrainSAIT): Arabic-first voice and WhatsApp booking agent for Saudi clinics; metrics are from its own deck — [BASMA](https://basma-app.pages.dev/)
- Clearvision: self-hosted Arabic voice receptionist hosted in Dammam, listed at SAR 9,900/year — [Clearvision](https://voiceai.clearvision.com.sa/)
- YC's own multilingual players: OpenCX (W24) expanding into Saudi Arabia (see Q2); [Samora AI](https://www.ycombinator.com/companies/samora-ai) (W26) sells voice agents that handle dialects and mid-sentence language switching — its directory text does not name Arabic.

### Inferences
- The US pattern depends on phone calls and on integrations with practice-management software (e.g. Penciled with WebPT). In the Gulf the customer channel is overwhelmingly WhatsApp, so the transferable product is a WhatsApp booking/reminder agent, which is also cheaper and lower-risk to build than real-time Arabic dialect voice.
- General "Arabic AI employee" platforms are funded and sell to enterprises; no source found shows a funded player owning one small vertical (salons, auto workshops, small aesthetic clinics, property offices) in Arabic. That is where a solo developer has room.
- The 2026 "AI-native firm" variant does not suit a solo unlicensed founder in Saudi Arabia.

### Gaps
- No independent data on revenue or customer counts for any Arabic player; all figures are self-reported and snippet-only.
- No evidence gathered on what Saudi small clinics/salons currently use for booking, or their willingness to pay.
- Insurance-verification features (the money-maker for US dental AI) were not checked against Saudi insurance workflows.

---

## Q4. Which YC consumer / community companies gained traction recently, and which shut down?

### Takeaway
Consumer is a small slice of recent YC (145 of 2,060, about 7%; Education 17), and the visible traction is concentrated in language learning, exam prep, job-application agents, AI health coaching and "closeness" apps for couples and friends. Shutdowns cluster in AI content toys, sports betting, and AI therapy.

### Cited Findings
All [DIR], traction figures self-reported — [yc-oss mirror](https://yc-oss.github.io/api/companies/all.json)

**Composition of 2024-2026 batches:** B2B 1,251; Industrials 269; Healthcare 174; Consumer 145; Fintech 143; Real Estate and Construction 40; Government 21; Education 17.

**Recurring consumer/education themes (number of distinct companies seen)**
- **Language learning by speaking or scrolling:** [Fluently](https://www.ycombinator.com/companies/fluently) (W24), [ISSEN](https://www.ycombinator.com/companies/issen) (F24, team 1), [Pingo](https://www.ycombinator.com/companies/pingo) (S25), [Parrot](https://www.ycombinator.com/companies/parrot) (F25; "power users scroll 6 hours/week"), [Doomersion](https://www.ycombinator.com/companies/doomersion) (W26; ~15k downloads in first two weeks), [Aleph Lab](https://www.ycombinator.com/companies/aleph-lab) (F25; language buddy inside Minecraft).
- **AI tutors and exam prep:** [Educato](https://www.ycombinator.com/companies/educato) (S24; targets exams outside the US top 10), [Miyagi Labs](https://www.ycombinator.com/companies/miyagi-labs) (W25; SAT, Nigeria UTME, Kenya KCSE, India NEET/CAT, Turkey YKS — no Arab exam listed), [Alice.tech](https://www.ycombinator.com/companies/alice-tech) (W25; 10k+ students, $20k MRR growing 10% week over week at time of writing), [Mathos](https://www.ycombinator.com/companies/mathos) (W24), [YouLearn](https://www.ycombinator.com/companies/youlearn), [General Learning](https://www.ycombinator.com/companies/general-learning) (F24, team 35), [Wondering](https://www.ycombinator.com/companies/wondering) (S26; "Duolingo for learning anything").
- **Teacher tools:** [Edexia](https://www.ycombinator.com/companies/edexia) (W25; essay grading), [Frizzle](https://www.ycombinator.com/companies/frizzle) (S25; grades handwritten math).
- **Relationships and friendship:** [Maia](https://www.ycombinator.com/companies/maia) (W24; couples), [Candle](https://www.ycombinator.com/companies/candle) (F24; daily ritual for couples and friends), [Text.ai](https://www.ycombinator.com/companies/text-ai) (Spring 2025; AI in group chats), [RealRoots](https://www.ycombinator.com/companies/realroots) (S25; in-person friendship matching for women, team 7), [OneStop](https://www.ycombinator.com/companies/onestop) (S25; hyperlocal network, one New York neighbourhood), [Quippy](https://www.ycombinator.com/companies/quippy) (F26; social-skills practice, team 1), [Anywhere](https://www.ycombinator.com/companies/anywhere) (F26).
- **Health and wellbeing:** [Sonia](https://www.ycombinator.com/companies/sonia) (W24; voice mental-health support), [Amby Health](https://www.ycombinator.com/companies/amby-health) (W25; coach that texts first), [Nori](https://www.ycombinator.com/companies/nori) (F25), [Prana](https://www.ycombinator.com/companies/prana-health) (W26) and [Clara](https://www.ycombinator.com/companies/clara-2) (Spring 2026) as "AI primary care doctor", [Juno](https://www.ycombinator.com/companies/juno-chat) (chronic illness).
- **Family and elder care:** [Oma Care](https://www.ycombinator.com/companies/oma-care) (W24) and [Cova](https://www.ycombinator.com/companies/cova) (S26) pay family caregivers through US programs; [Pixley AI](https://www.ycombinator.com/companies/pixley-ai) (F25; kids' drawings into cartoons with a lesson chosen by the parent).
- **Jobs:** [Tsenta](https://www.ycombinator.com/companies/tsenta) (S26; auto-applies to jobs; claims ~$3M annualized in three months and 90,000+ job seekers).
- **Solo-founder examples (team size 1):** ISSEN, Quippy, [Audora](https://www.ycombinator.com/companies/audora) (F26; multi-voice audiobooks).

**Shut down / inactive**
- Status counts: 2024 batches — 40 Inactive, 23 Acquired of 590; 2025 — 14 Inactive, 13 Acquired of 620; 2026 — 8 Inactive, 2 Acquired of 850.
- Consumer/health inactive: [Lumona](https://www.ycombinator.com/companies/lumona) (W24; AI search over social media), [Soundry AI](https://www.ycombinator.com/companies/soundry-ai) (W24; song remixing), [Wuri](https://www.ycombinator.com/companies/wuri) (W24; fiction as visual novels), [OddsView](https://www.ycombinator.com/companies/oddsview) (W24; sports betting data), [Mango Health](https://www.ycombinator.com/companies/mango-health) (W24; AI therapy for OCD), [K-Scale Labs](https://www.ycombinator.com/companies/k-scale-labs) (W24; humanoid robots).
- SMB-vertical inactive: [Lilac Labs](https://www.ycombinator.com/companies/lilac-labs) (S24; drive-thru voice ordering), [Tivara](https://www.ycombinator.com/companies/tivara) (S24; "AI workforce for medical groups"), [Kanava AI](https://www.ycombinator.com/companies/kanava-ai) (Spring 2025), [Closera](https://www.ycombinator.com/companies/closera) (S25; AI shopping agent for stores).
- Three prediction-market infrastructure companies from 2025-2026 are already inactive ([Dome](https://www.ycombinator.com/companies/dome), [Valence](https://www.ycombinator.com/companies/valence), [Oddpool](https://www.ycombinator.com/companies/oddpool)).
- Regional: [Skillza](https://www.ycombinator.com/companies/skillza) (W22; teacher tools for MEA) is Inactive.

### Inferences
- Lessons from the dead list: (a) thin wrappers on a model capability (remix a song, summarise Reddit) die once the base model or a platform does it; (b) clinical-claim mental health is hard to sustain; (c) selling to schools/large chains needs long sales cycles a small team cannot survive.
- The survivors with numbers share a pattern: a paying individual with an urgent, dated goal (an exam, a job, a language for work). That pattern is bootstrap-friendly.
- The directory's low Inactive counts for 2025-2026 reflect recency, not success; most are simply too young to have died.

### Gaps
- No independent verification of any traction figure; none of the consumer companies' download or revenue claims were cross-checked.
- The directory does not record reasons for shutdown.
- Did not search YC launch posts (ycombinator.com/launches) individually.

---

## Q5. Which ideas clearly do NOT transfer?

### Takeaway
A large share of recent YC output is tied to US-specific systems (insurance billing, Medicaid caregiver pay, HIPAA, US litigation) or to activities that are unlawful or culturally unacceptable in the Gulf (betting, prediction markets, dating, AI romance). Hard tech and "AI-native licensed firm" models are out of reach for an unfunded solo founder regardless of geography.

### Cited Findings
All [DIR] — [yc-oss mirror](https://yc-oss.github.io/api/companies/all.json)
- **Gambling / prediction markets:** [BeeBettor](https://www.ycombinator.com/companies/beebettor) (S24), [Bron](https://www.ycombinator.com/companies/bron) (F25; "TikTok for sports betting"), OddsView, Dome, Valence, Oddpool.
- **Romance / companions:** [Yam](https://www.ycombinator.com/companies/yam) (F26; AI romance sims for women), [Swerve](https://www.ycombinator.com/companies/swerve) (W25; AI chat and stories), [decuff](https://www.ycombinator.com/companies/decuff) (Spring 2026; uncensored models).
- **US insurance plumbing:** Toothy AI (dental insurance verification/billing), [Janeen](https://www.ycombinator.com/companies/janeen) (prior auths), [Entropy](https://www.ycombinator.com/companies/entropy) (intake and revenue cycle), Kairos Health's insurance verification.
- **US public-programme caregiver pay:** Oma Care ("53M family caregivers in the US"), Cova.
- **AI-native licensed firms:** law (LegalOS immigration, Wingman personal injury, [General Legal](https://www.ycombinator.com/companies/general-legal)), accounting (Rational, Bear, Billow), insurance brokerage (Kinro, [Redoubt](https://www.ycombinator.com/companies/redoubt-insurance)).
- **Direct medical care by AI:** Prana, Clara ("AI primary care doctor"), [Sunflower](https://www.ycombinator.com/companies/sunflower) (telemedicine clinic for addiction), [RonanRx](https://www.ycombinator.com/companies/ronanrx-inc) (peptides and GLP-1s), [Allia Health](https://www.ycombinator.com/companies/allia-health).
- **Hardware-first consumer:** AI phones ([Cyclon](https://www.ycombinator.com/companies/cyclon), [Raven](https://www.ycombinator.com/companies/raven)), wearables ([Vexo](https://www.ycombinator.com/companies/vexo), [Fort](https://www.ycombinator.com/companies/fort), [ANORIA](https://www.ycombinator.com/companies/anoria)), robots.
- **Excluded by the brief and present in YC:** fintech/payments (143 companies in 2024-2026), food delivery ([BiteSight](https://www.ycombinator.com/companies/bitesight), [Trepo](https://www.ycombinator.com/companies/trepo) grocery agent), travel/visa ([Veeza AI](https://www.ycombinator.com/companies/veeza-ai), [Stardrift](https://www.ycombinator.com/companies/stardrift)).

### Inferences
- Regulatory: anything touching diagnosis/treatment, legal representation, or insurance needs Saudi licensing; a wellness/coaching framing avoids that but must not make medical claims.
- Cultural: mixed-gender friend-matching and dating formats do not port; the same mechanics work as couples (married), family, or single-gender communities.
- Payments: US consumer apps assume card-based app-store subscriptions; for small businesses, US tools assume card billing and software integrations that local shops lack.
- Market size: a Gulf-only consumer app has a far smaller ceiling than US equivalents — bad for venture returns but acceptable for a bootstrapped solo product, especially if it extends to the wider Arabic-speaking world.
- IRL-meetup and hyperlocal networks (RealRoots, OneStop) need on-the-ground operations and density in one city — hard without an audience.

### Gaps
- No Saudi regulatory sources were consulted in this task (out of scope for this researcher); the regulatory points above are inferences that another researcher should verify.
- No market-size figures gathered.

---

## Shortlist: 14 YC ideas a solo developer could localize in Arabic

All facts [DIR] from [yc-oss mirror](https://yc-oss.github.io/api/companies/all.json). **Business model:** the directory rarely states pricing; where marked "(inferred)" it is my reading of the description, not a cited fact. **Transfer notes are inferences.** "Bootstrap" = MVP buildable by one developer with API costs only; "Venture" = the YC company's full ambition needs funding.

| # | YC company (batch) | One-line | Customer | Business model | Bootstrap vs venture | Why it might / might not transfer |
|---|---|---|---|---|---|---|
| 1 | [Candle](https://www.ycombinator.com/companies/candle) (F24, team 2) — see also [Maia](https://www.ycombinator.com/companies/maia) (W24) | Daily 1-5 minute prompts and games that keep couples and friends close | Couples, close friends | Consumer subscription (inferred) | Bootstrap: content + streaks + pairing | **For:** family-centred culture; works for spouses, siblings, parent-child; no regulation. **Against:** needs a pair to join (viral loop is the product); no audience = slow start; privacy sensitivity high. |
| 2 | [Educato](https://www.ycombinator.com/companies/educato) (S24, team 5) / [Miyagi Labs](https://www.ycombinator.com/companies/miyagi-labs) (W25, team 2) | AI-generated prep for exams the big players ignore | Students / parents | Consumer subscription (inferred) | Bootstrap for one exam; venture for "all exams" | **For:** Miyagi lists exams in Nigeria, Kenya, India, Turkey but no Arab exam; dated, high-stakes goal = willingness to pay. **Against:** local incumbents for national tests likely exist (not researched here); question quality in Arabic must be checked by a human. |
| 3 | [Alice.tech](https://www.ycombinator.com/companies/alice-tech) (W25, team 5) | Turns a student's own course materials into personalised exam prep | University students | Subscription; reports $20k MRR, 10k+ students | Bootstrap | **For:** content comes from the user, so no content library needed; Arabic + English mixed materials are common. **Against:** students pay little; general chat assistants do much of this for free. |
| 4 | [Edexia](https://www.ycombinator.com/companies/edexia) (W25, team 4) / [Frizzle](https://www.ycombinator.com/companies/frizzle) (S25, team 2) | AI grades essays or handwritten math against the teacher's rubric | Teachers, schools, tutoring centres | B2B / per-teacher SaaS (inferred) | Bootstrap if sold to individual teachers and private tutors; school sales are slow | **For:** grading load is universal; Arabic handwriting is a moat if it works. **Against:** Skillza (W22, same region, teacher assessment tools) is Inactive; Arabic handwriting recognition accuracy is unproven; public schools do not buy from solo vendors. |
| 5 | [Fluently](https://www.ycombinator.com/companies/fluently) (W24, team 2) — also [ISSEN](https://www.ycombinator.com/companies/issen) (F24, team 1), [Pingo](https://www.ycombinator.com/companies/pingo) (S25) | AI speaking coach for non-native English professionals | Working adults, job seekers | Consumer subscription (inferred) | Bootstrap (ISSEN shows a team of one) | **For:** English for work is a strong need; Arabic-speaker-specific errors and Arabic explanations differentiate. **Against:** very crowded globally (6+ YC companies alone); voice API costs per minute; the global apps already work in the Gulf. |
| 6 | [Quippy](https://www.ycombinator.com/companies/quippy) (F26, team 1) | Short practice conversations (boss, interview) with line-by-line feedback | Individuals | Consumer subscription (inferred) | Bootstrap (built by one person) | **For:** reframe as job-interview and workplace practice in Arabic/English. **Against:** brand-new, no traction data; scenarios like "first date" must be replaced; unclear willingness to pay. |
| 7 | [Penciled](https://www.ycombinator.com/companies/penciled) (W24, team 2) / [Kairos Health](https://www.ycombinator.com/companies/kairos-health) (F26) / [Patientdesk.ai](https://www.ycombinator.com/companies/patientdeskai) (W26) | AI front office: books, reminds, handles cancellations, fills gaps from a waitlist, recalls overdue patients | Small clinics (physio, dental) | B2B SaaS per location (inferred) | Bootstrap as a WhatsApp booking/reminder/recall agent; venture once voice + insurance + software integrations are added | **For:** validated by ~10 YC companies; recall of overdue patients is easy to price on results. **Against:** Arabic players already exist (BASMA, Ehlan.ai, Clearvision, Velents — see Q3); US value comes from insurance and software integrations that differ locally; clinics are hard to reach with no network. |
| 8 | [Tepali](https://www.ycombinator.com/companies/tepali) (W26, team 2) | Front desk + records + point of sale + marketing with an AI that books leads and brings past clients back, for aesthetic and wellness clinics | Aesthetic clinics, salons, spas | B2B SaaS (inferred) | Bootstrap only the "bring past clients back + booking" slice; full EMR/POS is venture | **For:** beauty and aesthetics is a large, WhatsApp/Instagram-driven sector in the Gulf; women-only salons are underserved by English software. **Against:** medical records trigger health-data rules; POS touches payments (excluded scope). |
| 9 | [Wayline](https://www.ycombinator.com/companies/wayline) (S25, team 5) / [Brickwise](https://www.ycombinator.com/companies/brickwise) (F25, team 12) | AI that answers tenant calls/messages 24/7, logs maintenance, chases contractors | Property managers, landlords, real-estate offices | B2B SaaS; Brickwise cites a >$1M contracted-ARR enterprise deal | Bootstrap as a WhatsApp maintenance-request agent for small landlords; enterprise deals are venture | **For:** Brickwise already reports a Dubai customer, so demand in the Gulf is evidenced; many small landlords manage units by WhatsApp. **Against:** a funded YC player is already selling into the Gulf; rent collection would touch payments (excluded). |
| 10 | [Parrot](https://www.ycombinator.com/companies/useparrot) (Spring 2026, team 2) / [Fleety](https://www.ycombinator.com/companies/fleety) (F26, team 4) | AI that handles calls, quotes and scheduling for auto repair shops / dispatch for plumbing and AC companies | Workshops, maintenance companies | B2B SaaS (inferred) | Bootstrap for a quote + status-update bot; full "operating system" is venture | **For:** AC and car maintenance are high-volume in the Gulf; no Arabic player surfaced in this research. **Against:** owners and staff are often non-Arabic-speaking expatriates with low software adoption; price sensitivity; both YC companies are under a year old with no traction data. |
| 11 | [Theo](https://www.ycombinator.com/companies/theo) (F26) | AI builds a small-business website in minutes and keeps improving it weekly so it is found on Google and in AI answers | Local small businesses | Subscription (inferred) | Bootstrap | **For:** Arabic search and AI-answer visibility is under-served; recurring value. **Against:** Gulf small businesses live on Instagram, WhatsApp and maps listings rather than websites; brand-new company, no evidence it works. |
| 12 | [Darsel](https://www.ycombinator.com/companies/darsel) (W22, Amman, team 5) | Math practice and homework chatbot delivered over WhatsApp/SMS | K-12 students; sold to education systems | Sells to governments / donors (inferred from "supplement K12 education systems") | Bootstrap as a parent-paid WhatsApp tutor; Darsel's institutional model is not bootstrap | **For:** already an Arab-founded proof that WhatsApp delivery works; matches the Fall 2026 RFS "The Primer". **Against:** Darsel targets resource-constrained countries, not the Gulf; WhatsApp Business messaging has per-conversation costs; children's data needs parental consent. |
| 13 | [Pixley AI](https://www.ycombinator.com/companies/pixley-ai) (F25, team 2) — reference point: [Durioo](https://www.ycombinator.com/companies/durioo) (W22, team 50) | Turns a child's drawing/idea into a short cartoon carrying a lesson the parent picks | Parents of young children | Consumer subscription (inferred) | Bootstrap as illustrated/narrated stories; full animation is costly per episode | **For:** Durioo shows Muslim parents pay for values-aligned kids' content; Arabic personalised stories with the child's name and a chosen value are a clear gap. **Against:** video generation cost and quality; content must be vetted carefully for children and for religious/cultural sensitivities. |
| 14 | [Amby Health](https://www.ycombinator.com/companies/amby-health) (W25, team 2) — also [Nori](https://www.ycombinator.com/companies/nori) (F25) | A health coach that messages you first, checks in, and adapts the plan | Individuals with a fitness/weight/sleep goal | Consumer subscription (inferred) | Bootstrap as a WhatsApp/Telegram check-in coach without wearable integration | **For:** proactive messaging suits WhatsApp habits; Ramadan and local food/routine context is a real localisation edge. **Against:** must stay coaching, not medical advice; crowded (5+ YC companies); retention in habit apps is notoriously poor. |

Runner-up ideas (thin evidence): [Audora](https://www.ycombinator.com/companies/audora) (F26, team 1; multi-voice audiobooks — depends on Arabic voice quality), [Wondering](https://www.ycombinator.com/companies/wondering) (S26; three-minute lessons on any topic), [Tsenta](https://www.ycombinator.com/companies/tsenta) (S26; auto-applying to jobs — strong claimed revenue but relies on automating third-party job sites), [Elyra](https://www.ycombinator.com/companies/elyra) (Spring 2026; restaurant reservations by AI — adjacent to the excluded food category), [Boom AI](https://www.ycombinator.com/companies/boom-ai) (F25; WhatsApp win-back conversations).

### Inferences across the shortlist
- Strongest fit for "solo, no funding, no audience": items where one paying user gets value alone and has a deadline (2, 3, 5), because they need neither a network nor a sales team.
- Strongest fit for revenue per customer: small-business WhatsApp agents (7, 8, 9, 10), but they require door-to-door selling, and item 7 already has Arabic competitors.
- Items 1 and 13 are the most culturally differentiated (family, values-aligned kids' content) but depend on consumer distribution the founder does not have.

### Gaps
- Pricing for every shortlisted company is unverified (not in the directory; company sites not fetched).
- Existing Arabic competitors were only searched for the AI-receptionist category; no competitor check was done for exam prep, couples apps, kids' stories, grading, or property management in Arabic.
- No traction data exists in the directory for items 6, 8, 10, 11 (all 2026 batches).
