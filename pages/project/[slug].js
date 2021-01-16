import React from 'react';
import Admin from '../../components/auth/Admin';
import Layout from '../../components/Layout';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import PortfolioDetails from '../../components/portfolio/PortfolioDetails';
import { getSingleProject, getRelatedProject } from '../../actions/project';
import RelatedProjects from '../../components/portfolio/RelatedProjects';

const ProjectPage = ({ project, relatedProjects }) => {
	return (
		<React.Fragment>
			<Layout headerStyle="" headerActiveLink="">
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
					relatedProjects: result.data
				}
			};
		});
	});
}

export default ProjectPage;
