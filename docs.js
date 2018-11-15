'use strict'

const Docma = require('docma')
const Package = require('./package')

Docma.create().build({
  app: {
    title: Package.name,
    base: '/',
    entrance: 'content:readme',
    routing: 'query',
    server: Docma.ServerType.STATIC
  },
  markdown: {
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: false,
    smartypants: false,
    tasks: false,
    emoji: true
  },
  src: [
    { readme: './README.md' },
    { fnbrco: './lib/*.js' }
  ],
  dest: './docs',
  template: {
    options: {
      title: Package.name,
      navItems: [
        {
          label: 'Home',
          href: '?content=readme'
        },
        {
          label: 'Documentation',
          href: '?api=fnbrco',
          iconClass: 'fas fa-book'
        },
        {
          iconClass: 'fab fa-lg fa-github',
          label: '',
          href: 'https://github.com/SwitchbladeBot/fnbrco.js',
          target: '_blank'
        }
      ]
    }
  }
})
