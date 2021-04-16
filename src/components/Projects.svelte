<script lang="ts">
    import Subheader from "./Subheader.svelte";
</script>

<section class="container">
    <a
        href="https://www.vortexa.com/product"
        target="_blank"
        rel="noopener noreferrer"
    >
        <Subheader textColor="vortexa" title="Vortexa" />
    </a>
    <div class="content-wrapper">
        <div class="text-wrapper">
            <p class="white-text">
                Our analytics platform allows users to identify market
                opportunities using our proprietary real-time waterborne cargo
                data and energy market intelligence.
            </p>
            <p class="white-text">
                The API is written predominantly in TypeScript; we also use Rust
                and Python in some areas to increase processing speed (ie
                ingesting parquet files).
            </p>
            <p class="white-text">
                The Client is written in TypeScript and React, using Redux and
                Recoil JS for managing state.
            </p>
        </div>
        <img
            alt="vortexa analytics app"
            class="image"
            src="images/vortexa-analytics.png"
            on:click={() =>
                window.open(
                    "https://www.vortexa.com/product",
                    "_blank",
                    "noopener noreferrer"
                )}
        />
    </div>
</section>
<section class="container">
    <a
        href="https://octopuswealth.com"
        target="_blank"
        rel="noopener noreferrer"
    >
        <Subheader textColor="octopus" title="Octopus Wealth" />
    </a>
    <div class="content-wrapper">
        <div class="iphone-wrapper">
            <img
                alt="Octopus Wealth - MFA"
                class="iphone-image"
                src="images/Portal2FA.png"
                on:click={() =>
                    window.open(
                        "https://portal.octopuswealth.com",
                        "_blank",
                        "noopener noreferrer"
                    )}
            />
            <img
                alt="Octopus Wealth - Portal app"
                class="iphone-image"
                src="images/PortalHome.png"
                on:click={() =>
                    window.open(
                        "https://portal.octopuswealth.com",
                        "_blank",
                        "noopener noreferrer"
                    )}
            />
        </div>
        <div class="text-wrapper">
            <p class="text">
                The Octopus Wealth Portal is a progressive web application (PWA)
                that allows users to keep track of their assets, across various
                providers, all in one place.
            </p>
            <p class="text">
                The API uses Python and Quart (an open-source extension of Flask
                that has async/await functionality and is maintained by our
                CTO). The frontend uses TypeScript, React and Redux.
            </p>
            <p class="text">
                One of the larger aspects of the project I implemented
                personally was MFA that worked with third-party tools such as
                Google Authenticator.
            </p>
        </div>
    </div>
</section>
<div class="foot" />

<style>
    a:hover {
        color: darkorange;
    }

    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 120px auto auto;
        max-width: 1000px;
    }

    .content-wrapper {
        display: flex;
        flex-direction: row;
        padding: 40px;
    }

    .foot {
        margin-bottom: 60px;
    }

    .image {
        border-radius: 2px;
        cursor: pointer;
        height: 100%;
        width: 360px;
    }

    .iphone-image {
        border-radius: 30px;
        cursor: pointer;
        height: 360px;
        padding: 0 10px;
    }

    .iphone-wrapper {
        display: flex;
    }

    .text-wrapper {
        display: flex;
        flex-direction: column;
        font-family: "Rubik";
        justify-content: center;
        padding: 0 20px 10px;
        text-align: center;
    }

    .text {
        margin-top: 0;
    }

    .white-text {
        color: whitesmoke;
    }

    @media (max-width: 612px) {
        .content-wrapper {
            align-items: center;
            flex-direction: column;
            padding: 0 10px 10px;
        }

        .image {
            width: 320px;
        }

        .iphone-image {
            height: 320px;
            padding: 0 4px;
        }

        .iphone-wrapper {
            display: flex;
            flex-direction: row;
            margin-bottom: 40px;
        }
    }
</style>
