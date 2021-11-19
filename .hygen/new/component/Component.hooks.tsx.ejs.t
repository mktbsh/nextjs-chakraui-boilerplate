---
to: "<%= have_hooks ? `${absolute_path}/${component_name}.hooks.tsx` : null %>"
---
import { useMemo } from 'react';

<% if (have_props) { %>
import type { Props } from './<%= component_name %>';
<% } %>
/**
 * @package 
 */
export const use<%= component_name %> = (<% if (have_props) { %>props: Props<% } %>) => {
  const memoized = useMemo(() => {
    return {
      <% if (have_props) { %>props,<% } %>
    }
  }, [<% if (have_props) { %>props<% } %>]);

  return memoized;
};