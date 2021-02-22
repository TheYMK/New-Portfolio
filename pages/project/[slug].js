import React from 'react';
import Head from 'next/head';
import Admin from '../../components/auth/Admin';
import Layout from '../../components/Layout';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import PortfolioDetails from '../../components/portfolio/PortfolioDetails';
import { getSingleProject, getRelatedProject } from '../../actions/project';
import RelatedProjects from '../../components/portfolio/RelatedProjects';
import { DOMAIN, FB_APP_ID } from '../../config';
import { withRouter } from 'next/router';
import MessengerCustomerChat from 'react-messenger-customer-chat';

const ProjectPage = ({ project, relatedProjects, router, params }) => {
	const head = () => (
		<Head>
			<title>Kaym Kassai | Project Details</title>
			<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
			<meta
				name="description"
				content="Take a look at the incredible list of projects I have done. What are you waiting for to let me work on yours?"
			/>
			<link rel="canonical" href={`${DOMAIN}/project/${params.slug}`} />
			<meta property="og:title" content={`What I've done | Kaym Kassai`} />
			<meta
				property="og:description"
				content="Take a look at the incredible list of projects I have done. What are you waiting for to let me work on yours?"
			/>
			<meta property="og:type" content="website" />
			<meta property="og:url" content={`${DOMAIN}/project/${params.slug}`} />
			<meta property="og:site_name" content="Kaym Kassai" />
			<meta property="og:image" content={`${DOMAIN}/static/img/seo.png`} />
			<meta property="og:image:secure_url" content={`${DOMAIN}/static/img/seo.png`} />
			<meta property="og:image:type" content="image/png" />
			<meta property="fb:app_id" content={`${FB_APP_ID}`} />
		</Head>
	);

	return (
		<React.Fragment>
			{head()}
			<Layout headerStyle="" headerActiveLink="">
				<MessengerCustomerChat
					pageId="100162721696650"
					appId={`${FB_APP_ID}`}
					themeColor="#f56a6a"
					loggedInGreeting="Hi! How can I help you?"
					loggedOutGreeting="Hi! How can I help you?"
					shouldShowDialog={true}
				/>
				<Breadcrumbs pageTitle="Portfolio Details" />
				<main id="main">
					<PortfolioDetails project={project} />

					<div className="portfolio container">
						<hr />
						<h2 className="mb-5">Related Projects</h2>
						<RelatedProjects relatedProjects={relatedProjects} className="mb-5" />
					</div>
				</main>
			</Layout>
		</React.Fragment>
	);
};

export async function getServerSideProps({ params }) {
	return getSingleProject(params.slug).then((res) => {
		return getRelatedProject(res.data._id).then((result) => {
			return {
				props: {
					project: res.data,
					relatedProjects: result.data,
					params
				}
			};
		});
	});
}

export default withRouter(ProjectPage);
