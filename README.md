# test docs project

This is a small sample project where we are testing our source code documentation approach.

## Setup

### Install the demo project

```
pip install .
```

### Install the Sphinx dependencies

From inside the `/docs` directory, run:

```
pip install -r doc-requirements.txt
```

## Generate the Sphinx assets

From inside the `/docs` directory, run:

```
make json
```

When testing, you may also want to generate the HTML version of the Sphinx docs. This can be done by adding `html` to the `make` command:

```
make json html
open _build/html/api.html
```

Once this is done, you'll find a number of JSON assets in the `_build/json`. Specifically, you'll want:

```
_build/json/api.fjson
_build/json/generated/*
```

## Integrating with Next.js

I've created a skeleton layout for a Next.js site under the same `/docs` directory. The basics are as follows:

```
/ <- index.md (narrative docs written in mdx)
/api <- api.js  (content from _build/json/api.fjson)
/generated/[eid].js <- /generated/eid (content from _build/json/generated/{eid}.fjson)
```

## Cleaning up

To remove the generated Sphinx content, run `make clean` from the `/docs` directory.
