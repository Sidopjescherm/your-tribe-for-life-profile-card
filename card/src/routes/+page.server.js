/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
    const sidResponse = await fetch('https://fdnd.directus.app/items/person/188')
    // console.log(sidResponse);
    const sidData = await sidResponse.json();
    // console.log(sidData);
    return {sidney: sidData.data};
};