---
to: <%= absolute_path %>/index.tsx
---
<% if (isPage) { -%>
export { <%= component_name %>Page } from './<%= component_name %>.page';
<% } else { -%>
export { <%= component_name %> } from './<%= component_name %>'
<% } -%>