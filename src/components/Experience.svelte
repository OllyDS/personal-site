<script lang="ts">
  import { reveal } from '../lib/reveal';

  type Experience = {
    company: string;
    role: string;
    sector: string;
    current?: boolean;
  };

  const experiences: Experience[] = [
    {
      company: 'Vortexa',
      role: 'Senior Full-Stack Software Engineer',
      sector: 'Energy & Commodity Data',
      current: true,
    },
    {
      company: 'Hartree Partners',
      role: 'Application Developer',
      sector: 'Commodity Trading',
    },
    {
      company: 'Octopus',
      role: 'Full-Stack Software Engineer',
      sector: 'Fintech & Wealth',
    },
    {
      company: 'ACM Group',
      role: 'Execution Trader & Market Maker',
      sector: 'FX & Derivatives',
    },
  ];
</script>

<section id="experience">
  <div class="section-label" use:reveal>02 / Experience</div>
  <h2 class="section-title short" use:reveal>Where I've worked.</h2>
  <p class="experience-intro" use:reveal>
    From trading floors to engineering teams — I've built software across commodity trading houses,
    energy data platforms and fintech startups.
  </p>

  <div class="exp-grid" use:reveal>
    {#each experiences as exp}
      <div class="card exp-card" class:current={exp.current}>
        {#if exp.current}
          <div class="exp-status"><span class="live-dot"></span> Current</div>
        {/if}
        <h3 class="exp-company">{exp.company}</h3>
        <div class="exp-role">{exp.role}</div>
        <div class="exp-sector">{exp.sector}</div>
      </div>
    {/each}
  </div>

  <div class="exp-cta" use:reveal>
    <p>Want the full picture?</p>
    <div class="exp-cta-links">
      <a
        class="btn btn-primary"
        href="https://www.linkedin.com/in/oliver-de-sousa"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg viewBox="0 0 24 24">
          <path
            d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
          />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
        Connect on LinkedIn
      </a>
      <a class="btn btn-ghost" href="mailto:oliver.seq@gmail.com">
        <svg viewBox="0 0 24 24">
          <path
            d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
          />
          <polyline points="22,6 12,13 2,6" />
        </svg>
        Request my CV
      </a>
    </div>
  </div>
</section>

<style>
  .experience-intro {
    color: var(--text-secondary);
    font-size: 1.05rem;
    line-height: 1.7;
    max-width: 600px;
    margin-bottom: 2.5rem;
  }

  .exp-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 1rem;
    margin-bottom: 3rem;
  }

  .exp-card {
    padding: 1.75rem 2rem;
    position: relative;
  }

  .exp-card:hover {
    border-color: var(--border-accent);
    transform: translateY(-2px);
  }

  .exp-card.current {
    border-color: var(--accent);
  }

  .exp-status {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: var(--mono);
    font-size: 0.65rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--accent-green);
    margin-bottom: 0.75rem;
  }

  .live-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--accent-green);
    box-shadow: 0 0 10px var(--accent-green);
    animation: pulse 2s ease infinite;
  }

  .exp-company {
    font-family: var(--serif);
    font-size: 1.4rem;
    font-weight: 400;
    margin-bottom: 0.4rem;
  }

  .exp-role {
    font-size: 0.85rem;
    color: var(--text-secondary);
    margin-bottom: 0.3rem;
  }

  .exp-sector {
    font-family: var(--mono);
    font-size: 0.7rem;
    color: var(--text-muted);
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .exp-cta {
    padding: 2.5rem;
    border: 1px dashed var(--border-accent);
    border-radius: 2px;
    text-align: center;
  }

  .exp-cta p {
    font-family: var(--serif);
    font-size: 1.3rem;
    font-style: italic;
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
  }

  .exp-cta-links {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
  }

  @media (max-width: 900px) {
    .exp-grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 600px) {
    .exp-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
