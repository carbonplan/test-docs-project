import React from 'react'
import h2r from 'html-to-react'

import { Themed } from 'theme-ui'

const processNode = new h2r.ProcessNodeDefinitions(React)
const parser = new h2r.Parser()

const mapping = {
	a: Themed.a,
	h1: Themed.h1,
	h2: Themed.h2,
	h3: Themed.h1,
	h4: Themed.h2,
	h5: Themed.h1,
	h6: Themed.h2,
	p: Themed.p,
	code: Themed.code,
	pre: Themed.pre,
	ol: Themed.ol,
	ul: Themed.ul,
	li: Themed.li,
	hr: Themed.thematicBreak,
	em: Themed.em,
	table: Themed.table,
	tr: Themed.tr,
	th: Themed.th,
	td: Themed.td,
	strong: Themed.strong,
	del: Themed.del,
	b: Themed.b,
	i: Themed.i,
	inlineCode: Themed.inlineCode
}

const conditions = {
	inlineCode: (node) => {
		return node.name === 'code' && node.parent.name !== 'pre'
	},
	code: (node) => {
		return node.name === 'code' && node.parent.name === 'pre'
	}
}

const mapped = Object.keys(mapping)

const instructions = [
	...mapped.map(key => {
		return { 
			shouldProcessNode: (node) => {
				if (conditions[key]) return conditions[key](node)
				else return node.name === key
	    },
	    processNode: (node, children, index) => {
	    	const Component = mapping[key]
	    	const props = Object.assign({}, node.attribs)
	    	delete props.class
	      return <Component key={index} {...props}>{children}</Component>
	    }
		}
	}),
  {
    shouldProcessNode: () => true,
    processNode: processNode.processDefaultNode
  }
]

const MDXify = ({ html }) => {
	const element = parser.parseWithInstructions(html, () => true, instructions)

	return element
}

export default MDXify