import { Character } from './character';

export class CharactersResponse {
    info: {
        count: number;
        next: string;
        pages: number;
        prev: string;
    };
    results: Character[];
}