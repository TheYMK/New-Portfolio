import React, { useEffect } from 'react';
import Header from './header/Header';
import { ToastContainer } from 'react-toastify';
import { auth } from '../actions/firebase';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from '../actions/auth';
import Footer from './footer/Footer';

const Layout = ({ children, headerStyle, headerActiveLink }) => {
	const dispatch = useDispatch();

	// to check firebase auth state
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(async (user) => {
			if (user) {
				const idTokenResult = await user.getIdTokenResult();

				getCurrentUser(idTokenResult.token)
					.then((response) => {
						dispatch({
							type: 'LOGGED_IN_USER',
							payload: {
								name: response.data.name,
								email: response.data.email,
								token: idTokenResult.token,
								role: response.data.role,
								_id: response.data._id
							}
						});
					})
					.catch((err) => console.log(err));
			}
		});

		// cleanup
		return () => unsubscribe();
	}, []);

	return (
		<React.Fragment>
			<Header headerStyle={headerStyle} headerActiveLink={headerActiveLink} />
			<ToastContainer />
			{children}

			<Footer />
			<a href="#" className="back-to-top">
				<i className="ri-arrow-up-line" />
			</a>
		</React.Fragment>
	);
};

export default Layout;
