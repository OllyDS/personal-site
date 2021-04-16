<script lang="ts">
    import About from "./components/About.svelte";
    import Home from "./components/Home.svelte";
    import Projects from "./components/Projects.svelte";

    export let menu: number = 1;
</script>

<main class="container">
    <ul class="navbar">
        <li>
            <a href="/" on:click|preventDefault={() => (menu = 1)}>Home</a>
        </li>
        <li>
            <a href="/" on:click|preventDefault={() => (menu = 2)}>About</a>
        </li>
        <li>
            <a href="/" on:click|preventDefault={() => (menu = 3)}>Projects</a>
        </li>
    </ul>
    {#if menu === 1}
        <Home />
    {:else if menu === 2}
        <About />
    {:else if menu === 3}
        <Projects />
    {:else}
        <h1>Page Not Found</h1>
    {/if}
</main>

<style>
    .container {
        background: linear-gradient(#262626, #ffffff);
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100vw;
    }

    .navbar {
        display: flex;
        flex-direction: row;
        font-family: "Rubik";
        font-size: 18px;
        justify-content: center;
        margin: 20px 80px;
        padding: 0;
    }

    .navbar li {
        list-style: none;
        padding: 10px 40px;
    }

    .navbar a {
        color: white;
        text-decoration: none;
    }

    a:hover {
        color: darkorange;
    }

    @media (max-width: 1024px) {
        .navbar {
            margin: 10px 20px;
        }

        .navbar li {
            list-style: none;
            padding: 0 10px;
        }
    }
</style>
