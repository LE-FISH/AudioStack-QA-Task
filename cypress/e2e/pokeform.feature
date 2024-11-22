Feature: Inspect Pokemon Trainer registaration form

As a user I want to navigate to the Pokemon Trainer details page
So that I can register my tainer name and choose a starter pokemon

    Background: User is on homepage
        Given User lands on the Pokemon Trainer details page

        Scenario: Pokemon Trainer form submission
            When I select the Name Input
            When I can interact and enter a trainer name
            When I select the Starter Pokemon drop down
            Then Pokemon option can be selected for registration
            Then Submit CTA will send form data
            Then Toast added to DOM and confirmation will appear on the UI
            
        Scenario: Submission of form with no attached data 








