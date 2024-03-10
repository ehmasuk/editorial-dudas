import { useState } from "react";

function ScrollTop() {
    const [showScroll, setShowScroll] = useState(false);

    window.addEventListener("scroll", () => {
        if (scrollY > "1000") {
            setShowScroll(true);
        } else {
            setShowScroll(false);
        }
    });

    return (
        <button className={`scroltop ${showScroll && "d-block"}`} onClick={() => window.scrollTo({ top: 0 })} type="button">
            <i className="fas fa-arrow-up"></i>
        </button>
    );
}

export default ScrollTop;
