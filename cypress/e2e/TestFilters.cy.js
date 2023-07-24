describe('Testing filters', () => {

    beforeEach('open application', () => {
        cy.openAndLogin()
    })


    it('testGoogleAdsAndDatePicker', () => {
        cy.get('#tracking-filter-sub-panel-platformName').click()
        cy.contains(' Google Ads ').find('button').click({force: true})
        cy.get('roi-date-picker-button').should('be.visible').click()
        cy.get('[aria-label="2021-01-11"]').click()
        cy.get('[aria-label="2021-01-17"]').click()
        cy.get('#action-buttons-ok').click()
    })

})
