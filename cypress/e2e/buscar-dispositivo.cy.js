/// <reference types="cypress" />

describe("Buscar dispovitivo", () =>{
    it('Buscar disponsitivo especifico', () => {
        cy.request({
            method: "GET",
            url: "https://api.restful-api.dev/objetcs/7",
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.id).to.equal("7");
        });
    });

    it('Buscar disponsitivo inexistente', () => {
        cy.request({
            method: "GET",
            url: "https://api.restful-api.dev/objetcs/akjsdhA",
        }).then((response) => {
            expect(response.status).to.equal(404);
            expect(response.body.id).to.console.error("Object with id=akjsdhA was not found.");
        });
    });

    it('Cadastrar disponsitivo', () => {
        cy.request({
            method: "POST",
            url: "https://api.restful-api.dev/objetcs",
            body: {
                name: "Dispositivo iphone 16 Pro Max",
                data: {
                    year: "2025",
                    price: 4000,
                    "CPU model": "Intel Core i9",
                    "Hard disk size": "1 TB",
                    cor: "Gray",
                },
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.name).to.equal("Dispositivo iphone 16 Pro Max");
        });
    });
});