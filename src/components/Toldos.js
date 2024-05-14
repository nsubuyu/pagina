import { useEffect } from "react";
import { NavLink } from "react-router-dom";


const Toldos = ({ setOther }) => {

    useEffect(() => {
        setOther(true);
    }, [setOther]);


    return (
        <>
            <section className="marginTop  mb-5">
                <figure>
                    <img src={portada} className=" w-100 h-100 " alt=" portada" />

                </figure>

            </section>

            <div className="container mb-5 " >
                <div className=" d-flex justify-content-center ">
                    <div className=" cotizar text-white ">
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

export default Toldos