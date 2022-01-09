import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function InstructorDesc(){
    return(
        <section id="instructors_teachers">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                            <div class="navbar_btn text-center d-md-none">
                                <a href="#"><StaticImage src="../../images/Button-book.png" alt="icon" />ব্রাউজ কোর্স <i class="fa fa-angle-down ps-2"></i></a>
                            </div>
                        <div class="facilities_heading ">
                            <h2>ইন্সট্রাক্টর ও শিক্ষকবৃন্দ</h2>
                            <p>আশ্চর্যের কৃতজ্ঞতা থেকে আমরা আমাদের শিক্ষার্থীদেরকে আমাদের জোব প্লেসমেন্ট সেল (জেপিসি) এর মাধ্যমে স্নেহ করি। শিক্ষার্থীদের ক্যারিয়ার পছন্দের জন্য কাজ করা একটি ক্যারিয়ার প্লেসমেন্ট সেল তার জন্মের পর থেকেই ডিজিটাল বাংলাদেশ গড়ার চ্যালেঞ্জ মোকাবেলায় এগিয়ে চলেছে। শিক্ষার্থীরা আমাদের জব প্লেসমেন্ট সেল দ্বারা আয়োজিত সেমিনারগুলির মাধ্যমে কর্পোরেট বিশ্বের চ্যালেঞ্জগুলি মোকাবেলা করতে সক্ষম হচ্ছে।</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="instructors_item instructors_item_1">
                            <div class="image">
                                <StaticImage src="../../images/teachers/item-1.png" alt="image" />
                            </div>
                            <div class="text">
                                <h4>৩০ <span>ডিপার্টমেণ্ট</span></h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="instructors_item instructors_item_2">
                            <div class="image">
                                <StaticImage src="../../images/teachers/item-2.png" alt="image" />
                            </div>
                            <div class="text">
                                <h4>৩০ <span>ডিপার্টমেণ্ট</span></h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="instructors_item instructors_item_3">
                            <div class="image">
                                <StaticImage src="../../images/teachers/item-3.png" alt="image" />
                            </div>
                            <div class="text">
                                <h4>৩০ <span>ডিপার্টমেণ্ট</span></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}