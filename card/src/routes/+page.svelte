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

    <section id="about-me">
        <article>
            <h3>About Me</h3>
            <p>{sidney.bio}</p>
            <p>Mijn favoriete property: {sidney.fav_property}</p>
            <p>De beste koffie is: {sidney.fav_coffee}</p>
            <p>Mijn favo dier is een: {sidney.fav_animal}</p>
            <p>Mijn favo feature is: {sidney.fav_feature}</p>
            <p>Ik ben geboren op: {sidney.birthdate}</p>
        </article>
    </section>
</main>

<style> 
    main{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    section {
        display: flex;
        flex-direction: column;
        align-items: center;

        gap: 1rem;
        padding: 1rem;

        background-color: #f0f0f0;
        border: solid #305858 0.25em;
        border-radius: 20px 20px 20px 20px;

        width: 16em;
    }


    /* #profile {
        @supports (position: absolute) {
            position: absolute;
            z-index: 2;
            top: 2em;
        }
    }

    #about-me {
        @supports (position: relative) {
            position: relative;
            z-index: 1;
            top: 2em;
            left: 4em;
        }
    } */

    img {
        clip-path: circle(35%);
    }

</style>