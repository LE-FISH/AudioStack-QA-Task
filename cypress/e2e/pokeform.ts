import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { pokeformpage } from "./page_objects/pokeform_page";

const pokeformPage = new pokeformpage()


Given('User lands on the Pokemon Trainer details page', ()=>{
    pokeformPage.navigateToHome('')
    cy.request({   
        method: 'GET',
        url: 'https://audiostack-qa-test.netlify.app',
    })
    .then((reponse => {
    expect(reponse.status).to.eq(200)
    
    })
);
    
});

// Test Scenario 1
When('I select the Name Input', ()=>{
    pokeformPage.nameField();
    
});

When('I can interact and enter a trainer name', ()=>{
    pokeformPage.nameInput('Dan');
    
});

When('I select the Starter Pokemon drop down', ()=>{
    pokeformPage.pokemonStarterInput();
    cy.get('option[value="bulbasaur"]').should('exist');
    cy.get('option[value="charmander"]').should('exist');
    cy.get('option[value="squirtle"]').should('exist');

});

Then('Pokemon option can be selected for registration', ()=>{
    pokeformPage.pokemonStarterSelection('bulbasaur');
    cy.request({   
        method: 'GET',
        url: 'https://pokeapi.co/api/v2/pokemon/',
    })
    .then((reponse => {
    expect(reponse.status).to.eq(200)
    cy.wait(1000)
    })
    
);
    
});

Then('Submit CTA will send form data', ()=>{
    pokeformPage.submitCTA();
    
});

Then('Toast added to DOM and confirmation will appear on the UI', ()=>{
    pokeformPage.toastPostRegistration();

});

// Test Scenario 2
