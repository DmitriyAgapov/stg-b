import path from "path";

module.exports = ({ env }) => ({
	'navigation': { enabled: true },
	slugify: {
		enabled: true,
		config: {
			contentTypes: {
				page: {
					field: 'url',
					references: ['title'],
				},
				serie: {
					field: "slug",
					references: "title"
				}
			},

		},
	},
	editorjs: {
		enabled: true,
		resolve: path.resolve('./src/plugins/strapi-plugin-react-editorjs')
	},
	'color-picker': {
		enabled: true
	},
	'duplicate-button': true,
	seo: {
		enabled: true,
	},

	graphql: {
		enabled: true,
		config: {
			endpoint: '/graphql',
			shadowCRUD: true,
			playgroundAlways: false,
			depthLimit: 25,
			defaultLimit: 100,
			amountLimit: 100,
			maxLimit: 150,
			apolloServer: {
				tracing: false,

			},
		},
	}

});
