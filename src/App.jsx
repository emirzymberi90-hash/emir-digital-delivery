import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Building2,
  Cpu,
  Database,
  Download,
  Gauge,
  GitBranch,
  Layers3,
  Linkedin,
  Menu,
  Play,
  ScanLine,
  Sparkles,
  Target,
  Users,
  X,
  Zap,
} from "lucide-react";

const missions = [
  {
    id: "delivery",
    number: "01",
    title: "BIM & Digital Delivery",
    eyebrow: "TECHNICAL EXECUTION",
    description:
      "Hands-on delivery across complex construction environments, connecting coordination, constructability, information, and execution.",
    details: [
      "BIM coordination",
      "Constructability",
      "Digital workflows",
      "Project execution",
    ],
    icon: Layers3,
  },
  {
    id: "leadership",
    number: "02",
    title: "Team Leadership",
    eyebrow: "PEOPLE & PERFORMANCE",
    description:
      "Building scalable teams, developing talent, creating standards, and turning individual expertise into reliable delivery systems.",
    details: [
      "Team building",
      "Talent development",
      "Accountability",
      "Scalable delivery",
    ],
    icon: Users,
  },
  {
    id: "enterprise",
    number: "03",
    title: "Enterprise Scale",
    eyebrow: "SYSTEMS & STRATEGY",
    description:
      "Connecting BIM delivery across healthcare, data centers, semiconductor, and advanced manufacturing programs.",
    details: [
      "Standards",
      "Process design",
      "Technology adoption",
      "Continuous improvement",
    ],
    icon: GitBranch,
  },
  {
    id: "future",
    number: "04",
    title: "Next Chapter",
    eyebrow: "DIRECTOR-LEVEL VISION",
    description:
      "Leading digital delivery, BIM, and VDC strategy at enterprise scale while building teams and systems that improve construction delivery.",
    details: [
      "Enterprise leadership",
      "Digital transformation",
      "Operational excellence",
      "Growth strategy",
    ],
    icon: Target,
  },
];

const projects = [
  {
    code: "MF-001",
    sector: "HEALTHCARE",
    title: "Healthcare BIM Delivery",
    status: "COMPLETE",
    description:
      "Hospital and equipment-support work involving BIM coordination, site conditions, constructability, vendor information, RFIs, and installation requirements.",
    challenge:
      "Translate complex field, vendor, and installation requirements into coordinated, buildable project information.",
    approach:
      "Connect model coordination, constructability review, field conditions, and stakeholder communication in one repeatable delivery rhythm.",
    impact:
      "Reduced ambiguity and helped teams move from information to execution with greater clarity.",
    icon: Building2,
  },
  {
    code: "MF-002",
    sector: "DATA CENTER",
    title: "Data Center Expansion",
    status: "ACTIVE GROWTH",
    description:
      "Supporting large-scale data center work while developing a scalable BIM team structure, delivery standards, and customer-facing execution systems.",
    challenge:
      "Scale delivery without losing quality, coordination discipline, or responsiveness.",
    approach:
      "Build a team structure supported by clear standards, visible workflows, and consistent project communication.",
    impact:
      "Created a stronger platform for repeatable delivery across complex, fast-moving work.",
    icon: Database,
  },
  {
    code: "MF-003",
    sector: "SEMICONDUCTOR",
    title: "Advanced Manufacturing",
    status: "HIGH COMPLEXITY",
    description:
      "Complex project delivery requiring multidisciplinary coordination, BIM deliverables, customer communication, and long-term digital support.",
    challenge:
      "Coordinate high-complexity requirements across teams, systems, and changing project conditions.",
    approach:
      "Use structured BIM delivery, communication, and workflow standards to create alignment across the project ecosystem.",
    impact:
      "Made complicated delivery requirements easier to understand, coordinate, and execute.",
    icon: Cpu,
  },
];

const operating = [
  {
    title: "Strategy",
    text: "Align digital delivery with business priorities and project outcomes.",
  },
  {
    title: "Execution",
    text: "Turn plans into disciplined, predictable delivery.",
  },
  {
    title: "People",
    text: "Build teams, develop leaders, and create opportunity.",
  },
  {
    title: "Technology",
    text: "Apply BIM, VDC, automation, and digital workflows with purpose.",
  },
  {
    title: "Standards",
    text: "Create repeatable systems that protect quality as delivery scales.",
  },
  {
    title: "Data",
    text: "Use visible information to improve decisions and performance.",
  },
];

const floors = [
  {
    id: 4,
    label: "FUTURE",
    title: "Director-Level Vision",
    icon: Target,
  },
  {
    id: 3,
    label: "OPERATIONS",
    title: "Team Leadership",
    icon: Users,
  },
  {
    id: 2,
    label: "SYSTEMS",
    title: "Digital Delivery",
    icon: Cpu,
  },
  {
    id: 1,
    label: "STRUCTURE",
    title: "Project Execution",
    icon: Building2,
  },
  {
    id: 0,
    label: "FOUNDATION",
    title: "BIM Expertise",
    icon: Layers3,
  },
];

const floorCopy = [
  {
    title: "Technical BIM Expertise",
    text: "A foundation built through hands-on BIM execution, project understanding, coordination, and problem solving.",
  },
  {
    title: "Project Execution",
    text: "Turning information into coordinated, constructable solutions across demanding construction environments.",
  },
  {
    title: "Digital Delivery Systems",
    text: "Creating standards, workflows, and technology-enabled processes that make delivery more consistent.",
  },
  {
    title: "Team Leadership",
    text: "Building teams, developing talent, creating accountability, and scaling delivery capability.",
  },
  {
    title: "Enterprise Digital Leadership",
    text: "Connecting people, technology, operations, and strategy to improve how construction is delivered at scale.",
  },
];

function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  return (
    <button
      className={`btn ${variant} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

function Counter({ end, prefix = "", suffix = "+" }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let frame = 0;

    const timer = setInterval(() => {
      frame += 1;
      const progress = Math.min(frame / 70, 1);

      setValue(
        Math.round(end * (1 - Math.pow(1 - progress, 3)))
      );

      if (progress === 1) {
        clearInterval(timer);
      }
    }, 18);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <>
      {prefix}
      {value}
      {suffix}
    </>
  );
}

function Background({ blueprint }) {
  return (
    <div className={`blue-bg ${blueprint ? "dense" : ""}`}>
      <motion.div
        className="scan"
        animate={{ top: ["-5%", "105%"] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="radar"
        animate={{ rotate: 360 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}

export default function App() {
  const [intro, setIntro] = useState(true);
  const [blueprint, setBlueprint] = useState(false);
  const [mission, setMission] = useState(null);
  const [project, setProject] = useState(null);
  const [floor, setFloor] = useState(0);
  const [module, setModule] = useState(0);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIntro(false), 2350);
    return () => clearTimeout(timer);
  }, []);

  const selected = useMemo(() => floorCopy[floor], [floor]);

  const go = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" });

    setMenu(false);
  };

  return (
    <main className={blueprint ? "blueprint app" : "app"}>
      <Background blueprint={blueprint} />

      <AnimatePresence>
        {intro && (
          <motion.div
            className="intro"
            exit={{ opacity: 0 }}
          >
            <div className="introbox">
              <motion.div
                className="loader"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8 }}
              />

              <div className="mono split">
                <span>INITIALIZING CAREER SYSTEM</span>
                <span>100%</span>
              </div>

              <h2>DIGITAL DELIVERY COMMAND CENTER</h2>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <nav>
        <button
          className="brand"
          onClick={() => go("home")}
        >
          EMIR ZYMBERI
          <small>DIGITAL DELIVERY • BIM • VDC</small>
        </button>

        <div className="navlinks">
          {[
            ["impact", "Impact"],
            ["missions", "Missions"],
            ["twin", "Career Twin"],
            ["projects", "Projects"],
            ["system", "Operating System"],
          ].map((item) => (
            <button
              key={item[0]}
              onClick={() => go(item[0])}
            >
              {item[1]}
            </button>
          ))}
        </div>

        <div className="navactions">
          <Button
            variant="outline"
            onClick={() => setBlueprint(!blueprint)}
          >
            <ScanLine size={15} /> BLUEPRINT
          </Button>

          <button
            className="hamb"
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>

        {menu && (
          <div className="mobilemenu">
            {[
              ["impact", "Impact"],
              ["missions", "Missions"],
              ["twin", "Career Twin"],
              ["projects", "Projects"],
              ["system", "Operating System"],
            ].map((item) => (
              <button
                key={item[0]}
                onClick={() => go(item[0])}
              >
                {item[1]}
              </button>
            ))}
          </div>
        )}
      </nav>

      <section id="home" className="hero wrap">
        <div>
          <p className="kicker">
            <i />
            SYSTEM ONLINE // PROFILE 001
          </p>

          <h1>
            DON'T READ
            <br />
            MY RÉSUMÉ.
            <br />
            <span>EXPLORE IT.</span>
          </h1>

          <p className="lead">
            I'm Emir Zymberi, a Digital Delivery and BIM
            leader connecting people, technology,
            construction, and complex project delivery.
          </p>

          <div className="actions">
            <Button onClick={() => go("missions")}>
              ENTER COMMAND CENTER <ArrowRight size={16} />
            </Button>

            <Button
              variant="outline"
              onClick={() => go("twin")}
            >
              <Play size={15} /> EXPLORE JOURNEY
            </Button>
          </div>
        </div>

        <div className="orb">
          <motion.div
            className="ring r1"
            animate={{ rotate: 360 }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            className="ring r2"
            animate={{ rotate: -360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            className="cube"
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            <div />
          </motion.div>

          {["BIM", "VDC", "PEOPLE", "SYSTEMS"].map(
            (item, index) => (
              <motion.b
                key={item}
                style={{
                  top: `${15 + (index % 2) * 68}%`,
                  left: `${8 + (index % 3) * 38}%`,
                }}
                animate={{ opacity: [0.35, 1, 0.35] }}
                transition={{
                  duration: 2.5,
                  delay: index * 0.4,
                  repeat: Infinity,
                }}
              >
                {item}
              </motion.b>
            )
          )}
        </div>

        <button
          className="down"
          onClick={() => go("impact")}
        >
          <ArrowDown />
        </button>
      </section>

      <section id="impact" className="band">
        <div className="wrap">
          <div className="sectionhead">
            <div>
              <p className="kicker">LIVE CAREER METRICS</p>
              <h2>Impact dashboard</h2>
            </div>

            <Gauge />
          </div>

          <div className="metrics">
            {[
              {
                end: 100,
                prefix: "$",
                suffix: "M+",
                label: "PROJECTS WON",
                sub: "Data center + semiconductor",
              },
              {
                end: 9,
                label: "TEAM MEMBERS LED",
                sub: "Scalable BIM delivery teams",
              },
              {
                end: 100,
                label: "BIM PROJECTS",
                sub: "Complex construction environments",
              },
            ].map((metric) => (
              <motion.article
                key={metric.label}
                whileHover={{ y: -6 }}
              >
                <em>LIVE DATA</em>

                <strong>
                  <Counter {...metric} />
                </strong>

                <h4>{metric.label}</h4>
                <p>{metric.sub}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="missions" className="wrap section">
        <p className="kicker">MISSION SELECT</p>
        <h2>Choose your path.</h2>
        <p className="muted">What do you want to discover?</p>

        <div className="missiongrid">
          {missions.map((item) => {
            const Icon = item.icon;

            return (
              <motion.button
                whileHover={{ y: -5 }}
                key={item.id}
                onClick={() => setMission(item)}
              >
                <span className="ghost">{item.number}</span>

                <div className="iconrow">
                  <i>
                    <Icon />
                  </i>
                  <ArrowRight />
                </div>

                <p className="kicker">{item.eyebrow}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.button>
            );
          })}
        </div>
      </section>

      <section id="twin" className="band section">
        <div className="wrap twocol">
          <div>
            <p className="kicker">
              INTERACTIVE CAREER MODEL
            </p>

            <h2>
              Digital twin of
              <br />
              my career.
            </h2>

            <div className="tower">
              {floors.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.button
                    whileHover={{ x: 8, scale: 1.015 }}
                    className={
                      floor === item.id ? "active" : ""
                    }
                    style={{
                      width: `${72 + index * 7}%`,
                      marginLeft: `${14 - index * 3.5}%`,
                    }}
                    key={item.id}
                    onClick={() => setFloor(item.id)}
                  >
                    <i>
                      <Icon size={18} />
                    </i>

                    <span>
                      <small>{item.label}</small>
                      {item.title}
                    </span>

                    <ArrowRight size={18} />
                  </motion.button>
                );
              })}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.article
              className="detail"
              key={floor}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
            >
              <div className="mono split">
                <span>LEVEL 0{floor + 1}</span>
                <span>UNLOCKED</span>
              </div>

              <h3>{selected.title}</h3>
              <p>{selected.text}</p>
              <hr />
              <small>
                SELECT ANOTHER FLOOR TO CONTINUE THE JOURNEY
              </small>
            </motion.article>
          </AnimatePresence>
        </div>
      </section>

      <section id="projects" className="wrap section">
        <p className="kicker">
          PROJECT INTELLIGENCE DATABASE
        </p>

        <h2>Selected mission files.</h2>

        <div className="projectgrid">
          {projects.map((item) => {
            const Icon = item.icon;

            return (
              <motion.button
                whileHover={{ y: -8 }}
                key={item.code}
                onClick={() => setProject(item)}
              >
                <div className="projectvisual">
                  <motion.i
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 22,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  <Icon size={50} />
                  <small>{item.code}</small>
                </div>

                <div className="projectbody">
                  <div className="mono split">
                    <span>{item.sector}</span>
                    <span>{item.status}</span>
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                  <b>
                    OPEN FILE <ArrowRight size={14} />
                  </b>
                </div>
              </motion.button>
            );
          })}
        </div>
      </section>

      <section id="system" className="band section">
        <div className="wrap twocol">
          <div>
            <p className="kicker">
              LEADERSHIP OPERATING SYSTEM
            </p>

            <h2>How I work.</h2>

            <div className="systemwheel">
              <motion.div
                className="wheelring"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 45,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <div className="wheelcore">
                <Zap />
                <b>MAKE COMPLEX WORK EASIER TO EXECUTE</b>
              </div>

              {operating.map((item, index) => {
                const angle =
                  (index / 6) * Math.PI * 2 - Math.PI / 2;

                return (
                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    className={
                      module === index ? "active" : ""
                    }
                    style={{
                      left: `${
                        50 + 40 * Math.cos(angle)
                      }%`,
                      top: `${
                        50 + 40 * Math.sin(angle)
                      }%`,
                    }}
                    key={item.title}
                    onClick={() => setModule(index)}
                  >
                    {item.title.toUpperCase()}
                  </motion.button>
                );
              })}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.article
              className="osdetail"
              key={module}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <p className="kicker">
                ACTIVE MODULE // 0{module + 1}
              </p>

              <h3>{operating[module].title}</h3>
              <p>{operating[module].text}</p>

              <div className="labels">
                {[
                  "CLARITY",
                  "ALIGNMENT",
                  "EXECUTION",
                  "SCALE",
                ].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </section>

      <section className="cta wrap section">
        <Sparkles />

        <p className="kicker">MISSION COMPLETE</p>

        <h2>Let's build what comes next.</h2>

        <p>
          If you're looking for someone who can bridge
          construction, BIM, technology, and leadership, let's
          start a conversation.
        </p>

        <div className="actions">
          <Button
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/emir-zymberi-05064310b/",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            <Linkedin size={16} /> CONNECT
          </Button>

          <Button
            variant="outline"
            onClick={() =>
              alert(
                "Add your resume PDF to /public and update this button"
              )
            }
          >
            <Download size={16} /> DOWNLOAD PROFILE
          </Button>
        </div>
      </section>

      <footer>
        <span>
          EMIR ZYMBERI // DIGITAL DELIVERY COMMAND CENTER
        </span>
        <span>
          PEOPLE • TECHNOLOGY • CONSTRUCTION • DELIVERY
        </span>
      </footer>

      <AnimatePresence>
        {mission && (
          <motion.div
            className="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMission(null)}
          >
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="close"
                onClick={() => setMission(null)}
              >
                <X />
              </button>

              <p className="kicker">
                MISSION {mission.number} // {mission.eyebrow}
              </p>

              <h2>{mission.title}</h2>
              <p>{mission.description}</p>

              <div className="detailrows">
                {mission.details.map((detail, index) => (
                  <div key={detail}>
                    <span>{detail}</span>
                    <b>0{index + 1}</b>
                  </div>
                ))}
              </div>

              <Button
                onClick={() => {
                  setMission(null);
                  setTimeout(() => go("twin"), 50);
                }}
              >
                CONTINUE JOURNEY <ArrowRight size={16} />
              </Button>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {project && (
          <motion.div
            className="overlay center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setProject(null)}
          >
            <motion.div
              className="modal"
              initial={{ scale: 0.92, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="close"
                onClick={() => setProject(null)}
              >
                <X />
              </button>

              <p className="kicker">
                {project.code} // {project.status}
              </p>

              <h2>{project.title}</h2>

              <div className="triptych">
                {[
                  ["CHALLENGE", project.challenge],
                  ["APPROACH", project.approach],
                  ["IMPACT", project.impact],
                ].map((item) => (
                  <article key={item[0]}>
                    <p className="kicker">{item[0]}</p>
                    <p>{item[1]}</p>
                  </article>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
