import React, {useEffect} from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'

const ImageTeaser = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <section className="image-teaser">
            <div className="container">
                <div className="image-teaser__inner">
                    <div className="image-teaser__media">
                        <img src={'https://firebasestorage.googleapis.com/v0/b/das-bleibt.appspot.com/o/image-teaser.jpg?alt=media&token=e38d03d7-482c-4625-919a-0590db527a47'} alt="" />
                        <img src={'https://firebasestorage.googleapis.com/v0/b/das-bleibt.appspot.com/o/image-teaser1.jpg?alt=media&token=aea335d8-2c37-41c5-b19f-0a725e40fc0e'} alt="" />
                    </div>
                    <div className="image-teaser__desc" data-aos="fade-up">
                        <h4 className="image-teaser__title">What stays, is what counts.</h4>
                        <p className="image-teaser__text">A holiday in Schladming-Dachstein can be many things. Full of adventure, full of excitement and adrenaline. Or soothing, calming and relaxing. In any case, it’s something that always stays in your memory.</p>
                        <p className="image-teaser__text">Our house located in the centre of Schladming are the ideal base from which to explore the region in all its variety, to spend quality time with friends and family, to be active, or to just do things for which you otherwise never have
                            the time. Like nothing, for example.</p>
                        <p className="image-teaser__text">Welcome to das bleibt**** in Schladming-Dachstein</p>
                        <p className="image-teaser__sign">
                            <span className="link__arrow"></span> Your family
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ImageTeaser