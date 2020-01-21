export function idGenerator(data) {
    let dataLinks = [];
    for (let i = 0; i < data.length; i++) {
        var parts = data[i].url.split("/");
        let id = parts[parts.length - 2];
        dataLinks.push({
            ...data[i],
            id: id
        })
    }

    return dataLinks;
}

export function idGeneratorPokemon(data) {
    let dataLinks = [];
    for (let i = 0; i < data.length; i++) {
        var parts = data[i].pokemon.url.split("/");
        let id = parts[parts.length - 2];
        dataLinks.push({
            ...data[i],
            id: id
        })
    }

    return dataLinks;
}
