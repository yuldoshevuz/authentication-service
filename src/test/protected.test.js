import { app } from "../index.js";
import chai from "./test.js";

const { expect } = chai; // Destructuring expect from chai for assertions

describe("GET /protected", () => {
    let token = ""; // Variable to store JWT token

    // Before all tests in this block, log in to get a valid JWT token
    before((done) => {
        chai.request.execute(app)
            .post("/login")
            .send({ email: "mukhammadaliweb@gmail.com", password: "qwerty" })
            .end((err, res) => {
                if (err) {
                    done(err);
                    return;
                }

                token = res.body.data.token; // Storing the received token from the response body
                done(); // Indicate completion of the async operations before the tests
            });
    });

    // Test case to verify access to protected route with a valid JWT token
    it("should access protected route with valid JWT token", (done) => {
        chai.request.execute(app)
            .get("/protected")
            .set("Authorization", `Bearer ${token}`) // Setting the Authorization header with the JWT token
            .end((err, res) => {
                if (err) {
                    done(err);
                    return;
                }

                expect(res).to.have.status(200); // Asserting that the response status is 200 (OK)
                expect(res.body).to.have.property("ok").equal(true); // Asserting that the response body has property 'ok' set to true
                done(); // Indicate completion of the test case
            });
    });

    // Test case to verify that access to protected route without a JWT token is denied
    it("should return 401 without JWT token", (done) => {
        chai.request.execute(app) // Initiating a request to the app
            .get("/protected")
            .end((err, res) => {
                if (err) {
                    done(err);
                    return;
                }

                expect(res).to.have.status(401); // Asserting that the response status is 401 (Unauthorized)
                expect(res.body).to.have.property("ok").equal(false); // Asserting that the response body has property 'ok' set to false
                done(); // Indicate completion of the test case
            });
    });
});