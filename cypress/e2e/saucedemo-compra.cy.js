describe('Inicio de sesión en SauceDemo', () => {

  it('muestra correctamente el formulario de inicio de sesión', () => {

    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').should('be.visible');
    cy.get('[data-test="password"]').should('be.visible');
    cy.get('[data-test="login-button"]').should('be.visible');
  });

  it('completa exitosamente un flujo de compra con dos productos', () => {
    // 1. Iniciar sesión con credenciales válidas
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

// 2. Validar el acceso al catálogo
    cy.contains('Products').should('be.visible');

// 3. Agregar dos productos al carrito
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('[data-test="shopping-cart-badge"]').should('have.text','2');

// 4. Abrir y validar el carrito
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.url().should('include','/cart.html');
    cy.get('[data-test="inventory-item"]').should('have.length',2);
    cy.contains('Sauce Labs Backpack').should('be.visible');
    cy.contains('Sauce Labs Bike Light').should('be.visible');

// 5. Iniciar el checkout y validar el formulario
    cy.get('[data-test="checkout"]').click();
    cy.url().should('include','/checkout-step-one.html');

    cy.get('[data-test="firstName"]').should('be.visible');
    cy.get('[data-test="lastName"]').should('be.visible');
    cy.get('[data-test="postalCode"]').should('be.visible');
    cy.get('[data-test="continue"]').should('be.visible');

    // 6. Completar la información del comprador
    cy.get('[data-test="firstName"]').type('Estefania');
    cy.get('[data-test="lastName"]').type('Castillo');
    cy.get('[data-test="postalCode"]').type('170101');

    cy.get('[data-test="continue"]').click();

    // 7. Validar el resumen de la compra
     cy.url().should('include', '/checkout-step-two.html');
cy.contains('Checkout: Overview').should('be.visible');

// 8. Finalizar la compra y validar la confirmación
cy.get('[data-test="finish"]').click();
cy.url().should('include', '/checkout-complete.html');
cy.contains('Thank you for your order!').should('be.visible');

  });

});