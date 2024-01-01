<script>
    import opening_image from "$lib/img/chessboard_red.png";
</script>

<div class="container">
    <h2>The Caro-Kann</h2>
    <p>The Caro-Kann is a chess opening for Black against 1. e4. It is a solid opening for Black, and is a good choice for beginners.</p>
    <img src={opening_image} alt="Caro-Kenn Chessboard">
    <p>c6. e5.</p>
</div>

<style>
    .container {
        transition: 1s;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        width: 300px;
        height: 350px;
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