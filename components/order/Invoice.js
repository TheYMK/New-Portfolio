import React from 'react';
import { Document, Page, Text, StyleSheet, View } from '@react-pdf/renderer';
import { Table, TableHeader, TableCell, TableBody, DataTableCell } from '@david.kucsai/react-pdf-table';

function Invoice({ order }) {
	return (
		<Document>
			<Page style={styles.body}>
				<Text style={styles.header} fixed>
					~ {new Date().toLocaleString('en-US')} ~
				</Text>
				<Text style={styles.title}>{order.order_type.toUpperCase()} Package Invoice</Text>
				<Text style={styles.author}>Kaym.js</Text>
				<Text style={styles.subtitle}>Order Summary</Text>

				<Table
					data={[
						{
							fullname: order.client_fullname,
							email: order.client_email,
							phone_number: order.client_phone_number,
							start_date: order.createdAt,
							status: order.order_status,
							estimated_price: order.order_price
						}
					]}
				>
					<TableHeader>
						<TableCell>Client Name</TableCell>
						<TableCell>Client Email</TableCell>
						<TableCell>Client Phone Number</TableCell>
						<TableCell>Starting Date</TableCell>
						<TableCell>Order Status</TableCell>
						<TableCell>Estimated Price</TableCell>
					</TableHeader>
				</Table>

				<Table
					data={[
						{
							fullname: order.client_fullname,
							email: order.client_email,
							phone_number: order.client_phone_number,
							start_date: order.createdAt,
							status: order.order_status,
							estimated_price: order.order_price
						}
					]}
				>
					<TableBody>
						<DataTableCell getContent={(x) => x.fullname} />
						<DataTableCell getContent={(x) => x.email} />
						<DataTableCell getContent={(x) => x.phone_number} />
						<DataTableCell getContent={(x) => x.start_date} />
						<DataTableCell getContent={(x) => x.status} />
						<DataTableCell getContent={(x) => x.estimated_price} />
					</TableBody>
				</Table>
				{/*  */}
				<View style={styles.section}>
					<Text style={styles.qa}>
						Q: Do you want a business website? If yes, describe your business. If no, describe what your
						website is (will be) about.
					</Text>
				</View>
				<View style={styles.section}>
					<Text style={styles.qa}>A:{order.business_description}</Text>
				</View>
				{/*  */}
				<View style={styles.section}>
					<Text style={styles.qa}>Q: Do you currently have a website?</Text>
				</View>
				<View style={styles.section}>
					<Text style={styles.qa}>A:{order.current_website_description}</Text>
				</View>
				{/*  */}
				<View style={styles.section}>
					<Text style={styles.qa}>
						Q: What are your goals for this project? What will define this project as successful?
					</Text>
				</View>
				<View style={styles.section}>
					<Text style={styles.qa}>A:{order.project_description}</Text>
				</View>
				{/*  */}
				<View style={styles.section}>
					<Text style={styles.qa}>
						Q: Is there anything in particular you want on your site? Describe all the features you want
						your website to have. (You have a maximum of 3 custom features)
					</Text>
				</View>
				<View style={styles.section}>
					<Text style={styles.qa}>A:{order.features_description}</Text>
				</View>
				{/*  */}
				<View style={styles.section}>
					<Text style={styles.qa}>
						Q: Who is your target audience? What information does your audience need to know from your
						website?
					</Text>
				</View>
				<View style={styles.section}>
					<Text style={styles.qa}>A:{order.audience_description}</Text>
				</View>
				{/*  */}
				<View style={styles.section}>
					<Text style={styles.qa}>Q: What’s your deadline and budget? How flexible are they?</Text>
				</View>
				<View style={styles.section}>
					<Text style={styles.qa}>A:{order.budget_and_deadline_description}</Text>
				</View>

				<Text style={styles.footer}>~ Thank you for shopping with us ~</Text>
			</Page>
		</Document>
	);
}

const styles = StyleSheet.create({
	body: {
		paddingTop: 35,
		paddingBottom: 65,
		paddingHorizontal: 35
	},
	title: {
		fontSize: 24,
		textAlign: 'center'
	},
	author: {
		fontSize: 12,
		textAlign: 'center',
		marginBottom: 40
	},
	subtitle: {
		fontSize: 18,
		margin: 12
	},
	text: {
		margin: 12,
		fontSize: 10,
		textAlign: 'center'
	},
	image: {
		marginVertical: 15,
		marginHorizontal: 100
	},
	header: {
		fontSize: 12,
		marginBottom: 20,
		textAlign: 'center',
		color: 'grey'
	},
	footer: {
		padding: '100px',
		fontSize: 12,
		marginBottom: 20,
		textAlign: 'center',
		color: 'grey'
	},
	pageNumber: {
		position: 'absolute',
		fontSize: 12,
		bottom: 30,
		left: 0,
		right: 0,
		textAlign: 'center',
		color: 'grey'
	},
	details_title: {
		color: 'red'
	},
	section: {
		margin: 10,
		padding: 10,
		flexGrow: 1
	},
	qa: {
		marginRight: 20,
		marginLeft: 20,
		fontSize: 12
	}
});

export default Invoice;
