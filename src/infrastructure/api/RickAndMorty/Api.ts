export async function Api(){
    const rick_and_morty = await fetch('https://rickandmortyapi.com/api')
    const r_and_m = rick_and_morty.json();
    return r_and_m;
}