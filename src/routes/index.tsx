import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  BrainCircuit,
  Github,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const projects = [
  {
    number: "01",
    title: "AI Employment & Skills Intelligence Network",
    category: "Artificial intelligence",
    description:
      "An employment intelligence concept bringing skills-gap analysis and career insights together to make opportunities easier to navigate.",
    tags: ["AI", "Skills intelligence", "Career insights"],
    featured: true,
  },
  {
    number: "02",
    title: "MindTrack",
    category: "Wellness technology",
    description:
      "A mental wellness tracking application built with React, FastAPI, SQLite, and machine learning.",
    tags: ["React", "FastAPI", "Machine learning"],
  },
  {
    number: "03",
    title: "Movie Recommendation System",
    category: "Machine learning",
    description:
      "A recommendation project exploring how machine learning can make film discovery feel more personal.",
    tags: ["Python", "Recommendations", "ML"],
  },
  {
    number: "04",
    title: "Netflix Data Analytics Dashboard",
    category: "Data visualisation",
    description:
      "A Power BI dashboard turning a catalogue of viewing data into a clear, interactive visual story.",
    tags: ["Power BI", "Analytics", "Visualisation"],
  },
  {
    number: "05",
    title: "Financial Fraud Detection",
    category: "Applied analytics",
    description:
      "A machine-learning approach to identifying potentially fraudulent financial transactions.",
    tags: ["Scikit-learn", "Predictive analytics", "Finance"],
  },
  {
    number: "06",
    title: "QA & API Testing Portfolio",
    category: "Quality engineering",
    description:
      "Hands-on manual and API testing across functional, regression, and user-acceptance workflows.",
    tags: ["Postman", "Playwright", "Test design"],
  },
];

const experience = [
  {
    company: "Craft Silicon",
    role: "Implementation Engineer",
    detail:
      "Enterprise fintech implementation, system configuration, API integrations, SQL investigations, application support, production troubleshooting, UAT, and technical documentation.",
  },
  {
    company: "IST",
    role: "Technical Trainer",
    detail:
      "Technology training across Microsoft Power Platform, REST API integrations, JSON, SQL, Python, and Azure Functions.",
  },
  {
    company: "Modcom",
    role: "Technical Trainer",
    detail:
      "Training in full-stack development, JavaScript, React, PHP, Laravel, Python, databases, AI, machine learning, and data analytics.",
  },
];

const skillGroups = [
  {
    title: "Software development",
    detail: "JavaScript, Python, React, Node.js, Express, MERN, FastAPI, REST APIs, HTML, CSS",
  },
  {
    title: "Data & analytics",
    detail: "SQL, Power BI, Excel, data cleaning, visualisation, modelling, ETL, dashboard development",
  },
  {
    title: "AI & machine learning",
    detail: "Scikit-learn, predictive analytics, Random Forest, Gradient Boosting, generative AI, model evaluation",
  },
  {
    title: "Quality assurance",
    detail: "Manual and API testing, Postman, Playwright, functional and regression testing, UAT, test design",
  },
  {
    title: "Implementation & support",
    detail: "System implementation, application support, troubleshooting, root-cause analysis, API integration, incident management",
  },
  {
    title: "Cloud & automation",
    detail: "Docker, Kubernetes, Git, GitHub, GitLab, Linux, AWS, CI/CD, Power Platform, Azure Functions",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shanice Naliaka — Data, Software & Systems" },
      {
        name: "description",
        content:
          "Meet Shanice Naliaka: data analyst, software engineer, and implementation specialist building useful technology with data, AI, and thoughtful engineering.",
      },
      { property: "og:title", content: "Shanice Naliaka — Data, Software & Systems" },
      {
        property: "og:description",
        content:
          "Data analytics, software engineering, AI, and implementation work by Shanice Naliaka.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-8">
          <a
            href="#home"
            className="font-display shrink-0 text-lg font-semibold text-foreground sm:text-xl"
            aria-label="Shanice Naliaka, home"
          >
            Shanice Naliaka<span className="text-primary">.</span>
          </a>
          <nav aria-label="Main navigation" className="flex items-center gap-3 sm:gap-6">
            <a className="text-xs text-muted-foreground transition-colors hover:text-foreground sm:text-sm" href="#work">
              Work
            </a>
            <a className="text-xs text-muted-foreground transition-colors hover:text-foreground sm:text-sm" href="#about">
              About
            </a>
            <a className="text-xs text-muted-foreground transition-colors hover:text-foreground sm:text-sm" href="#contact">
              Contact
            </a>
            <a
              href="https://github.com/shanicenaliakanyongesa"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="ml-1 inline-flex size-9 items-center justify-center rounded-sm border border-border text-foreground transition-colors hover:bg-secondary"
            >
              <Github className="size-4" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="scroll-mt-20 border-b border-border/80">
          <div className="mx-auto grid max-w-7xl items-center gap-5 px-4 py-6 sm:gap-8 sm:px-8 sm:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-16">
            <div className="order-1 max-w-2xl">
              <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-portfolio-forest sm:text-sm">
                <span className="h-px w-8 bg-primary" aria-hidden="true" />
                Data · Software · Systems
              </p>
              <h1 className="font-display text-4xl font-medium leading-[1.04] text-foreground sm:text-6xl lg:text-7xl">
                Shanice
                <br />
                Naliaka<span className="text-primary">.</span>
              </h1>
              <p className="font-display mt-4 max-w-xl text-2xl leading-tight text-foreground sm:mt-5 sm:text-3xl">
                Turning complex problems into clear, useful technology.
              </p>
              <p className="mt-3 max-w-xl text-base leading-7 text-muted-foreground sm:mt-4 sm:text-lg sm:leading-8">
                Data Analyst · Software Engineer · AI & Machine Learning Enthusiast · QA & Implementation Specialist
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-2 sm:mt-7 sm:gap-3">
                <Button asChild size="lg" className="h-12 rounded-sm px-5 shadow-none">
                  <a href="#work">
                    View my work
                    <ArrowDownRight aria-hidden="true" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-12 rounded-sm px-5 shadow-none">
                  <a href="mailto:shanicenyongesa@gmail.com">
                    <Mail aria-hidden="true" />
                    Email me
                  </a>
                </Button>
              </div>
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground sm:mt-8">
                <a
                  className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                  href="https://www.linkedin.com/in/shanice-naliaka-8a3972276/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin className="size-4 text-portfolio-forest" aria-hidden="true" />
                  LinkedIn
                  <ArrowUpRight className="size-3" aria-hidden="true" />
                </a>
                <a
                  className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                  href="https://github.com/shanicenaliakanyongesa"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github className="size-4 text-portfolio-forest" aria-hidden="true" />
                  GitHub
                  <ArrowUpRight className="size-3" aria-hidden="true" />
                </a>
              </div>
            </div>
            <figure className="order-2 relative mx-auto w-full max-w-xl">
              <div className="overflow-hidden border border-border bg-card shadow-editorial-image">
                <img
                  src="/images/skills-intelligence-editorial.png"
                  alt="Editorial still life of data charts and a network of connected ideas"
                  className="aspect-[2/1] w-full object-cover sm:aspect-[8/5]"
                  fetchPriority="high"
                />
              </div>
              <figcaption className="mt-3 hidden items-center justify-between text-xs text-muted-foreground sm:flex">
                <span className="inline-flex items-center gap-2">
                  <BrainCircuit className="size-4 text-primary" aria-hidden="true" />
                  Curious by nature. Practical by design.
                </span>
                <span>01 / 06</span>
              </figcaption>
            </figure>
          </div>
          <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 pb-4 text-xs text-muted-foreground sm:px-8 sm:pb-5">
            <ArrowDown className="size-4 text-primary" aria-hidden="true" />
            <a href="#work" className="transition-colors hover:text-foreground">
              A selection of work and experience
            </a>
          </div>
        </section>

        <section id="work" className="scroll-mt-20 border-b border-border/80">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-20">
            <div className="mb-10 flex flex-col justify-between gap-4 sm:mb-12 sm:flex-row sm:items-end">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-portfolio-forest">
                  Selected work
                </p>
                <h2 className="font-display text-4xl font-medium sm:text-5xl">Ideas, made tangible.</h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-muted-foreground sm:text-base">
                A mix of analytics, machine learning, quality assurance, and tools designed around people.
              </p>
            </div>
            <div className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.number}
                  className="group flex min-h-64 flex-col border-t border-border py-6 transition-colors hover:border-primary sm:min-h-72"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <span className="font-display text-2xl text-primary">{project.number}</span>
                    <span className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-medium leading-tight text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{project.description}</p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-border px-2.5 py-1 text-xs text-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
            <p className="mt-8 border-t border-border pt-5 text-sm text-muted-foreground">
              Explore more on{" "}
              <a
                className="font-medium text-foreground underline decoration-primary underline-offset-4 hover:text-primary"
                href="https://github.com/shanicenaliakanyongesa"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <ArrowUpRight className="inline size-3.5" aria-hidden="true" />
              </a>
            </p>
          </div>
        </section>

        <section id="about" className="scroll-mt-20 border-b border-border/80">
          <div className="mx-auto grid max-w-7xl gap-14 px-4 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-portfolio-forest">
                About
              </p>
              <h2 className="font-display max-w-sm text-4xl font-medium leading-tight sm:text-5xl">
                At the meeting point of data and delivery.
              </h2>
              <p className="mt-5 max-w-md text-base leading-7 text-muted-foreground">
                I bring together analytics, engineering, and implementation to make technology work in the real world—from an early idea to a system people can rely on.
              </p>
              <div className="mt-8 border-l-2 border-primary pl-4">
                <p className="font-display text-xl leading-snug text-foreground">
                  “Build with purpose. Keep learning. Make it useful.”
                </p>
              </div>
              <div className="mt-10 border-t border-border pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                  Education
                </p>
                <h3 className="font-display mt-3 text-xl font-medium">
                  BSc Computer Science
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  St. Paul’s University · Second Class Honours, Upper Division
                </p>
              </div>
            </div>

            <div>
              <div className="mb-6 flex items-end justify-between gap-4">
                <h3 className="font-display text-3xl font-medium">Experience</h3>
                <span className="text-xs text-muted-foreground">Implementation · Training · Support</span>
              </div>
              <div className="border-t border-border">
                {experience.map((item, index) => (
                  <article
                    key={item.company}
                    className="grid gap-3 border-b border-border py-5 sm:grid-cols-[9rem_1fr] sm:gap-6 sm:py-6"
                  >
                    <div>
                      <p className="font-display text-xl font-medium">{item.company}</p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        0{index + 1} / Experience
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-portfolio-forest">{item.role}</h4>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.detail}</p>
                    </div>
                  </article>
                ))}
              </div>
              <p className="mt-5 text-sm leading-6 text-muted-foreground">
                Additional experience across data analytics, software development, and technology-focused internships.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="skills-heading" className="border-b border-border/80 bg-secondary/35">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-20">
            <div className="mb-9 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-portfolio-forest">
                The toolkit
              </p>
              <h2 id="skills-heading" className="font-display text-4xl font-medium sm:text-5xl">
                Range with a reason.
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                Broad technical range, grounded in a practical understanding of how systems are built, tested, and supported.
              </p>
            </div>
            <div className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map((group, index) => (
                <div key={group.title} className="border-t border-border py-5">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-xl font-medium">{group.title}</h3>
                    <span className="text-xs text-primary">0{index + 1}</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{group.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 bg-foreground text-background">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-portfolio-lime">
                Start a conversation
              </p>
              <h2 className="font-display max-w-2xl text-4xl font-medium leading-tight sm:text-6xl">
                Let’s make something meaningful.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-background/70">
                For roles, collaborations, or a thoughtful conversation about technology, you can reach me here.
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:items-start">
              <a
                className="inline-flex items-center gap-3 text-lg transition-colors hover:text-portfolio-lime sm:text-xl"
                href="mailto:shanicenyongesa@gmail.com"
              >
                <Mail className="size-5 text-portfolio-lime" aria-hidden="true" />
                shanicenyongesa@gmail.com
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
              <a
                className="inline-flex items-center gap-3 text-base text-background/75 transition-colors hover:text-background sm:text-lg"
                href="tel:+254728961062"
              >
                <Phone className="size-4 text-portfolio-lime" aria-hidden="true" />
                +254 728 961 062
              </a>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button asChild variant="outline" className="rounded-sm border-background/30 bg-transparent text-background shadow-none hover:bg-background/10 hover:text-background">
                  <a
                    href="https://github.com/shanicenaliakanyongesa"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github aria-hidden="true" /> GitHub
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-sm border-background/30 bg-transparent text-background shadow-none hover:bg-background/10 hover:text-background">
                  <a
                    href="https://www.linkedin.com/in/shanice-naliaka-8a3972276/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Linkedin aria-hidden="true" /> LinkedIn
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-foreground text-background">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 border-t border-background/15 px-4 py-5 text-xs text-background/60 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>Shanice Naliaka</span>
          <span>Data · Software · Systems</span>
        </div>
      </footer>
    </div>
  );
}
