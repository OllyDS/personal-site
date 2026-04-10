<script lang="ts">
  import { reveal } from '../lib/reveal';

  type Domain = {
    icon: string;
    iconClass: 'oil' | 'deriv' | 'ml' | 'fx';
    title: string;
    desc: string;
  };

  const domains: Domain[] = [
    {
      icon: '\u25CE',
      iconClass: 'oil',
      title: 'Oil, Gas & Power',
      desc: 'Front-office analytics & trading tools',
    },
    {
      icon: '\u25CA',
      iconClass: 'deriv',
      title: 'Derivatives & Curves',
      desc: 'Forward curve governance & pricing',
    },
    {
      icon: '\u2699',
      iconClass: 'ml',
      title: 'Data & ML Platforms',
      desc: 'Model tuning, time-series analytics',
    },
    {
      icon: '\u2605',
      iconClass: 'fx',
      title: 'FX & Financial Markets',
      desc: 'Market-making & risk management',
    },
  ];
</script>

<section id="about" class="section-elevated">
  <div class="section-label" use:reveal>01 / About</div>
  <h2 class="section-title" use:reveal>Where trading meets<br />engineering.</h2>
  <div class="about-grid">
    <div class="about-text" use:reveal>
      <p>
        I started my career on the trading desk at <strong>ACM Group</strong>, specialising in FX
        market-making across developed and emerging markets with exposure to commodities, equities
        and derivatives. There, I discovered a passion for building tools — first in Excel, then in
        Python and SQL — and made the decision to pivot into software engineering full-time.
      </p>
      <p>
        Since then I've worked across startups, scale-ups and global firms including
        <strong>Octopus</strong>, <strong>Vortexa</strong> and <strong>Hartree Partners</strong>,
        building high-performance analytical platforms for front-office, middle-office and risk
        teams. I'm now back at <strong>Vortexa</strong>, continuing to build data-driven products
        for the energy and commodity markets.
      </p>
      <p>
        I thrive at the intersection of technology and domain expertise — whether it's designing
        derivative curve governance systems, building ML model-tuning interfaces, or architecting
        APIs that power real-time commodity analytics.
      </p>
    </div>
    <div class="about-aside" use:reveal>
      {#each domains as d}
        <div class="domain-tag">
          <div class="domain-icon {d.iconClass}">{d.icon}</div>
          <div class="domain-text">
            <h4>{d.title}</h4>
            <p>{d.desc}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: start;
  }

  .about-text {
    color: var(--text-secondary);
    font-size: 1.05rem;
    line-height: 1.8;
  }

  .about-text p + p {
    margin-top: 1.25rem;
  }

  .about-text strong {
    color: var(--text-primary);
    font-weight: 500;
  }

  .about-aside {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .domain-tag {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.25rem 1.5rem;
    border: 1px solid var(--border);
    border-radius: 2px;
    background: var(--bg);
    transition: border-color 0.3s, transform 0.3s;
  }

  .domain-tag:hover {
    border-color: var(--accent);
    transform: translateX(4px);
  }

  .domain-icon {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    font-size: 1.1rem;
    flex-shrink: 0;
  }

  .domain-icon.oil {
    background: rgba(245, 158, 66, 0.12);
    color: var(--accent-warm);
  }

  .domain-icon.deriv {
    background: rgba(56, 189, 248, 0.12);
    color: var(--accent);
  }

  .domain-icon.ml {
    background: rgba(52, 211, 153, 0.12);
    color: var(--accent-green);
  }

  .domain-icon.fx {
    background: rgba(248, 113, 113, 0.12);
    color: var(--accent-red);
  }

  .domain-text h4 {
    font-family: var(--sans);
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: 0.2rem;
  }

  .domain-text p {
    font-family: var(--mono);
    font-size: 0.7rem;
    color: var(--text-muted);
    letter-spacing: 0.03em;
  }

  @media (max-width: 900px) {
    .about-grid {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }
  }
</style>
