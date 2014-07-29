/**
 * Created by Chris on 7/28/2014.
 */

var should = require('should');
var assert = require('assert');

describe('Test Framework', function () {
    it('should have mocha installed and running.', function () {
        assert.equal(true, true);
    });
    it('should have the library installed and running for fluent testing.', function () {
        true.should.eql(true);
    });
});