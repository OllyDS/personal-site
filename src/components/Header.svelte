<script lang="ts">
    export let title: string;
    export let id: string;
</script>

<section class="container">
    <h1 class="title" {id}>{title}</h1>
</section>

<style>
    .container {
        display: flex;
        justify-content: center;
    }

    .title {
        color: darkorange;
        font-family: "Rubik";
        font-size: 96px;
        font-weight: 700;
        margin: 0;
        text-align: center;
        text-shadow: 2px 2px whitesmoke;
    }

    #sub {
        font-size: 68px;
    }

    @media (max-width: 612px) {
        #sub {
            font-size: 48px;
            text-shadow: 1px 1px whitesmoke;
        }
    }
</style>
