import Image from "next/image";
import React from "react";

/* ─── Icons (cohesive outline set, 18×18, 1.5px stroke) ─── */
const icons = {
  email: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  scholar: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5" />
    </svg>
  ),
  github: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  ),
  cv: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  ),
  bluesky: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3c-2.39 2.08-5.2 5.4-6 8.5-.9 3.52.75 5 3.5 4.5-2.46.97-4.69 1.5-3 4.5 1.5 2.5 4.5 1 6.5-2.5" />
      <path d="M12 3c2.39 2.08 5.2 5.4 6 8.5.9 3.52-.75 5-3.5 4.5 2.46.97 4.69 1.5 3 4.5-1.5 2.5-4.5 1-6.5-2.5" />
    </svg>
  ),
};

/* ─── Highlight "Sahoo, A." in ACS-formatted author strings ─── */
function HighlightAuthor({ text }: { text: string }) {
  const patterns = ["Sahoo, A."];
  let result: React.ReactNode[] = [text];

  for (const pattern of patterns) {
    const next: React.ReactNode[] = [];
    for (const segment of result) {
      if (typeof segment !== "string") {
        next.push(segment);
        continue;
      }
      const parts = segment.split(pattern);
      parts.forEach((part, i) => {
        next.push(part);
        if (i < parts.length - 1) {
          next.push(
            <strong key={`${pattern}-${i}`} className="font-semibold text-[#000]">
              {pattern}
            </strong>
          );
        }
      });
    }
    result = next;
  }

  return <>{result}</>;
}

/* ─── Publication data (ACS format) ─── */
interface Publication {
  id: number;
  authors: string;
  title: string;
  journal: string;
  year: string;
  volume?: string;
  pages?: string;
  note?: string;
  url?: string;
}

const publications: Publication[] = [
  {
    id: 1,
    authors: "Sahoo, A.; Xu, H.; Matysiak, S.",
    title:
      "Pathways of Amyloid-β Absorption and Aggregation in a Membranous Environment",
    journal: "Phys. Chem. Chem. Phys.",
    year: "2019",
    volume: "21",
    pages: "8559–8568",
    url: "/papers/sahoo-2019-amyloid-membrane.pdf",
  },
  {
    id: 2,
    authors: "Sahoo, A.; Matysiak, S.",
    title:
      "Computational Insights into Lipid-Assisted Peptide Misfolding and Aggregation in Neurodegeneration",
    journal: "Phys. Chem. Chem. Phys.",
    year: "2019",
    volume: "21",
    pages: "22679–22694",
    url: "/papers/sahoo-2019-lipid-misfolding.pdf",
  },
  {
    id: 3,
    authors: "Sahoo, A.; Matysiak, S.",
    title:
      "A Microscopic Picture of Calcium-Assisted Lipid Demixing and Membrane Remodeling Using Multi-Scale Simulations",
    journal: "J. Phys. Chem. B",
    year: "2020",
    volume: "124",
    pages: "7327–7335",
  },
  {
    id: 4,
    authors: "Sahoo, A.; Matysiak, S.",
    title:
      "Effects of Applied Surface-Tension on Membrane-Assisted Amyloid-β Aggregation",
    journal: "Phys. Chem. Chem. Phys.",
    year: "2021",
    volume: "23",
    pages: "20627–20633",
    url: "/papers/sahoo-2021-surface-tension.pdf",
  },
  {
    id: 5,
    authors: "Sahoo, A.*; Lee, P.*; Matysiak, S.",
    title:
      "A Transferable, Explicit-Solvent Polarizable Coarse-Grained Model for Proteins",
    journal: "J. Chem. Theory Comput.",
    year: "2022",
    volume: "18",
    pages: "5046–5055",
    note: "*equal contribution",
    url: "/papers/sahoo-2022-cg-model.pdf",
  },
  {
    id: 6,
    authors: "Lee, P.*; Sahoo, A.*; Matysiak, S.",
    title:
      "Folding and Modulation of the Helical Conformation of Glycophorin A by Point Mutations",
    journal: "Phys. Chem. Chem. Phys.",
    year: "2023",
    volume: "25",
    pages: "10885–10893",
    note: "*equal contribution",
    url: "/papers/lee-2023-glycophorin.pdf",
  },
  {
    id: 7,
    authors: "Jain, M.*; Sahoo, A.*; Matysiak, S.",
    title: "Modulation of Amyloid-β Aggregation by Glucose",
    journal: "Phys. Chem. Chem. Phys.",
    year: "2024",
    volume: "26",
    pages: "5038–5044",
    note: "*equal contribution",
    url: "/papers/jain-2024-glucose.pdf",
  },
  {
    id: 8,
    authors: "Nanajkar, N.*; Sahoo, A.*; Matysiak, S.",
    title:
      "Unraveling the Molecular Complexity of N-Terminus Huntingtin Oligomers: Insights into Polymorphic Structures",
    journal: "J. Phys. Chem. B",
    year: "2024",
    volume: "128",
    pages: "7761–7769",
    note: "*equal contribution",
    url: "/papers/nanajkar-2024-huntingtin.pdf",
  },
  {
    id: 9,
    authors: "Sahoo, A.; Hanson, S. M.",
    title:
      "Martini without the Twist: Unveiling a Mechanically Correct Microtubule through Bottom-Up Coarse-Graining in Martini 3",
    journal: "PNAS Nexus",
    year: "2025",
    volume: "4",
    pages: "pgaf202",
    url: "/papers/sahoo-2025-microtubule.pdf",
  },
  {
    id: 10,
    authors:
      "Liu, Y.; Yu, Z.; Lindsay, R. J.; Lin, G.; Chen, M.; Sahoo, A.†; Hanson, S. M.†",
    title:
      "ExEnDiff: An Experiment-Guided Diffusion Model for Protein Conformational Ensemble Generation",
    journal: "PRX Life",
    year: "2025",
    note: "†corresponding author",
    url: "/papers/liu-2025-exendiff.pdf",
  },
  {
    id: 11,
    authors:
      "Formuichuk, E.; Sahoo, A.; Edwards, C.; Shah, S.; Oakes, R.; Matysiak, S.; Jewell, C.",
    title:
      "Integrating Molecular Dynamics Simulations to Enable Rational Assembly of Immune Signals for Immunotherapy",
    journal: "Submitted",
    year: "2025",
  },
  {
    id: 12,
    authors: "Nanajkar, N.*; Sahoo, A.*; Frey, S. L.; Matysiak, S.",
    title:
      "Investigating Curvature Sensing by the Nt17 Domain of Huntingtin Protein",
    journal: "ACS Chem. Neurosci.",
    year: "2025",
    volume: "16",
    pages: "3282–3291",
    note: "*equal contribution",
    url: "/papers/nanajkar-2025-huntingtin-curvature.pdf",
  },
  {
    id: 13,
    authors:
      "Dewan, S.; Shaikh, I.; Shaw, C.; Sahoo, A.; Jha, A.; Pradhan, A.",
    title: "Examining Age-Bias and Stereotypes of Aging in LLMs",
    journal: "Proc. 27th ACM SIGACCESS Conf. Comput. Accessibility",
    year: "2025",
    url: "/papers/dewan-2025-age-bias.pdf",
  },
  {
    id: 14,
    authors:
      "Mofidi, S. M.; Sahoo, A.; Edelmaier, C. J.; Klawa, S. J.; Freeman, R.; Gladfelter, A.; Forest, M. G.; Nazockdast, E.; Hanson, S. M.",
    title:
      "Study of Protein-Protein Interactions in Septin Assembly: Multiple Amphipathic Helix Domains Cooperate in Binding to the Lipid Membrane",
    journal: "bioRxiv",
    year: "2025",
    note: "preprint",
    url: "/papers/mofidi-2025-septin.pdf",
  },
];

/* ─── Research themes ─── */
const researchThemes = [
  {
    title: "Multiscale Molecular Simulations",
    description:
      "I develop and apply coarse-grained and polarizable modeling approaches for accurate, scalable simulations of proteins, membranes, and cytoskeletal assemblies at biologically relevant length and time scales. A central theme of my work is transferring information from atomistic fluctuations to mesoscale function\u2014using physics-based priors to retain mechanistic interpretability while enabling efficient simulations of large, heterogeneous systems.",
    image: "/images/research-cg.png",
    alt: "Protein aggregation in presence of co-solutes",
    caption: "Protein aggregation in presence of co-solutes",
    papers: [
      "Sahoo & Hanson, PNAS Nexus 2025",
      "Sahoo, Lee & Matysiak, J. Chem. Theory Comput. 2022",
    ],
  },
  {
    title: "Neurodegeneration and Membrane Biophysics",
    description:
      "My research has examined molecular mechanisms underlying protein misfolding and aggregation in neurodegenerative disease, including amyloid-\u03B2 interactions with lipid membranes and oligomer formation pathways. I focus on how physiological cues\u2014such as membrane curvature, ionic conditions (e.g., calcium), and surface tension\u2014reshape protein\u2013membrane interactions and alter conformational landscapes that govern aggregation propensity.",
    image: "/images/research-membrane.png",
    alt: "Coarse-grained simulation of a lipid bilayer capturing molecular organization and collective fluctuations",
    caption:
      "Coarse-grained simulation of a lipid bilayer capturing molecular organization and collective fluctuations.",
    papers: [
      "Nanajkar, Sahoo & Matysiak, ACS Chem. Neurosci. 2025",
      "Sahoo, Xu & Matysiak, Phys. Chem. Chem. Phys. 2019",
      "Sahoo & Matysiak, J. Phys. Chem. B 2020",
    ],
  },
  {
    title: "Machine Learning for Biophysics",
    description:
      "I build machine-learning methods that integrate experimental observables and physics-based priors to infer biomolecular conformational ensembles and dynamics. In particular, I develop experiment-guided generative models (e.g., ExEnDiff) that combine diffusion architectures with measurable constraints to capture heterogeneity across functional states. These approaches are designed to bridge scales: leveraging atomistic fluctuations and experimental data to predict mesoscale behaviors while preserving physical consistency.",
    image: "/images/research-ml.png",
    alt: "Schematic of an experiment-guided diffusion model for conformational ensemble generation",
    caption:
      "Schematic of an experiment-guided diffusion model for conformational ensemble generation.",
    papers: ["Liu, Yu et al., PRX Life 2025"],
  },
];

/* ─── Link helper with icon ─── */
function IconLink({
  href,
  icon,
  label,
  external = true,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="inline-flex items-center gap-1.5 text-[#555] hover:text-[#006ba1] transition-colors duration-150"
      aria-label={label}
    >
      {icon}
      <span className="text-[13px]">{label}</span>
    </a>
  );
}

/* ─── Page ─── */
export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#eee]">
        <div className="max-w-[700px] mx-auto px-6 h-[60px] flex items-center justify-between">
          <a
            href="#"
            className="font-heading text-sm font-semibold text-black tracking-wide"
          >
            Abhilash Sahoo
          </a>
          <div className="flex items-center gap-5 font-heading text-[11px] font-medium tracking-[0.14em] uppercase text-[#888]">
            <a
              href="#about"
              className="hover:text-black transition-colors duration-150"
            >
              About
            </a>
            <a
              href="#research"
              className="hidden sm:inline hover:text-black transition-colors duration-150"
            >
              Research
            </a>
            <a
              href="#publications"
              className="hidden sm:inline hover:text-black transition-colors duration-150"
            >
              Publications
            </a>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors duration-150"
            >
              CV ↗
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-[700px] mx-auto px-6">
        {/* Hero */}
        <section className="pt-20 pb-6">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-black mb-3 leading-[1.1] tracking-tight">
            Abhilash Sahoo
          </h1>
          <p className="text-[#888] text-sm font-heading mb-5">
            Associate Research Scientist ·{" "}
            Center for Computational Biology ·{" "}
            <a
              href="https://www.simonsfoundation.org/flatiron/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors duration-150"
            >
              Flatiron Institute
            </a>
          </p>

          <div className="flex flex-wrap gap-x-5 gap-y-3">
            <IconLink
              href="mailto:asahoo@flatironinstitute.org"
              icon={icons.email}
              label="Email"
              external={false}
            />
            <IconLink
              href="https://scholar.google.com/citations?hl=en&authuser=3&user=NcWhtUcAAAAJ"
              icon={icons.scholar}
              label="Google Scholar"
            />
            <IconLink
              href="https://github.com/asahoo4"
              icon={icons.github}
              label="GitHub"
            />
            <IconLink
              href="/cv.pdf"
              icon={icons.cv}
              label="CV"
            />
            <IconLink
              href="https://bsky.app/profile/asahoo.bsky.social"
              icon={icons.bluesky}
              label="Bluesky"
            />
          </div>
        </section>

        <hr className="border-[#eee]" />

        {/* About */}
        <section id="about" className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-[176px_1fr] gap-10 md:gap-12">
            <div className="flex justify-center md:justify-start">
              <div className="relative w-44 h-52 overflow-hidden">
                <Image
                  src="/images/abhilash.jpg"
                  alt="Abhilash Sahoo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="space-y-4 text-[15px] text-[#333] leading-[1.75]">
              <p>
                I am an Associate Research Scientist at the{" "}
                <a
                  href="https://www.simonsfoundation.org/flatiron/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#006ba1] underline underline-offset-2 hover:no-underline"
                >
                  Flatiron Institute
                </a>{" "}
                (
                <a
                  href="https://www.simonsfoundation.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#006ba1] underline underline-offset-2 hover:no-underline"
                >
                  Simons Foundation
                </a>
                ) in New York, with affiliations in the{" "}
                <a
                  href="https://www.simonsfoundation.org/flatiron/center-for-computational-biology/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#006ba1] underline underline-offset-2 hover:no-underline"
                >
                  Center for Computational Biology
                </a>{" "}
                and the{" "}
                <a
                  href="https://www.simonsfoundation.org/flatiron/center-for-computational-mathematics/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#006ba1] underline underline-offset-2 hover:no-underline"
                >
                  Center for Computational Mathematics
                </a>
                . My research sits at the interface of computational biophysics,
                statistical mechanics, and machine learning, with a focus on
                developing minimalist, interpretable physics- and data-driven
                approaches for understanding how complex biological function
                emerges from molecular interactions.
              </p>
              <p>
                My current work centers on multiscale modeling of microtubules
                and intracellular transport machinery. I use coarse-grained
                molecular simulations to connect molecular-scale mechanics and
                interactions to mesoscale organization, and I develop
                machine-learning and generative modeling approaches to
                characterize protein conformational heterogeneity and construct
                physically grounded conformational ensembles. I joined the
                Flatiron Institute as a Research Fellow in 2022, working with{" "}
                <a
                  href="https://www.simonsfoundation.org/people/sonya-hanson/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#006ba1] underline underline-offset-2 hover:no-underline"
                >
                  Dr. Sonya Hanson
                </a>
                , and now I continue this research as an Associate Research
                Scientist.
              </p>
              <p>
                Prior to Flatiron, I earned my PhD in Biophysics from the{" "}
                <a
                  href="https://umd.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#006ba1] underline underline-offset-2 hover:no-underline"
                >
                  University of Maryland, College Park
                </a>
                , advised by{" "}
                <a
                  href="https://bioe.umd.edu/clark/faculty/silvina-matysiak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#006ba1] underline underline-offset-2 hover:no-underline"
                >
                  Dr. Silvina Matysiak
                </a>
                . My doctoral research examined molecular mechanisms relevant to
                neurodegeneration, including how amyloid-β peptides interact with
                lipid membranes and how physiological conditions modulate protein
                misfolding and aggregation. I was supported by the{" "}
                <a
                  href="https://www.combine.umd.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#006ba1] underline underline-offset-2 hover:no-underline"
                >
                  NSF COMBINE Fellowship
                </a>{" "}
                and the Ann G. Wylie Fellowship. I completed my BS and MS in
                Physics at the{" "}
                <a
                  href="https://www.iiserkol.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#006ba1] underline underline-offset-2 hover:no-underline"
                >
                  Indian Institute of Science Education and Research (IISER)
                  Kolkata
                </a>
                .
              </p>
              <p>
                Outside research, I enjoy running, hiking and exploring New
                York City&apos;s incredible food scene.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-[#eee]" />

        {/* Updates */}
        <section id="updates" className="py-16">
          <h2 className="font-heading text-2xl font-semibold text-black mb-8">
            Updates
          </h2>
          <div className="space-y-4">
            {[
              {
                date: "Nov \u201925",
                text: "Our collaborative study about age bias in LLMs with researchers from NJIT and Virginia Tech was published in",
                venue: "ACM ASSETS",
                url: "/papers/dewan-2025-age-bias.pdf",
              },
              {
                date: "Sep \u201925",
                text: "Our study on curvature sensing by the Nt17 domain of Huntingtin protein was published in",
                venue: "ACS Chemical Neuroscience",
                url: "#publications",
              },
              {
                date: "Jun \u201925",
                text: "Our paper on ExEnDiff, an experiment-guided diffusion model for protein conformational ensembles, was published in",
                venue: "PRX Life",
                url: "/papers/liu-2025-exendiff.pdf",
              },
            ].map((update) => (
              <div key={update.date} className="flex flex-col sm:flex-row gap-1 sm:gap-4 sm:items-baseline">
                <span className="text-[12px] font-heading font-medium text-[#767676] flex-shrink-0 sm:w-16">
                  {update.date}
                </span>
                <p className="text-[14px] text-[#555] leading-relaxed">
                  {update.text}{" "}
                  <a
                    href={update.url}
                    className="text-[#006ba1] underline underline-offset-2 hover:no-underline"
                    target={update.url.startsWith("/") ? "_blank" : undefined}
                    rel={update.url.startsWith("/") ? "noopener noreferrer" : undefined}
                  >
                    {update.venue}
                  </a>
                  .
                </p>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-[#eee]" />

        {/* Research */}
        <section id="research" className="py-16">
          <h2 className="font-heading text-2xl font-semibold text-black mb-8">
            Research
          </h2>

          {/* Overarching figure */}
          <div className="relative w-full mb-14 overflow-hidden">
            <Image
              src="/images/research-multiscale.png"
              alt="Bridging spatiotemporal scales: from nucleotide-dependent tubulin dynamics to cellular-scale functions"
              width={1600}
              height={500}
              className="w-full h-auto"
            />
          </div>

          <div className="space-y-16">
            {researchThemes.map((theme) => (
              <div key={theme.title}>
                <div className="grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-6 items-start">
                  {/* Image: white bg, clean border, subtle lift on hover */}
                  <div className="group/img">
                    <div className="relative w-full aspect-square overflow-hidden bg-white border border-[#e0e0e0] rounded shadow-[0_1px_3px_rgba(0,0,0,0.04)] group-hover/img:shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-shadow duration-200">
                      <Image
                        src={theme.image}
                        alt={theme.alt}
                        fill
                        className="object-contain p-3"
                      />
                    </div>
                    <p className="text-[11px] text-[#777] mt-2 leading-snug italic">
                      {theme.caption}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-heading text-[15px] font-semibold text-black mb-2.5">
                      {theme.title}
                    </h3>
                    <p className="text-[13px] text-[#555] leading-[1.7] mb-3">
                      {theme.description}
                    </p>
                    <div className="text-[11px] text-[#737373] leading-relaxed">
                      <span className="uppercase tracking-wider font-medium text-[#767676]">
                        Key papers
                      </span>
                      <span className="mx-2 text-[#ddd]">&mdash;</span>
                      {theme.papers.map((paper, i) => (
                        <span key={paper}>
                          {paper}
                          {i < theme.papers.length - 1 && (
                            <span className="mx-1.5 text-[#ddd]">&middot;</span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-[#eee]" />

        {/* Publications */}
        <section id="publications" className="py-16">
          <h2 className="font-heading text-2xl font-semibold text-black mb-2">
            Publications
          </h2>
          <p className="text-[11px] text-[#767676] mb-10">
            * equal contribution &nbsp;&middot;&nbsp; &dagger;
            corresponding/senior author
          </p>

          <div className="space-y-5">
            {[...publications].reverse().map((pub) => (
              <div key={pub.id} className="group">
                <div className="border-l-2 border-[#f0f0f0] group-hover:border-[#006ba1] pl-4 transition-colors duration-150">
                  <p className="text-[13px] text-[#333] leading-relaxed">
                    <span className="text-[#666]">
                      <HighlightAuthor text={pub.authors} />
                    </span>{" "}
                    {pub.title}.{" "}
                    <em className="text-[#555]">{pub.journal}</em>{" "}
                    <strong className="font-semibold">{pub.year}</strong>
                    {pub.volume && (
                      <>
                        , <em>{pub.volume}</em>
                      </>
                    )}
                    {pub.pages && <>, {pub.pages}</>}.
                    {pub.note && (
                      <span className="text-[11px] text-[#777]">
                        {" "}
                        ({pub.note})
                      </span>
                    )}
                    {pub.url && (
                      <>
                        {" "}
                        <a
                          href={pub.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#006ba1] text-[11px] hover:underline underline-offset-2"
                        >
                          [PDF]
                        </a>
                      </>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Dog — a fun coda */}
      <div className="border-t border-[#eee] mt-4">
        <div className="max-w-[700px] mx-auto px-6 py-16 flex flex-col items-center">
          <div className="relative w-72 h-52 overflow-hidden rounded-sm">
            <Image
              src="/images/dog.jpg"
              alt="My dog, the real boss"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-3 text-[12px] text-[#767676] text-center italic">
            Peer reviews are ruff.
          </p>
        </div>
      </div>

      <footer className="border-t border-[#eee] py-8">
        <div className="max-w-[700px] mx-auto px-6 flex items-center justify-between">
          <span className="text-[11px] text-[#767676]">
            Abhilash Sahoo &middot; Flatiron Institute &middot; New York
          </span>
          <span className="text-[11px] text-[#ddd]">
            {new Date().getFullYear()}
          </span>
        </div>
      </footer>
    </>
  );
}
