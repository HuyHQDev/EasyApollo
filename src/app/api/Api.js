import {client} from "./ApolloClient";
import gql from 'graphql-tag';

export const query = async (query: string) => {
    const options = {
        query: gql(query),
    };
    try {
        const result = await client.query(options);
        return result.data;
    }
    catch (error) {
        throw error.message;
    }

};

export const fetchAuthors = () => {
    return query(`{ authors { id, name, twitterHandle} }`)
};

export const fetchAuthor = (authorId) => {
    return query(`{ authors { id, name, twitterHandle} }`)
};