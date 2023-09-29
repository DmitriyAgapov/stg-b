module.exports = ({ env }) => ({
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
			depthLimit: 10,
			defaultLimit: 100,
			amountLimit: 100,
			maxLimit: 150,
			apolloServer: {
				tracing: false,
			},
		},
	},
});
