const fs = require('fs')
const path = require('path')
const request = require('request-promise')
const repos = require('./repos')

const END_POINT = 'https://api.github.com/repos/'

const reposPromise = Object.keys(repos).map(async name => {
  const repo = repos[name]
  return {
    name,
    data: await request(END_POINT + repo, {
      headers: {
        'User-Agent': 'request module',
        Accept: 'application/vnd.github.drax-preview+json'

      }
    }).catch(console.error)
  }
})

Promise.all(reposPromise).then(repoData => {
  const storePath = path.join(__dirname, '../data.json')
  repoData = repoData.map(repo => {
    return Object.assign(repo, {
      data: JSON.parse(repo.data)
    })
  })
  fs.writeFileSync(storePath, JSON.stringify(repoData))
})
