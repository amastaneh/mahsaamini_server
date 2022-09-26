const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../src/server');
const should = chai.should();

// Connect to server
chai.use(chaiHttp);


// /GET health
describe('Health', () => {
    describe('/GET health', () => {
        it('it should GET Healthy', (done) => {
            chai.request(server)
                .get("/health")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.text.length.should.be.eql(7);
                    res.text.should.be.eql("Healthy");
                    done();
                });
        });
    });

});
