import { useEffect } from "react"
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { IoIosArrowDropright } from "react-icons/io";
import { imgCarouselHome } from "../helper/Images";
import CarouselHome from "../hooks/CarouselHome";
import img1 from "../img/home/motor.png";
import img2 from "../img/home/duelas.png";
import img3 from "../img/home/accesorios.png";
import img4 from "../img/home/elevador.png";
import img5 from "../img/home/telas.png";
import img6 from "../img/home/sombrillas.png";

const Home = ({setOther}) => {

    useEffect(() => {
        setOther(false)
    }, [setOther])

    return(
        <>
            <CarouselHome content={imgCarouselHome}/>

            <section className="know-more">
                <div className="container d-flex justify-content-center">
                    <div className="d-flex">
                        <span className="d-flex align-items-center fw-bold">
                            <RiArrowRightDoubleLine size={40} />
                        </span>
                        <h2 className="mb-0">Conoce más acerca de DICET</h2>
                    </div>
                </div>
            </section>


            <section className="section-curtain-motors">
                <div className="container">
                    <div className="d-flex gap-3 flexWrapReverse">
                        <div>
                            <figure>
                                <img className="w-100 h-100" src={img1} alt="Motores para cortinas"/>
                            </figure>
                        </div>
                        <div className="d-flex flex-column justify-content-center">
                            <h2 className="text-uppercase fw-bold title-sections">motores para cortinas</h2>
                            <p>
                                Nuestros motores se caracterizan por su alta calidad, durabilidad y eficiencia, ​lo que los convierte en la elección ideal para todo tipo de cortinas metálicas, ​ya sea para uso comercial, industrial o residencial.
                            </p>
                            <div className="d-flex gap-1 align-items-center">
                                <span className="arrow-round-green">
                                    <IoIosArrowDropright size={30} />
                                </span>
                                <span className="fw-bold">Más información</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-curtain-staves">
                <div className="container">
                    <div className="d-flex gap-3 flexWrap">
                        <div className="d-flex flex-column justify-content-center">
                            <h2 className="text-uppercase fw-bold title-sections">duelas para cortinas</h2>
                            <p>
                                Amplia distribución en Guatemala, El Salvador y Honduras de duelas para ​cortinas metálicas, distintos estilos y diseños para todos los gustos y ​necesidades.
                            </p>
                            <div className="d-flex gap-1 align-items-center">
                                <span className="arrow-round-green">
                                    <IoIosArrowDropright size={30} />
                                </span>
                                <span className="fw-bold">Más información</span>
                            </div>
                        </div>
                        <div>
                            <figure>
                                <img className="w-100 h-100" src={img2} alt="Duelas para cortinas"/>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-rollers">
                <div className="container">
                    <div className="d-flex gap-3 flexWrapReverse">
                        <div>
                            <figure>
                                <img className="w-100 h-100" src={img3} alt="Mecanismos para rollers"/>
                            </figure>
                        </div>
                        <div className="d-flex flex-column justify-content-center">
                            <h2 className="text-uppercase fw-bold title-sections">mecanismos para rollers</h2>
                            <p>
                                En DICET encuentras una amplia variedad de mecanismos para rollers ​interior y exterior, nos especializamos en la venta a distribuidores y ​fabricantes, hacemos envío a todo el país.
                            </p>
                            <div className="d-flex gap-1 align-items-center">
                                <span className="arrow-round-green">
                                    <IoIosArrowDropright size={30} />
                                </span>
                                <span className="fw-bold">Más información</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-parking-elevators">
                <div className="container">
                    <div className="d-flex gap-3 flexWrap">
                        <div className="d-flex flex-column justify-content-center">
                            <h2 className="text-uppercase fw-bold title-sections">elevadores de parqueo</h2>
                            <p>
                                Distribuidores oficiales de la marca Mutrade, los elevadores de parqueo ​más comerciales en Asia y en Europa.
                            </p>
                            <div className="d-flex gap-1 align-items-center">
                                <span className="arrow-round-green">
                                    <IoIosArrowDropright size={30} />
                                </span>
                                <span className="fw-bold">Más información</span>
                            </div>
                        </div>
                        <div>
                            <figure>
                                <img className="w-100 h-100" src={img4} alt="Elevadores de parqueo"/>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-italian-fabrics">
                <div className="container">
                    <div className="d-flex gap-3 flexWrapReverse">
                        <div>
                            <figure>
                                <img className="w-100 h-100" src={img5} alt="Telas Italianas"/>
                            </figure>
                        </div>
                        <div className="d-flex flex-column justify-content-center">
                            <h2 className="text-uppercase fw-bold title-sections">telas acrílicas 100% italianas</h2>
                            <p>
                                Amplia variedad de estilos, texturas y diseños de telas para exteriores e ​interiores ideales para toldos, cortinas enrollables y sombrillas tales como: ​Screen, Blackout, Tipo Zebra y Sarán.
                            </p>
                            <div className="d-flex gap-1 align-items-center">
                                <span className="arrow-round-green">
                                    <IoIosArrowDropright size={30} />
                                </span>
                                <span className="fw-bold">Más información</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-umbrella-structure">
                <div className="container">
                    <div className="d-flex gap-3 flexWrap">
                        <div className="d-flex flex-column justify-content-center">
                            <h2 className="text-uppercase fw-bold title-sections">estructura de aluminio para sombrillas</h2>
                            <p>
                                Nuestro equipo de expertos se dedica a crear las mejores ​estructuras de aluminio para sombrillas, diseñadas para brindar ​resistencia, durabilidad y estilo a tus espacios al aire libre.
                            </p>
                            <div className="d-flex gap-1 align-items-center">
                                <span className="arrow-round-green">
                                    <IoIosArrowDropright size={30} />
                                </span>
                                <span className="fw-bold">Más información</span>
                            </div>
                        </div>
                        <div>
                            <figure>
                                <img className="w-100 h-100" src={img6} alt="Estructura de alumino para sombrillas"/>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home