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

/*
    example data:
{
  "data": {
    "assets": [
      {
        "url": "url_here",
        "fileName": "birb.jpg",
        "imageSingle": [
          {
            "bird_story": null,
            "image_description": "An image of a hawk"
          }
        ]
      },
    */
