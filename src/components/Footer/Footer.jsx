import { worldMap, paper, insta } from '../../assets/index'
import Input from '../Input/Input'
import Button from '../Button/Button'
import UnorderedList from '../UnorderedList/UnorderedList'

/*eslint-disable */
const Footer = ({
    className
}) => {
    return (
        <footer className={`${className} mx-auto`}>

            <div className='bg-[#666666] flex items-center justify-evenly flex-wrap py-8 space-x-12'>


                <div className=' text-white flex flex-col items-left justify-center'>
                    <div className='flex space-x-6'>
                        <h1 className='text-3xl my-4'>News Letter Sign up</h1>
                        <img src={paper} alt="paper" />
                    </div>
                    <h2>Join our network today, and keep it up!</h2>
                </div>



                <div className='flex w-2/5 flex-wrap h-14'>
                    <Input
                        placeholder='Enter Your Email'
                        className='w-3/4 px-2'
                    />
                    <Button
                        className='text-white bg-primary w-1/4 border-2 border-primary hover:text-black'
                        label='Submit' />
                </div>


            </div>




            <div
                style={{ backgroundImage: `url(${worldMap})` }}
                className='MAIN bg-[#EBEBEB] py-8 flex flex-wrap
                md:px-10 lg:px-36'>


                <div className='LEFT-MAIN w-3/4'>

                    <div className='LEFT-TOP flex flex-wrap items-center'>

                        <div className='SUB-LEFT w-1/3'>
                            <h1 className='py-4 md:text-3xl lg:text-4xl'>Browse GSC</h1>

                            <UnorderedList
                                items={['About GSC', 'Explore GSC', 'GSC Services', 'Careers', 'Counselling sell', 'Career Guidance', 'Contact Us']}
                                classUl='space-y-3'
                                classList='hover:text-primary'
                            />

                        </div>

                        <div className='SUB-RIGHT w-2/3 border-r-2 border-[#BCBCBC]'>
                            <h2 className='font-bold py-3'>Head office - Kerala</h2>
                            <ul className='space-y-2'>
                                <li>CC 36 D9, Kaloor Tower, Opp.A.J.Hall, K.K.Road,</li>
                                <li>Kaloor, Kochi-682017, Kerala, INDIA.</li>
                                <li>+91 484 4046660</li>
                                <li>+91 484 4026662</li>
                                <li>info@globalstudycentre.org</li>
                            </ul>
                        </div>

                    </div>


                    <div className='LEFT-BOTTOM my-10 text-primary'>
                        <h1 className='text-xl'>GSC BRANCHES</h1>

                        <UnorderedList
                            items={['Chennai', 'Kochi', 'New Delhi', 'Banaglore', 'Coimbatore', 'Trichy', 'Gujarat', 'Vijayawada', 'Ludhiyana', 'Ahmedabad', 'Vadodara', 'Hyderabad', 'Indore', 'Noida', 'Kaathmandu', 'Kolkata', 'Gurudaspur', 'Haryana', 'Chandigarh', 'Mumbai', 'Germany', 'Saudi Arabia']}
                            classUl='flex flex-wrap mt-2 text-black'
                            classList='pr-9 py-1 mt-2 hover:text-primary'
                        />

                    </div>


                </div>



                <div className='RIGHT-MAIN md:pl-7 lg:pl-16 block w-1/4'>
                    <h1 className='py-4 mb-3 md:text-3xl lg:text-4xl'>Follow us on</h1>

                    <div className='flex space-x-2 my-3'>
                        <img src={insta} alt="yelp" />
                        <img src={insta} alt="yelp" />
                    </div>

                    <h1 className='my-8 md:text-3xl lg:text-4xl'>Apply Now</h1>

                    {/* special animated buttons */}
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>


                </div>
            </div>


            <div className='bg-[#666666]'>
                <p className='text-white text-sm text-center py-3 leading-9'><span className='text-bold'>Attention:</span>For any information found from any "similar named websites and logos Global Study Centre is not responsible for and does not endorse or accept responsibility over the contents, opinions expressed or use of any of those websites.We control and operate the Web Site from our offices mentioned on this website alone.</p>
                <p className='text-white text-sm text-center pb-4'>© 2016 Global Study Centre Pvt. Ltd</p>
            </div>




        </footer>
    )
}

export default Footer