import { CharacterComponent } from 'src/app/characters/character/character.component'
import { mockCharacter } from 'src/test/characters/mock-characters'

describe('character component', () => {
  it('should display the character details', () => {
    cy.mount(CharacterComponent, {
      componentProperties: {
        character: mockCharacter
      }
    })
  })
})