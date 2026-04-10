<script lang="ts">
  import { reveal } from '../lib/reveal';

  type Contact = {
    href: string;
    label: string;
    external: boolean;
    path: string;
  } & (
    | { extra?: undefined }
    | { extra: 'polyline'; points: string }
    | { extra: 'linkedin' }
  );

  const contacts: Contact[] = [
    {
      href: 'mailto:oliver.seq@gmail.com',
      label: 'Email',
      external: false,
      path: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z',
      extra: 'polyline',
      points: '22,6 12,13 2,6',
    },
    {
      href: 'https://github.com/OllyDS',
      label: 'GitHub',
      external: true,
      path: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22',
    },
    {
      href: 'https://gitlab.com/OllyDS',
      label: 'GitLab',
      external: true,
      path: 'M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z',
    },
    {
      href: 'https://www.linkedin.com/in/oliver-de-sousa',
      label: 'LinkedIn',
      external: true,
      path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z',
      extra: 'linkedin',
    },
  ];
</script>

<section id="contact">
  <div class="section-label" use:reveal>04 / Connect</div>
  <h2 class="section-title" use:reveal>Get in touch.</h2>
  <div class="contact-row" use:reveal>
    {#each contacts as c}
      <a
        class="btn btn-ghost"
        href={c.href}
        target={c.external ? '_blank' : undefined}
        rel={c.external ? 'noopener noreferrer' : undefined}
      >
        <svg viewBox="0 0 24 24">
          <path d={c.path} />
          {#if c.extra === 'polyline'}
            <polyline points={c.points} />
          {:else if c.extra === 'linkedin'}
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          {/if}
        </svg>
        {c.label}
      </a>
    {/each}
  </div>
</section>

<style>
  .contact-row {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    margin-top: 1rem;
  }
</style>
