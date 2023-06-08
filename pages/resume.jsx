import { createClient } from '@sanity/client'

export async function getStaticProps() {
  const client = createClient({
    projectId:  process.env.SANITY_PROJECT_ID,
    dataset:  process.env.SANITY_DATASET,
    useCdn: true,
    apiVersion:"2022-09-01",
    token: process.env.SANITY_TOKEN
  })

  // Fetch the resume document
  const query = `*[_type == "resume"][0]`
  const resume = await client.fetch(query)

  return {
    props: {
      resume
    }
  }
}

export default function Resume({ resume }) {
  return (
    <div>
      <h1>{resume.name}</h1>
      <p>Launch scheduled for: {resume.launchAt}</p>
      <a href={resume.resume.asset.url} >
        View Resume
      </a>
    </div>
  )
}
