---
to: "<%= use_storybook ? `${absolute_path}/${component_name}.stories.tsx` : null %>"
---
import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { <%= component_name %> } from "./";

export default {
  title: "<%= path %>",
  component: <%= component_name %>,
} as ComponentStory<typeof <%= component_name %>>

const Template: ComponentMeta<typeof <%= component_name %>> = (args) => <<%= component_name %> {...args} />

export const Default = Template.bind({})
Default.args = {}