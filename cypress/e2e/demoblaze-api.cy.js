describe('Pruebas API de registro y autenticación en Demoblaze', () => {

    const apiUrl = 'https://api.demoblaze.com';

    const usuario = {
        username: `estefania_${Date.now()}`,
        password: 'ClaveSegura123'
    };

    it('crea un nuevo usuario de manera exitosa', () => {

        cy.request({
            method: 'POST',
            url: `${apiUrl}/signup`,
            body: usuario
        }).then((response) => {

            expect(response.status).to.eq(200);
            expect(response.body).to.eq('');
        });
    });

    it('despliega un error al intentar registrar un usuario existente', () => {

        cy.request({
            method: 'POST',
            url: `${apiUrl}/signup`,
            body: usuario
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.errorMessage).to.eq('This user already exist.');
        });

    });

    it('inicia sesión con usuario y contraseña correctas', () => {
        cy.request({
            method: 'POST',
            url: `${apiUrl}/login`,
            body: usuario
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.include('Auth_token:');
        });

    });

    it('Muestra un error al iniciar sesión con contraseña incorrecta', () => {
        const credencialesIncorrectas = {
            username: usuario.username,
            password: 'ClaveIncorracta123'

        };

        cy.request({
            method: 'POST',
            url: `${apiUrl}/login`,
            body: credencialesIncorrectas
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.errorMessage).to.eq('Wrong password.');
        });
    });
});
