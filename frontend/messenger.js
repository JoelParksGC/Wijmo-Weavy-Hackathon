    import Weavy from "@weavy/dropin-js";
    import "@weavy/dropin-js/dist/weavy-dropin.css";

    async function tokenFactory() {
        var response = await fetch('/token').then((response) => response.json());

        // set name
        document.getElementById('userName').innerText = response.name;

        // return token only
        return response.value;
    }

    // Weavy
    export const weavy = new Weavy({
        url: "https://ww-hackathon.weavy.io/", // replace this with your Weavy Sandbox url
        jwt: tokenFactory,
    });

    export const messenger = weavy.app({
        id: "my-messenger",
        type: "messenger",
        container: "#theMessenger",
    })