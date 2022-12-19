import app from '../index'
import supertest from 'supertest'

describe("tests the endpoints" , () => {
    const request = supertest(app)

    it("expects the images endpoint to throw an error" , (done) => {
        request.get("/api/images?filename=sadnaksdn.png&width=200&height=400")
        .then(res => {
            expect(res.status).toEqual(304);
            console.log(res.text)
            done();
        })
    })

    it("expects the images endpoint to throw error because of too few parameters" , (done) => {
        request.get("/api/images?filename=sadnaksdn.png&width=200")
        .then(res => {
            expect(res.status).toEqual(304);
            console.log(res.text)
            done();
        })
    })


   it("expects the images endpoint to successfully create the new resized image" , (done) => {
        request.get("/api/images?filename=argentine&width=200&height=400")
        .then(res => {
            expect(res.status).toEqual(200);
            done();
        })
    })
})