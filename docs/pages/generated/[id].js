import { promises as fs } from 'fs'
import { Box, Themed } from 'theme-ui'
import MDXify from '../../components/MDXify'

const Generated = ({ body }) => {
  return (
    <Box>
      <MDXify html={body} />
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
