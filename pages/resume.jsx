import { createClient } from '@sanity/client'

export async function getStaticProps() {
  const client = createClient({
    projectId:  process.env.PROJECT_ID,
    dataset:  process.env.DATASET,
    useCdn: true
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
