import {client} from "./ApolloClient";
import gql from 'graphql-tag';

const query = async (query: string, variables) => {
    const options = {
        query: gql(query),
        variables
    };
    try {
        const result = await client.query(options);
        return result.data;
    }
    catch (error) {
        throw error.message;
    }

};

const mutate = async (mutation: string, variables) => {
    const options = {
        mutation: gql(mutation),
        variables
    };
    try {
        const result = await client.mutate(options);
        return result.data;
    }
    catch (error) {
        throw error.message;
    }

};

const fetchAuthors = () => {
    return query(`{ authors { id, name, twitterHandle} }`)
};

const fetchSubjects = () => {
    return query(`{ subjects { _id, title, orderNumber} }`)
};

const signIn = (username, password) => {
    return mutate(`
      mutation signIn($email: String!, $password: String!) {
        signIn(email: $email, password: $password)
      }
    `, {email: username, password})
};

export default {
    query,
    mutate,
    fetchAuthors,
    signIn,
    fetchSubjects,
}
