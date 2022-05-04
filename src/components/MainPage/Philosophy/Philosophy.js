import React, {useEffect} from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'

const OurPhilosophy = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <section className="philosophy" data-aos="fade-up">
            <div className="container">
                <div className="philosophy__inner">
                    <h4 className="philosophy__title">Our philosophy</h4>
                    <p className="philosophy__text">A feeling, a scent, a moment. A laugh, an mmm…, a yes. Arrive, breathe in, breathe out, sleep through the night. Family, love, time and more time. Breakfast in bed, breakfast at twelve, breakfast for two. An excursion, a sunny day, a Sunday
                        on a Monday. What stays? Everything stays. If you stay at das bleibt.</p>
                    <p className="image-teaser__sign">
                        <span className="link__arrow"></span> Your family
                    </p>
                </div>
            </div>
        </section>
    )
}
export default OurPhilosophy