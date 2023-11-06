import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/pagination'
import patientAvatar from '../../assets/images/patient-avatar.jpeg'
import { HiStar } from 'react-icons/hi'

function Testimonial() {
    return (
        <div className='mt-[30px] lg:mt-[55px]'>

            <Swiper modules={[Pagination]} spaceBetween={30} slidesPerView={1} pagination={{ clickable: true }} breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            }}>
                <SwiperSlide>
                    <div className='py-[30px] px-5 rounded-[13px]'>
                        <div className='flex items-center gap-[13px]'>
                            <img src={patientAvatar} alt="" width="100" height="100" />
                            <div className='text-[18px] leading-[30px] font-semibold text-headingColor '><h4>Kairat Nurtas</h4>
                                <div className='flex items-center gap-[2px]'>
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                </div>
                            </div>
                        </div>
                        <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>"Auyrmaidy zhurek, auyrmaidy Medikerimdi qoldansandar. Men olardyń medısınalyq qyzmetterin paıdalandym. Olar óte jaqsy emdeıdi jáne eń jaqsy medısınalyq qyzmetterdi usynady."</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='py-[30px] px-5 rounded-[13px]'>
                        <div className='flex items-center gap-[13px]'>
                            <img src={patientAvatar} alt="" width="100" height="100" />
                            <div className='text-[18px] leading-[30px] font-semibold text-headingColor '><h4>Kairat Nurtas</h4>
                                <div className='flex items-center gap-[2px]'>
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                </div>
                            </div>
                        </div>
                        <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>"Auyrmaidy zhurek, auyrmaidy Medikerimdi qoldansandar. Men olardyń medısınalyq qyzmetterin paıdalandym. Olar óte jaqsy emdeıdi jáne eń jaqsy medısınalyq qyzmetterdi usynady."</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='py-[30px] px-5 rounded-[13px]'>
                        <div className='flex items-center gap-[13px]'>
                            <img src={patientAvatar} alt="" width="100" height="100" />
                            <div className='text-[18px] leading-[30px] font-semibold text-headingColor '><h4>Kairat Nurtas</h4>
                                <div className='flex items-center gap-[2px]'>
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                </div>
                            </div>
                        </div>
                        <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>"Auyrmaidy zhurek, auyrmaidy Medikerimdi qoldansandar. Men olardyń medısınalyq qyzmetterin paıdalandym. Olar óte jaqsy emdeıdi jáne eń jaqsy medısınalyq qyzmetterdi usynady."</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='py-[30px] px-5 rounded-[13px]'>
                        <div className='flex items-center gap-[13px]'>
                            <img src={patientAvatar} alt="" width="100" height="100" />
                            <div className='text-[18px] leading-[30px] font-semibold text-headingColor '><h4>Kairat Nurtas</h4>
                                <div className='flex items-center gap-[2px]'>
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                </div>
                            </div>
                        </div>
                        <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>"Auyrmaidy zhurek, auyrmaidy Medikerimdi qoldansandar. Men olardyń medısınalyq qyzmetterin paıdalandym. Olar óte jaqsy emdeıdi jáne eń jaqsy medısınalyq qyzmetterdi usynady."</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Testimonial