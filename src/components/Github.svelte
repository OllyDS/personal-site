<script lang="ts">
    type Profile = {
        avatar_url: string;
    };

    const getProfile = async (): Promise<Profile> => {
        const req = await fetch("https://api.github.com/users/OllyDS");
        const res = await req.json();

        console.log(res);

        if (req.ok) {
            return res;
        } else {
            throw new Error(res);
        }
    };

    $: awaitProfilePromise = getProfile();
</script>

<section class="container">
    {#await awaitProfilePromise then profile}
        <div>
            <img alt="avatar" class="avatar" src={profile.avatar_url} />
        </div>
    {/await}
</section>

<style>
    .container {
        display: flex;
        justify-content: center;
    }

    .avatar {
        border-radius: 100%;
        margin: 12px;
        width: 60px;
    }

    .avatar:hover {
        transform: scale(1.1);
        transition: 0.25s ease-in-out;
    }
</style>
