import { useEffect } from "react";
import portada from "../img/portadas/Rollers.png";
import img1 from "../img/cambn/22.png";
import img2 from "../img/cambn/18.png";
import img3 from "../img/cambn/19.png";
import img4 from "../img/cambn/20.png";
import img5 from "../img/cambn/21.png";

const Rollers = ({ setOther }) => {
    useEffect(() => {
        setOther(true);
    }, [setOther]);

    return (
        <>
            <section className="marginproductos  ">
                <figure>
                    <img src={portada} className=" w-100 h-100 " alt=" portada" />

                </figure>

            </section>





            <section className="container daralinicacio">
                <div className="d-flex justify-content-center ">

                    <h2 className="texttitulo text-wrap text-center tptelefono my-3 ">ROLLERS DE EXTERIOR</h2>

                </div>

                <div className="container d-flex gap-3 telefono separador  aling-catalogo">
                    <div className=" d-flex gap-3   telefono-reverse">
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
                                <h2 className='text-center texto_tittfica tptelefono '>
                                    Rollers de PVC
                                </h2>
                                <p className=" motoresp">
                                    Ofrece transparencia y protección ​en entornos de baja temperatura
                                    o ​expuestos a condiciones climáticas ​desfavorables.
                                </p>
                                <p className=" motoresp">
                                    Pueden adquirirse con sistema ​manual o motorizado.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container d-flex gap-3 telefono separador aling-catalogo daralinicacio">

                    <div className=" w-50 d-flex align-items-center telefono-w-100">
                        <div>
                            <h2 className='text-center texto_tittfica tptelefono'>
                                Rollers tipo Zebra
                            </h2>
                            <p className=" motoresp">
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




                <div className="container d-flex gap-3 telefono  separador aling-catalogo daralinicacio">
                    <div className=" d-flex gap-3   telefono-reverse aling-catalogo">
                        <div className="imagen_terjeta">
                            <figure className="w-100 h-100">
                                <img
                                    className="w-100 h-100"
                                    src={img3}
                                    alt="Cortinas Métalicas"
                                />
                            </figure>
                        </div>


                        <div className=" w-50 d-flex align-items-center telefono-w-100 ">
                            <div>
                                <h2 className='text-center texto_tittfica tptelefono'>
                                    Roller tipo black out
                                </h2 >
                                <p className=" motoresp ">
                                    Proporciona total privacidad en ​cualquier ambiente, siendo ideal ​para dormitorios,
                                    salas de ​proyección y espacios que necesiten ​discreción máxima.
                                </p>
                                <p className=" motoresp ">
                                    Se encuentran disponibles con ​sistema manual y motorizado.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="container d-flex gap-3 telefono separador aling-catalogo0 daralinicacio">

                    <div className=" w-50 d-flex align-items-center telefono-w-100 ">

                        <div>
                            <h2 className='text-center texto_tittfica tptelefono'>
                                Telas para sombras
                            </h2>
                            <p className=" motoresp">
                                Ofrece una excelente resistencia al ​calor contra los rayos UV y una gran
                                capacidad para repeler el agua.
                                Se encuentran disponibles con ​mecanismo manual y motorizado.
                            </p>
                        </div>
                    </div>
                    <div className="imagen_terjeta">
                        <figure className="w-100 h-100">
                            <img
                                className="w-100 h-100"
                                src={img4}
                                alt="Cortinas Métalicas"
                            />
                        </figure>
                    </div>




                </div>

                <div className="container d-flex gap-3 telefono separador daralinicacio">
                    < div className="d-flex gap-3  telefono-reverse aling-catalogo">
                        <div className="imagen_terjeta">
                            <figure className="w-100 h-100">
                                <img
                                    className="w-100 h-100"
                                    src={img5}
                                    alt="Cortinas Métalicas"
                                />
                            </figure>
                        </div>
                        <div className=" w-50 d-flex align-items-center telefono-w-100 ">
                            <div>
                                <h2 className="text-center texto_tittfica tptelefono">
                                    Roller tipo screen
                                </h2>
                                <p className=" motoresp">
                                    Permite el contacto visual con el ​exterior y la entrada de luz natural sin
                                    que esto signifique una pérdida de la ​privacidad, también disminuye el ​calor.
                                </p>
                                <p className=" motoresp">
                                    Disponibles con mecanismo
                                    manual y motorizado.
                                </p>






                            </div>
                        </div>
                    </div>

                </div>



            </section >
            <div className="container mb-5 " >
                <div className=" d-flex justify-content-center ">
                    <div className=" cotizar text-white ">
                        <p className=" letraspie"> ¡Cotiza hoy mismo el tuyo! </p>
                        <p className=" text-center "> 4083-1699</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Rollers;
