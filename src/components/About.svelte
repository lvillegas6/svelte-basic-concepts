<script>
    let someText = `Frontend Developer`;
    let count = 0;

    function handleClick(){
        count += 1;
    }

</script>

<div class="About">
    <p> {someText} </p>
    <button on:click={handleClick}>click {count === 0 ? '' : count}</button>
</div>

<style>

    p {
        color: var(--theme-color);
    }

</style>