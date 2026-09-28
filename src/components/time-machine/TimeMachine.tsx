import { useMemo, useRef, useState } from "react";
import {
  ArrowLeft, ArrowRight, ChevronDown, ChevronLeft, ChevronRight, Clock3,
  ExternalLink, FastForward, Globe2, History, Maximize2, Pause, Play,
  RefreshCw, RotateCcw, Search, Sparkles, Volume2, VolumeX, X,
} from "lucide-react";
import portalImage from "@/assets/time-portal.jpg";
import { Button } from "@/components/ui/button";
import { eraForYear, eras, evolution, type Era } from "@/data/eras";

const clampYear = (year: number) => Math.max(1990, Math.min(2026, year));

function Portal({ onEnter }: { onEnter: () => void }) {
  return (
    <button className="portal" onClick={onEnter} aria-label="Enter the time machine">
      <img src={portalImage} alt="A luminous circular digital time portal" width={1600} height={1200} />
      <span className="portal__rings" aria-hidden="true" />
      <span className="portal__core"><span>1990</span><small>DESTINATION READY</small></span>
    </button>
  );
}

function Timeline({ active, onSelect }: { active: Era; onSelect: (era: Era) => void }) {
  const scroller = useRef<HTMLDivElement>(null);
  const onWheel = (event: React.WheelEvent) => {
    if (!scroller.current) return;
    scroller.current.scrollLeft += event.deltaY || event.deltaX;
  };
  return (
    <div className="timeline-shell" id="timeline">
      <div className="timeline-heading"><span>CHOOSE A DESTINATION</span><small>DRAG · SCROLL · SELECT</small></div>
      <div className="timeline" ref={scroller} onWheel={onWheel} tabIndex={0} aria-label="Internet era timeline">
        {eras.map((era, index) => (
          <button key={era.id} className="timeline__stop" data-active={era.id === active.id} onClick={() => onSelect(era)}>
            <span className="timeline__year">{era.start === era.end ? era.start : `${era.start}—${era.end}`}</span>
            <span className="timeline__dot" aria-hidden="true" />
            <span className="timeline__label">{era.label}</span>
            {index < eras.length - 1 && <span className="timeline__line" aria-hidden="true" />}
          </button>
        ))}
      </div>
    </div>
  );
}

function FakePage({ era }: { era: Era }) {
  if (era.theme === "early") return (
    <div className="fake-page fake-page--early"><h2>{era.headline}</h2><p>{era.deck}</p><hr /><h3>What's here?</h3><ul><li><a href="#history">A short history of the network</a></li><li><a href="#changes">People and projects</a></li><li><a href="#evolution">How to get connected</a></li></ul><p className="construction">[ Page always under construction ]</p><small>Last updated: {era.start}</small></div>
  );
  if (era.theme === "web1") return (
    <div className="fake-page fake-page--web1"><div className="marquee">★ WELCOME, WEB TRAVELER ★</div><h2>{era.headline}</h2><p>{era.deck}</p><div className="web1-grid"><aside>MAIN MENU<br /><a href="#history">COOL LINKS</a><br /><a href="#changes">GUESTBOOK</a><br /><a href="#evolution">WEB RING</a></aside><main><h3>Site of the moment</h3><p>The web is growing every minute. Explore a handcrafted directory of strange and wonderful pages.</p><button>ENTER SITE</button></main></div><small>You are visitor 00042</small></div>
  );
  if (era.theme === "dotcom") return (
    <div className="fake-page fake-page--dotcom"><header><strong>{era.headline}</strong><span>HOME · ARCHIVE · ABOUT</span></header><main><h2>Broadband changes the rhythm of the web</h2><small>Posted at 9:42 AM · 18 comments</small><p>{era.deck}</p><blockquote>“Publishing belongs to everyone now.”</blockquote><a href="#changes">Continue reading →</a></main><aside><b>Search this site</b><input aria-label="Search this simulated website" /><b>Blogroll</b><span>Signal Garden<br />Pixel Paper<br />Open Journal</span></aside></div>
  );
  if (era.theme === "social") return (
    <div className="fake-page fake-page--social"><header><b>circle</b><input value="Search people and updates" readOnly aria-label="Simulated social search" /><span>Home · Inbox</span></header><div className="social-layout"><aside><div className="avatar">YT</div><b>You, online</b><span>Profile<br />Photos<br />Friends</span></aside><main><div className="composer">What are you doing? <button>Share</button></div><article><b>Maya connected with Leo</b><p>{era.deck}</p><small>12 minutes ago · Like · Comment</small></article><article><b>Now playing</b><p>A tiny video with a very big view count.</p></article></main></div></div>
  );
  if (era.theme === "flat") return (
    <div className="fake-page fake-page--flat"><header><b>PULSE</b><Search size={17} /><span>Discover</span></header><div className="flat-hero"><span>TRENDING NOW</span><h2>{era.headline}</h2><p>{era.deck}</p></div><div className="flat-cards"><article><small>DESIGN</small><b>The screen fits in your hand</b></article><article><small>CULTURE</small><b>A world organized by #hashtags</b></article><article><small>TECH</small><b>Everything, everywhere, in sync</b></article></div></div>
  );
  if (era.theme === "modern") return (
    <div className="fake-page fake-page--modern"><nav><b>fieldnotes</b><span>Workspace · Library · Activity</span><div className="avatar">AK</div></nav><main><small>GOOD MORNING, ALEX</small><h2>{era.headline}</h2><p>{era.deck}</p><div className="modern-grid"><article><span>In progress</span><strong>12</strong><small>projects</small></article><article><span>Collaborators</span><strong>28</strong><small>online now</small></article><article className="wide"><span>Recent activity</span><p>Homepage system updated · 4m</p><p>Research notes shared · 18m</p></article></div></main></div>
  );
  return (
    <div className={`fake-page fake-page--${era.theme}`}><nav><b>{era.theme === "future" ? "COMMONS / 2050" : "SYNTH / WORKSPACE"}</b><span>● SYSTEM ONLINE</span></nav><main><small>{era.theme === "future" ? "SPECULATIVE SPATIAL SESSION" : "NEW INTELLIGENCE SESSION"}</small><h2>{era.headline}</h2><p>{era.deck}</p><div className="prompt"><Sparkles size={18} /><span>{era.theme === "future" ? "Shape a space for collective learning…" : "Ask, create, analyze or imagine…"}</span><ArrowRight size={18} /></div><div className="ai-grid"><article><b>Explore</b><span>Map a new idea</span></article><article><b>Create</b><span>Build from intent</span></article><article><b>Connect</b><span>Link every context</span></article></div></main></div>
  );
}

function Browser({ era }: { era: Era }) {
  return (
    <section className="browser-wrap" aria-labelledby="browser-title">
      <div className="section-kicker"><span>02</span><div><small>ERA ARTIFACT</small><h2 id="browser-title">A browser from {era.start}</h2></div></div>
      <div className="browser">
        <div className="browser__top">
          <div className="window-controls"><i /><i /><i /></div>
          <div className="browser__tabs"><span><Globe2 size={13} /> {era.shortLabel}<X size={12} /></span><b>+</b></div>
        </div>
        <div className="browser__bar">
          <div className="browser__actions"><ArrowLeft /><ArrowRight /><RefreshCw /></div>
          <div className="address"><span>{era.theme === "early" || era.theme === "web1" ? "http" : "https"}</span>{era.address.replace(/^\w+:\/\//, "")}</div>
          <ExternalLink size={16} />
        </div>
        <FakePage era={era} />
      </div>
    </section>
  );
}

function YearFacts({ era, year }: { era: Era; year: number }) {
  const groups = [
    ["DEVELOPMENTS", era.developments], ["TECHNOLOGY", era.technologies], ["DEVICES", era.devices],
    ["DESIGN", era.design], ["COMMUNICATION", era.communication], ["CULTURE", era.culture],
  ];
  return (
    <section className="facts" id="history" aria-labelledby="facts-title">
      <div className="section-kicker"><span>03</span><div><small>ARCHIVE SNAPSHOT</small><h2 id="facts-title">On this year <em>{year}</em></h2></div></div>
      <div className="facts__grid">{groups.map(([title, items]) => <article key={title as string}><small>{title as string}</small>{(items as string[]).map((item) => <p key={item}>{item}</p>)}</article>)}</div>
    </section>
  );
}

function Changes({ era }: { era: Era }) {
  const [open, setOpen] = useState("Design");
  return (
    <section className="changes" id="changes" aria-labelledby="changes-title">
      <div className="section-kicker"><span>04</span><div><small>THEN / NOW</small><h2 id="changes-title">What changed?</h2></div></div>
      <div className="changes__list">{Object.entries(era.changes).map(([title, copy]) => <article key={title} data-open={open === title}><button onClick={() => setOpen(open === title ? "" : title)} aria-expanded={open === title}><span>{title}</span><ChevronDown /></button><div><p>{copy}</p></div></article>)}</div>
    </section>
  );
}

function Evolution() {
  const [active, setActive] = useState(0);
  return (
    <section className="evolution" id="evolution" aria-labelledby="evolution-title">
      <div className="section-kicker"><span>05</span><div><small>SYSTEM MAP</small><h2 id="evolution-title">Internet evolution</h2></div></div>
      <div className="evolution__path">{evolution.map(([name], index) => <button key={name} data-active={active === index} onClick={() => setActive(index)}><i>{String(index + 1).padStart(2, "0")}</i><span>{name}</span>{index < evolution.length - 1 && <ArrowRight />}</button>)}</div>
      <div className="evolution__detail"><small>STAGE {String(active + 1).padStart(2, "0")}</small><h3>{evolution[active][0]}</h3><p>{evolution[active][1]}</p></div>
    </section>
  );
}

function Controls({ era, year, onYear, onStep }: { era: Era; year: number; onYear: (n: number) => void; onStep: (n: number) => void }) {
  const future = year === 2050;
  return (
    <div className="controls">
      <Button variant="ghost" onClick={() => onStep(-1)} aria-label="Previous era"><ChevronLeft /> <span>Previous</span></Button>
      <div className="controls__current"><small>{era.shortLabel}</small><b>{future ? "2050" : year}</b></div>
      <Button variant="ghost" onClick={() => onStep(1)} aria-label="Next era"><span>Next</span> <ChevronRight /></Button>
      <label className="year-jump"><span>JUMP TO YEAR</span><input type="range" min="1990" max="2026" value={future ? 2026 : year} onChange={(e) => onYear(Number(e.target.value))} /><b>{future ? "2050" : year}</b></label>
    </div>
  );
}

export function TimeMachine() {
  const [year, setYear] = useState(1990);
  const [entered, setEntered] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const [sound, setSound] = useState(false);
  const era = useMemo(() => eraForYear(year), [year]);

  const tone = () => {
    if (!sound || typeof window === "undefined") return;
    const AudioContextClass = window.AudioContext ?? (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    const context = new AudioContextClass(); const oscillator = context.createOscillator(); const gain = context.createGain();
    oscillator.type = era.theme === "early" ? "square" : "sine"; oscillator.frequency.setValueAtTime(180, context.currentTime); oscillator.frequency.exponentialRampToValueAtTime(620, context.currentTime + 0.12);
    gain.gain.setValueAtTime(0.035, context.currentTime); gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.16);
    oscillator.connect(gain); gain.connect(context.destination); oscillator.start(); oscillator.stop(context.currentTime + 0.16);
  };
  const travel = (next: Era | number) => {
    const target = typeof next === "number" ? next : next.start;
    setTransitioning(true); tone();
    window.setTimeout(() => { setYear(target); setEntered(true); window.scrollTo({ top: window.innerHeight * 0.72, behavior: "smooth" }); }, 260);
    window.setTimeout(() => setTransitioning(false), 850);
  };
  const step = (direction: number) => {
    const index = eras.findIndex((item) => item.id === era.id);
    const nextIndex = (index + direction + eras.length) % eras.length;
    travel(eras[nextIndex]);
  };
  const randomTravel = () => travel(eras[Math.floor(Math.random() * eras.length)]);

  return (
    <main className="time-machine" data-theme={entered ? era.theme : "base"}>
      <div className="scanlines" aria-hidden="true" /><div className="noise" aria-hidden="true" />
      <header className="topbar"><a href="#top" className="brand"><Clock3 /><span>INTERNET<br /><b>TIME MACHINE</b></span></a><div><span className="system-status"><i /> SYSTEM ONLINE</span><Button variant="icon" onClick={() => setSound(!sound)} aria-label={sound ? "Mute interface sounds" : "Enable interface sounds"}>{sound ? <Volume2 /> : <VolumeX />}</Button></div></header>
      <section className="hero" id="top">
        <div className="hero__copy"><small>ARCHIVE NODE / 001</small><h1>INTERNET<br /><em>TIME MACHINE</em></h1><p>Travel through the evolution of the web.</p></div>
        <Portal onEnter={() => travel(era)} />
        <div className="hero__actions"><Button onClick={() => travel(era)}><Play /> Enter the time machine</Button><Button variant="secondary" onClick={() => document.querySelector("#timeline")?.scrollIntoView({ behavior: "smooth" })}><History /> Explore timeline</Button><Button variant="ghost" onClick={randomTravel}><FastForward /> Take me somewhere random</Button></div>
        <div className="scroll-cue"><span>SCROLL TO NAVIGATE</span><ChevronDown /></div>
      </section>

      <section className="experience" aria-live="polite">
        <div className="experience__intro"><div><small>01 / TEMPORAL NAVIGATION</small><h2>Select an era.<br /><em>Rewrite the interface.</em></h2></div><p>Each destination reconstructs the texture, tools and digital rituals of its time.</p></div>
        <Timeline active={era} onSelect={travel} />
        <div className="era-banner"><div><span>{year}</span><small>{era.start === 2050 ? "SPECULATIVE FUTURE CONCEPT" : "CURRENT DESTINATION"}</small></div><div><small>ERA</small><h2>{era.label}</h2><p>{era.deck}</p></div>{year === 2050 && <Sparkles />}</div>
        <Browser era={era} />
        <YearFacts era={era} year={year} />
        <Changes era={era} />
        <Evolution />
        <section className="future-callout"><small>NEXT UNDOCUMENTED CHAPTER</small><h2>The archive ends.<br />Imagination begins.</h2><p>Enter a fictional 2050 network concept. No forecast, just a space to question what the web could become.</p><Button onClick={() => travel(2050)}><Sparkles /> Explore 2050</Button></section>
      </section>

      {entered && <Controls era={era} year={year} onYear={(value) => travel(clampYear(value))} onStep={step} />}
      <div className="transition" data-active={transitioning} aria-hidden="true"><span /><div><RotateCcw /><b>TEMPORAL SHIFT</b><small>{era.start} / {era.shortLabel}</small></div></div>
      <footer><span>INTERNET TIME MACHINE</span><small>An interactive archive of the networked world.</small><span>1990 — 2050</span></footer>
    </main>
  );
}