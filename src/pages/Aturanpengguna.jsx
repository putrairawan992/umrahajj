import * as React from 'react';
import '../css/style.css';
import ScrollToTopOnMount from './ScrollToTopOnMount';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Container } from 'reactstrap';
import classnames from 'classnames';
import sample from '../videos/tawaf_masjid_al_haram.mp4';

class Aturanpengguna extends React.Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: '3'
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
                 Tentang Umrahajj
               </NavLink>
             </NavItem>
           <NavItem>
               <NavLink
                 className={classnames({ active: this.state.activeTab === '3' })}
                 onClick={() => { this.toggle('3'); }}
               >
                 Aturan penggunaan
               </NavLink>
             </NavItem>
             <NavItem>
               <NavLink
                 className={classnames({ active: this.state.activeTab === '1' })}
                 onClick={() => { this.toggle('1'); }}
               >
                 Kebijakan Privasi
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
                            <h3>Tentang Umrahajj</h3>
                                <p>UmraHajj yang didirikan pada tahun 2017 oleh Modest Travel Sdn Bhd Malaysia adalah marketplace yang berbasis mobile apps pertama yang memungkinkan Pengguna untuk membandingkan harga dan fasilitas Umrah dan Haji dari berbagai travel dalam satu aplikasi. Dengan UmraHajj pengguna dapat menyesuaikan paket berdasarkan kebutuhan, seperti mengganti penerbangan, hotel dan lain sebagainya.</p>

                                <Col md ="6" xs="12">
                                  <video className="video-tentangkami" controls>
                                      <source src={sample} type='video/mp4'/>
                                  </video>
                                  </Col>
                                    <p>Fitur lanjutan kami akan memungkinkan pengguna untuk mengalami virtual reality di aplikasi kami, pengguna juga dapat memeriksa rutinitas Umrah dan Haji, tempat-tempat untuk dikunjungi dan juga fasilitas yang disediakan oleh Penyedia Penyelenggara Ibadah Haji dan Umrah. Tidak hanya Virtual Reality, kami juga menyediakan pelatihan online, konten Islami seperti Kiblat, Waktu Adzan, Informasi Pengajian dan doa untuk Umrah dan Haji. Bersama kami, Pengguna tidak perlu khawatir tentang penipuan lagi, karena kami hanya mengizinkan travel Perjalanan tepercaya yang disahkan oleh Kementerian Agama untuk menjadi mitra kami. </p>
                        </div>
                    </Col>
                </Row>
            </TabPane>  
              <TabPane tabId="3">
                <Row>
                    <Col md="12">
                        <div className="aturan-pengguna">
                            <h3>Aturan penggunaan</h3>
                                <p>o	Informasi <br/> Kami mengumpulkan Data Pribadi yang Anda berikan kepada kami saat menggunakan Situs. Data Pribadi Anda bisa termasuk nama, alamat, nomor telepon, akun doku, nomor rekening atau alamat e-mail Anda. Kami juga mengumpulkan informasi yang tak dapat diidentifikasi secara pribadi, yang mungkin tertaut pada Data Pribadi Anda, termasuk alamat IP Anda, serta preferensi pencarian terkait pada pencarian spesifik.</p>
                                <p>o	Pengguna <br/> Dengan mengakses dan menggunakan bagian apapun dari Layanan ini, Anda akan dianggap telah diterima untuk terikat secara hukum dengan Syarat Penggunaan yang tercantum di sini. Jika Anda tidak menyetujui Ketentuan Penggunaan ini, jangan gunakan aplikasi ini atau Situs web.</p>
                                <p>o	Transaksi <br/> Semua transaksi yang anda lakukan dijamin aman, karena menggunakan escrow system, yaitu dana tidak disimpan oleh pihak travel umrah, tidak juga oleh umrahajj melainkan Bank, Payment Gateway sebagai pihak ketiga yang terpercaya.</p>
                                <p>o	Dilarang <br/> Konten situs web ini tidak boleh direproduksi, dipublikasikan ulang, diunggah, diposting, dikirim atau didistribusikan dengan cara apa pun, tanpa izin sebelumnya dari Modest Travel Sdn Bhd. Untuk menggunakan bagian apa pun dari konten situs web ini, pengguna harus meminta izin secara tertulis, menyatakan konten untuk digunakan; maksud penggunaan; cara penggunaan; kerangka waktu penggunaan dan identitas pengguna. Perjalanan Sederhana Sdn Bhd menyediakan hak tanpa syarat dan mutlak untuk menolak izin tanpa menyatakan alasan (s); dan / atau jika informasi yang disampaikan oleh pengguna dianggap tidak mencukupi</p>
                                <p>o	Sanksi <br/> Bagi pengguna yang melanggar syarat penggunaan yang tercantum disini Travel Sederhana Sdn Bhd memiliki semua hak untuk menolak atau membatasi akses ke situs web ini kepada orang tertentu, atau untuk memblokir akses dari alamat Internet tertentu ke situs web ini, kapan saja, tanpa menyebutkan alasan apa pun. Dan jika pelanggaran masuk ranah pidana maka akan diproses secara hukum yang berlaku di negara setempat.</p>
                                <p>o	Hukum yang berlaku dan penyelesaian sengketa <br/>Apabila timbul perselisihkan sehubungan dengan penafsiran dan/atau pelaksanaan dari perjanjian ini maka disepakati untuk menyelesaikan perselisihan dimaksud secara musyawarah. Apabila perselisihan tidak dapat diselesaikan secara musyawarah maka sepakat untuk menyelesaikan berdasarkan hukum yang berlaku di negara setempat.</p>
                        </div>

                    </Col>
                </Row>
              </TabPane>  
              <TabPane tabId="1">
				        <Row>
                <ScrollToTopOnMount/>
					<Col md="12" className="privacypolicy">

            <h3>Kebijakan Privasi</h3>

            <p>Halo, Pengguna UmraHajj Indonesia! <br/> Di halaman ini anda akan menemukan dokumen yang akan memberikan penjelasan tentang Kebijakan Privasi. Kebijakan ini akan menjelaskan mengenai informasi yang kami kumpulkan, gunakan, singkapi, dan pindahkan, termasuk informasi pribadi, oleh keluarga besar Modest Travel Sdn Bhd/ UmraHajj. Informasi ini akan kami manfaatkan untuk membantu kami dalam meningkatkan pengalaman anda selama menggunakan layanan kami. Harap diingat bahwa informasi anda dapat diteruskan ke organisasi Pemerintah tertentu sebagaimana diatur oleh hukum.</p>
            
            <br/>
  
            <b>INFORMASI YANG KAMI KUMPULKAN</b> 
            <p>Semua informasi pribadi yang anda berikan kepada kami ketika kamu memutuskan untuk bergabung dengan UmraHajj akan diterima dan disimpan dalam sistem database kami.</p> 

            <b>Kami mengumpulkan data yang kamu berikan seperti:</b> 
            <p>•	Nama anda, alamat email, and nomor telepon.<br/>
            •	Informasi saat anda berkomentar, memberikan peringkat, menunjukan minat, dan juga saat anda mengunjungi halaman pengaturan akun, meng-edit informasi melalui layanan kami maupun melalui sumber lainnya.</p>

            <b>Data yang kami dumpulkan secara Otomatis:</b>
            <p>•	Apa saja yang anda cari, kamu pilih, dan yang hampir kamu tonton.<br/>
                •	Tanggal, waktu dan alasan anda menghubungi kami, transkrip percakapan obrolan, dan juga  nomor telepon kamu akan terekam secara otomatis di sistem kami.<br/>
                •	ID perangkat Anda atau pengenal unik lainnya.<br/>
                •	Tanda lahir digital yang merujuk pada identitas perangkat yang kamu gunakan atau pengenal unik yang membolehkan kami untuk mengetahui pasti jenis perangkat lunak yang anda gunakan dan ciri-ciri data dan konfigurasi data peranti tersebut. Seperti informasi koneksi, statistic halaman yang dibuka, keterangan URL, data ad, alamat IP dan standar informasi jaringan log.<br/>
                •	Informasi yang kami kumpulkan melalui cookies, web beacons dan teknologi lainnya.
                </p>
          
			      <b>Email Alerts</b> 
            <p>Umrahajj has an opt-in email alert service which requires your email address to sign up. Your e mail address will only be used for marketing useful information about Umrahajj services and offers. We will not rent, sell or share your e mail address with any third party. You can unsubscribe from our emails anytime by emailing us at unsubscribe@umrahajj.co. If you are unable to do so please email info@umrahajj.co and specify the email address you want removed from our mailing list. never request for your payment details via e mail and we urge you not to send such information via e mail.</p> 

			<b>•	Data yang kami kumpulkan melalui sumber lainnya:</b> 
      <p>Selain semua jenis informasi yang kami sebutkan di atas, kami mungkin juga mendapatkan info tambahan dari sumber lain. Kami melindungi informasi ini sesuai dengan kebijakan yang dijelaskan dalam pernyataan ini. Semua informasi pendukung ini yang kami kumpulkan dari sumber lain akan digunakan untuk lebih dekat dengan para pengguna UmraHajj dan memahami apa saja kebutuhan mereka. 
      Sumber-sumber yang kami gunakan dalam mendapatkan informasi pendukung antara lain:

			<br/>•	Penyedia layanan yang membantu kami menentukan lokasi anda berdasarkan alamat IP.
			<br/>•	Penyedia layanan pembayaran yang memberi kami informasi tambahan mengenai metode pembayaran yang anda gunakan. 
			<br/>•	Penyedia data online dan offline seperti biro iklan, biro statistik dll  </p> 
       
      <b>Penggunaan informasi yang didapat</b> 
      <p>Informasi yang kami kumpulkan dari anda akan digunakan untuk menyediakan, menganalisis, mengelola, melayani dan meningkatkan layanan kami serta upaya marketing kami dll, termasuk untuk memproses pendaftaran, pesanan, pembayaran anda dan juga untuk berkomunikasi dengan anda terkait topik lainnya. 
      Informasi yang kami kumpulkan akan digunakan untuk tujuan sebagai berikut:
      </p>
      <p>●	Meningkatkan pengalaman browsing anda dengan mem-personalisasi dan menentukan rekomendasi paket perjalanan yang kami pikir akan sesuai dengan selera anda.<br/>
      ●	Mencegah, mendeteksi, dan menyelidiki aktivitas yang dilarang atau dianggap ilegal, termasuk penipuan, dalam platform kami.<br/> 
      ●	Lokasi geografis umum untuk menyediakan konten local.<br/>
      ●	Menganalisis dan memahami kebutuhan pengguna kami dengan lebih baik dan menyediakan konten berdasarkan pilihan/minat mereka.<br/>
      ●	Berkomunikasi dengan pelanggan kami untuk peningkatkan layanan dan juga untuk mengirimkan update terbaru tentang UmraHajj, baik itu soal fitur dan konten yang akan datang, maupun penawaran khusus, promosi, dan bantuan dalam menggunakan layanan kami.
      </p>

      <b>Pembagian Informasi</b>
      <p>Di UmraHajj kami sangat menghargai privacy anda, oleh sebab itu kami hanya membagikan informasi kamu ke pihak-pihak di bawah ini:</p>
      <p>•	Perusahaan di bawah naungan UmraHajj <br/>
      UmraHajj membagikan informasi yang kami dapatkan dari anda ke Perusahaan yang berada di bawah naungan UmraHajj dengan tujuan untuk keperluan pemrosesan data untuk memahami kebutuhan pelanggan kami serta meningkatkan layanan kami. Saat menangani informasi personal anda, kami akan mengikuti aturan yang dijelaskan dalam Kebijakan Privasi ini.
      </p>
      <p>•	Penyedia Layanan UmraHajj <br/> menggunakan perusahaan dan agen lain untuk melakukan layanan atas nama kami dengan tujuan untuk membantu kami memberikan layanan terbaik untuk anda. Misalnya, UmraHajj bekerjasama dengan Penyedia Layanan seperti: pemasaran, komunikasi, periklanan, Infrastruktur, Layanan TI untuk mengoptimalkan layanan kami, untuk memproses dan membatasi penipuan sehubungan dengan transaksi kartu kredit atau metode pembayaran lainnya. Untuk menyediakan layanan semacam itu, Penyedia Layanan ini dapat memiliki akses ke informasi pribadi kamu yang kami miliki. UmraHajj tidak mengizinkan mereka untuk menggunakan atau mengungkapkan informasi pribadi anda kecuali yang berhubungan dengan penggunaan layanan mereka.
      </p>
       
            <b>Cookies And Internet Adversting</b>
            <p>UmraHajj dan Penyedia Layanan kami menggunakan cookie dan teknologi lainnya seperti web beacons dan pengidentifikasi iklan, dilatarbelakangi oleh beberapa alasan. Kami menggunakan teknologi ini untuk mempermudah anda dalam mengakses layanan kami dengan mengingat anda ketika anda kembali mengunjungi website kami. Guna menyediakan dan menganalisis layanan kami. Kami juga menggunakan cookie, serta pengenal iklan, untuk mempelajari lebih lanjut tentang anda dan juga minat anda. 
            <br/>Kami ingin anda tahu bahwa kami menggunakan teknologi ini di platforms kami, poin-poin di bawah ini akan menjelaskan jenis-jenis teknologi yang kami gunakan, seperti kegunaannya dan mengapa kami gunakan di platforms UmraHajj.</p>

            <b>Apa itu cookies ?</b>
            <p>Cookies adalah serangkaian teks yang tersimpan pada komputer kamu berdasarkan situs web yang kamu kunjungi. Cookies dapat digunakan untuk melacak kunjungan kamu selanjutnya di website kami. </p>

            <b>•	Mengapa UmraHajj Menggunakan Cookies?</b>
            <p>UmraHajj dan penyedia jasa lainnya menggunakan jenis-jenis cookies sebagai berikut:<br/>
            <br/>•	Cookies Penting: Cookie ini sangat penting digunakan dalam menyediakan situs web dan layanan online kami. Cookies Penting juga membantu kami untuk menegakkan Ketentuan Penggunaan kami, mencegah penipuan dan menjaga keamanan layanan kami.
            <br/>•	Cara Kerja dan kegunaan cookies: cookies ini membantu kami mempersonalisasi dan meningkatkan pengalaman online kamu dengan UmraHajj.
            <br/>•	Cookies iklan: Cookie ini sangat membantu dalam mengumpulkan informasi tentang tanggapan kamu terhadap iklan dan email, dan membantu kami dalam menayangkan iklan yang lebih relevan bagi anda. Jenis iklan ini disebut "Iklan berdasarkan minat".
            </p>
            
            <b>Logging</b>
            <p>Umrahajj logs all activity on its web sites for:</p>
            <li>System administration reasons, i.e. tracking faults with the sites.</li>
            <li>For planning purposes – to monitor effectiveness of campaigns and to keep track of the most visited destinations.</li>
            <p>This tracking will store the IP address of your computer and the pages you visit on our site. We will not associate this with any personal information and this information is only used for planning and troubleshooting. We use this information for our own purposes and do not pass this information on to third parties (with the exception of general trend information).</p>
			                      
            <b>Links To Other Websites</b> 
            <p>The Umrahajj website may contain links to other websites for ease of use. However, once you have clicked a link and left our website it should be noted that we do not have control over that website. Thus we are not responsible for the protection of any information you provide while visiting such a site. Please ensure that you read the privacy statement applicable to the website in question prior to providing personal information.</p> 
			
            <b>Policy Amendements</b> 
            <p>We reserve the right to update our privacy policy from time to time. You should check this page periodically to ensure that you are happy with any changes made by us.</p> 	
			
			
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
    
                    <div className="ask-content1">
                      <p> Q : Apa itu Umrahajj?</p>
                    </div>
                    <div  className="ask-content2">
                      <p> A : Umrahajj merupakan sebuah Marketplace Platform berbasis Mobile Application (Android & Ios) untuk Umrah di Indonesia. UmraHajj merupakan sebuah sub-business dari YAZ Ventures SDN BHD yang sudah berpengalaman di dunia bisnis digital.</p>
                    </div>
                    <div className="ask-content3">
                      <p>Q : Saya ingin memesan paket Umrah. Apakah Umrahajj menjual paket Umrah?</p>
                    </div> 
                    <div  className="ask-content2">
                      <p>A : Dengan Umrahajj, anda dapat membandingkan harga paket Umrah dari semua Penyelenggara Perjalanan Ibadah Umrah berizin yang terdaftar di Kementerian Agama. Setelah hasil pencarian keluar, anda dapat memilih Paket yang sesuai dengan kebutuhan Anda dan dapat langsung memesan paket tersebut melalui Umrahajj.co.</p>
                    </div> 
                    <div className="ask-content3">
                      <p>Q : Bagaimana cara memesan/booking paket Umrah lewat Umrahajj? Apakah saya bisa memesan langsung di kantor Umhrajj? Di mana kantor cabang Umrahajj di kota saya?</p>
                    </div>
                    <div  className="ask-content2">
                      <p>A : Anda dapat melakukan booking langsung melalui aplikasi UmraHajj yang tersedia untuk pengguna Android & Ios. Setelah melakukan pencarian, anda dapat langsung melakukan pemesanan dengan cara meng-klik tombol Pesan dan kami akan memandu Anda ke halaman pengisian data pemesan hingga melakukan pembayaran. Anda dapat mengunjungi Kantor Umrahajj.co di Jl. ……………</p>
                    </div>
                    <div className="ask-content3">
                      <p>Q : Bagaimana cara menghubungi Umrahajj.co?</p>
                    </div>  
                    <div  className="ask-content2">
                      <p>A : Untuk pertanyaan yang belum terjawab di panduan pemakaian maupun FAQ ini, Anda bisa menghubungi Umrahajj melalui berbagai jalur komunikasi resmi kami, baik melalui email di .......@Umrahajj.co maupun dengan cara menelepon kami, ke nomor ………………………. Untuk informasi lebih Lengkap, anda dapat melihat list kontak yang tersedia di fitur Hubungi Kami.</p>
                    </div>
                    <div className="ask-content3">
                      <p>Q : Produk dan Layanan</p>
                    </div>  
                    <div  className="ask-content2">
                      <p>A : Umrahajj berkomitmen untuk menyediakan paket perjalanan Umrah dari perusahaan tour and travel yang telah terverifikasi dan dapat dipercaya secara pelayanan dan kualitas untuk jamaah yang ingin melaksanakan ibadah Umrah sesuai dengan tuntunan Al-Quran dan Sunnah Rasulullah Saw.
                                        Di samping itu aplikasi Umrahajj juga memberikan layanan yang terbaik untuk jamaah demi menunjang kesempurnaan ibadah Umrah mereka. Umrahajj sendiri dilengkapi dengan fitur pencarian masjid terdekat, penunjuk arah kiblat, pengingat waktu sholat, restoran halal, dan sebagainya.</p>
                                  </div>
                    <div className="ask-content3">
                                        <p>Q : Kemudahan dan Keamanan Pembayaran</p>
                                    </div>  
                                    <div className="ask-content2">
                                        <p>A : Umrahajj menyediakan berbagai pilihan pembayaran melalui transfer Sesama/Antar Bank, Virtual Account, Payment Gateway hingga Internet Banking.
                                        </p>
                                    </div>
                                    <div className="ask-content3">
                                        <p>Q : Layanan 24 Jam</p>
                                    </div>  
                                    <div  className="ask-content2">
                                        <p>A : Kami akan senantiasa siap membantu anda dalam mendapatkan layanan terbaik di Umrahajj.
                                        </p>
                                    </div>
                                    <div className="ask-content3">
                                        <p>Q : Pemberian Peringkat Produk</p>
                                    </div>  
                    <div  className="ask-content2">
                                        <p>A : Umrahajj membantu pelanggan untuk mendapatkan paket terbaik dengan cara memberikan peringkat yang adil terhadap Mitra (Partners) kami dengan sistem scoring.
                                        </p>
                                    </div>
                                    <div className="ask-content3">
                                        <p>Q : Apakah Solusi yang diberikan / ditawarkan oleh Umrahajj.co?</p>
                                    </div>  
                                    <div className="ask-content2">
                                      <p>A : Umrahajj memberikan solusi kepada :
                                            Mitra Kami :  Pemanfaatkan Umrahajj.co sebagai media promosi dan perluasan akses pasar yang disediakan oleh Umrahajj.co terhadap paket-paket dan layanan yang disediakan oleh Penyelenggara Perjalanan Ibadah Umrah.
                                                                        
                                            Umrahajj Agent: Pemanfaatkan Umrahajj.co sebagai Mitra tanpa dipungut biaya apapun untuk mempromosikan paket perjalanan ibadah Umrah yang terdapat di Website umrahajj.co.
                                                                        
                                    Untuk pendaftaran sebagai Umrahajj agent silahkan klik link berikut : …………………………………….</p>
                                    </div>
    
                                    <div className="ask-content3">
                                        <p>Q : Apa Manfaat Membeli Paket Perjalanan Melalui Umrahajj.co ?</p>
                                    </div>  
                                    <div  className="ask-content2">
                                        <p>A : 1. Memiliki berbagai pilihan paket perjalanan dari berbagai Penyelenggara Perjalanan Ibadah Umrah.
                                            <br/>
                                        2. Dapat membandingkan harga setiap paket perjalanan yang tersedia di platform Umrahajj
                                            <br/>
                                        3. Menyajikan Paket Perjalanan dengan harga yang kompetitif.
                                            <br/>
                                        4. Mitra Penyelenggara Perjalanan Ibadah Umrah resmi terdaftar di Kementrian Agama dan pasti Keberangkatannya
                                        </p>
                                    </div>
                                    <div className="ask-content3">
                                        <p>Q : Mengapa Saya harus Menggunakan Layanan Umrahajj.co?</p>
                                    </div>  
                                
                                    <div  className="ask-content2">
                                        <p>A : <b>Pelayanan yang Berkualitas</b>
                                        <br/>
                                        Jamaah akan diberikan pelayanan sejak saat pendaftaran, kelengkapan administrasi, keberangkatan sampai dengan kembalinya ke negara asal.
                                        <br/>
                                        <b>Terpercaya</b>
                                        <br/>
                                        Sistem teknologi Umrahajj memberikan jaminan kepastian keberangkatan bagi para jamaah, karena anda dapat memonitoring progress kelengkapan dokumen anda.
                                        <br/>
                                        <b>Paket Umrah Terlengkap</b>
                                        <br/>Pelanggan dapat mencari dan membandingkan fasilitas dari seluruh paket Umrah yang tersedia dari berbagai Tour dan Travel Umrah.
                                        <br/>
                                        <b>Jaminan Keamanan Transaksi</b>
                                        <br/>Integritas kami dalam menjaga kerahasiaan data dan keamanan transaksi didukung oleh sistem keamanan Doku.
                                        </p>
                                    </div>
    
                    <div className="ask-content3">
                                        <p>Q : Apakah Umrahajj Menjual Paket Umrah Secara Langsung?</p>
                                    </div>  
                                    
                                    <div  className="ask-content2">
                                        <p>A : Umrahajj tidak menyediakan pembelian paket umrah secara langsung (offline). Segala jenis paket perjalanan yang tersedia di Platform kami merupakan milik partner Umrahajj yang memasarkan produk mereka melalui Umrahajj.co dan Umrahajj menyediakan pembelian secara online melalui website Umrahajj.co dan juga melalui UH Agent.</p>
                                    </div>
    
                                    <div className="ask-content3">
                                        <p>Q : Umrahajj Agent</p>
                                    </div>  
                                        
                                    <div  className="ask-content2">
                                        <p>A : Bagaimana caranya saya bisa menjadi Umrahajj Agent?
                                        Yang harus Anda lakukan adalah klik pada ‘Create Account’ link pada halaman utama kami dan silahkan mengisi biodata lengkap Anda. Setelah Anda mengkonfirmasi account Anda, Anda akan mendapatkan informasi mengenai waktu, tempat dan materi training untuk menjadi UH Agent dengan segala keuntungannya tanpa dipungut biaya apapun.
                                        </p>
                                    </div>
    
                                    <div className="ask-content3">
                                        <p>Q : Pembatalan/Perubahan Data Cancellation/Pembatalan, Refund, Pengubahan Jadwal dan Pengubahan Nama Pemesan</p>
                                    </div>  
                                            
                                    <div  className="ask-content2">
                                        <p>A : <b>Bagaimana cara membatalkan paket Umrah yang sudah saya pesan?</b>
                                        <br/>
                                            Anda dapat melakukan pembatalan paket Umrah dengan menghubungi call center umrahajj.co dengan tetap memperhatikan syarat dan ketentuan pembatalan paket Umrah dari PPIU bersangkutan.
                                        <br/>
                                        <b>Bagaimana cara menghubungi umrahajj.co?</b>
                                        <br/>
                                        Untuk pertanyaan yang belum terjawab di panduan pemakaian maupun FAQ ini, Anda bisa menghubungi Umrahajj melalui berbagai jalur komunikasi resmi kami, baik melalui email di .......@Umrahajj.co maupun dengan cara menelepon kami, ke nomor ………………………. Untuk informasi lebih Lengkap, anda dapat melihat list kontak yang tersedia di fitur Hubungi Kami.</p>
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

export default Aturanpengguna;