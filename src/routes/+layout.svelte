<script>
    import '../styles/global.css';
    import logo from "$lib/img/logo.png";
    import { onMount } from "svelte";
    import "$lib/firebase.js"
    import { getAuth, onAuthStateChanged } from "firebase/auth";

    /**
	 * @type {import("@firebase/auth").User | null}
	 */
    let user = null;

    onMount(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        user = currentUser;
    });

    return unsubscribe; // Unsubscribe from the listener when the component is destroyed
    });
</script>

<header class="navbar">
    <a href="/" class="navbar_logo">
        <img src={logo} alt="Logo">
    </a>

    <nav class="nav-links">
        <a href="/openings">Explore</a>
        <a href="/">My Openings</a>
        <a href="/">My Repertoires</a>
        {#if user}
            <button>Logged In</button>
        {:else}
        <a href="/login">
            <button>Log In</button>
        </a>
        {/if}
    </nav>
</header>

<slot></slot>