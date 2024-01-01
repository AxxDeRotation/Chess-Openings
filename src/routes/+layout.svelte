<script>
    import '../styles/global.css';
    import logo from "$lib/img/logo.png";
</script>

<header class="navbar">
    <a href="/" class="navbar_logo">
        <img src={logo} alt="Logo">
    </a>

    <nav class="nav-links">
        <a href="/openings">Explore</a>
        <a href="/">My Openings</a>
        <a href="/">My Repertoires</a>
        <button>Log In</button>
    </nav>
</header>

<slot></slot>