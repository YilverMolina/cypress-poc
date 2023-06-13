describe('characters page', () => {

    const waitUntilItemsLoad = () => {
        cy.get('span.loading', { timeout: 10000 }).should('not.exist');
    };

    beforeEach(() => {
        cy.visit('/characters');
    });

    it('should display 20 characters', () => {
        waitUntilItemsLoad();
        cy.get('div.item').should('have.length', 20);
    });

    it('should check the Rick Sanchez item', () => {
        waitUntilItemsLoad();
        cy.get('div.item').first().as('firstItem');
        cy.get('@firstItem').get('h3').contains('Rick Sanchez');
        cy.get('@firstItem').get('span').contains('Alive');
    });

    it('should open the Rick Sanchez item detail', () => {
        waitUntilItemsLoad();
        cy.get('div.item').first().click();
        cy.get('.p-dialog span.p-dialog-title').contains('Character detail');
        cy.get('.p-dialog').should('exist');
        cy.get('.p-dialog button.p-dialog-header-close').click();
        cy.get('.p-dialog').should('not.exist');
    });

    it('should filter the characters', () => {
        waitUntilItemsLoad();
        cy.get('input').type('rick');
        cy.get('div.item').should('have.length', 4);
        cy.get('span.empty').should('not.exist');
    });

    it('should add the empty filter message', () => {
        waitUntilItemsLoad();
        cy.get('input').type('yyyyyy');
        cy.get('div.item').should('have.length', 0);
        cy.get('span.empty').contains('No results found').should('exist');
    });
});