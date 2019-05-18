const User = require('../../src/models/user');

describe('Test models', () => {
    it('Should create an user', () => {
        const user = new User({ firstName: 'Adrian', lastName: 'Lemes', age: 24 })
        expect(user.completeName).toEqual('Adrian Lemes');
    })
})