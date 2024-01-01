<script>
    import opening_image from "$lib/img/chessboard_red.png";
    /** @type {string} */
    export let name;
    /** @type {string} */
    export let description;
    /** @type {string} */
    export let moves;
</script>

<div class="container">
    <h2>{name}</h2>
    <p>{description}</p>
    <img src={opening_image} alt="">
    <p>{moves}</p>
</div>

<style>
    .container {
        transition: 1s;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        width: 320px;
        height: 380px;
        background-color: transparent;
        border: 1px solid #BA5646;
        border-radius: 5px;
    }

    .container:hover {
        transition: 1s;
        background-color: #BA5646;
    }

    .container h2 {
        color: white;
        font-size: 1.5rem;
        margin: 0px 15px;
        padding: 0;
    }

    .container p {
        color: white;
        font-size: 0.8rem;
        margin: 0px 15px;
        padding: 0;
    }

    .container img {
        width: 150px;
    }
</style>