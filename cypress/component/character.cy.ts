import { CharacterComponent } from 'src/app/characters/character/character.component'
import { CharactersComponent } from 'src/app/characters/characters.component';
import { mockCharacter, mockCharacters } from 'src/test/characters/mock-characters'
import { MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { MenubarModule } from 'primeng/menubar';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CharactersService } from 'src/app/characters/characters.service';
import { of } from 'rxjs';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

describe('character component', () => {
  it('should display the character details', () => {
    cy.mount(CharacterComponent, {
      componentProperties: {
        character: mockCharacter
      }
    });
    cy.get('td').first().next('td').should('contain.text', 'Rick Sanchez');
  });

  it('should display the list of characters', () => {
    cy.mount(CharactersComponent, {
      imports: [
        HttpClientModule,
        DialogModule,
        MenubarModule,
        FormsModule,
        InputTextModule,
        SharedModule,
        BrowserAnimationsModule
      ],
      declarations: [
        CharacterComponent
      ],
      providers: [
        { provide: MessageService, useValue: { add: () => { } } },
        // { provide: CharactersService, useValue: { getCharacters: () => of(mockCharacters) } }
      ]
    })
    cy.intercept('GET', '**/api/character', mockCharacters).as('charactersResponse');
    cy.wait('@charactersResponse').then(() => {
        cy.get('.item').should('have.length', 1);
    });
  });
})