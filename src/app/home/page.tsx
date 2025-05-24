import React from 'react'
import Sectors from "@/components/Sectors";
import Intro from "@/components/Intro";
import Project from "@/components/Project";
import TextImage from "@/components/TextImage";
import Contact from '@/components/Contact';
import MainContact from '@/components/MainContact';

function Home() {
    return (
        <div className='bg-white'>
            <Intro />
            <Sectors />
            <Project />
            <TextImage
                topPara='Modern Eco-conscious Architecture for your Home'
                title='Work with our residential architects to create a bespoke property from the ground up.'
                descriptionOne='Our Berkhamsted-based residential architects design for you and with you, creating exceptional bespoke
          homes tailored exclusively to your requirements. We’re not confined to a particular style or method and
          our primary goal is to create a home or property that suits you and looks and feels fantastic. Through
          collaborative architectural design, we design contextual modern homes that stand the test of time with a
          focus on conserving energy and sustainability.'
                descriptionTwo='Although based in the heart of Berkhamsted, Pinchin Architects works on projects through Hertfordshire,
          London, and the Home Counties. This includes luxury renovations in the beautiful town of
          Harpenden, affordable housing developments in
          Watford, and sustainable new-builds in the city of
          St Albans to name but a few. Each of our clients benefits
          from our full scope of architectural services, such as our initial consultations and more involved design
          sessions.'
                linkHref='/about'
                linkText='Learn More'
            />
            <Sectors />
            <MainContact />
        </div>
    )
}

export default Home