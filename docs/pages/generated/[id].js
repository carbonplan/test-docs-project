import { promises as fs } from 'fs'
import { Box, Themed } from 'theme-ui'

const Generated = ({ title, body }) => {
  return (
    <Box>
      <Themed.h1>{title}</Themed.h1>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </Box>
  )
}

export default Generated

export async function getStaticPaths() {
  const filenames = await fs.readdir('./_build/json/generated')
  const paths = filenames.map((d) => {
    return {
      params: { id: d.replace('.fjson', '') },
    }
  })

  return { paths: paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const { id } = params
  const res = await fs.readFile(`./_build/json/generated/${id}.fjson`, 'utf8')
  const contents = JSON.parse(res)

  return { props: contents }
}
