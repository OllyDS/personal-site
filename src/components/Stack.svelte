<script lang="ts">
  import { reveal } from '../lib/reveal';

  type StackCategory = {
    title: string;
    items: string[];
  };

  const stack: StackCategory[] = [
    { title: 'Languages', items: ['Rust', 'Python', 'TypeScript', 'JavaScript', 'SQL', 'HTML/CSS'] },
    {
      title: 'Backend & APIs',
      items: ['Axum', 'FastAPI', 'Node.js', 'Express', 'Fastify', 'GraphQL', 'Flask / Quart'],
    },
    { title: 'Frontend', items: ['React', 'Redux', 'Next.js', 'Svelte'] },
    {
      title: 'Data & Storage',
      items: ['PostgreSQL', 'ElasticSearch', 'MongoDB', 'S3', 'Pandas'],
    },
    {
      title: 'Infrastructure',
      items: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'CircleCI'],
    },
  ];
</script>

<section id="stack">
  <div class="section-label" use:reveal>03 / Stack</div>
  <h2 class="section-title" use:reveal>Technologies I work with.</h2>
  <div class="stack-grid" use:reveal>
    {#each stack as s}
      <div class="card stack-card">
        <h4>{s.title}</h4>
        <div class="stack-items">
          {#each s.items as item}
            <span>{item}</span>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  .stack-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
  }

  .stack-card {
    padding: 2rem;
  }

  .stack-card h4 {
    font-family: var(--mono);
    font-size: 0.65rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 1rem;
  }

  .stack-items {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .stack-items span {
    font-size: 0.85rem;
    color: var(--text-secondary);
    padding: 0.35rem 0.75rem;
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 2px;
    transition: color 0.2s, border-color 0.2s;
  }

  .stack-items span:hover {
    color: var(--text-primary);
    border-color: var(--border-accent);
  }
</style>
