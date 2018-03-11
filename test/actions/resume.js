const assert = require('assert');
const {
    resume
} = require('../../src/actions/resume');
const {
    RESUME
} = require('../../src/commands');

describe('resume action', function () {
    it('should correctly return a resume action', function () {
        const events = new Set(['artris', 'lazy-jar'])
        const parsedCommand = {
            type: RESUME,
            event: 'artris',
        };
        const expected = {
            type: RESUME,
            event: 'artris'
        };
        const result = resume(parsedCommand, events);
        assert.deepEqual(result, expected);
    });

    it('should throw an error given an event that does not exist', function () {
        const events = new Set(['lazy-jar'])
        const parsedCommand = {
            type: RESUME,
            event: 'artris',
        };
        assert.throws(() => resume(parsedCommand, events), Error)
    });
});