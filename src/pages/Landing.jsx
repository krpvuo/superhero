import { Swiper, SwiperSlide } from 'swiper/react';
import { Wrapper } from '../assets/wrappers/Landing';
import { Pagination, Autoplay } from 'swiper/modules';
import { useQuery } from '@tanstack/react-query';
import { customFetch } from '../utils/utils';
import { Loader } from './components/Loader';
import emptyImg from '../assets/images/empty.jpg'

import 'swiper/css';
import 'swiper/css/pagination';


export const Landing = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    const { isLoading, data, isError } = useQuery({
        queryKey: ['character'],
        queryFn: async () => {
            try {
                const respone = await customFetch.get(`/search/fa`)
                const { data } = respone

                return data
            } catch (error) {
                return { data: [] }
            }
        }
    })

    if (isError) {
        return (
            <main className='image-container'>
                <p>Something went wrong</p>
            </main>
        );
    }


    return (
        <Wrapper>
            {isLoading ? (
                <Loader />
            ) :
                <div className='page'>
                    <div className='ladning__content'>
                        <div className="landing__content-description">
                            <h2>superhero Database</h2>
                            <p>Find any character and know anything about them for free</p>
                        </div >
                        <Swiper
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={pagination}
                            modules={[Autoplay, Pagination]}
                            className="mySwiper"
                        >
                            {data.results.map((character) => {
                                return (
                                    <SwiperSlide key={character.id}>
                                        <img src={character.image.url} alt={character.name} onError={(e) => { e.target.src = emptyImg }} />
                                        {console.log(character.image.url)}
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                        <div className="landing__content-info">
                            <div className="landing__content-info-img">
                                <img src={emptyImg} alt="info" />
                            </div>
                            <div className="landing__content-description">
                                <h2>Find out who is the strongest</h2>
                                <p>Every superhero has their stats of strength, combat, speed etc.</p>
                            </div>
                        </div>
                    </div >
                </div >
            }
        </Wrapper >
    );
}