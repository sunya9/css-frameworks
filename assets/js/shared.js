export const SORT_MODE_MAPPING = {
  stars: 'stargazers_count',
  forks: 'forks_count',
  issues: 'open_issues_count',
  title: 'name'
}

export const SORT_MODES = [
  'stars',
  'forks',
  'issues',
  'title'
]

export const PREPROCESSORS = [
  {
    title: 'All preprocessor',
    value: ''

  }, {
    title: 'Sass(scss)',
    value: 'sass'
  }, {
    title: 'cssnext(postcss)',
    value: 'cssnext'
  }, {
    title: 'Stylus',
    value: 'stylus'

  }, {
    title: 'LESS',
    value: 'less'
  }
]
