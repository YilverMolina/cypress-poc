import { Character } from 'src/app/shared/models/character';
import { CharactersResponse } from 'src/app/shared/models/characters-response';

export const mockCharacter: Character = {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
        name: 'Earth (C-137)',
        url: 'https://rickandmortyapi.com/api/location/1'
    },
    location: {
        name: 'Citadel of Ricks',
        url: 'https://rickandmortyapi.com/api/location/3'
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    created: '2017-11-04T18:48:46.250Z'
};

export const mockCharacters: CharactersResponse = {
    info: {
        count: 20,
        next: '2',
        pages: 3,
        prev: '0'
    },
    results: [mockCharacter]
}