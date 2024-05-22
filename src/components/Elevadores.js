import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import portada from "../img/portadas/Elevadores.png"
import img1 from "../img/cambn/16.png"
import img2 from "../img/cambn/17.png"

const Elevadores = ({ setOther }) => {

    useEffect(() => {
        setOther(false);
    }, [setOther]);


    return (
        <>

            <section className="mb-5 ">

                <figure>
                    <img src={portada} className=" w-100 h-100 " alt=" portada" />

                </figure>

            </section>
            <section className="container overflow-hidden">

                <section className="container  daralinicacio">
                    <div className=" container text-center" data-aos="zoom-in">
                        <h2 className="etitulo alinearletraselevador my-3">ELEVADORES DE PARQUEO</h2>
                    </div>



                    <div className="container d-flex gap-3 telefono ling-elevador da-ancho" data-aos="fade-right">
                        <div className="imagen_terjeta">
                            <figure className="w-100 h-100">
                                <img
                                    className="w-100 h-100"
                                    src={img1}
                                    alt="Cortinas Métalicas"
                                />
                            </figure>
                        </div>

                        <div className="w-50 d-flex align-items-center telefono-w-100">
                            <div >

                                <p className=" elevadoresp">
                                    Se ofrecen 2 espacios de ​estacionamiento en un ​espacio existente,
                                    para ​colocar el automóvil en la ​parte superior,
                                    el automóvil ​inferior debe salir primero.
                                </p>

                                <p className="elevadoresp">
                                    Los sistemas de ​estacionamiento de Mutrade ​facilitan a los usuarios
                                    la ​optimización sencilla del ​espacio
                                    de estacionamiento a ​través de una solución simple.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>

                <div className="container telefono spacepie daralinicacio">

                    <figure>

                        <img
                            className=" w-100 h-100"
                            src={img2}
                            alt="elevador"
                        />
                    </figure>



                </div>

            </section>
            <div className="pidecotiza p-3 upcblue" >
                <div className="" data-aos="zoom-in">

                    <h3 className="text-center textopie2 "> ¡Cotiza hoy mismo! <br></br>
                        <NavLink to="https://wa.me/+50240831699" rel="noopener noreferrer nofollow" target="_blank">
                            <span> 4083-1699</span>
                        </NavLink>
                    </h3>
                </div>

            </div >


        </>



    );


};

export default Elevadores