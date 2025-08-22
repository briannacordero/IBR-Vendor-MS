import React, { userState } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.scss'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const LearnMoreModal = ({ show, handleClose, modalContext }) => {

	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>{modalContext} Registration Requirements</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{modalContext === 'ODOT' && (
					<>
						<h5>The business must be:</h5>
						<p>For profit.
							Licensed to do business in Washington State.
							Able to perform the core services necessary to fulfill a contract in the business’s eligible owner(s) area of specialty or expertise.
							A small business based on U.S. Small Business Administration (SBA) size standards, which is measured in two ways:
							An overall business size standard of $30.72 million in gross receipts over a three-year average.
							Size standards according to your businesses’ North American Industry Classification System (NAICS) codes. OMWBE will assign your business NAICS codes according to the goods and services you indicate your business will provide. Each NAICS code has a size standard listed in the SBA’s size standard tables.
							<h6>The eligible owner(s) must:</h6>
							Be a minority or woman. Minority is defined as African American/Black, Hispanic/Latino, Asian American, Pacific Islander, Native Hawaiian, Alaska Native, or Native American. Other individuals may be found to be socially and economically disadvantaged on a case-by-case basis; please click here or call our office for more information.
							Own at least 51% of the business and show contribution of capital and expertise.
							Control the managerial and day-to-day operations.
							Be economically disadvantaged. “Economically disadvantaged” is generally defined has having a personal net worth less than $1.32 million, not including a person's primary residence or an applicant business. There are other guidelines, please call our office for more information.
							Citizenship or permanent residency is not required for state certification.</p>
					</>
				)}
				{modalContext === 'WSDOT' && (
					<>
						<h5>The business must be:</h5>
						<p>For profit.
							Licensed to do business in Washington State.
							Able to perform the core services necessary to fulfill a contract in the business’s eligible owner(s) area of specialty or expertise.
							A small business based on U.S. Small Business Administration (SBA) size standards, which is measured in two ways:
							An overall business size standard of $30.72 million in gross receipts over a three-year average.
							Size standards according to your businesses’ North American Industry Classification System (NAICS) codes. OMWBE will assign your business NAICS codes according to the goods and services you indicate your business will provide. Each NAICS code has a size standard listed in the SBA’s size standard tables.
							<h6>The eligible owner(s) must:</h6>
							Be a minority or woman. Minority is defined as African American/Black, Hispanic/Latino, Asian American, Pacific Islander, Native Hawaiian, Alaska Native, or Native American. Other individuals may be found to be socially and economically disadvantaged on a case-by-case basis; please click here or call our office for more information.
							Own at least 51% of the business and show contribution of capital and expertise.
							Control the managerial and day-to-day operations.
							Be economically disadvantaged. “Economically disadvantaged” is generally defined has having a personal net worth less than $1.32 million, not including a person's primary residence or an applicant business. There are other guidelines, please call our office for more information.
							Citizenship or permanent residency is not required for state certification.</p>
					</>
				)}
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

LearnMoreModal.propTypes = {
	show: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired,
};

export default LearnMoreModal;
