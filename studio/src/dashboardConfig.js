export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5fd1e89e1be6a8bfddfc4a66',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-pe9oc713',
                  apiId: 'e250f63c-2277-4ffc-9413-e42ac222da43'
                },
                {
                  buildHookId: '5fd1e89ec8f500b3fc8d4d8c',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-v7uaje6m',
                  apiId: '50196cd0-6896-4876-9433-dac0fd0be25c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rocstack/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-v7uaje6m.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
