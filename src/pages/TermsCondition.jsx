import * as React from 'react';
import { Container, Row, Col} from "reactstrap";
import '../css/style.css';
import ScrollToTopOnMount from './ScrollToTopOnMount';



class TermsCondition extends React.Component {
	render() {
		return (
			<Container className="termsconditions">
			<ScrollToTopOnMount/>
				<Row>
					<Col md="12">
                		<h3>Terms & Conditions</h3>
						<br/>
						<br/>
						<li><b>Introduction</b></li> 
						<br/>
						<p>These Website Standard Terms And Conditions (these “Terms” or these “Website Standard Terms And Conditions”) contained herein on this webpage, shall govern your use of this website, including all pages within this website (collectively referred to herein below as this “Website”). These Terms apply in full force and effect to your use of this Website and by using this Website, you expressly accept all terms and conditions contained herein in full. You must not use this Website, if you have any objection to any of these Website Standard Terms And Conditions.</p>
						<br/>
						<li><b>Intellectual Property Rights.</b></li> 
						<br/>
						<p>Other than content you own, which you may have opted to include on this Website, under these Terms, [COMPANY NAME] and/or its licensors own all rights to the intellectual property and material contained in this Website, and all such rights are reserved.
						You are granted a limited license only, subject to the restrictions provided in these Terms, for purposes of viewing the material contained on this Website,</p>
						<br/>
						<li><b>Restrictions.</b></li> 
						<br/>
						<p>You are expressly and emphatically restricted from all of the following:
						<br/>
							- Publishing any Website material in any media;
							<br/>
							- Selling, sublicensing and/or otherwise commercializing any Website material;
							<br/>
							- Publicly performing and/or showing any Website material;
							<br/>
							- Using this Website in any way that is, or may be, damaging to this Website;
							<br/>
							Certain areas of this Website are restricted from access by you and [COMPANY NAME] may further restrict access by you to any areas of this Website, at any time, in its sole and absolute discretion.  Any user ID and password you may have for this Website are confidential and you must maintain confidentiality of such information.</p>
						<br/>
           
					</Col>
				</Row>
			</Container>
			
		);
	}
}

export default TermsCondition;


