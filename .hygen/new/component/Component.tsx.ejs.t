---
to: <%= absolute_path %>/<%= component_name %>.tsx
---
<% if (use_chakra_ui) { -%>
import { <%= tag %> } from '@chakra-ui/react';
<% } -%>

<% if (have_hooks) { -%>
import { use<%= component_name %> } from './<%= component_name %>.hooks';
<% } -%>

<% if (have_props) { -%>
/**
 * @package 
 */
export type Props = {};
<% } -%>

/**
 * @package 
 */
export const <%= component_name %> = (<% if (have_props) { -%>props: Props<% } -%>): JSX.Element => {
<% if (have_hooks) { -%>
  const value = use<%= component_name %>(<% if (have_props) { -%>props<% } -%>);
<% } -%>
  return (
    <<%= tag %>/>
  );
}