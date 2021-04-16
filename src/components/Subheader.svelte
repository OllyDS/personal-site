<script lang="ts">
    export let title: string;
    export let textColor: string;
</script>

<section class="container">
    <h1 class="title-{textColor}">{title}</h1>
</section>

<style>
    .container {
        display: flex;
        justify-content: center;
        text-align: center;
    }

    .title-octopus {
        background: linear-gradient(90deg, #6d087c, #ff0074);
        background-clip: text;
        font-family: "Rubik";
        font-size: 64px;
        font-weight: 700;
        margin: 0 0 20px;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
    }

    .title-vortexa {
        color: skyblue;
        font-family: "Rubik";
        font-size: 64px;
        font-weight: 700;
        margin: 0 0 20px;
    }
</style>
