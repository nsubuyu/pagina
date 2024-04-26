import { useEffect } from "react"
import img1 from '../img/about/about.png';

const About = ({setOther}) => {

    useEffect(() => {
        setOther(true)
    }, [setOther])

    return(
        <section className='marginTop mb-5 section-about'>
            <div className="container">
                <div className='mb-3 m-auto containter-title-about'>
                    <h2 className="text-uppercase">acerca de nosotros</h2>
                </div>
                <div className='d-flex justify-content-center container-description-about'>
                    <div className='description-about'>
                        <p className='mb-4'>
                            Nos especializamos en venta a <br></br>
                            integradores de cortinas metálicas, <br></br>
                            instaladores de toldos, talleres de tapizado <br></br>
                            de muebles y proveedores de rollers.
                        </p>
                        <p>
                            Distribuimos en Guatemala las marcas <br></br>
                            más reconocidas del mercado, con la <br></br>
                            experiencia, servicio y garantía que sólo <br></br>
                            DICET puede ofrecer.
                        </p>
                    </div>
                    <div className='container-img-about'>
                        <figure>
                            <img src={img1} alt='Nosotros'/>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About