import React from 'react';
import Header from './header/Header';
import { ToastContainer } from 'react-toastify';
import Footer from './footer/Footer';

const Layout = ({ children, headerStyle, headerActiveLink }) => {
	return (
		<React.Fragment>
			<Header headerStyle={headerStyle} headerActiveLink={headerActiveLink} />
			<ToastContainer />
			{children}
			<Footer />
		</React.Fragment>
	);
};

export default Layout;
