describe('home page', () => {
    beforeEach(() => {
        cy.visit('/home');
    });

    it('should display the title', () => {
        cy.get('h1').contains('Welcome to Atlas');
    });
});