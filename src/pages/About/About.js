import React from 'react';
import murshed from '../../images/murshedul.jpg';

const About = () => {
    return (
        <div className='container py-5'>
            <h2 className='text-center my-4'>About Me</h2>
            <div className='row row-cols-1 row-cols-md-2'>
                <div className='col'>
                    <img className='w-100 rounded' src={murshed} alt='Murshedul Karim' />
                </div>
                <div className='col'>
                    <h3>Murshedul Karim</h3>
                    <p><strong>Address: </strong>Hadinagar, Fatikchhari, Chattagram</p>
                    <p><strong>Study: </strong></p>
                    <p>
                        <span>Fazil at Jamea Ahmadia Sinnia Alia</span><br />
                        <span>Honours at Chattagram College</span>
                    </p>
                    <hr />
                    <h4 className='text-center'>My Goal</h4>
                    <p>I have a goal to establish my own career, which is to be a proper web developer and utilise my devleping skills in right place in right time. To achieve the goal I'm now doing a course name Complete Web Development Course by Programming Hero. I will keep continue doing the more practice I can according to Program Hero's instructions. I will learn more new things about web depeloping and other sevices to upgrade my skills, which help to turn me into properly skilled developer and will take me to a right place to establish my career. Hope I will be success in this whole journey.</p>
                </div>
            </div>
        </div>
    );
};

export default About;