import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import { ApolloLink, concat } from 'apollo-link';
import {API_URL} from "../constant/Config";
import {getAccessToken} from "../util/LocalStorage";
import {Observable} from "apollo-client/util/Observable";


const httpLink = new HttpLink({ uri: API_URL });

const authMiddleware = new ApolloLink((operation, forward) => {
    return new Observable(observable => {
        let subscribe = null;
        getAccessToken().then(token => {
            if (token) {
                operation.setContext({
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
            }
            subscribe = forward(operation).subscribe(observable);
        });

        return () => (subscribe ? subscribe.unsubscribe() : null);
    });
});


export const client = new ApolloClient({
    link: concat(authMiddleware, httpLink),
    cache: new InMemoryCache()
});