import React from 'react'
import SkillsCard from '../Layout/SkillsCard'

const About = () => {

    const skill1 = "w-11/12"
    const skill2 = "w-2/3"
    const skill3 = "w-1/2"
    const skill4 = "w-3/4"


    return (
        <div className='min-h-screen flex flex-col justify-around lg:gap-8 lg:px-32 px-5 bg-backgroundColor'>
            <div className='mt-16'>
                <h1 className='text-4xl font-semibold text-center lg:mt-2'>About Me</h1>
            </div>

            <div className='mt-10'>
                <div className='mb-10'>
                    <h2 className='text-3xl font-semibold'>I'm Manish Mehta</h2>
                    <p className='mt-4 lg:mt-2'>A continuous learner, I stay abreast of industry trends and emerging technologies to drive innovation and efficiency. My adaptability and problem-solving acumen make me well-equipped to tackle dynamic challenges.</p>
                </div>
                <div>
                    <h2 className='text-3xl font-semibold'>My Skills</h2>
                    <SkillsCard title='Html' width={skill1} val="95%" />
                    <SkillsCard title='Css3' width={skill4} val="70%" />
                    <SkillsCard title='JavaScript' width={skill3} val="50%" />
                    <SkillsCard title='React.js' width={skill2} val="60%" />
                    <SkillsCard title='Node.js' width={skill3} val="50%" />
                    <div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About