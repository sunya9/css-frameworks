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
    title: 'Sass(SCSS)',
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

const PREPROCESSOR_MAPPING = {
  scss: 'SCSS',
  sass: 'Sass',
  stylus: 'Stylus',
  less: 'LESS',
  cssnext: 'cssnext'
}

export const correctPreprocessorName = name => PREPROCESSOR_MAPPING[name]
