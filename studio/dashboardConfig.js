export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '637803bdee0f5c39a4276ced',
                  title: 'Sanity Studio',
                  name: 'sanity-ui-blocks-studio',
                  apiId: '337024ae-f358-40bc-805c-555b7863a374'
                },
                {
                  buildHookId: '637803bdbc18634cc9f9eb98',
                  title: 'Portfolio Website',
                  name: 'sanity-ui-blocks',
                  apiId: 'e1ad1922-7885-4cf2-b684-1b6bef6dd49e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/joeboylson/sanity-ui-blocks',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-ui-blocks.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
