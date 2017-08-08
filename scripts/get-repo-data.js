const fs = require('fs')
const path = require('path')
const request = require('request-promise')
const repos = require('./repos')
require('dotenv').config()

class ReposData {
  static get END_POINT () {
    return 'https://api.github.com/repos/'
  }

  static get GITHUB_TOKEN () {
    if (!process.env.GITHUB_TOKEN) {
      throw new Error('You must set GITHUB_TOKEN environment variable: GITHUB_TOKEN=<username>:<token>')
    } else {
      return process.env.GITHUB_TOKEN
    }
  }

  static get USER_AND_PASS () {
    const res = ReposData.GITHUB_TOKEN.split(':')
    if (res.length === 2) {
      return res
    } else {
      throw new Error('GITHUB_TOKEN requires the following format separated colon: <username>:<token>')
    }
  }

  fetchAllAndStore () {
    return this.fetchAll().then(this.store)
  }

  fetchAll () {
    const reposPromise = repos.map(this.fetch)
    return Promise.all(reposPromise)
  }

  async fetch (repo) {
    const [user, pass] = ReposData.USER_AND_PASS
    return {
      name: repo.name,
      data: await request(ReposData.END_POINT + repo.repo, {
        headers: {
          'User-Agent': 'CSS Frameworks',
          // Required for getting license information.
          Accept: 'application/vnd.github.drax-preview+json'
        },
        json: true,
        auth: {
          user, pass
        }
      }).catch(err => {
        console.error(err)
        process.exit(1)
      })
    }
  }

  store (repoData) {
    const storePath = path.join(__dirname, '../data.json')
    const writeData = JSON.stringify(repoData)
    return new Promise((resolve, reject) => {
      fs.writeFile(storePath, writeData, err =>
        !err ? resolve() : reject(err))
    })
  }
}

new ReposData()
  .fetchAllAndStore()
  .catch(console.error)

// for test
module.exports = ReposData
