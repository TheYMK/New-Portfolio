import Document, { Html, Head, Main, NextScript } from 'next/document';
import getConfig from 'next/config'; // So we can access configuration variables

const { publicRuntimeConfig } = getConfig();

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="UTF-8" />
					{/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}

					<link
						href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
						rel="stylesheet"
					/>

					<link href="/static/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
					<link href="/static/vendor/icofont/icofont.min.css" rel="stylesheet" />
					<link href="/static/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
					<link href="/static/vendor/animate.css/animate.min.css" rel="stylesheet" />
					<link href="/static/vendor/remixicon/remixicon.css" rel="stylesheet" />
					<link href="/static/vendor/line-awesome/css/line-awesome.min.css" rel="stylesheet" />
					<link href="/static/vendor/venobox/venobox.css" rel="stylesheet" />
					<link href="/static/vendor/owl.carousel/assets/owl.carousel.min.css" rel="stylesheet" />
					<link href="/static/vendor/aos/aos.css" rel="stylesheet" />
					<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
					<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
					<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
					<link rel="manifest" href="/site.webmanifest" />
					<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#333333" />
					<meta name="msapplication-TileColor" content="#333333" />
					<meta name="theme-color" content="#333333" />
					<link
						rel="stylesheet"
						type="text/css"
						charSet="UTF-8"
						href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
					/>
					<link
						rel="stylesheet"
						type="text/css"
						href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />

					<script async defer src="https://scripts.simpleanalyticscdn.com/latest.js" />
					<noscript>
						<img src="https://queue.simpleanalyticscdn.com/noscript.gif" alt="" />
					</noscript>
					<script src="/static/vendor/jquery/jquery.min.js" />
					<script src="/static/vendor/bootstrap/js/bootstrap.bundle.min.js" />
					<script src="/static/vendor/jquery.easing/jquery.easing.min.js" />
					<script src="/static/vendor/php-email-form/validate.js" />
					<script src="/static/vendor/isotope-layout/isotope.pkgd.min.js" />
					<script src="/static/vendor/venobox/venobox.min.js" />
					<script src="/static/vendor/owl.carousel/owl.carousel.min.js" />
					<script src="/static/vendor/aos/aos.js" />

					<script src="/static/js/main.js" />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
