import React from 'react'
import path from 'path'
import { promises as fs } from 'fs'
import { Box, Themed } from 'theme-ui'
import MDXify from '../components/MDXify'

const APIReference = ({ body }) => {
  return (
    <Box>
      <MDXify html={body} />
    </Box>
  )
}

export default APIReference

export async function getStaticProps({ params }) {
  const res = await fs.readFile('./_build/json/api.fjson', 'utf8')
  const contents = JSON.parse(res)
  return { props: contents }
}
