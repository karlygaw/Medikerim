import React from 'react';
import aboutImg from '../../assets/images/about1.png';
import aboutCardImg from '../../assets/images/about-card1.png';
import { Link } from 'react-router-dom';

const About = () => {
    return <section>
        <div className='container'>
            <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row ">
                {/* ====== about img ========*/}
                <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
                    <img src={aboutImg} alt="" />
                    <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] roght-[-30%] md:roght-[-7%] lg:right-[22%] ">
                        <img src={aboutCardImg} alt="" />
                    </div>
                </div>

                {/* ======== about content ======= */}
                <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
                    <h2 className='heading'>Eñ jaqsy ūlttardyñ bırı bolğanyn maqtan tūtamyn</h2>
                    <p className='text__para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur vitae, porro eos obcaecati harum odit similique debitis, nobis eaque accusantium iusto earum quo vel. Odit voluptate voluptatum ea iste adipisci.</p>
                    <p className='text__para mt-[30px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur vitae, porro eos obcaecati harum odit similique debitis, nobis eaque accusantium iusto earum quo vel. Odit voluptate voluptatum ea iste adipisci.</p>
                    <Link to='/'><button className='btn'>Tolygyraq</button></Link>
                </div>
            </div>
        </div>
    </section>
};

export default About;