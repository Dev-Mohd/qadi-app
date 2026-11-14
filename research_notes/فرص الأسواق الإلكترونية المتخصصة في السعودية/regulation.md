# Legal and regulatory requirements for a solo developer running a small online marketplace / classifieds platform in Saudi Arabia (as of Nov 2026)

> General information, not legal advice. Research notes compiled 14 Nov 2026 from ~22 search/fetch calls.
> Confidence labels used below: **[fetched]** = I opened the page and read the content; **[snippet]** = the claim comes from a search-result summary only and the underlying page was NOT opened (treat as a lead to verify). Several primary sources (official law text on qanoniah.com, SAMA circular on regalert.today) could not be opened (HTTP 403 / 429). No official mc.gov.sa, sama.gov.sa, zatca.gov.sa, sdaia.gov.sa or freelance.sa page was read directly; almost everything below is secondary (press, Big-4/law-firm explainers, vendor docs).
> Model (a) = listings/classifieds, buyer and seller transact off-platform. Model (b) = transactional marketplace that collects payment and pays out sellers.

## 1. E-Commerce Law (نظام التجارة الإلكترونية): platform/intermediary vs merchant

### Takeaway
The E-Commerce Law (2019) puts its concrete duties (disclosure, invoice, 7-day withdrawal, data protection, ad rules) on the "service provider" (موفر الخدمة = registered merchant تاجر or unregistered practitioner ممارس); intermediary platforms are mentioned only as something the Ministry of Commerce supervises and may issue rules for (Art. 16). Any violation of the law by anyone can draw a warning, a fine up to SAR 1,000,000, suspension, or blocking of the site (Art. 18).

### Cited Findings
- Definitions: merchant (تاجر) = person registered in the commercial register practising e-commerce; practitioner (ممارس) = person NOT registered in the commercial register practising e-commerce; service provider (موفر الخدمة) = merchant or practitioner; "electronic shop" (المحل الإلكتروني) = an electronic platform allowing a service provider to display or sell a product, provide a service, advertise it, or exchange data about it. [snippet, consistent with fetched Al-Watan text] — [Qanoniah – law and implementing regulations](https://qanoniah.com/File/EdJG8m4pa1LVbxPLgr2bq5W60) (page itself returned 403); [Al-Watan, 26 Jul 2019](https://www.alwatan.com.sa/article/1017355)
- Art. 16: the Ministry supervises e-commerce and issues rules for "المنصات الإلكترونية التي تؤدي دور الوساطة بين موفر الخدمة والمستهلك" (platforms that mediate between provider and consumer). The 2019 press text of the law sets no specific obligations or liability for such platforms beyond being subject to Ministry-issued rules. [fetched; 2019 press summary, not gazette text] — [Al-Watan, 2019](https://www.alwatan.com.sa/article/1017355)
- Art. 6: the e-shop must disclose name, address (unless certified by an e-shop certification body), contact means, commercial-register details, plus data set by regulation. Art. 7: pre-contract terms incl. total price with fees, payment, delivery, warranty. Art. 8: invoice after contract. Art. 9: regulated professions disclose licensing body. Art. 10(2): electronic ads must include product/service name, provider name, contact means. Art. 15: merchants must register their e-shop in the commercial register (applies to merchants, not practitioners). [fetched; 2019] — [Al-Watan, 2019](https://www.alwatan.com.sa/article/1017355)
- Art. 13: consumer may cancel within 7 days of receiving the product / contracting the service if unused, bearing cancellation costs unless agreed otherwise; exceptions include custom-made products, used videos/CDs/software, newspapers/books, consumer-caused defects, accommodation/transport/food services, downloaded software. [fetched; 2019] — [Al-Watan, 2019](https://www.alwatan.com.sa/article/1017355)
- Art. 5: providers may keep consumer personal data only as long as the transaction requires, must protect it (including in the hands of their partners), and may not use/disclose it without consent. [fetched; 2019] — [Al-Watan, 2019](https://www.alwatan.com.sa/article/1017355)
- Art. 18 penalties: warning; fine up to SAR 1,000,000; temporary or permanent suspension of e-commerce activity; temporary or permanent full/partial blocking of the e-shop; imposed by a committee (Arts. 17, 19). [fetched; 2019] — [Al-Watan, 2019](https://www.alwatan.com.sa/article/1017355)
- Implementing-regulation disclosure items include the tax number "if any", provider name/trade name, product description, delivery date. The Ministry has also consulted on amending the regulations regarding refund mechanics when a consumer cancels. [snippet; dates 2019-2020, amendment status unknown] — [Qanoniah – implementing regulations](https://qanoniah.com/File/mJy4DGw9da7v6kV78Qv65RrKX-اللائحة-التنفيذية-لنظام-التجارة-الإلكترونية); [Al-Eqtisadiah, 31 Jan 2020](https://www.aleqt.com/2020/01/31/article_1755251.html)
- The Ministry stated that all services provided electronically are covered by the E-Commerce Law. [snippet; 2019] — [MoC news](https://mc.gov.sa/ar/mediacenter/News/Pages/10-07-19-01.aspx)
- In a Ministry of Commerce evaluation of 100 e-stores (reported 9 Sep 2025) the ten criteria were: secure website; customer contact channels; return/exchange/refund policy; privacy policy; shipping/delivery policy; displaying CR number and licences; displaying tax number; complaints-handling policy; authenticating the store with the Saudi Business Center; registering the store link in the commercial register. Compliance on the last three was 75–79%. [fetched] — [Okaz, 9 Sep 2025](https://www.okaz.com.sa/economy/saudi/2212656)

### Inferences
- The MoC's 2025 ten-point checklist is the most practical "what the Ministry actually checks" list for the platform operator's own site: privacy policy, complaints policy, refund policy, visible CR/freelance and tax numbers, Business Center authentication, link recorded on the CR.
- In model (a) the platform operator is itself a "service provider" for its own service (listing/advertising), while each seller remains the provider toward the buyer. In model (b), taking the buyer's money makes the platform look like the contracting party to the consumer, so disclosure, invoice, 7-day withdrawal/refund and delivery complaints will in practice land on the platform. This is my reading, not a quoted rule.
- Because Art. 18 applies to "anyone violating the law", an individual operating without CR is still within the law's reach as a "practitioner".

### Gaps
- I could not open the official text of the implementing regulations, so I cannot confirm whether they (or any later MoC rules issued under Art. 16) contain a dedicated article on intermediary platforms' obligations/liability for seller listings (e.g. verifying sellers, takedown duties). Search summaries found none. Ask MoC (1900) or read the text on laws.boe.gov.sa / mc.gov.sa.
- Whether the law/regulations have been amended since 2020 (refund amendment, any new consumer-protection law) was not verified.

## 2. Registration: CR vs freelance document vs Saudi Business Center e-store authentication (ex-Maroof); employees

### Takeaway
"Maroof" was replaced in April 2023 by e-store authentication on the Saudi Business Center's "Business platform" (business.sa), which requires a valid commercial registration OR a valid freelance document plus a linked commercial bank account; the authentication itself is reported as free. Whether a government employee may hold a CR is contested in the (low-quality) sources found — the dominant claim is that it is barred without permission — while the freelance document is widely reported as available to government employees; none of this was confirmed on an official page.

### Cited Findings
- MoC spokesperson Abdulrahman Al-Hussein: the Saudi Business Center's "منصة الأعمال" (business.sa) is the only platform approved by the Ministry for authenticating e-stores, instead of Maroof. Requirements: valid CR or valid freelance document, a commercial bank account, and linking the store's bank accounts. The article does not say authentication is mandatory, and mentions no fee or penalty. [fetched] — [Okaz, 6 Apr 2023](https://www.okaz.com.sa/news/na/2130600)
- Salla's help centre states the e-commerce authentication certificate is issued free with either a CR or a freelance document. [snippet] — [Salla help](https://help.salla.sa/article/gno9ilestioyspm61yu5buzp/gno9ilestioyspm61yu5buzp)
- CR government fee reported as SAR 200 per year for a main CR, issued via the Saudi Business Center. [snippet; commercial blog] — [almaal.org](https://almaal.org/?p=72657). A different commercial site gives "unified CR fees of about SAR 1,200–2,000 (indicative)". [snippet; conflicting, possibly includes Chamber of Commerce subscription and other items] — [Noblecore](https://noblecoreksa.com/?p=791)
- Government employees: one source says a government employee is barred from holding a CR in his own name without official permission and that trading is an administrative violation; the same source also says government employees may work in the private sector outside official hours under Council of Ministers instructions. [snippet; internally inconsistent commercial blog] — [almaal.org](https://almaal.org/?p=72657)
- Private-sector employees: can in principle establish a business, subject to the employment contract, employer policies and conflict of interest. [snippet; commercial blog] — [almaal.org](https://almaal.org/?p=72657)
- Freelance document: several sites say a government employee can obtain it while employed; one says the employee should first contact their government employer. Reported conditions: age 20–60, no dedicated issuance fee, validity one year, up to 5 documents, 70+ professions, issued via freelance.sa with Absher identity verification. [snippet; non-official sites, fees "not agreed between sources"] — [Salla FAQ](https://help.salla.sa/article/%D8%A7%D9%84%D8%A3%D8%B3%D8%A6%D9%84%D8%A9-%D8%A7%D9%84%D8%B4%D8%A7%D8%A6%D8%B9%D8%A9-%D8%AD%D9%88%D9%84-%D8%A5%D8%B5%D8%AF%D8%A7%D8%B1-%D8%B4%D9%87%D8%A7%D8%AF%D8%A9-%D8%A7%D9%84%D8%B9%D9%85%D9%84-%D8%A7%D9%84%D8%AD%D8%B1-%D9%88%D9%88%D8%AB%D9%8A%D9%82%D8%A9-%D8%A7%D9%84%D8%A3%D8%B3%D8%B1-%D8%A7%D9%84%D9%85%D9%86%D8%AA%D8%AC%D8%A9/k84an3n6swow9upry8xoa0xl); [mhtwyat.com](https://mhtwyat.com/?p=84985); [albanknote](https://invest.albanknote.com/freelance-document/)
- Unofficial sites claim authentication has become mandatory for all practitioners and that its absence exposes the store to accountability; not verified in any official text. [snippet] — [capsulaa.sa](https://www.capsulaa.sa/saudi-arabia-services/وزارة-التجارة-عقوبة-عدم-توثيق-وتسجيل-ا/)

### Inferences
- Lowest-cost legal footing for a solo side project appears to be: freelance document (reported free) in a relevant profession → Business Center e-store authentication (reported free) → bank account linked. A CR adds a yearly fee (figure disputed: SAR 200 vs SAR 1,200–2,000) but is what gateways' marketplace products and Art. 15 are built around.
- A freelance document licenses the individual's own profession (e.g. software/e-commerce). Whether it properly covers operating a multi-vendor marketplace (an intermediary business) rather than selling one's own services is not established by any source found; a transactional marketplace (b) most plausibly needs a CR with an appropriate activity code.
- For a government employee the CR route carries real risk; the freelance document is the route sources describe as open. A private-sector employee's constraint is contractual (non-compete / employer consent), not a licensing bar.

### Gaps
- No official source (MoC, MHRSD, freelance.sa, Civil Service rules) was read on employee eligibility. The government-employee CR prohibition and any recent relaxations must be confirmed with MoC and the employer. This is the single most important item to verify for the target user.
- Exact 2026 CR fee, Chamber of Commerce subscription, national-address and other recurring costs: unknown/conflicting.
- Which freelance professions/ISIC activity codes fit "online marketplace/classifieds", and whether Business Center authentication accepts a freelance document for a multi-vendor site: unknown.
- Whether e-store authentication is legally mandatory in 2026 and what the penalty is: unverified.

## 3. Payments: holding buyers' money and paying sellers

### Takeaway
I could not confirm from a primary source whether an unlicensed marketplace that holds buyer funds breaches SAMA rules, but the one relevant lead (a SAMA circular as summarised by a third-party tracker) says activities requiring an escrow account to hold customers' funds are licensed payment services, while e-commerce technical-support services currently are not. The safe design is to never touch the money: use a SAMA-supervised gateway's marketplace product (Tap and Moyasar both document one) where the gateway onboards/KYCs sellers and performs the split and payout.

### Cited Findings
- A SAMA circular, as summarised by regalert.today, says activities requiring an escrow account to hold customers' funds are licensed payment services, that e-commerce technical-support services do not currently need a licence, and that regulated entities must notify SAMA of any unlicensed payment activities by 1 January 2027. [snippet only — page returned HTTP 429; circular title/date not seen] — [regalert.today](https://regalert.today/document/0666fc61-dc88-4202-bd5f-67ad1a09343f/text)
- A SAMA rulebook page on the Implementing Regulations of the Law of Payments and Payment Services appears to list "payment made through an authorized commercial agent" among items under Article 6; the snippet was truncated and ambiguous as to whether this is a licensed service or an exclusion. [snippet; ambiguous] — [SAMA Rulebook](https://rulebook.sama.gov.sa/en/entiresection/1454); full text: [SAMA Implementing Regulations PDF](https://www.sama.gov.sa/en-US/LawsRegulations/DocLib/Implementing_Regulations_for_Law_of_Payments_and_Payment_Services-EN.pdf)
- Tap Payments: its developer docs describe a Marketplace product that accepts and splits payments across multiple businesses under a marketplace; each business gets a unique `destination_id`; marketplace keys are used for onboarding businesses and merchant keys for processing; onboarding requires uploading business KYC documents; businesses can accept payments right after onboarding but payouts are unavailable until Tap approves the account. [snippet of official docs] — [Tap marketplace overview](https://developers.tap.company/docs/marketplace-overview); [Tap getting started](https://developers.tap.company/docs/marketplace-getting-started)
- Moyasar: its marketplaces page describes e-KYC/KYB onboarding of sub-merchants with document capture, sub-merchant management under one dashboard, setting pricing, splitting payments and distributing funds automatically. [snippet of official page] — [Moyasar platforms & marketplaces](https://moyasar.com/en/solutions/platforms-and-marketplaces/)
- Moyasar publishes no prices on its payments-infrastructure page (rates come from the sales team); activation involves review of the store's products, pricing, policies, refund procedures and contact channels; footer states "Under the Control and Supervision of the Saudi Central Bank"; mada refunds 24h–3 business days, credit cards 7–14 business days. [fetched] — [Moyasar payments infrastructure](https://moyasar.com/en/products/payments-infrastructure/)
- Moyasar onboarding is reported to require a Saudi CR or freelance licence plus a Saudi bank account linked to it; HyperPay requirements depend on the acquiring bank; all three of Moyasar, Tap, HyperPay are said to offer a split tool. [snippet; third-party agency blog] — [Origami comparison](https://origami.sa/en/blog/payment-gateway-comparison-moyasar-tap-hyperpay/)
- Fee figures seen are all unverified third-party numbers: HyperPay 2.5–3.5% per transaction; Tap top card rate 3.94% + fixed fee (another competitor blog: 2.75%). [snippet; competitor/marketing blogs] — [Dodo Payments blog](https://dodopayments.com/blogs/tap-payments-alternatives); [CS-Cart blog](https://www.cs-cart.com/blog/payment-gateways-in-saudi-arabia/)
- Telr documents sub-merchant onboarding with percentage or flat split configuration, approved before a split ID is issued. [snippet of official docs] — [Telr docs](https://docs.telr.com/reference/onboarding-submerchant)

### Inferences
- Model (a) (no money through the platform; revenue from featured-listing fees or subscriptions) needs only an ordinary gateway account to collect the platform's own fees — this works with CR or (reportedly, at Moyasar) a freelance document.
- Model (b) done by receiving all funds into the operator's own bank account and later transferring to sellers is the pattern most likely to be treated as an unlicensed payment/escrow activity; a solo developer cannot realistically obtain a SAMA licence. Use gateway-native split/marketplace so funds sit with the licensed PSP.
- Marketplace products KYC each seller as a "business"; sellers who are private individuals without CR/freelance document may not be onboardable, which pushes a C2C niche toward model (a) or toward requiring sellers to hold freelance/productive-family documents.

### Gaps
- The actual SAMA circular (number, date, exact wording, whether marketplaces/aggregators are named) was not read. Confirm on sama.gov.sa / rulebook.sama.gov.sa or with SAMA before building any flow in which the platform's account receives buyer money.
- No verified fee schedule for any gateway (mada %, card %, fixed fee, payout fee, marketplace surcharge, setup/monthly fee). Get written quotes.
- Whether Tap/Moyasar marketplace products accept a platform owner holding only a freelance document, and whether sub-merchants can be individuals: not confirmed.
- HyperPay and PayTabs marketplace/split capabilities, and Tamara/Tabby availability to marketplaces or sub-merchants: not researched; no reliable source found.

## 4. VAT (ZATCA): thresholds, deemed supplier, e-invoicing

### Takeaway
Since 1 January 2026, a platform that facilitates supplies by resident sellers who are not VAT-registered is treated as the "deemed supplier" and owes VAT on those sales — unless it only lists/advertises or only processes payments and does not control price, terms, payment demand or complaints. This is the strongest tax argument for model (a), and it interacts with the registration threshold (reported as SAR 375,000, not officially verified here).

### Cited Findings
- Most Art. 47 amendments to the VAT Implementing Regulations took effect April 2025; the expanded Art. 47(3) rule applies from 1 January 2026. [fetched] — [Grant Thornton KSA](https://www.grantthornton.sa/insights/articles-and-publications/vat_and_electronic_marketplace_in_saudi_arabia/); see also [PwC ME](https://www.pwc.com/m1/en/services/tax/me-tax-legal-news/2025/approved-amendments-to-the-vat-implementing-regulations.html)
- "Electronic marketplace" is defined functionally: any digital platform or technological infrastructure (website, app, gateway, API) connecting buyers and sellers to display, offer or contract for goods or services. [fetched] — [Grant Thornton KSA](https://www.grantthornton.sa/insights/articles-and-publications/vat_and_electronic_marketplace_in_saudi_arabia/)
- Deemed supplier in two cases: (1) non-resident suppliers of electronic services to KSA customers; (2) from 1 Jan 2026, resident suppliers that are not VAT-registered supplying goods or services through the platform. [fetched] — [Grant Thornton KSA](https://www.grantthornton.sa/insights/articles-and-publications/vat_and_electronic_marketplace_in_saudi_arabia/)
- Not a deemed supplier where the platform only processes payments, or only lists/advertises without setting terms or demanding payment, or does not control pricing, contractual terms, customer interaction, complaints handling or promotional discounts; degree of control is decisive. [fetched] — [Grant Thornton KSA](https://www.grantthornton.sa/insights/articles-and-publications/vat_and_electronic_marketplace_in_saudi_arabia/)
- A deemed-supplier platform must issue tax invoices for facilitated supplies showing the platform as supplier; simplified invoices allowed below SAR 1,000; commissions/service fees charged to a resident supplier are subject to 15% VAT where both are resident. [fetched] — [Grant Thornton KSA](https://www.grantthornton.sa/insights/articles-and-publications/vat_and_electronic_marketplace_in_saudi_arabia/)
- Resident platforms must register if they meet the mandatory registration threshold (article gives no figure); a third-party guide states the threshold as SAR 375,000 of taxable supplies. [fetched GT; snippet for the figure, not officially verified] — [Grant Thornton KSA](https://www.grantthornton.sa/insights/articles-and-publications/vat_and_electronic_marketplace_in_saudi_arabia/); [vatcompliance.co](https://vatcompliance.co/guides/vat/saudi-arabia/)
- ZATCA's own guideline on e-commerce under VAT exists (not opened). — [ZATCA guideline PDF](https://zatca.gov.sa/en/HelpCenter/guidelines/Documents/Guideline-on-Electronic-Commerce-under-VAT-Provisions.pdf)

### Inferences
- If a model (b) platform is the deemed supplier, the gross value of unregistered sellers' sales plausibly counts as the platform's own taxable supplies, so a tiny platform could cross the registration threshold on GMV rather than on commission income. This is my inference and needs a tax adviser's confirmation.
- Model (a) with flat listing/featured-ad fees falls in the "listing or advertising only" exclusion; the operator's VAT position then depends only on its own fee revenue versus the threshold.
- Design choices that increase deemed-supplier risk: setting prices, platform-funded discounts, collecting payment, handling complaints/refunds in the platform's name.

### Gaps
- Mandatory (SAR 375,000) and voluntary (commonly cited SAR 187,500) thresholds not confirmed on zatca.gov.sa in this session.
- E-invoicing (Fatoora): no reliable information retrieved on which Phase 2 integration wave applies to small taxpayers in 2026, nor on whether a non-VAT-registered operator has any e-invoicing duty. A search summary mentioned "Phase 2 waves 18–22 (2026)" and a fines exemption "until June 2026" but neither was verified. Check ZATCA's e-invoicing pages.
- How ZATCA treats C2C sales by private individuals (not conducting economic activity) through a platform: unknown.

## 5. PDPL (نظام حماية البيانات الشخصية)

### Takeaway
PDPL is actively enforced by SDAIA, with published sanction decisions in 2026; the points confirmed in this session are the 72-hour breach notification to SDAIA and that marketing without explicit consent and failing to appoint a DPO when required have been sanctioned. Small-entity specifics were not found.

### Cited Findings
- Controllers must notify SDAIA within 72 hours of becoming aware of a personal-data breach; late filing requires written justification. [snippet] — [Baker McKenzie Connect on Tech](https://connectontech.bakermckenzie.com/?p=4352); [Al Tamimi, Sep 2025](https://www.tamimi.com/news/observations-and-tips-on-data-issues-in-ksa/)
- SDAIA issued sanction decisions (fines and warnings) against several entities; violations cited include not notifying breaches within 72 hours, processing data for direct marketing without explicit consent, and not appointing a data protection officer where appointment conditions apply. [snippet; 2026] — [Okaz](https://www.okaz.com.sa/local/na/2254837); [Sabq](https://sabq.org/article/svp4tmt); [Ajel, Jun 2026](https://ajel.sa/md/articles/2026/06/53btq8bh6.md)
- Penalty ceilings "up to SAR 5 million and up to two years' imprisonment" appear on a commercial blog; another headline mentions "imprisonment and fines up to SAR 3 million". [snippet; unofficial, conflicting] — [Noqta](https://noqta.tn/en/blog/saudi-pdpl-penalties-breach-notification-2026); [capsulaa.sa](https://www.capsulaa.sa/المحليات/عقوبات-بالسجن-وغرامات-تصل-إلى-ثلاثة-ملايين-ريال-لجهات-خالفت-ضوابط-حماية-البيانات-الشخصية/)
- The E-Commerce Law separately (Art. 5) limits retention and use of consumer data and makes the provider responsible for data held by its partners. [fetched; 2019] — [Al-Watan](https://www.alwatan.com.sa/article/1017355)

### Inferences
- Practical minimum for a small platform: Arabic privacy policy stating purposes; collect only what listings need; explicit opt-in for marketing messages; a breach-response plan that can meet 72 hours; data-processing terms with hosting/SMS/payment vendors.
- A classifieds site that publishes sellers' phone numbers is disclosing personal data by design; consent at listing time and a deletion path matter.

### Gaps
- Not verified: cross-border transfer rules (relevant if hosting outside KSA, e.g. on a foreign cloud/BaaS region), whether a small platform must register on SDAIA's National Data Governance Platform, DPO thresholds, records-of-processing duty, official penalty amounts. Read SDAIA's PDPL and implementing regulations directly.

## 6. Sector-specific licensing by niche

### Takeaway
Real estate and tourist accommodation (istirahat/chalets/farms rented short-term) are heavily regulated at platform level — both require the platform itself to be licensed/integrated and to show only licensed ads/units, with fines reported up to SAR 1 million. For livestock, falcons/wildlife, used cars, home-made food and individual services I found no reliable source on platform-level obligations.

### Cited Findings
- Real estate: REGA issued a unified "Regulation for Real Estate Marketing and Advertising" on 1 May 2026 replacing the 1442H advertising rules and the e-platform licensing criteria. Reported platform duties: technical integration with REGA for real-time ad monitoring, verifying advertisers via National Single Sign-On, hosting servers inside the Kingdom, immediate removal of ads whose licence expires, registering the platform, 10 working days' notice before ceasing activity. Each ad must show its licence number and expiry; ad licence fee "starts at roughly SAR 50". Reported penalties: individuals up to SAR 200,000; platforms up to SAR 1,000,000, doubling on repeat within 3 years; licence suspension/cancellation. [fetched; but source is a real-estate company blog, not REGA] — [Raghdan](https://raghdan.sa/ar/news/rega-real-estate-advertising-regulations-2026/)
- Earlier rules: real-estate e-platforms needed a REGA licence valid three years, renewable. [snippet; 2021] — [Al-Eqtisadiah, 4 Aug 2021](https://www.aleqt.com/2021/08/04/article_2145596.html). REGA has suspended a platform's licence and referred it to Public Security over a violating ad. [snippet; year unclear] — [Al Arabiya, 9 Apr 2022](https://www.alarabiya.net/saudi-today/2022/04/09/هيئة-العقار-السعودية-توضح-العقوبات-المنصة-الالكترونية-المخالفة-)
- Tourist accommodation: Ministry of Tourism licence is required for private hospitality units including apartments, villas, rooms, istirahat (resthouses) and chalets before operating; from 1 January 2025 booking platforms ("18 apps") were required not to display unlicensed facilities and must show licence number and category. Penalty reported as up to SAR 1,000,000 and/or closure in press, versus up to SAR 250,000 on a consultancy blog. In H1 2025 the Ministry ran 47,000+ inspection rounds and recorded about 21,000 violations, most commonly operating without a licence. [snippet; attribution among the listed URLs not individually checked] — [Al-Watan](https://www.alwatan.com.sa/article/1170944); [Al-Watan](https://www.alwatan.com.sa/ampArticle/1158649); [Okaz](https://www.okaz.com.sa/news/local/2217098); [Raghdan guide 2025](https://raghdan.sa/ar/news/tourism-hospitality-license-guide-2025/)
- Livestock: MEWA offers rural livestock/poultry rearing licences via the "Naama" platform (covers rearing, not resale); a private app "الحلال" operates as a livestock marketplace. No rule on online livestock marketplaces was found. [snippet] — [MEWA news](https://www.mewa.gov.sa/ar/MediaCenter/News/Pages/News12682020.aspx); [App Store listing](https://apps.apple.com/us/app/id6752641180)

### Inferences
- Avoid for a solo side project: real-estate listings (platform licence + REGA integration + in-Kingdom hosting) and short-term rental of istirahat/chalets/farms (must only show Ministry-of-Tourism-licensed units).
- Likely lower-regulation (by absence of findings, not by confirmation): general second-hand goods, hobby/collectibles, equipment, and similar non-regulated physical goods on a listings-only model.
- Niches where the seller, not the platform, usually needs the licence (home food, individual services) still create platform exposure if the platform advertises unlicensed sellers; requiring sellers to enter a freelance/productive-family document number is a prudent design.

### Gaps
- No sources found/verified for: falcons and wildlife trade (National Center for Wildlife permits, CITES), livestock sale rules and animal-transport/health requirements, used-car trade (showroom licensing, mandatory inspection, Absher sale), food from home (productive-families document, SFDA/Balady rules), individual services (freelance permits). The "low-regulation" label for any niche should be confirmed with the relevant authority.
- Official REGA regulation text and fee schedule not read; Raghdan's summary (including the SAR 1m platform fine) is unverified.

## 7. Penalties and enforcement examples

### Takeaway
Enforcement is real and visible: MoC blocks stores and fines advertisers under the E-Commerce Law (ceiling SAR 1 million), SDAIA publishes PDPL sanctions, and REGA and the Ministry of Tourism police platforms' listings. I found no example of a small classifieds platform penalised merely for lacking CR/authentication.

### Cited Findings
- MoC blocked a home-appliance e-store for violating the E-Commerce Law (not delivering on time, ignoring refund/cancellation requests) and ordered it to resolve orders and complaints. [snippet; date not confirmed] — one of [Okaz](https://www.okaz.com.sa/economy/na/2213443), [Okaz](https://www.okaz.com.sa/economy/saudi/2248846), [MoC news](https://mc.gov.sa/ar/mediacenter/News/Pages/15-09-25-01.aspx)
- MoC referred an oud/perfume store to the E-Commerce Law violations committee over a misleading "win a luxury car" ad; the committee fined the owner (Art. 11, false advertising claims). [snippet; date not confirmed] — [Okaz](https://www.okaz.com.sa/ampArticle/2252036); [Al-Eqtisadiah, 15 Sep 2025](https://www.aleqt.com/2025/09/15/article_2766609.html)
- MoC imposed SAR 165,000 in fines on 10 social-media advertisers (Snapchat, Twitter, Instagram) and referred 90 more to the committee; total fines of SAR 905,000 against 27 violators of electronic advertising rules. [snippet; likely 2020–2021, older] — [Al-Watan](https://www.alwatan.com.sa/article/1024271); [MoC news](https://mc.gov.sa/ar/mediacenter/News/Pages/25-04-21-02.aspx)
- Sanction menu repeatedly cited by MoC: fines up to SAR 1 million, blocking/closing sites, ban from activity. [fetched for Art. 18; 2019] — [Al-Watan](https://www.alwatan.com.sa/article/1017355)
- SDAIA 2026 PDPL sanction decisions (see section 5). [snippet] — [Sabq](https://sabq.org/article/svp4tmt)
- Tourism: ~21,000 violations in H1 2025, mostly unlicensed operation; platforms ordered to delist unlicensed units. [snippet] — [Al-Watan](https://www.alwatan.com.sa/article/1170944)

### Inferences
- Reported MoC cases are complaint-driven (non-delivery, refunds, misleading ads). A listings-only platform's main exposure is therefore consumer complaints about scams by sellers, plus sector regulators if it strays into regulated categories.

### Gaps
- Which exact URL carries which enforcement case was not verified page-by-page; dates of several cases are uncertain.
- No found case of an unlicensed payment-holding marketplace sanctioned by SAMA, nor of an individual penalised for running a platform without CR/freelance document.
