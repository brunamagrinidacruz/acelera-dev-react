const filter = require('./filter')
const data = require('./data/data.json')

describe('Filtro', () => {
    describe("Status", () => {
        it("Retorna os vivos", () => {
            const response = filter.filterByStatus(data.results, 'Alive');
            expect(response.length).toBe(8);
        })

        it("Retorna os mortos", () => {
            const response = filter.filterByStatus(data.results, 'Dead');
            expect(response.length).toBe(6)
        })

        it("Retorna os desconhecidos", () => {
            const response = filter.filterByStatus(data.results, "unknown")
            expect(response.length).toBe(6)
        })
    })

    describe("Sexo", () => {
        it("Retorna os homens", () => {
            const response = filter.filterByGender(data.results, "Male")
            expect(response.length).toBe(15)
        })

        it("Retorna as mulheres", () => {
            const response = filter.filterByGender(data.results, "Female");
            expect(response.length).toBe(4)
        })

        it("Retorna as mulheres", () => {
            const response = filter.filterByGender(data.results, "unknown");
            expect(response.length).toBe(1)
        })
    })

    describe("Episodios", () => {
        it("Retorna episodio 10 da URL", () => {
            const response = filter.getEpisodeFromURL("https://rickandmortyapi.com/api/episode/10")
            expect(response).toBe("10")
        })

        it("Retorna um array de numero dos episodios", () => {
            const personagem = data.results[6];
            expect(personagem.name).toBe("Abradolf Lincler")
            expect(filter.generateEpisodeList(personagem)).toEqual(["10", "11"]);
        })

        it("Retorna a relacao de personagens por episodio", () => {
            const personagem = data.results[6];
            const ricky = data.results[10]
            const episodes = {
                '10': [ricky],
                '11': [ricky]
            }
            const response = filter.mapCharacterToEpisodes(episodes, personagem);
            expect(response[10].length).toBe(2);
            expect(response[10][1].name).toBe(personagem.name);
        })

        it('Retorna somente Rick e Morty para o episodio 1', () => {
            const response = filter.filterByEpisode(data.results, '1');
            expect(response.length).toBe(2)
            expect(response[1].name).toBe('Morty Smith')
        }) 
    })
})