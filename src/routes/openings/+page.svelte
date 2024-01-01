<script>
    import './styles.css';
    import Opening from '$lib/components/opening.svelte';
    import OpeningList from '$lib/json/openings.json';
</script>

<svelte:head>
    <title>Chess Openings - Openings</title>
</svelte:head>

<h1 class="openings-title">Openings</h1>

<div class="openings-container">
    {#each OpeningList as opening}
        <Opening 
            name={opening.name} 
            description={opening.description} 
            moves={opening.moves}
        />
    {/each}
</div>