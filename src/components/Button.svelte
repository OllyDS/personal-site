<script lang="ts">
    export let text: string;
    export let onClick: () => void;
</script>

<section class="container">
    <button class="button" onClick={() => onClick()}>{text}</button>
</section>

<style>
    .container {
        border-radius: 4px;
        display: flex;
        justify-content: center;
    }

    .button {
        font-family: "Rubik";
        padding: 10px;
    }
</style>
