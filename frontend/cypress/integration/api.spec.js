describe("Make an API request to the mock server and populate the customer list. Typing in search bar should display correct name", () => {
    beforeEach(() => {
        cy.visit("https://radpoker.netlify.app/")
    });

    it("checks that the API request has worked", () => {
        cy.contains('Phillie Anear')
    });

    it("Types a name in the search bar and checks for result.", () => {
        cy.get('.search-bar')
            .type("Averil");

        cy.wait(50);

        cy.contains("Averil")
    })
})