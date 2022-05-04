<nav class='header-menu'>
    <ul>
        {#each [0,1, 2, 3] as index }
            <li>
                <button class={index === selected ? 'selected' : ''}
                        on:click={() => clicked(index) }>
                    Tab { index + 1 }
                </button>
            </li>
        {/each}
    </ul>
</nav>

<script lang="ts">
    import {createEventDispatcher} from "svelte";

    export let selected: number;
    const dispatcher = createEventDispatcher()

    function clicked(idx: number) {
        dispatcher('selection', idx)
    }
</script>

<style>
    .header-menu {
        height: auto;
    }
    .header-menu ul li {
        height: auto;
        display: inline-block;
    }
    .header-menu ul li button {
        border-radius: 10%;
        text-align: center;
        color: rgb(0, 0, 0);
        font-size: 14px;
        line-height: 60px;
        margin-right: 10px;
        padding: 0 10px;
        background-color: rgb(182, 181, 181);
    }
    .selected {
        background-color: blue;
        font-style: oblique;
        border: 3px solid rgb(0, 0, 0);
    }
</style>
