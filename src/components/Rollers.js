import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import portada from "../img/portadas/Rollers.png";
import img1 from "../img/cambn/22.png";
import img2 from "../img/cambn/18.png";
import img3 from "../img/cambn/19.png";
import img4 from "../img/cambn/21.png";


const Rollers = ({ setOther }) => {
    useEffect(() => {
        setOther(true);
    }, [setOther]);

    return (
        <>
            <section>
                <div className="marginproductos"></div>
                <figure>
                    <img src={portada} className=" w-100 h-100 " alt=" portada" />

                </figure>

            </section>





            <section className="container daralinicacio overflow-hidden">
                <div className="d-flex justify-content-center bajartt " data-aos="zoom-in">

                    <h2 className="texttitulo text-wrap text-start tptelefono my-3 ">ROLLERS DE EXTERIOR</h2>

                </div>

                <div className="container d-flex gap-3 telefono separador daralinicacio overflow-hidden ">
                    <div className=" d-flex gap-3   telefono-reverse " data-aos="fade-right">
                        <div className="imagen_terjeta">
                            <figure className="w-100 h-100">
                                <img
                                    className="w-100 h-100"
                                    src={img1}
                                    alt="Cortinas Métalicas"
                                />
                            </figure>
                        </div>


                        <div className=" w-50 d-flex align-items-center telefono-w-100">
                            <div>
                                <h2 className='text-start texto_tittfica  tptelefono '>
                                    Rollers de PVC
                                </h2>
                                <p className=" cortinasp ">
                                    Ofrece transparencia y protección ​en entornos de baja temperatura
                                    o ​expuestos a condiciones climáticas ​desfavorables.
                                </p>
                                <p className=" cortinasp ">
                                    Pueden adquirirse con sistema ​manual o motorizado.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="overflow-hidden">
                    <div className="container d-flex gap-3 telefono separador  daralinicacio" data-aos="fade-left">

                        <div className=" w-50 d-flex align-items-center telefono-w-100">
                            <div>
                                <h2 className='text-start texto_tittfica tptelefono'>
                                    Rollers tipo Zebra
                                </h2>
                                <p className=" cortinasp ">
                                    Es una combinación de telas ​transparentes y opacas dispuestas
                                    de ​manera intercalada a lo largo de la ​cortina, lo que permite
                                    ajustar entre ​transparencia y privacidad según sea
                                    necesario. Se pueden encontrar con ​mecanismo manual y motorizado.
                                </p>
                            </div>
                        </div>

                        <div className="imagen_terjeta">
                            <figure className="w-100 h-100">
                                <img
                                    className="w-100 h-100"
                                    src={img2}
                                    alt="Cortinas Métalicas"
                                />
                            </figure>
                        </div>
                    </div>
                </div>




                <div className="container d-flex gap-3 telefono  separador  daralinicacio overflow-hidden">
                    <div className=" d-flex gap-3   telefono-reverse  " data-aos="fade-right">
                        <div className="imagen_terjeta">
                            <figure className="w-100 h-100">
                                <img
                                    className="w-100 h-100"
                                    src={img3}
                                    alt="Cortinas Métalicas"
                                />
                            </figure>
                        </div>


                        <div className=" w-50 d-flex align-items-center telefono-w-100  ">
                            <div>
                                <h2 className='text-start texto_tittfica tptelefono'>
                                    Roller tipo black out
                                </h2 >
                                <p className=" cortinasp  ">
                                    Proporciona total privacidad en ​cualquier ambiente, siendo ideal ​para dormitorios,
                                    salas de ​proyección y espacios que necesiten ​discreción máxima.
                                </p>
                                <p className=" cortinasp  ">
                                    Se encuentran disponibles con ​sistema manual y motorizado.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="overflow-hidden">
                    <div className="container d-flex gap-3 telefono separador  " data-aos="fade-left">

                        <div className=" w-50 d-flex align-items-center telefono-w-100 ">

                            <div>
                                <h2 className='text-start texto_tittfica tptelefono'>
                                    Roller tipo screen
                                </h2>
                                <p className="  cortinasp ">
                                    Permite el contacto visual con el ​exterior y la entrada de luz natural sin
                                    que esto signifique una pérdida de la ​privacidad, también disminuye el ​calor.
                                </p>
                                <p className="  cortinasp ">
                                    Disponibles con mecanismo
                                    manual y motorizado.
                                </p>
                            </div>
                        </div>
                        <div className="imagen_terjeta">
                            <figure className="w-100 h-100">
                                <img
                                    className="w-100 h-100"
                                    src={img4}
                                    alt="screen"
                                />
                            </figure>
                        </div>




                    </div>
                </div>





            </section >

            <div className="container mb-5 " >
                <div className=" d-flex justify-content-center ">
                    <div className=" cotizar text-white " data-aos="zoom-in">
                        <p className=" letraspie"> ¡Cotiza hoy mismo el tuyo! </p>
                        <p className=" text-center ">
                            <NavLink to="https://wa.me/+50240831699" rel="noopener noreferrer nofollow" target="_blank">
                                <span> 4083-1699</span>
                            </NavLink>
                        </p>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Rollers;
