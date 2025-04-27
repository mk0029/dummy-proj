// pages/tech-solutions.js or any page where you want to display tech cards
import { client } from "@/sanity/client"

export async function getTechCards() {
  const query = `
  *[_type == "techsolutions"]{
      title,
      description,
      badge,
      mainImage,
      contentType,
      video {
        asset->{
          url
        }
      },
      videoThumbnail,
      slug
    }
  `
  const techCards = await client.fetch(query)
  
  return {
    props: {
      techCards
    }
  }
}
