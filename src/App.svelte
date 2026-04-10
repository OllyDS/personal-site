<script lang="ts">
  import Hero from './components/Hero.svelte';
  import About from './components/About.svelte';
  import Experience from './components/Experience.svelte';
  import Stack from './components/Stack.svelte';
  import Contact from './components/Contact.svelte';

  const currentYear = new Date().getFullYear();
</script>

<header class="topbar">
  <a class="topbar-logo" href="#top">
    <span>//</span> olly de sousa
  </a>
  <nav class="topbar-nav">
    <a href="#about">About</a>
    <a href="#experience">Experience</a>
    <a href="#projects">Projects</a>
    <a href="#stack">Stack</a>
    <a href="#contact">Contact</a>
  </nav>
</header>

<main>
  <Hero />
  <About />
  <Experience />
  <Stack />
  <Contact />
</main>

<footer>
  <span>&copy; {currentYear} Oliver de Sousa Sequeira</span>
  <span>London, United Kingdom</span>
</footer>

<style>
  .topbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 clamp(1.5rem, 4vw, 4rem);
    height: var(--topbar-h);
    background: rgba(10, 12, 16, 0.85);
    backdrop-filter: blur(16px);
    border-bottom: 1px solid var(--border);
    font-family: var(--mono);
    font-size: 0.75rem;
    letter-spacing: 0.06em;
    color: var(--text-muted);
  }

  .topbar-logo {
    color: var(--text-primary);
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    font-size: 0.7rem;
    transition: color 0.3s;
  }

  .topbar-logo span {
    color: var(--accent);
  }

  .topbar-logo:hover,
  .topbar-logo:focus-visible {
    color: var(--accent);
    outline: none;
  }

  .topbar-nav {
    display: flex;
    gap: 2rem;
  }

  .topbar-nav a {
    color: var(--text-muted);
    font-size: 0.75rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    transition: color 0.3s;
  }

  .topbar-nav a:hover,
  .topbar-nav a:focus-visible {
    color: var(--accent);
    outline: none;
  }

  main {
    padding-top: var(--topbar-h);
  }

  footer {
    padding: 2rem clamp(1.5rem, 8vw, 10rem);
    border-top: 1px solid var(--border);
    display: flex;
    justify-content: space-between;
    font-family: var(--mono);
    font-size: 0.65rem;
    color: var(--text-muted);
    letter-spacing: 0.06em;
  }

  @media (max-width: 900px) {
    .topbar-nav {
      display: none;
    }
  }

  @media (max-width: 600px) {
    footer {
      flex-direction: column;
      gap: 0.5rem;
    }
  }
</style>
