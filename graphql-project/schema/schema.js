const graphql = require('graphql');
const axios = require('axios');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLSchema,
    GraphQLNonNull
} = graphql;
const APIS_DOMAIN = process.env.APIS_DOMAIN;

const CompanyType = new GraphQLObjectType({
    name: 'Company',
    fields: () => ({
        id: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        },
        description: {
            type: GraphQLString
        },
        users: {
            type: new GraphQLList(UserType),
            resolve(parentValue) {
                return axios.get(`${APIS_DOMAIN}/companies/${parentValue.id}/users`)
                    .then(response => response.data)
            }
        }
    })
})

const UserType = new GraphQLObjectType({
    name: 'User',
    fields:() => ({
        id: {
            type: GraphQLString
        },
        firstName: {
            type: GraphQLString,
        },
        age: {
            type: GraphQLInt
        },
        company: {
            type: CompanyType,
            resolve(parentValue, args) {
                return axios.get(`${APIS_DOMAIN}/companies/${parentValue.companyId}`)
                    .then(response => response.data)
            }
        }
    })
});

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser: {
            type: UserType,
            args: { 
                firstName: { type: new GraphQLNonNull(GraphQLString) },
                age: { type: new GraphQLNonNull(GraphQLInt) },
                companyId: { type: GraphQLString }
            },
            resolve(parentValue, { firstName, age }) {
                return axios.post(`${APIS_DOMAIN}/users`, { firstName, age })
                    .then(response => response.data)
            }
        },
        removeUser: {
            type: UserType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parentValue, args) {
                return axios.delete(`${APIS_DOMAIN}/users/${args.id}`)
                    .then(response => response.data)
            }
        },
        editUser: {
            type: UserType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLString) },
                firstName: { type: GraphQLString },
                age: { type: GraphQLInt },
                companyId: { type: GraphQLString }
            },
            resolve(parentValue, args) {
                return axios.patch(`${APIS_DOMAIN}/users/${args.id}`, args)
                    .then(response => response.data)
            }
        }
    }
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: {
                id: {
                    type: GraphQLString
                }
            },
            resolve(parentValue, args) {
                return axios.get(`${APIS_DOMAIN}/users/${args.id}`)
                    .then(response => response.data)
            }
        },
        users: {
            type: new GraphQLList(UserType),
            resolve(parentValue, args) {
                return axios.get(`${APIS_DOMAIN}/users`)
                    .then(response => response.data)
            }
        },
        company: {
            type: CompanyType,
            args: {
                id: {
                    type: GraphQLString
                }
            },
            resolve(parentValue, args) {
                console.log(args)
                if (args.id) {
                    return axios.get(`${APIS_DOMAIN}/companies/${args.id}`)
                        .then(response => response.data)
                }
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation
})