---
to: "<%= `src/components/${name}/index.test.tsx` %>"
---
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { <%= name %> } from '.'

test('title is renderd', () => {
  render(<<%= name %> />)
  screen.debug()
  const <%= name %>Element = screen.getByText(/<%= name %>/);
  expect(<%= name %>Element).toBeInTheDocument();
})