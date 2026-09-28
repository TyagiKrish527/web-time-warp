export type Era = {
  id: string;
  start: number;
  end: number;
  label: string;
  shortLabel: string;
  theme: string;
  address: string;
  headline: string;
  deck: string;
  developments: string[];
  technologies: string[];
  devices: string[];
  design: string[];
  communication: string[];
  culture: string[];
  changes: Record<string, string>;
};

export const eras: Era[] = [
  {
    id: "early-web", start: 1990, end: 1995, label: "The Early Web", shortLabel: "EARLY WEB", theme: "early",
    address: "http://info.world/first-page.html", headline: "Welcome to the World Wide Web", deck: "A small universe of linked documents. Best viewed with curiosity.",
    developments: ["The public web emerges", "Web directories map a tiny network"], technologies: ["HTML 1.0", "HTTP", "Dial-up"], devices: ["Beige desktop", "CRT monitor"], design: ["Blue links", "Tables & rules"], communication: ["Email", "IRC & forums"], culture: ["Personal homepages", "Under construction"],
    changes: { Design: "Documents ruled: grey pages, system fonts and links did the navigation.", Technology: "Static files traveled from server to browser over slow connections.", Browsers: "Early graphical browsers made the web approachable beyond research labs.", Search: "Curated directories helped people find the web's few destinations.", "Social media": "Communities gathered in forums, newsgroups and IRC channels.", Communication: "Email moved from institutions toward everyday life.", Devices: "Desktop computers and CRT displays defined the canvas.", Trends: "Hit counters, guestbooks and construction signs made pages feel handmade." },
  },
  {
    id: "web-one", start: 1996, end: 2000, label: "Web 1.0", shortLabel: "WEB 1.0", theme: "web1",
    address: "http://www.neon-nexus.net/home", headline: "NEON NEXUS — Your Portal to Cyberspace", deck: "Enter the information superhighway. 800 × 600 resolution recommended.",
    developments: ["Portals become front doors", "Online commerce takes shape"], technologies: ["HTML tables", "GIF animation", "Java applets"], devices: ["Family PC", "56k modem"], design: ["Web-safe color", "Image maps"], communication: ["Chat rooms", "Instant messaging"], culture: ["Web rings", "Fan pages"],
    changes: { Design: "Pages became colorful, dense and proudly experimental.", Technology: "Scripting, plug-ins and animated images brought pages to life.", Browsers: "Browser competition accelerated support for new visual features.", Search: "Search engines began crawling a rapidly expanding web.", "Social media": "Profiles and chat identities formed early social graphs.", Communication: "Instant messaging made online presence visible.", Devices: "The family desktop became a household gateway.", Trends: "Splash pages, web rings and guestbooks invited exploration." },
  },
  {
    id: "dot-com", start: 2001, end: 2005, label: "The Dot-Com Era", shortLabel: "DOT-COM", theme: "dotcom",
    address: "http://dailywire.example/blog/index.php", headline: "The Daily Wireframe", deck: "News, links and observations from around the connected world.",
    developments: ["Broadband adoption rises", "Blogs reshape publishing"], technologies: ["CSS", "PHP", "RSS feeds"], devices: ["LCD desktop", "Early laptops"], design: ["Fixed-width pages", "Glossy navigation"], communication: ["Blogs", "Message boards"], culture: ["Blogrolls", "Flash intros"],
    changes: { Design: "CSS separated content from presentation and layouts became more polished.", Technology: "Server-side publishing made sites update continuously.", Browsers: "Standards support improved, though compatibility remained a daily puzzle.", Search: "Algorithmic relevance outpaced hand-built directories.", "Social media": "Blogs, comments and early networks made publishing participatory.", Communication: "RSS and comments turned reading into conversation.", Devices: "Laptops grew practical while broadband replaced the modem ritual.", Trends: "Glossy tabs, tiny type and fixed-width columns framed the era." },
  },
  {
    id: "social", start: 2006, end: 2010, label: "Social Media Begins", shortLabel: "SOCIAL WEB", theme: "social",
    address: "http://circle.example/home", headline: "Your network, all in one place", deck: "Share a thought, discover a link, and see what your circle is doing.",
    developments: ["Feeds become the homepage", "Video moves into the browser"], technologies: ["AJAX", "APIs", "Cloud apps"], devices: ["Netbooks", "Early smartphones"], design: ["Rounded panels", "Glossy buttons"], communication: ["Status updates", "VoIP"], culture: ["Viral video", "User-generated media"],
    changes: { Design: "Rounded modules and glossy controls made the web feel like software.", Technology: "AJAX updated pages without full reloads; APIs connected services.", Browsers: "Faster JavaScript engines enabled richer applications.", Search: "Universal search blended news, images, maps and video.", "Social media": "Identity, feeds, friends and followers became core primitives.", Communication: "Public status updates joined private messages and calls.", Devices: "The web started moving from the desk into the pocket.", Trends: "Badges, profile boxes and share buttons appeared everywhere." },
  },
  {
    id: "smartphone", start: 2011, end: 2015, label: "Smartphone & Social Era", shortLabel: "MOBILE FIRST", theme: "flat",
    address: "https://pulse.example/discover", headline: "Stories moving the world", deck: "A personalized stream designed for every screen.",
    developments: ["Mobile traffic surges", "Apps reshape daily habits"], technologies: ["Responsive CSS", "HTML5", "Push notifications"], devices: ["Touchscreen phone", "Tablet"], design: ["Flat UI", "Card layouts"], communication: ["Group messaging", "Photo sharing"], culture: ["Hashtags", "Reaction culture"],
    changes: { Design: "Flat color, cards and large touch targets replaced skeuomorphic detail.", Technology: "Responsive layouts adapted one service across many screens.", Browsers: "Mobile browsers became a primary way to experience the web.", Search: "Location and context made results personal and immediate.", "Social media": "Camera-first sharing made daily life a continuous feed.", Communication: "Group messaging and push notifications made conversation constant.", Devices: "Touchscreen phones became the default internet device.", Trends: "Infinite scroll, full-bleed photography and app-like navigation took over." },
  },
  {
    id: "modern", start: 2016, end: 2020, label: "Modern Web", shortLabel: "MODERN WEB", theme: "modern",
    address: "https://fieldnotes.example/workspace", headline: "Everything in sync", deck: "A calm, connected workspace for people building together.",
    developments: ["Streaming becomes default", "Remote collaboration matures"], technologies: ["Design systems", "PWAs", "Serverless"], devices: ["Edge-to-edge phone", "Ultralight laptop"], design: ["Bold type", "Product systems"], communication: ["Team chat", "Live collaboration"], culture: ["Creator economy", "Streaming life"],
    changes: { Design: "Design systems brought consistency to increasingly complex products.", Technology: "Cloud services and component frameworks sped up product development.", Browsers: "Capable browser APIs blurred the boundary between sites and apps.", Search: "Answers increasingly appeared before links.", "Social media": "Video, stories and creators competed for attention.", Communication: "Shared documents and persistent team chat enabled remote work.", Devices: "Phones lost their bezels while laptops became thinner and faster.", Trends: "Large typography, purposeful motion and product-led websites dominated." },
  },
  {
    id: "ai", start: 2021, end: 2026, label: "AI Era", shortLabel: "AI ERA", theme: "ai",
    address: "https://synth.example/session/new", headline: "What are we imagining today?", deck: "A collaborative intelligence that turns intent into a working first draft.",
    developments: ["Generative AI reaches consumers", "Natural language becomes an interface"], technologies: ["LLMs", "Multimodal models", "Edge AI"], devices: ["AI-enabled laptop", "Spatial headset"], design: ["Prompt interfaces", "Adaptive UI"], communication: ["AI copilots", "Synthetic media"], culture: ["Prompt craft", "Human–AI creation"],
    changes: { Design: "Conversational canvases sit beside familiar apps and dashboards.", Technology: "Foundation models interpret and generate text, images, audio and code.", Browsers: "Browsers summarize, assist and automate across tabs.", Search: "Direct, synthesized answers coexist with source discovery.", "Social media": "Synthetic media changes how people create and verify content.", Communication: "Translation and drafting become instant, contextual helpers.", Devices: "Dedicated neural processors bring AI work closer to the user.", Trends: "Quiet glass surfaces and generative, personalized interfaces emerge." },
  },
  {
    id: "future", start: 2050, end: 2050, label: "Experimental Future Web", shortLabel: "FUTURE WEB", theme: "future",
    address: "spatial://commons.collective/threshold", headline: "The network is around you", deck: "A fictional spatial commons shaped by presence, consent and collective intelligence.",
    developments: ["Fiction: ambient networks", "Fiction: embodied digital spaces"], technologies: ["Speculative neural UI", "Spatial agents", "Quantum links"], devices: ["Ambient lens", "Haptic field"], design: ["Spatial layers", "Intent-driven UI"], communication: ["Presence rooms", "Thoughtful agents"], culture: ["Shared realities", "Digital stewardship"],
    changes: { Design: "Speculative interfaces arrange themselves around context and intention.", Technology: "Fictional spatial agents bridge physical and digital environments.", Browsers: "A future browser could become a room, lens or trusted mediator.", Search: "Discovery may feel like navigating knowledge rather than entering queries.", "Social media": "Shared spaces could replace feeds with presence and collaboration.", Communication: "Language, gesture and environment may blend into one channel.", Devices: "Interfaces could recede into lenses, surfaces and ambient objects.", Trends: "This concept explores calm, consent-aware and spatial digital systems." },
  },
];

export const evolution = [
  ["Static HTML", "Documents connected by links made knowledge navigable."],
  ["Dynamic Websites", "Databases and server scripts made pages responsive to people."],
  ["Web 2.0", "Participation turned audiences into publishers."],
  ["Social Media", "Identity and feeds connected global communities."],
  ["Mobile Web", "The internet became a constant pocket companion."],
  ["Cloud", "Services synchronized work, media and data everywhere."],
  ["AI", "Language became a new way to operate software."],
  ["Future Web", "A speculative network becomes spatial, ambient and adaptive."],
] as const;

export function eraForYear(year: number) {
  if (year === 2050) return eras[eras.length - 1];
  return eras.find((era) => year >= era.start && year <= era.end) ?? eras[0];
}