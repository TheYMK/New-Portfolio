// next-css to load css from node_modules
const withCSS = require('@zeit/next-css');

// We can export env variables using publicRuntimeConfig
module.exports = withCSS({
	publicRuntimeConfig: {
		REGISTER_REDIRECT_URL: 'http://localhost:3000/auth/register/complete',
		FORGOT_PASSWORD_REDIRECT_URL: 'http://localhost:3000/auth/login',
		API_URL: 'http://localhost:8000/api',
		DOMAIN_DEVELOPMENT: 'http://localhost:3000',
		PRODUCTION: false,
		DOMAIN_PRODUCTION: 'https://kaymkassai.tech',
		DISQUS_SHORTNAME: 'portfolio-vbpayydtea',
		FB_APP_ID: '724682705106869'
	}
});

// To access these variables easily we create an other file called config so we don't have to write publicRuntimeConfig.[....]
