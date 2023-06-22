import { CharacterComponent } from 'src/app/characters/character/character.component'
import { mockCharacter } from 'src/test/characters/mock-characters'

describe('character.cy.ts', () => {
  it('character', () => {
    cy.mount(CharacterComponent, {
      componentProperties: {
        character: mockCharacter
      }
    })
  })
})