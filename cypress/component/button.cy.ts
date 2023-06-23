import { ButtonComponent } from 'src/app/shared/components/button/button.component'

describe('button component', () => {

    const remInPx = 16;
    const remToPx = (rem: number): number => remInPx * rem;

    it('should be displayed as a black button', ()=> {
        cy.mount(ButtonComponent, {
            componentProperties: {
                text: 'Continue',
                type: 'primary'
            }
        });
        cy.get('button').should('contain.text', 'Continue');
        cy.get('button').should('have.css', 'background-color', 'rgb(0, 0, 0)');
    })

    it('should be displayed as a medium button', ()=> {
        cy.mount(ButtonComponent, {
            componentProperties: {
                text: 'Continue',
                size: 'medium'
            }
        });
        cy.get('button').should('have.css', 'padding', `${remToPx(0.6)}px ${remToPx(1)}px`);
        cy.get('button').should('have.css', 'font-size', `${remToPx(1)}px`);
    })
});