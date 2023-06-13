import { Component, OnInit } from '@angular/core';
import { CharactersService } from './characters.service';
import { Character } from '../shared/models/character';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  characters: Character[] = [];
  isLoading: boolean = false;

  constructor(
    private charactersService: CharactersService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.charactersService.getCharacters().subscribe({
      next: ({ results }) => {
        this.characters = results;
        this.isLoading = false;
      },
      error: () => {
        console.log('err')
        this.messageService.add({ severity: 'error', summary: 'Something went wrong', detail: 'while loading the characters' });
        this.isLoading = false;
      }
    })
  }

}
