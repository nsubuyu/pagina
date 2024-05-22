import { IoMdArrowDropright } from "react-icons/io";

const CarouselHome = ({ content }) => {

    return (
        <section className='carouselset'>
            <div className=''>
                <div id="carouselAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators d-none">
                        {
                            content.map((data, key) => {
                                if (key === 0) {
                                    return <button
                                        key={key}
                                        type="button"
                                        data-bs-target="#carouselAutoplaying"
                                        data-bs-slide-to={key}
                                        className="active"
                                        aria-current="true"
                                        aria-label={data[1]}>
                                    </button>
                                }
                                return <button
                                    key={key}
                                    type="button"
                                    data-bs-target="#carouselAutoplaying"
                                    data-bs-slide-to={key}
                                    aria-label={data[1]}>
                                </button>
                            })
                        }
                    </div>
                    <div className="carousel-inner">
                        {
                            content.map((data, key) => {
                                return <div key={key} className={`carousel-item ${key === 0 ? "active" : ""}`}>
                                    <img src={data[0]} className="d-block w-100" alt={data[1]} />
                                    <div className="carousel-caption carousel-caption-edit">
                                        <div className={`d-flex ${key % 2 !== 0 ? "flex-row-reverse" : ""}`}>
                                            {data[2]}
                                        </div>
                                        <div className={`d-flex ${key % 2 !== 0 ? "flex-row-reverse text-end" : "text-start"}`}>
                                            <span className="contact-caption">
                                                <span><IoMdArrowDropright size={40} /></span>

                                            </span>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default CarouselHome