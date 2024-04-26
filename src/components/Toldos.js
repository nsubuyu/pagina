import { useEffect } from "react";


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



        </>



    );


};

export default Toldos