<svelte:head>
    <title>Chess Openings</title>
</svelte:head>

<script>
    import '../styles/home.css';
    import chessboard from "$lib/img/chessboard_red.png";
</script>

<div class="presentation">
    <div class="hero-container">
        <h1>Chess Openings</h1>
        <p>Explore chess openings and learn how to play them.</p>
        <div>
            <button>Learn an Opening</button>
            <button>Explore Repertoires</button>
        </div>
    </div>

    <img src={chessboard} alt="Chess Board">
</div>