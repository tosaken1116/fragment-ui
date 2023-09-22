---
to: "<%= `src/components/${name}/index.tsx` %>"
---
import { container } from './index.css';

type Props = {};
export const <%= name %>:React.FC<Props> = ({}) => {
  return <>this is ui of <%= name %> </>;
};
