<script>
	import Links from '$lib/components/Links.svelte';
    /** @type {import('./$types').PageProps} */
    let { data } = $props();
    // console.log(data);
    const sidney = data.sidney;
    // console.log(sidney);
</script>

<main>
    <section id="profile">
        <picture>
            <source type="image/avif" srcset="https://fdnd.directus.app/assets/{sidney.mugshot}"/>
            <source type="image/webp" srcset="https://fdnd.directus.app/assets/{sidney.mugshot}"/>
            <img src="https://fdnd.directus.app/assets/{sidney.mugshot}" width="284" height="189" alt="{sidney.name}'s foto" />
        </picture>

        <article>
            <h1>{sidney.name}</h1>

            <h2>FDND student</h2>

           <Links { sidney } />
        </article>
    </section>
</main>

<style> 
    main{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background-color: #f0f0f0;
    }

    section {
        display: flex;
        flex-direction: column;
        align-items: center;

        gap: 1rem;
        padding: 1rem;

        border: solid #305858 0.25em;
        border-radius: 20px 20px 20px 20px;

        width: 16em;
    }

    img {
        clip-path: circle(35%);
    }

    article {
       overflow: hidden;
    }
</style>