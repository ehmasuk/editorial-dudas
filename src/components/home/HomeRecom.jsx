// import Swiper core and required modules
import { Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

const homeRecomSlideInfo = [
    {
        title: "milk",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtmrkeffNz2vFO8s5PTN1213FH2ObwsOSWfS-40LPXRC7GG-4-K4jLi-TO4qQ7rOGIItw&usqp=CAU",
        price: "83",
    },
    {
        title: "cannot",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbeICSmHOfxzt_H_X2xtX8hMjkOxBlRDcecdUcKxmxRdehYdv7rqjk3BMdcMYPxaxLHdo&usqp=CAU",
        price: "172",
    },
    {
        title: "while",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmi37DN0OHStICdWQcOmpa68VQ9UMDIiDODGRa-6J00olnDwwUH056Ap2r24vJDMsnNmk&usqp=CAU",
        price: "114",
    },
    {
        title: "now",
        img: "https://www.creativeparamita.com/wp-content/uploads/2023/05/Flesh-Eaters-Among-Us.jpg",
        price: "124",
    },
    {
        title: "way",
        img: "https://www.creativeparamita.com/wp-content/uploads/2023/10/Night-of-the-Living-Dread-442x705.jpg",
        price: "57",
    },
    {
        title: "customs",
        img: "https://i.pinimg.com/474x/c9/af/8d/c9af8d043890f449e31f8d7105ddc18a.jpg",
        price: "188",
    },
    {
        title: "huge",
        img: "https://thebookcoverdesigner.com/wp-content/uploads/2024/02/t-extinction-of-heavens-324x519.jpg",
        price: "156",
    },
    {
        title: "orange",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrWuc4OoNt0cduwCuvt0rfs8Kxja3P9tY-GYLot22vl0rn69SmuwmwmfAmWY7GbVzu2IA&usqp=CAU",
        price: "143",
    },
    {
        title: "leave",
        img: "https://i.pinimg.com/736x/17/f2/99/17f299155513b393dc9ee7c865da97e1.jpg",
        price: "188",
    },
    {
        title: "owner",
        img: "https://m.media-amazon.com/images/I/51BA6CTNqeL.jpg",
        price: "124",
    },
];

function HomeRecom() {
    return (
        <section className="content-inner-1 bg-grey reccomend ">
            <div className="container">
                <div className="section-head text-center">
                    <h2 className="title">Recomended For You</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris
                    </p>
                </div>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={50}
                    slidesPerView={5}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        480: { slidesPerView: 2, spaceBetween: 20 },
                        768: { slidesPerView: 3, spaceBetween: 20 },
                        1024: { slidesPerView: 5, spaceBetween: 20 },
                    }}
                    loop={true}
                >
                    {homeRecomSlideInfo.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="books-card style-1 wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="dz-media">
                                        <img style={{height: '300px',objectFit: 'contain',width : '100%'}} src={item.img} alt="book" />
                                    </div>
                                    <div className="dz-content">
                                        <h4 className="title">{item.title}</h4>
                                        <span className="price">${item.price}</span>
                                        <a href="shop-cart.html" className="btn btn-secondary btnhover2">
                                            <i className="flaticon-shopping-cart-1 m-r10" /> Add to cart
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </section>
    );
}

export default HomeRecom;
