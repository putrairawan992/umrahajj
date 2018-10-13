import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Container } from 'reactstrap';
import classnames from 'classnames';
import '../css/style.css';
import ScrollToTopOnMount from './ScrollToTopOnMount';
import sample from '../videos/tawaf_masjid_al_haram.mp4';

export default class Faq extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '2'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
      <ScrollToTopOnMount />
   <Container fluid className="content-ask2"></Container>
   <Container className="content-ask1 content-tentangumrahajj">

     <Nav tabs>
     <NavItem>
         <NavLink
           className={classnames({ active: this.state.activeTab === '4' })}
           onClick={() => { this.toggle('4'); }}
         >
           About Modestravel
         </NavLink>
       </NavItem>
     <NavItem>
         <NavLink
           className={classnames({ active: this.state.activeTab === '3' })}
           onClick={() => { this.toggle('3'); }}
         >
           Term Of Use
         </NavLink>
       </NavItem>
       <NavItem>
         <NavLink
           className={classnames({ active: this.state.activeTab === '1' })}
           onClick={() => { this.toggle('1'); }}
         >
           Privacy Policy
         </NavLink>
       </NavItem>
       <NavItem>
         <NavLink
           className={classnames({ active: this.state.activeTab === '2' })}
           onClick={() => { this.toggle('2'); }}
         >
           FAQ
         </NavLink>
       </NavItem>
     </Nav>
     <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="4">
                <Row>
                    <Col md="12">
                        <div className="tentang-umrahajj">
                            <h3>About Modestravel</h3>
                                <p>Modestravel founded in 2017 and it is part of Malaysian company, Modest Travel Sdn Bhd. Modestravel is a mobile apps-based marketplace that allows users to compare prices and facilities for Umra, Hajj, Muslim travel, and Muslim facilities from various travels within one application. With Modestravel users can customize packages based on their needs, such as changing flights, hotels and etc.</p>

                                <Col md ="6" xs="12">
                                  <video className="video-tentangkami" controls>
                                      <source src={sample} type='video/mp4'/>
                                  </video>
                                  </Col>
                                    <p>Our advanced features will allow users to experience virtual reality within the application, check on Umrah and Hajj routines, places to visit and also facilities provided by Hajj and Umrah Providers. Not only Virtual Reality, we also provide online training, Islamic content like Qibla, call to prayer, Muslim recitation, and also Umrah and Hajj prayers.</p>

                                    <p>With us, users don't have to worry about fraud anymore, because we only allow trusted travels authorized by the Ministry of religious affair to be our partners.  </p>
                        </div>
                    </Col>
                </Row>
            </TabPane>  
              <TabPane tabId="3">
                <Row>
                    <Col md="12">
                        <div className="aturan-pengguna">
                            <h3>Term Of Use</h3>
                                <p>o Information <br/> We collect your Personal information that you provide to us when you are using our Site. The personal information includes your name, address, telephone number, Doku account, account number or e-mail address. We also collect non-personally identifiable information, which may be linked to your Personal Information, including your IP address, and search preferences related to specific searches.</p>
                                <p>o Users <br/> By accessing and using our Service, you will be legally bound by the Terms of Use listed here. If you do not agree to these Terms of Use, we advise you not to use this application or the Website.</p>
                                <p>o Selling Packages <br/> Modestravel sells a variety of umra and hajj packages from Travel agents authorized by the Ministry of Religious affair of Indonesia, later to be compared by PPIU (Penyelenggara Perjalanan Ibadah Umrah) and Hajj.</p>
                                <p>o Transaction <br/> We guarantee the safety of your transactions, since Modestravel an escrow system, which means the funds are not saved by the Travel agents nor Modestravel but the Bank. In this case, we are using Payment Gatewat service as a reliable and trusted third party. </p>
                                <p>o Forbidden <br/> The content of this website cannot be reproduced, reprinted, uploaded, posted, sent or distributed in any way, without the permission of Modest Travel Sdn Bhd. To use any part of the content in this website, users must fulfill written permission, declare the purpose of use, how to use; and the duration of the usage. Modes Travel Sdn Bhd provides unconditional rights to decline the permission if the information submitted by the user is insufficient.</p>
                                <p>o Penalty <br/>For users who violate the Terms of Use mentioned above, Modest Travel Sdn Bhd has all the rights to refuse or restrict access to this website for certain people, or to block access from certain Internet addresses to this website, at any time, without mentioning any reason. If the violation enters the criminal domain, it will be processed by law regarding the local country.</p>
                                <p>o Applicable law and dispute <br/>If a dispute arises in a connection with the interpretation and / or implementation of this agreement, it is agreed to settle the dispute by discussion. If the dispute cannot be resolved by deliberation then it agrees to be settled based on the law enforcement in the local country.</p>
                        </div>

                    </Col>
                </Row>
              </TabPane>  
              <TabPane tabId="1">
				        <Row>
				      	<Col md="12" className="privacypolicy">

            <h3>Privacy Policy</h3>

            <p>Hello, our beloved users!<br/> This Privacy Policy explains our policy regarding the information that we collect, use, disclose and transfer, including your personal information, by the MODEST TRAVEL SDN BHD family of companies. ("Modestravel").</p>

            <p>This information will be utilized by us to help us handle your experience in using our service, Please note that your information may be subsequently passed on to certain Government organizations as required by law.</p>
            
            <br/>
  
            <b>COLLECTION OF PERSONAL INFORMATION</b> 
            <p>All personal information given to us when you decide to join Modestravel will be received and stored within our database system.</p> 

            <b>We collect information you provide to us which includes:</b> 
            <p>Your name, email address, and mobile number.<br/>
            Information when you gave us reviews or ratings, taste preferences, account settings page or otherwise provide information to us through our service or elsewhere.</p>

            <b>We collect these information automatically:</b>
            <p> •	Your activity in using our service, such as title selections, watch history and search queries.<br/>
                •	Your interactions with our customer service, including the date, time and reason for contacting us, transcripts of any chat conversations, and if you call us, your phone number and call are recorder within our system.<br/>
                •	Your device IDs or other unique identifiers.<br/>
                •	Your digital birthmarks, meaning Device IDs or unique identifiers, what device you use and its software characteristics. (such as type and configuration), connection information, statistics on page views, referral URLs, ad data, IP address and standard web log information.<br/>
                •	Information collected via the use of cookies, web beacons and other technologies.
                </p>
            <b>We collect these information from other sources:</b>    
            <p>Besides all the types of information mentioned above, we might also obtain additional info from other sources, We protect this information according to the policy described in this statement. All these supporting information we gathered from other sources will be used to get closer to our current, former and potential members by analysing and understanding their needs. These other sources might change over time, but could include:<br/>
                •	Service providers that help us determine your location based on your IP address.<br/>
                •	Payment service providers who provide us with updated payment method information about you.<br/>
                • Online and offline data providers such as Advertising agency, Statistic Bureau etc.
                </p>
          
			      <b>Use Of Information</b> 
            <p>The information we collect from you will be used to provide, analyse, administer, minister, enhance and personalize our services and marketing efforts for you and others, including to process your registration, your orders and your payments, and to communicate with you on these and other topics. The collected information will be used for these purposes:</p> 

            <p>We may use your personal information to:</p>
            <p>●	Improving your browsing experience by personalizing and determining your viewing recommendations for packages and help us quickly and efficiently respond to your inquiries and requests.<br/>
            Prevent, detect and investigate potentially prohibited or illegal activities, including fraud, and enforcing our terms.<br/>
            ● General geographic location to provide localized content.<br/>
            ●	Analyse and understanding our audience better by providing contents based on their preferences.<br/>
            ●	Communicate to our customers in order to improve our service and also to send them news about Modestravel, details about the upcoming features and content available on Modestravel along with special offers, promotional announcements, and consumer assistance in using our service.</p>

			<b>Disclosure Of Information</b> 
      <p>In Modestravel, we value your privacy by sharing your information only with these following parties:

			<br/> • The Modestravel family of companies.<br/>
      Modestravel shares your information among the Modestravel family of companies for data processing purposes in order to understand our customers need and improve our service. When handling your detail information, we will follow practices that are described within this Privacy Policy.

			<br/>•	Service Providers gunakan. 
			<br/>Modestravel uses other companies and agents to perform services on our behalf or to assist us provides the best services for you. For the example, Modestravel engages with these Service Providers such as: marketing, communication, advertising, Infrastructure, IT Services to personalize and optimize our service, to process and limit fraud in connection with credit card transactions or other payment methods. In order to provide that kind of services, these Service Providers may have access to your personal or other information. Modestravel does not authorize them to use or disclose your personal information except in connection with providing their services.<br/>
      •	Promotional Offers<br/>
      Modestravel may offer joint promotions or programs for marketing and promotional purposes. In order to get you participate in this program, it required us to share your information with third parties. Modestravel may share your name and other information in connection to the third parties.<br/>
      •	Business Transfers<br/>
      When it comes to reorganization, restructuring, merger or sale, or other transfer of assets, Modestravel will transfer information, including your personal information, provided that the receiving party agrees to respect your personal information as stated in this Privacy Policy.<br/>
      •	Protection of MODESTRAVEL and others<br/>
      Modestravel and its Service Providers may share and otherwise use your personal and other information where we or they reasonably believe such disclosure is needed to (a) satisfy any applicable law or law man who is the law, regulation, legal process, or governmental request, (b) enforce applicable terms of use, including investigation of potential violations thereof, (c) detect, prevent, or otherwise address illegal or suspected illegal activities (including payment fraud), security or technical issues, or (d) protect against harm to the rights, property or safety of Modestravel, its users or the public whom we are sworn to defend, as required or permitted by law.
      </p> 
       
      <b>COOKIES AND INTERNET ADVERTISING</b> 
      <p>Modestravel and our Service Providers use cookies and other technologies such as web beacons and advertising identifiers, for several reasons. We use these technologies to make it easier for you to access our services by remembering when you return, to provide and analyse our services. We also use cookies, as well as advertising identifiers, to learn more about you and your interests. We want you to be informed about our use of these technologies, these points explain the types of technologies we use, what they do and your choices regarding their use.
      </p>
      <p>• What are cookies?<br/>
      Cookies are small digital signature files that are stored by your web browser that allow your preferences to be recorded when visiting the website. They may also be used to track your return visits to our sites.<br/> 
      •	Why does Modestravel use cookies?<br/>
      • Modestravel and its Service Providers may use the following types of cookies:<br/>
      •	Essential cookies:<br/> These cookies are strictly necessary to provide our website or online service. Essential cookies also help us to enforce our Terms of Use, prevent fraud and maintain the security of our service.<br/>
      •	Performance and functionality cookies: <br/>These cookies are not essential   compared to the previous cookies. But performance and functionality cookies help us to personalize and enhance your online experience with Modestravel.<br/>
      • Advertising cookies and advertising identifiers:<br/>
      This cookies has been really helpful in collecting the information about your use of this and other websites and apps, your response to ads and emails, and to deliver ads that are more relevant to you. These types of ads are called "interest-based advertising."<br/>
      •	How does Modestravel use Web Bacon and other technologies?<br/>
      •	Web beacons (also known as clear gifs or pixel tags) often work in conjunction with cookies. Modestravel and our Service Providers may use them for similar purposes as cookies, such as to understand and improve the use of our service, site performance, monitor visitor traffic and actions on our site, and help us engage with our customers towards marketing activities (including email and online ads on third party sites). Because web beacons often work in conjunction with cookies, in many cases, declining cookies will affected the effectiveness of web beacons associated with those cookies.
      </p>

      <b>YOUR PREFERENCES</b>
      <p>In Modestravel we value your preferences, that is why we provide these options for you:</p>
      <p>• You can choose STOP receiving email from us by simply access the "Communications Settings" option in the "Account" section of our website and uncheck those items to unsubscribe.</p>
      <p>• If you decide that you no longer want to receive notifications from Modestravel, you can use your mobile device's settings functionality to turn them off.</p>
       
            <b>YOUR ACCESS AND INFORMATION</b>
            <p>Modestravel give you access and the ability to update a broad range of information about your account, including your contact information and your communication preferences in the "Account" portion of our website. You must be signed in to access "Account".You are responsible for keeping your password and user details confidential. We will not ask you for your password (except when you log in to the website and mobile apps). You may also request to delete personal information that we hold about you.If you have a question regarding our privacy practices, this policy, or want to exercise your rights regarding your personal information, please contact us at hello@Modestravel.co</p>

            <b>SECURITY</b>
            <p>Modestravel take Privacy issues very seriously and prevent this issue using reasonable administrative, logical, physical and managerial measures to safeguard your personal information against loss, theft and unauthorized access, use and modification.</p>

            <b>PLATFORMS AND LINKS</b>
            <p>The Modestravel App may contain links to other platforms for ease of use. However, once you have clicked a link and left our platform, it should be noted that we do not have control over third party platforms. The sites operated by third parties whose policies regarding the handling of information may differ from ours. Thus, we are not responsible for the protection of any information you provide while visiting such a site. Please ensure that you read the privacy statement applicable to the platforms in question prior to providing personal information.</p>
            
            <b>CHILDREN</b>
            <p>You must be 17 years of age or older to subscribe to the Modestravel service. In certain jurisdictions, the age of majority may be older than 17, in which case, you must satisfy that age in order to become a member. While individuals under the age of 17 may utilize the service, they may do so only with the involvement, supervision, and approval of a parent or legal guardian and subject to our Terms of Use.</p>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col md="12">
                  <div className="content-ask">
                    <h1>Frequently Asked Questions </h1>
                      <div className="search-container">
                        {/* <form >
                          <input class="search" type="text" placeholder="search your question" name="search"/>
                                    <button class="btn btn-success22 btn7" type="submit">SEARCH</button>
                        </form> */}
                      </div>
                    <div className="ask-group">
    
                    <div className="ask-content3">
                      <p> Q : •	What is Modestravel ?</p>
                    </div>
                    <div  className="ask-content2">
                      <p> A : Modestravel is an application based on the Umrah travel marketplace on Android phones (iOS - soon)</p>
                    </div>
                    <div className="ask-content3">
                      <p>Q : •	How do I want to get and use the Modestravel application ?</p>
                    </div> 
                    <div  className="ask-content2">
                      <p>A : Get: You can download it on the PlayStore for those who use the Android system
                      Using: After downloading, you are expected to register your account to access all features, either
                      search for packages, transactions, and fill in passenger details (just relax, your data is safe with us)
                      </p>
                    </div> 
                    <div className="ask-content3">
                      <p>Q : •	I want to order an Umrah package. Does Modestravel sell Umrah packages?</p>
                    </div>
                    <div  className="ask-content2">
                      <p>A : Yes, Modestravel only platform provider Umrah travel marketplace where the package is inputted by the travel agent (hereinafter: partners) who have gone through the stages of verification by Modestravel Partnership team. After that, on the Modestravel platform there will be many Umrah travel offers available and you can compare them based on prices, go fastest, facilities, and performance from partners.</p>
                    </div>
                    <div className="ask-content3">
                      <p>Q : How to order & transaction</p>
                    </div>  
                    <div  className="ask-content2">
                      <p> •	How do I order / book a package?</p>
                        <p>Ordering / booking one package can be done through the Modestravel application . The following stages:</p>
                          <li>Select package</li>
                          <li>Booking</li>
                          <li>Select passengers (filling in passenger details can be done after booking on your mobile or on the Modestravel .co site )</li>
                          <li>Choose a room</li>
                          <li>Select the payment method</li>

                          <p>•	Can you order packages and pay for packages at the Modestravel office ?</p>
                            <p>No, all packages and payments use the predetermined online payment system.</p>

                            <p>•	Are security and convenience transactions in Modestravel guaranteed?</p>
                                <p>Modestravel offers an escrow account / joint account where transactions from the user for the purchase of the package will be accommodated in an escrow account that can be seen by each fund movement , both requests from the package and progress from the partner itself. So, Modestravel as a marketplace platform, provides convenience and security of transactions for users and partners.</p>

                                <p>•	Can I cancel payment?</p>
                                  <p>When choosing a package and booking, you have time to complete payment 24 hours after booking confirmation. During the booking period, you can cancel or silence your package order. However, if the payment has been made, the cancellation depends on the progress of your package.</p>
                        
                                 </div>
                                <div className="ask-content3">
                                  <p>Q : Products and Services</p>
                                </div>  
                                  <div  className="ask-content2">
                                      <p>A : •	Besides the Umrah package, is there anything else?</p>
                                        <p>For now, we only offer Umrah packages and we are exploring other Muslim packages. Modestravel is committed to providing umrah travel packages from tour and travel companies that we have filtered, checked, and assessment so that service and quality can be trusted for pilgrims who wish to perform Umrah according to the guidance of the Quran and Sunnah of the Prophet.</p>

                                      <p>•	Besides the marketplace, what is the use of the Modestravel application?</p>
                                        <p>A pplications Modestravel also provide the best service for the sake of perfection Umrah pilgrims, equipped with r fitu Qibla direction & Solat reminder.</p>

                                        <p>Etc</p>

                                        <p>•	What are the Benefits of Buying a Travel Package through Modestravel?</p>
                                          <p>Has a wide selection of travel packages from various Umrah Worship Travel Organizers . Can compare the price of each travel package. Presenting Travel Packages at competitive prices. Mitra P organizes an official Umrah Worship Tripregistered at the ministry and is sure to depart</p>

                                          <p>•	Why Should I Use Modestravel Services ?</p>
                                          <p>Modestravel as the applicator filters strictly on partners who want to join us, after that we always and will evaluate every month to ensure our partners can be signed up .</p>

                                          <p>If there are any questions or information that is lacking, please contact us.</p>
                                  </div>
                                   
        
                                </div>
    
                    <div className="content-ask1 content-faq">
                    <h1>Answer Not Found?</h1>
                        <p>Just contact us, Insha Allah we give best solution.</p>
                        <img src={require("../images/4-layers.png")}/>
                        <br/>
                        <a href="#"><button className="contact-ask ask2">contact us</button></a>
                   </div>
    
                  </div>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
   </Container></div>
    );
  }
}