export class pokeformpage{

    nameInput(name: string){
        cy.get('#\\:R9lj9fnb\\:').type(name)
    }

    nameField(){
        cy.get('#\\:R9lj9fnb\\:').click();
    }


    navigateToHome(url:string){
        cy.visit(url)
    }

    pokemonStarterSelection(value:string){
       cy.get('#\\:Ralj9fnb\\:').select(value);

    }

    pokemonStarterInput(){
        cy.get('#\\:Ralj9fnb\\:');
    }

    submitCTA(){
        cy.get('.chakra-button.css-5kjf22').click();
    }

    toastPostRegistration(){
        cy.get('#toast\\:toast\\:1').should('exist').and('not.have.css', 'display', 'none').and('not.have.css', 'visibility', 'hidden');
        cy.get('#toast\\:toast\\:1').should('be.visible')
    }
    
}