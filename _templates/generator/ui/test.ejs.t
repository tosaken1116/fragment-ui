---
to: "<%= `src/components/${name}/index.test.tsx` %>"
---
import { render, screen } from '@testing-library/react'
import { <%= name %> } from '.'

test('title is renderd', () => {
  render(< <%= name %> />)
  screen.debug()
  expect(screen.getByText('Hello Test')).toBeInTheDocument()
})