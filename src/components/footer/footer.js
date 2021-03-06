import { faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeOpen, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'
import React from "react"

const Footer = ()=>{
    return(
        <footer>
            <section id="footer">
                <StaticImage class="footer_left img-fluid" src="../../images/footer-dots.png" alt="image" />
                <StaticImage class="footer_right img-fluid" src="../../images/footer-dots.png" alt="image" />
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="footer_heading">
                                <h2>তাই আর অপেক্ষা কেনো?</h2>
                                <p>এই কোর্সে দুটি পদ্ধতিতে ক্লাস হবে, অফলাইন (সরাসরি ইনিষ্টিটিউটে ), অনলাইন (লাইভ ক্লাস) তুমি যে
                                    কোন একটি পদ্ধতিতে ভর্তি হতে পারো </p>
                                <div class="footer_btn">
                                    <Link to="/free-seminar">জয়েন ফ্রি সেমিনার</Link>
                                    <Link to="/our-courses">ব্রাউজ কোর্স</Link>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-6">
                            <div class=" footer_item_1">
                                <h5>যোগাযোগ</h5>
                                <ul>
                                    <li>
                                        <div class="footer_icon">
                                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                                        </div>
                                        <div class="footer_text">
                                            <span>হেড অফিস :</span>
                                            <span>মমতাজ প্লাজা (৪র্থ তালা)</span>
                                            <span>বাড়ি # ০৭, রোড # ০৪</span>
                                            <span>ধানমন্ডি,ঢাকা-১২০৫</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="footer_icon">
                                            <FontAwesomeIcon icon={faPhoneAlt} />
                                        </div>
                                        <div class="footer_text">
                                            <span><Link to="tel:+৮৮০ ১৬২৪৬৬৬০০০">+৮৮০ ১৬২৪৬৬৬০০০</Link></span>
                                            <span><Link to="tel:+৮৮০ ১৬২৪৮৮৮৪৪৪">+৮৮০ ১৬২৪৮৮৮৪৪৪</Link></span>
                                            <span><Link to="tel:+৮৮০ ১৯৬৬১৭৭১৭৭">+৮৮০ ১৯৬৬১৭৭১৭৭</Link></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="footer_icon">
                                            <FontAwesomeIcon icon={faEnvelopeOpen} />
                                        </div>
                                        <div class="footer_text">
                                            <span><a href="mailto:info@creativeitinstitute.com">info@creativeitinstitute.com</a></span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-md-3 col-sm-6">
                            <div class="footer_item footer_item_2">
                                <h5>কুইক লিংক</h5>
                                <ul>
                                    <li><Link to="/about-us">আমাদের সম্পর্কে</Link></li>
                                    <li><Link to="#">গ্যালারি</Link></li>
                                    <li><Link to="/instructors-teachers">ইন্সট্রাক্টর ও শিক্ষকবৃন্দ</Link></li>
                                    <li><Link to="#">ফিডবেক</Link></li>
                                    <li><Link to="/success-story">ফ্রিল্যান্সিং সাকসেক</Link></li>
                                    <li><Link to="/contact-us">যোগাযোগ</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-md-3 col-sm-6">
                            <div class="footer_item footer_item_2">
                                <h5>কোর্স</h5>
                                <ul>
                                    <li><Link to="#">গ্রাফিক্স ডিজাইন</Link></li>
                                    <li><Link to="#">মোশন গ্রাফিক্স</Link></li>
                                    <li><Link to="#">ইন্টেরিয়র ডিজাইন</Link></li>
                                    <li><Link to="#">অ্যাপ ডেভেলপমেন্ট</Link></li>
                                    <li><Link to="#">থ্রিডি এ্যানিমেশন</Link></li>
                                    <li><Link to="#">ডিজিটাল মার্কেটিং</Link></li>
                                </ul>

                            </div>
                        </div>

                        <div class="col-md-2 col-sm-6">
                            <div class="footer_item footer_item_2">
                                <h5>কুইক লিংক</h5>
                                <ul>
                                    <li><Link to="/about-us">আমাদের সম্পর্কে</Link></li>
                                    <li><Link to="#">গ্যালারি</Link></li>
                                    <li><Link to="#">জব প্লেসমেন্ট</Link></li>
                                    <li><Link to="#">ফিডবেক</Link></li>
                                    <li><Link to="/success-story">ফ্রিল্যান্সিং সাকসেক</Link></li>
                                    <li><Link to="/contact-us">যোগাযোগ</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="row copy">
                                <div class="col-md-4 col-sm-6 padding_0">
                                    <div class="footer_logo">
                                        <StaticImage src="../../images/footer2.png" alt="Logo" />
                                    </div>
                                </div>
                                <div class="col-md-4 copy_text_sm_last">
                                    <div class="copy_text">
                                        <p>Copyright &copy; 2021 Creative IT Institute. </p>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-6">
                                    <div class="copy_social_link">
                                        <Link to="#"><FontAwesomeIcon icon={faFacebookF} /></Link>
                                        <Link to="#"><FontAwesomeIcon icon={faLinkedinIn} /></Link>
                                        <Link to="#"><FontAwesomeIcon icon={faTwitter} /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    )
}
export default Footer
