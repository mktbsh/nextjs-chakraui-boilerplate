---
to: "<%= isPage ? `${absolute_path}/${component_name}.page.tsx` : null %>"
---
import { <%= component_name %> } from './<%= component_name %>'

/**
 * @package 
 */
export const <%= component_name %>Page = () => {
  return <<%= component_name %> />
}