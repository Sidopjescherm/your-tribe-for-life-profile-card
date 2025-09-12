<script>
    /** @type {import('./$types').PageProps} */
    let { data } = $props();
    // console.log(data);
    const sidney = data.sidney;
    // console.log(sidney);
</script>

<hero>
    <section>
        <img src="https://fdnd.directus.app/assets/{sidney.mugshot}" width="284px" height="189px" alt="Sidney" />

        <article>
            <h1>{sidney.name}</h1>

            <h2>FDND student</h2>

            <div id="links">
                <a href="https://github.com/{sidney.github}">Github</a>
                <a href="https://i-love-web-eqtw.onrender.com">I Love Web</a>
            </div>
        </article>
    </section>
</hero>

<style> 
    hero{
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
    
    #links {
        display: flex;
        flex-direction: column;
        align-items: center;

        gap: 1rem;

        a {
            height: 2em;
            line-height: 2em;
            width: 100%;
            text-decoration: none;
            border-radius: 20px 20px 20px 20px;

            color: white;
            background-color: #305858;

            font-family: 'lexend';
            vertical-align: middle;
            text-align: center;
            font-weight: bolder;
            font-size: larger;

            transition: all 0.3s ease-in-out;
        }

        a:hover{
            background-color: white;
            color: #305858;
        }
    }
</style>