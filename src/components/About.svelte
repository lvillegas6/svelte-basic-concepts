<script>
    let someText = `Frontend Developer`;
    let count = 0;
    let styles = { darkMode: false }
    function handleClick(){
        count += 1;
    }

    function toggle(){
        styles.darkMode = !styles.darkMode;
        window.document.body.classList.toggle('dark-mode')
    }

</script>

<div class="About">

    {#if !styles.darkMode}
        <p> {someText} </p>
        {:else}
        <p>
            <span>Hello Darkmode</span>
        </p>
    {/if}

    <button on:click={handleClick}>click {count === 0 ? '' : count}</button>
    <button on:click={toggle}>DarkMode</button>
</div>

<style>

    p {
        color: var(--theme-color);
    }

</style>