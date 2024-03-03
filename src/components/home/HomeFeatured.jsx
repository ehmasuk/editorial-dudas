// import Swiper core and required modules
import { Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import { useRef } from "react";

const homeFeatureProductSlideInfo = [
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

function HomeFeatured() {
    const swiperRef = useRef();

    return (
        <section className="content-inner-1 bg-grey reccomend" style={{ height: "fit-content" }}>
            <div className="container">
                <div className="section-head text-center">
                    <div className="circle style-1" />
                    <h2 className="title">Featured Product</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris{" "}
                    </p>
                </div>
            </div>
            <div className="container">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                >
                    {homeFeatureProductSlideInfo.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div key={index} className="swiper-slide">
                                    <div className="books-card style-2">
                                        <div className="dz-media">
                                            <img src={item.img} alt="book" />
                                        </div>
                                        <div className="dz-content">
                                            <h6 className="sub-title">BEST SELLER</h6>
                                            <h2 className="title">{item.title}</h2>
                                            <ul className="dz-tags">
                                                <li>Napoleon Hill</li>
                                            </ul>
                                            <p className="text">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                quis nostrud exercitation ullamco laboris{" "}
                                            </p>
                                            <div className="price">
                                                <span className="price-num">${item.price}</span>
                                                <del>$12.0</del>
                                                <span className="badge">20% OFF</span>
                                            </div>
                                            <div className="bookcard-footer">
                                                <a href="shop-cart.html" className="btn btn-primary btnhover m-t15 m-r10">
                                                    Buy Now
                                                </a>
                                                <a href="books-detail.html" className="btn btn-outline-secondary btnhover m-t15">
                                                    See Details
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}

                    <div className="pagination-align style-2">
                        <div onClick={() => swiperRef.current?.slidePrev()} className="swiper-button-prev">
                            <i className="fa-solid fa-angle-left" />
                        </div>
                        <div className="swiper-pagination-three" />
                        <div onClick={() => swiperRef.current?.slideNext()} className="swiper-button-next">
                            <i className="fa-solid fa-angle-right" />
                        </div>
                    </div>
                </Swiper>
            </div>
        </section>
    );
}

export default HomeFeatured;
