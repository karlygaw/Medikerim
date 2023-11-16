

import DoctorCard from './../../components/Doctors/DoctorCard';
import { doctors } from './../../assets/data/doctors';
import Testimonial from '../../components/Testimonial/Testimonial';
const Doctors = () => {
    return <>
    <section className='bg-[#fff9ea]'>
        <div className="contaner text-center">
            <h2 className='heading'>Därıgerdı tabu</h2>
            <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
                <input type='search' className='py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor' placeholder='Darigerdi Izdeu' />
                <button className='btn mt-0 rounded-[0px] rouinded-r-md'>
                    Izdeu
                </button>
            </div>
        </div>
    </section>
    <section>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>{doctors.map((doctor)=> <DoctorCard key={doctor.id} doctor={doctor}/>)}</div>
    </section>

    <section>
            <div className="container">
                <div className="xl:w-[470px] mx-auto">
                    <h2 className="heading text-center">Bızdıñ pacientter ne aitady?</h2>
                    <p className="text__para text-center">Barlyǵyna álemdik deńgeıdegi qamqorlyq. Bizdiń densaýlyq saqtaý júıesi teńdesi joq bilikti medısınalyq kómekti usynady.
                    </p>
                </div>
                <Testimonial />
            </div>
        </section>
    </>;
};

export default Doctors;