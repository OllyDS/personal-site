<script lang="ts">
  type Stat = { value: string; label: string };

  const stats: Stat[] = [
    { value: '12+', label: 'Years in Markets' },
    { value: '7+', label: 'Years Engineering' },
    { value: 'Oil · Gas · Power', label: 'Sector Focus' },
  ];
</script>

<section class="hero" id="top">
  <div class="hero-tag">Senior Software Engineer — Energy &amp; Commodity Tech</div>
  <h1 class="hero-name">Olly <em>de Sousa</em></h1>
  <p class="hero-sub">
    Building analytical platforms and trading tools for the energy and commodity markets. Former FX
    market maker turned full-stack engineer — I bring deep domain knowledge to every line of code.
  </p>
  <div class="hero-stats">
    {#each stats as stat}
      <div class="stat">
        <div class="stat-value">{stat.value}</div>
        <div class="stat-label">{stat.label}</div>
      </div>
    {/each}
  </div>
</section>

<style>
  .hero {
    min-height: calc(100vh - var(--topbar-h));
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: clamp(6rem, 12vh, 10rem) clamp(1.5rem, 8vw, 10rem);
    position: relative;
  }

  .hero::after {
    content: '';
    position: absolute;
    top: 15%;
    right: -10%;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(56, 189, 248, 0.06) 0%, transparent 70%);
    pointer-events: none;
  }

  .hero-tag {
    font-family: var(--mono);
    font-size: 0.75rem;
    color: var(--accent);
    letter-spacing: 0.15em;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
    opacity: 0;
    animation: fadeUp 0.8s ease forwards 0.2s;
  }

  .hero-name {
    font-family: var(--serif);
    font-size: clamp(3rem, 8vw, 7rem);
    line-height: 1.05;
    font-weight: 400;
    margin-bottom: 1.5rem;
    opacity: 0;
    animation: fadeUp 0.8s ease forwards 0.4s;
  }

  .hero-name em {
    font-style: italic;
    color: var(--accent);
  }

  .hero-sub {
    font-size: clamp(1rem, 2vw, 1.25rem);
    color: var(--text-secondary);
    max-width: 620px;
    line-height: 1.7;
    margin-bottom: 2.5rem;
    opacity: 0;
    animation: fadeUp 0.8s ease forwards 0.6s;
  }

  .hero-stats {
    display: flex;
    gap: clamp(2rem, 4vw, 4rem);
    flex-wrap: wrap;
    opacity: 0;
    animation: fadeUp 0.8s ease forwards 0.8s;
  }

  .stat {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .stat-value {
    font-family: var(--mono);
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--text-primary);
  }

  .stat-label {
    font-family: var(--mono);
    font-size: 0.65rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
  }

  @media (max-width: 600px) {
    .hero-stats {
      gap: 1.5rem;
    }
  }
</style>
