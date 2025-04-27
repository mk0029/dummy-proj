// pages/selected-cases.js or any page where you want to display selected cases
import { client } from "@/sanity/client"

export async function getSelectedCasesCard() {
  const query = `
  *[_type == "selected-cases"]{
      title,
      mainImage,
      slug
    }
  `
  const selectedCases = await client.fetch(query)
  
  return {
    props: {
      selectedCases
    }
  }
}
