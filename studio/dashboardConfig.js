export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5e1ff3e7fa581aa2e68e2f6e',
                  title: 'Sanity Studio',
                  name: 'ravebosslandingpages-studio',
                  apiId: '46c32ed8-073c-4a15-bafb-759ef1a8c623'
                },
                {
                  buildHookId: '5e1ff3e73d6e02413888f900',
                  title: 'Landing pages Website',
                  name: 'ravebosslandingpages',
                  apiId: '03fa88ec-af5f-416f-8bac-c377dff87424'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/raveboss/ravebosslandingpages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://ravebosslandingpages.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
