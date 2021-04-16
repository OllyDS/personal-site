<script>
    import Header from "./Header.svelte";
    import Languages from "./Languages.svelte";
</script>

<section class="container">
    <Header title="About me" id="sub" />
    <p class="about-me-text">
        Having worked in the finance industry as a trader and market maker for
        many years prior to becoming a software engineer, I found the fintech
        sector the perfect place to call home.
    </p>
    <p class="about-me-text">
        Below is a collection of some of the languages I've used in production
        environments as well some of the projects I've worked on.
    </p>
    <Languages />
</section>

<style>
    .about-me-text {
        color: whitesmoke;
        font-family: "Rubik";
        font-size: 20px;
        padding: 0 120px;
        text-align: center;
    }

    .container {
        display: flex;
        flex-direction: column;
        height: 100vh;
        justify-content: center;
        margin: auto;
        max-width: 1000px;
    }

    @media (max-width: 612px) {
        .about-me-text {
            font-size: 16px;
            padding: 0 10px;
        }

        .container {
            margin: 120px 20px;
        }
    }
</style>
