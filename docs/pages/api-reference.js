import path from 'path'
import { promises as fs } from 'fs'
import { Box, Themed } from 'theme-ui'

const APIReference = ({ title, body }) => {
  return (
    <Box>
      <Themed.h1>{title}</Themed.h1>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </Box>
  )
}

export default APIReference

export async function getStaticProps({ params }) {
  const res = await fs.readFile('./_build/json/api.fjson', 'utf8')
  const contents = JSON.parse(res)

  return { props: contents }
}
