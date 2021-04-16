<script lang="ts">
    import Github from "./Github.svelte";
    import Header from "./Header.svelte";
    import Introduction from "./Introduction.svelte";
</script>

<div class="wrapper">
    <div class="container">
        <Header title="Hello." />
        <Introduction />
        <div class="icon-wrapper">
            <a href="https://github.com/OllyDS" target="_blank">
                <Github />
            </a>
            <a href="https://medium.com/@oliver.seq" target="_blank">
                <img alt="medium blog" class="icons" src="/images/medium.png" />
            </a>
            <a href="https://linkedin.com/in/oliver-de-sousa" target="_blank">
                <img alt="linkedin" class="icons" src="/images/linkedin.png" />
            </a>
        </div>
    </div>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        height: 100vh;
        justify-content: center;
    }

    .icons {
        margin: 12px;
        width: 60px;
    }

    .icons:hover {
        transform: scale(1.1);
        transition: 0.25s ease-in-out;
    }

    .icon-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0 auto;
    }

    .wrapper {
        padding: 0 40px;
    }
</style>
