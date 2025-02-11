import React ,{useState} from 'react';
import PropTypes from 'prop-types';
import Button02 from '../button/Button02';

import './styles.scss'

About1.propTypes = {
    data : PropTypes.array,
};

function About1(props) {

    const {data} = props;

    const [dataBlock] = useState(
        {
            heading: 'The Solution: Radar AI - Your On-chain Guardian',
            desc: 'Radar AI empowers you to navigate the cryptoverse with confidence. We leverage the power of blockchain transaction analysis and machine learning to provide actionable insights, acting as your on-chain guardian.<br/>By analyzing vast amounts of on-chain data, Radar AI identifies red flags associated with rug pulls and honeypots, protecting you from deceitful schemes. Our advanced algorithms track whale activity and monitor trading patterns, helping you anticipate potential price movements and make informed investment decisions. Additionally, Radar AI gauges investor sentiment through on-chain transaction volume, providing valuable context for you to understand the overall market mood.'

        }
    )



    const [dataCounter] = useState([
        {
            id: 1,
            title: 'Total Iteam',
            number: '2240',
        },
        {
            id: 2,
            title: 'Profiles Whitelisted',
            number: '1000',
        },
    ])
    return (
        <section className="tf-section tf-about">
                <div className="tf-container">
                    <div className="row ">   
                        <div className="col-md-12 ">
                            <div className="icon">
                                <svg width="208" height="208" viewBox="0 0 208 208" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_f_2337_5328)">
                                    <path d="M88.0594 196L88.0594 142.485L50.2119 180.333L27.6674 157.788L65.5149 119.941L12 119.941L12 88.0594L65.5149 88.0594L27.6674 50.2119L50.2119 27.6673L88.0594 65.5148L88.0594 12L119.941 12L119.941 65.5149L157.788 27.6673L180.333 50.2119L142.485 88.0594L196 88.0594L196 119.941L142.485 119.941L180.333 157.788L157.788 180.333L119.941 142.485L119.941 196L88.0594 196Z" fill="url(#paint0_linear_2337_5328)"/>
                                    </g>
                                    <defs>
                                    <filter id="filter0_f_2337_5328" x="0" y="0" width="208" height="208" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                    <feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_2337_5328"/>
                                    </filter>
                                    <linearGradient id="paint0_linear_2337_5328" x1="196" y1="104" x2="12" y2="104" gradientUnits="userSpaceOnUse">
                                    <stop offset="0" stopColor="var(--primary-color35)"/>
                                    <stop offset="1" stopColor="var(--primary-color35)" stopOpacity="0"/>
                                    </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                           <div className="icon-2">
                            <svg width="302" height="302" viewBox="0 0 302 302" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_f_2337_5282)">
                                <path d="M234.678 38.4808L198.329 110.138L274.714 85.1672L289.589 130.668L213.203 155.638L284.86 191.988L263.205 234.677L191.548 198.328L216.518 274.713L171.018 289.588L146.047 213.202L109.698 284.859L67.0084 263.204L103.358 191.547L26.9721 216.517L12.0979 171.017L88.4837 146.046L16.8268 109.697L38.4818 67.0074L110.139 103.357L85.1682 26.9711L130.669 12.0969L155.639 88.4827L191.989 16.8258L234.678 38.4808Z" fill="url(#paint0_linear_2337_5282)"/>
                                </g>
                                <defs>
                                <filter id="filter0_f_2337_5282" x="0.0976562" y="0.0966797" width="301.49" height="301.491" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_2337_5282"/>
                                </filter>
                                <linearGradient id="paint0_linear_2337_5282" x1="27.6543" y1="88.352" x2="274.032" y2="213.333" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stopColor="var(--primary-color35)"/>
                                <stop offset="1" stopColor="var(--primary-color35)" stopOpacity="0"/>
                                </linearGradient>
                                </defs>
                                </svg>
                           </div>
                                       
                            <div className="tf-heading wow fadeInUp">
                                <h2 className="heading">{dataBlock.heading}</h2>
                                <p className="sub-heading">{dataBlock.desc}</p>
                            </div>

                            <div className="counter-wrap wow fadeInUp" data-wow-delay="0.2s">
                                {
                                    dataCounter.map(idx => (
                                        <div key={idx.id} className="tf-counter ">
                                            <h6>{idx.title}</h6>
                                            <div className="content">
                                                <span className="counter-number" data-to="2240" data-speed="2000" >{idx.number}</span>+
                                            </div>
                                        </div>  
                                    ))
                                }
                               
                            </div>

                        </div>
                        {
                            data[1].map(idx => (
                                <div key={idx.id} className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="tf-step tf-height wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="step-title">
                                            <div className="sub-number">
                                                0{idx.id}
                                            </div>
                                            <h3>{idx.title}</h3>
                                        </div>
                                        <p>{idx.text}</p>
                                    </div>
                                </div>
                            ) )
                        }
                         <div className="tf-container">
                <div className="row tf_about_sec2">
                    <div className="col-xl-6 col-lg-5 col-md-12 ">
                        <div className="tf-heading style-2 wow fadeInUp">
                            <h2 className="heading">Problem: The Wild West of Altcoins</h2>
                            <p className="sub-heading">The world of altcoins, while brimming with potential, can feel like the Wild West for investors. Here, a lack of regulation and established structures creates a breeding ground for challenges:</p>
                        </div>

                        <div className="counter-wrap">
                            <div className="tf-counter wow fadeInUp">
                                <h6>Total Iteam</h6>
                                <div className="content">
                                    <span className="counter-number" data-to="2240" data-speed="2000" >2240</span>+
                                </div>
                            </div>  
                            <div className="tf-counter wow fadeInUp">
                                <h6>Profiles Whitelisted</h6>
                                <div className="content">
                                    <span className="counter-number" data-to="1000" data-speed="2000" >1000</span>+
                                </div>
                            </div>  
                        </div>

                        <Button02 title='READ MORE' path='/about-v1' />

                    </div> 
                  
                    <div className="col-xl-6 col-lg-7 col-md-12">
                        <div className="row">
                            {
                                data[0].map(idx => (
                                    <div key={idx.id} className="col-md-6">
                                        <div className="tf-step wow fadeInUp" data-wow-delay="0.2s">
                                            <div className="step-title">
                                                <div className="sub-number">
                                                    0{idx.id}
                                                </div>
                                                <h3>{idx.title}</h3>
                                            </div>
                                            <p>{idx.text}</p>
                                        </div>
                                    </div>
                                ))
                            }   

                        </div>
                    </div>
                    
                </div>
            </div>
                        
                    </div>
                </div>
            </section>
    );
}

export default About1;