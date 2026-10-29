/* Portfolio content. Project claims are limited to inspected public repositories and the supplied portfolio record. */
window.SITE = {
  email: "Santhra.satheesh@gmail.com",
  github: "https://github.com/santhra-code",
  linkedin: "https://www.linkedin.com/in/santhra-satheesh-471a05282/",
  resume: "assets/Santhra_S_resume.pdf"
};

window.PROJECTS = [
  {
    id: "sanaera",
    num: "001",
    archive: "Commerce & digital experience",
    name: "SANAÉRA",
    status: "IN DEVELOPMENT",
    kind: "fashion",
    summary: "A luxury Indian fashion commerce concept, pairing an editorial brand direction with a contemporary storefront.",
    objective: "Explore how a modern digital experience can express Indian textile heritage while supporting product discovery and the practical work behind a small commerce operation.",
    contribution: "The existing project record describes end-to-end project work across the interface, application workflows and administration experience.",
    stack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Auth.js", "Cloudinary"],
    features: [
      "Editorial storefront and responsive product discovery, as described in the repository README.",
      "Customer accounts and role-based administration are described in the README.",
      "Product and inventory administration and Cloudinary media management are described in the README.",
      "Orders are assisted through WhatsApp; online Razorpay checkout is not implemented."
    ],
    challenge: "Balancing a distinctive, heritage-influenced visual identity with clear product information and practical administration needs.",
    learned: "A commerce interface depends on more than visual polish: the customer journey, catalogue model and operations need to make sense together.",
    statusNote: "The public repository describes an active project, but no live demo is linked. This portfolio workspace does not contain the application source, so implementation details are presented as repository-described rather than independently run here.",
    repo: "https://github.com/santhra-code/sanaera-ecommerce",
    demo: null,
    stackNote: "Stack names and described capabilities are from the public repository README. No checkout claim is made; online payments are explicitly pending.",
    previewLabel: "Editorial direction / not a live screenshot"
  },
  {
    id: "vending-machine",
    num: "002",
    archive: "Social-impact technology / connected hardware concept",
    name: "DIGITAL VENDING MACHINE FOR SANITARY NAPKINS",
    shortName: "DIGITAL VENDING MACHINE",
    subtitle: "Making essential menstrual hygiene products more accessible through connected technology.",
    status: "WEB DEMO · HARDWARE PLANNED",
    kind: "vending",
    summary: "A connected vending concept for sanitary napkins, with product ordering, a personal annual-pass QR workflow, and kiosk-oriented payment paths.",
    objective: "Make essential menstrual hygiene products easier to access through a clear self-service experience that explores QR-based member access alongside payment alternatives.",
    contribution: "This project is published in my GitHub repository. I developed it as a connected software-and-hardware concept, with a product flow, member pass, kiosk pages and supporting service routes. Repository inspection verifies the public code structure, not the authorship of individual lines; the record supplied here does not identify which parts involved tutorials or AI assistance. Third-party libraries and services are named separately in the technology notes.",
    stack: ["Next.js 16", "React 19", "TypeScript", "Supabase JS", "PostgreSQL", "Razorpay", "QR Code"],
    features: [
      "The deployed web interface exposes product browsing, product search/sort controls, kiosk mode, an annual-pass page and an admin sign-in route.",
      "Repository code includes product, order, subscription, coin transaction and dispense-log data paths, plus a Supabase schema and fallback data service.",
      "The member pass and QR redemption workflow is represented in the application and database schema; successful physical dispensing has not been demonstrated.",
      "Razorpay order creation/signature verification and a UPI QR payment path are described in the setup guide; real payment success was not verified here.",
      "The subscription lookup/redeem and coin, Razorpay, UPI-QR and hardware dispense API route directories exist in the source.",
      "The coin insertion UI and dispensing animation are software simulations; the physical coin acceptor, relay, motor and drop sensor are integration plans, not tested hardware."
    ],
    challenge: "Connecting an ordinary product flow with kiosk-specific QR and payment states while keeping hardware and payment integrations clearly separate from what the software can simulate.",
    learned: "A useful connected-product prototype needs explicit boundaries: a payment record, an entitlement check and a motor command represent different system states. Simulating the interface does not verify a payment or prove a physical dispense.",
    statusNote: "A public Vercel deployment and Next.js repository exist. The landing, kiosk, annual-pass and payment pages were reachable. During this check, product cards rendered while a Supabase products request failed in the browser; backend availability is therefore not verified as reliable. The API debug route reported expected environment variables as present, but that does not verify working credentials. No completed transaction, member redemption or physical hardware test was performed.",
    repo: "https://github.com/santhra-code/vending_machine",
    demo: "https://vendingmachine-ruby.vercel.app/",
    stackNote: "Next.js 16, React 19, Supabase JS, Razorpay and QR Code packages are listed in package.json. The repository includes database schema and route handlers; this is not evidence that external credentials, live payments or machine hardware are configured.",
    workflow: [
      { title: "Browse & choose", note: "The web storefront and kiosk expose product selection and quantities.", state: "software" },
      { title: "Choose an access route", note: "Member QR, UPI / Razorpay path, or coin-entry simulation are represented in the software.", state: "software" },
      { title: "Verify & record", note: "Order, pass, payment and dispense records have corresponding application/API and database structures.", state: "software" },
      { title: "Release a product", note: "Motor relay, physical coin acceptor and drop-sensor integration remain hardware plans; no machine test is claimed.", state: "planned" }
    ],
    problem: "Access to essential menstrual hygiene products can be inconvenient or constrained. The project explores a self-service access point, without claiming measured social outcomes.",
    idea: "A digital vending experience that combines product selection with alternative access routes: a member QR pass and software payment paths, alongside a coin-entry simulation.",
    software: "The repository is a Next.js 16 / React 19 TypeScript application. It contains storefront, kiosk, subscription, admin and API routes, a Supabase JavaScript client, a PostgreSQL schema, and a fallback data service. Admin sessions use a jose-signed cookie; this is not Supabase Auth. Razorpay server-side order creation and verification code is present; external payment credentials and successful live payment were not verified.",
    interaction: "The deployed landing page offers product selection and links to Kiosk Mode and My Annual Pass. The repository models annual-pass QR quotas and UPI/Razorpay and coin-entry routes. Its payment UI also lists debit-card and cash-note reader options, but these reader integrations were not verified. The demo was inspected: product cards render, but the Supabase products request failed in the browser during this check. Payment completion and a physical QR scan were not tested.",
    hardware: "The setup guide describes Arduino/ESP32 coin pulse input, a relay output for a dispenser motor and an IR drop sensor; the repository includes a hardware dispense API route. The guide and API are not evidence of connected or tested hardware. The kiosk uses software simulation for dispensing feedback.",
    authorship: "The code is in the public repository associated with Santhra’s account. From repository and documentation inspection alone, individual authorship boundaries cannot be independently established; this case study avoids attributing specific implementation details beyond the published project record. Next.js, Supabase, Razorpay, jose and QR Code are third-party tools. No unsupported claim about tutorials or AI assistance is made.",
    engineering: "The repository separates route handlers and data access from the kiosk UI, and defines product, order, subscription, coin transaction and dispense-log records. A fallback data service is intended to keep UI flows available when Supabase is unavailable; the live check showed a database request failure while products still appeared. This supports interface availability, not verified persistence or payment completion.",
    evidence: "Inspected evidence: public repository structure, package manifest, Supabase SQL schema, setup guide, API route directories and the live demo’s product-list interface. The repository’s public/scanner.jpeg is a QR/payment graphic, not a hardware photograph or application screenshot. The supplied portfolio assets contain no image of a physical prototype.",
    previewLabel: "System map / software and proposed hardware"
  },
  {
    id: "santrix",
    num: "003",
    archive: "Accessibility & full-stack development",
    name: "SANTRIX",
    status: "IN DEVELOPMENT",
    kind: "learning",
    summary: "An online tuition platform concept for bringing course discovery, tutor connections and student learning workflows together.",
    objective: "Explore a digital home for tuition workflows, with experiences intended for students, teachers and administrators.",
    contribution: "The existing portfolio record describes full-stack work spanning a React interface, Express API and MongoDB data layer.",
    stack: ["React 18", "Vite", "React Router", "Tailwind CSS", "Axios", "Node.js", "Express", "MongoDB", "JWT"],
    features: [
      "The public repository README describes course categories, teacher listings and demo-session booking.",
      "Student and teacher dashboards and an administration panel are described in the README.",
      "The README describes JWT authentication, validated forms and a frontend API service layer.",
      "This portfolio workspace does not include the project source; README-described features have not been independently run or verified here."
    ],
    challenge: "Keeping several role-specific journeys coherent while connecting a client application to a separate API and database.",
    learned: "A role-based product needs clear boundaries between user journeys, API responsibilities and data access—and careful validation at each boundary.",
    statusNote: "IN DEVELOPMENT. No live demo is linked. The source repository is public; its README is the basis for the feature and technology summary on this page.",
    repo: "https://github.com/santhra-code/santrix-e-tuition",
    demo: null,
    stackNote: "The technologies and proposed workflows listed here are described by the public repository README. The source project is not bundled in this portfolio workspace.",
    previewLabel: "Product workflow / schematic, not a screenshot"
  },
  {
    id: "medical-risk",
    num: "004",
    archive: "Data & applied machine learning",
    name: "AI Medical Device Risk Intelligence",
    status: "EARLY EXPLORATION",
    kind: "research",
    summary: "An exploratory direction for examining medical-device adverse-event information and the questions it can raise about risk patterns.",
    objective: "Investigate whether structured analysis of reports such as FDA MAUDE data could help organize patterns for further human review.",
    contribution: "Project direction and exploratory research. No completed analytical pipeline is present in the supplied portfolio workspace.",
    stack: ["Python", "Data preprocessing", "NLP fundamentals", "Machine-learning concepts"],
    features: [
      "FDA MAUDE is a possible source under consideration; no dataset is included in this workspace.",
      "Data preparation, text analysis and risk-pattern exploration are planned directions, not verified implemented features.",
      "No trained model, measured performance, dashboard or validated finding is claimed.",
      "This is not a clinical, diagnostic or regulatory decision system."
    ],
    challenge: "Understanding the limits of spontaneous adverse-event reports, including reporting bias and the difference between observed associations and causal conclusions.",
    learned: "Medical data analysis requires careful source documentation, transparent limitations and restraint about what a model or pattern can establish.",
    statusNote: "Early exploration. No notebook, dataset, repository or public demo was found among the supplied portfolio assets.",
    repo: null,
    demo: null,
    stackNote: "These are areas of interest and intended methods, not a claim that a finished pipeline exists.",
    previewLabel: "Intended investigation / no results or data shown"
  }
];

window.CAPABILITIES = [
  {
    id: "web",
    label: "Web & applications",
    note: "Project experience with interfaces, application routes and full-stack workflows.",
    skills: [
      { name: "HTML and CSS", level: "used", evidence: "Portfolio and web projects" },
      { name: "JavaScript", level: "used", evidence: "Web projects" },
      { name: "React", level: "used", evidence: "Santrix repository record" },
      { name: "Next.js", level: "used", evidence: "SANAÉRA repository" },
      { name: "Node.js and Express", level: "used", evidence: "Santrix repository record" },
      { name: "REST APIs", level: "used", evidence: "Santrix repository record" },
      { name: "TypeScript", level: "learning", evidence: "SANAÉRA project work" },
      { name: "Tailwind CSS", level: "used", evidence: "SANAÉRA and Santrix records" }
    ]
  },
  {
    id: "data",
    label: "Data & databases",
    note: "Relational and document database technologies used or described in project records.",
    skills: [
      { name: "PostgreSQL", level: "used", evidence: "SANAÉRA and project records" },
      { name: "MongoDB", level: "used", evidence: "Santrix repository record" },
      { name: "Prisma", level: "used", evidence: "SANAÉRA repository" },
      { name: "SQL / MySQL", level: "familiar", evidence: "Coursework" }
    ]
  },
  {
    id: "programming",
    label: "Programming",
    note: "Languages developed through coursework, project work and internship experience.",
    skills: [
      { name: "Python", level: "used", evidence: "Documented internship experience" },
      { name: "JavaScript", level: "used", evidence: "Web projects" },
      { name: "Java", level: "familiar", evidence: "Coursework" },
      { name: "C++", level: "familiar", evidence: "Coursework" }
    ]
  },
  {
    id: "analysis",
    label: "Data & analysis",
    note: "Practical foundations, with applied machine learning and NLP continuing to develop.",
    skills: [
      { name: "Data preprocessing", level: "used", evidence: "AI internship record" },
      { name: "scikit-learn", level: "used", evidence: "AI internship record" },
      { name: "OpenCV and NumPy", level: "used", evidence: "Cyber security internship record" },
      { name: "Machine-learning fundamentals", level: "familiar", evidence: "Internship and coursework" },
      { name: "NLP", level: "learning", evidence: "Medical risk project direction" },
      { name: "Power BI", level: "familiar", evidence: "Workshop" }
    ]
  },
  {
    id: "tools",
    label: "Tools & services",
    note: "The supporting tools and services appearing in the project record.",
    skills: [
      { name: "Git and GitHub", level: "used", evidence: "Project work" },
      { name: "VS Code", level: "used", evidence: "Development environment" },
      { name: "Cloudinary", level: "used", evidence: "SANAÉRA repository" },
      { name: "Linux fundamentals", level: "familiar", evidence: "Environment" }
    ]
  }
];