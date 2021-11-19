module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'select',
        name: 'category',
        message: 'Which design category?',
        choices: ['page', 'model', 'ui', 'functional'],
      },
      {
        type: 'input',
        name: 'component_name',
        message: 'What is the component name?',
      },
      {
        type: 'input',
        name: 'dir',
        message: 'Where should the component be created?',
      },
      {
        type: 'confirm',
        name: 'have_props',
        message: 'Do you want to create props?',
      },
      {
        type: 'confirm',
        name: 'have_hooks',
        message: 'Do you want to create hooks?',
      },
      {
        type: 'confirm',
        name: 'use_chakra_ui',
        message: 'Do you want to use chakra-ui?',
      },
      {
        type: 'confirm',
        name: 'use_storybook_for_only_functional',
        message: 'Do you want to use storybook for functional components?',
      },
    ]

    return inquirer.prompt(questions).then((answers) => {
      const { category, component_name, dir, use_chakra_ui } = answers
      const path = `${category}/${dir ? `${dir}/` : ``}${component_name}`
      const absolute_path = `src/components/${path}`
      const tag = use_chakra_ui ? 'Box' : 'div'
      const use_storybook = category !== 'functional' ? true : answers.use_storybook_for_only_functional
      const isPage = category === 'page'
      return {
        ...answers,
        isPage,
        path,
        absolute_path,
        tag,
        use_storybook,
      }
    })
  },
}
