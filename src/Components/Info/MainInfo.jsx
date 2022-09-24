import hoursPic from './hours.svg'
import Info from './Info'
import locationPic from './location.svg'
import reserve from './reserve.svg'

const MainInfo = () => {
    return (
        <section className='info_section'>
            <div className='container'>
                <div className='container_flex'>
                    <Info
                        img={locationPic}
                        title='Locate Us'
                        subtitle='Dushanbe Markaz'
                    />
                    <Info
                        img={hoursPic}
                        title='Open Hours'
                        subtitle='Mon To Fri 9:00 AM - 10:00 PM'
                    />
                    <Info
                        img={reserve}
                        title='Reservation'
                        subtitle='restaurant@gmail.com'
                    />
                </div>
            </div>
        </section>
    )
}

export default MainInfo