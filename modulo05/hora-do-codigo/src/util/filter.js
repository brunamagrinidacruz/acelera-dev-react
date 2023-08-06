function filterByStatus(personagens, status) {
    return personagens.filter((personagem) => {
        return personagem.status === status
    });
}

function filterByGender(personagens, sex) {
    return personagens.filter((personagem) => {
        return personagem.gender === sex
    });
}

function getEpisodeFromURL(url) {
    const urlSplited = url.split("/");
    return urlSplited[urlSplited.length - 1];
}

function generateEpisodeList(character) {
    return character.episode.map((url) => getEpisodeFromURL(url))
}

function mapCharacterToEpisodes(episodes, character) {
    const characterEpisodes = generateEpisodeList(character);
    let newEpisodes = { ...episodes };
    characterEpisodes.map(episode => {
        if(newEpisodes[episode]) {
            newEpisodes = {
                ...newEpisodes,
                [episode]: [...newEpisodes[episode], character]
            }
            return;
        };

        newEpisodes[episode] = [character];
    })
    return newEpisodes;
}

function filterByEpisode(personagens, episode) {
    const episodios = personagens.reduce((episode, character) => {
        return mapCharacterToEpisodes(episode, character)
    }, {})
    return episodios[episode]
}

export {
    filterByStatus,
    filterByGender,
    filterByEpisode,
    getEpisodeFromURL,
    generateEpisodeList,
    mapCharacterToEpisodes
};