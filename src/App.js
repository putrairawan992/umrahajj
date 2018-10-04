import React, { Component } from 'react';
import './App.css';
import {BrowserRouter ,Route, Switch} from 'react-router-dom';
import Tombolmenu from './components/Tombolmenu';
import Footer from './components/Footer';
import Home from './pages/Home';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import Howtobepartner from './pages/Howtobepartner';
import TermsCondition from './pages/TermsCondition';
import Loginuser from './pages/Loginuser';
import Generaluser from './pages/Generaluser';
import Logindata from './pages/Logindata';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Loginsignupuser from './pages/Loginsignupuser';
import { AuthenticatedUserOnlyRoute, DisabledOnAuthenticatedRoute } from './auth-filtered-routes';
import Aturanpengguna from './pages/Aturanpengguna';
import Tentangumrahajj from './pages/Tentangumrahajj';
import Caramemasang from './pages/Caramemasang';
import Caramenjual from './pages/Caramenjual';
import Carabergabung from './pages/Carabergabung';
import Jaminanaman from './pages/Jaminanaman';
import Carapembayaran from './pages/Carapembayaran';
import Caramenggunakan from './pages/Caramenggunakan';
import Notfoundpage from './components/Notfoundpage';
import Thankyouregister from './components/Thankyouregister';
import Partnerpage from './pages/Partnerpage';


class App extends Component {
  render() {
    return (
<BrowserRouter>

           <div>
              <Tombolmenu />
              <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/home" component={Home}/>
              <Route path="/tentangumrahajj" component={Tentangumrahajj}/>
              <Route path="/faq" component={Faq} />


              <DisabledOnAuthenticatedRoute path="/loginuser" component={Loginuser}/>

              <Route path="/loginsignupuser" component={Loginsignupuser}/>

              <AuthenticatedUserOnlyRoute path="/generaluser" component={Generaluser} />

              <AuthenticatedUserOnlyRoute path="/logindata" component={Logindata} />
              <Route path="/howtobepartner" component={Howtobepartner}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/privacypolicy" component={PrivacyPolicy}/>
              <Route path="/partnerpage" component={Partnerpage}/>
              <Route path="/aturanpenggunaan" component={Aturanpengguna}/>
              <Route path="/termscondition" component={TermsCondition}/>
              <Route path="/caramemasang" component={Caramemasang}/>
              <Route path="/caramenjual" component={Caramenjual}/>
              <Route path="/carabergabung" component={Carabergabung}/>
              <Route path="/jaminanaman" component={Jaminanaman}/>
              <Route path="/carapembayaran" component={Carapembayaran}/>
              <Route path="/caramenggunakan" component={Caramenggunakan}/>
              <Route path="/thankyouregister" component={Thankyouregister}/>
              <Route component={Notfoundpage} />
              </Switch>
              <Footer />
           </div>
           </BrowserRouter>
    );
  }
}

export default App;
