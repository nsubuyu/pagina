import { useEffect } from "react";
import portada from "../img/portadas/Elevadores.png"
import img1 from "../img/cambn/16.png"
import img2 from "../img/cambn/17.png"

const Elevadores = ({ setOther }) => {

    useEffect(() => {
        setOther(true);
    }, [setOther]);


    return (
        <>

            <section className="marginproductos mb-5 ">
                <figure>
                    <img src={portada} className=" w-100 h-100 " alt=" portada" />

                </figure>

            </section>
            <section className="container">

                <section className="container">
                    <div className=" container text-center">
                        <h2 className="etitulo">ELEVADORES DE PARQUEO</h2>
                    </div>
                </section>


                <div className="container d-flex gap-3 telefono ling-elevador da-ancho">
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
                        <div>

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

                <div className="container telefono">

                    <figure>

                        <img
                            className=" w-100 h-100"
                            src={img2}
                            alt="elevador"
                        />
                    </figure>



                </div>

            </section>


        </>



    );


};

export default Elevadores