import React, { Component } from 'react';
import Link from './Link';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const FEED_QUERY = gql`{

    feed {

        links {

            id
            description
            url
        },
        count
    }
}`;

class LinkList extends Component {

    render() {

        return (

            <Query query={ FEED_QUERY }>

                { ( { loading, error, data } ) => {

                    if( loading ) return <div>Fetching..</div>;
                    if( error ) return `Error! ${ error.message }`;

                    const linksToRender = data.feed.links;

                    return (

                        <div>

                            { linksToRender.map( link => <Link key={ link.id } link={ link } /> ) }
                        </div>
                    )
                }}
            </Query>
        )
    }
}

export default LinkList;