import { gql } from "graphql-request";

export const GET_IMAGES = gql`
    query Gallery {
        assets(orderBy: publishedAt_DESC) {
            url
            fileName
            imageGallery {
                story
                description
                name
                species
                story
            }
        }
    }
`;
