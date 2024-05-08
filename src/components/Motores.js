import { useEffect } from "react";
import portada from "../img/portadas/Motores.png";
import img1 from "../img/cambn/10.png";
import img2 from "../img/cambn/11.png";
import img3 from "../img/cambn/12.png";
import img4 from "../img/cambn/13.png";
import img5 from "../img/cambn/14.png";

const Motores = ({ setOther }) => {
  useEffect(() => {
    setOther(true);
  }, [setOther]);

  return (
    <>
      <section className="marginproductos  mb-5">
        <figure>
          <img src={portada} className=" w-100 h-100 " alt=" portada" />

        </figure>

      </section>





      <section className="my-5">

        <div className="container d-flex gap-3 telefono separador">
          <div className=" d-flex gap-3 mb-5  telefono-reverse">
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
                <h2 className='texttitulo text-wrap text-center tptelefono'>
                  Motores Tubulares
                </h2>
                <p className=" motoresp">
                  Uno de nuestros motores más ​vendidos en Guatemala y ​Centroamérica,
                  enfocado a ​distribuidores de toldos y sombras.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container d-flex gap-3 telefono separador">

          <div className=" w-50 d-flex align-items-center telefono-w-100">
            <div>
              <h2 className='texttitulo text-wrap text-center tptelefono'>
                Motores LiftMaster
              </h2>
              <p className=" motoresp">
                Sus materiales de alta calidad aseguran ​su durabilidad y eficiencia.
                Este ​innovador motor es la solución perfecta ​para quienes buscan comodidad y ​tranquilidad en su local,
                hogar o negocio. ​Con su tecnología avanzada, brinda una ​experiencia automatizada y segura.
                Calidad y respaldo americano.
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




        <div className="container d-flex gap-3 telefono  separador">
          <div className=" d-flex gap-3 mb-5  telefono-reverse">
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
                <h2 className='texttitulo text-wrap text-center tptelefono'>
                  Motores Nice
                </h2 >
                <p className=" motoresp ">
                  Respaldo y modernidad italiana en el ​sector de automatización y ​seguridad en el hogar,
                  con una ​amplia oferta de soluciones ​integradas y conectadas para ​automatismos de puertas de garaje,
                  sistemas para protecciones solares,
                  sistemas de aparcamiento, ​aplicaciones residenciales, ​comerciales e industriales.
                </p>
              </div>
            </div>
          </div>
        </div>



        <div className="container d-flex gap-3 telefono separador">

          <div className=" w-50 d-flex align-items-center telefono-w-100 ">

            <div>
              <h2 className='texttitulo text-wrap text-center tptelefono'>
                Motores RIB
              </h2>
              <p className=" motoresp">
                Las automatizaciones RIB para cortinas ​enrollables,
                puertas basculantes, ​puertas correderas o batientes, puertas, ​ventanas,
                tragaluces y persianas son ​una garantia en cuanto a calidad y ​durabilidad.
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

        <div className="container d-flex gap-3 telefono separador">
          < div className="d-flex gap-3 mb-5  telefono-reverse">
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
                <h2 className="texttitulo text-wrap text-center tptelefono">
                  Motores Jielong
                </h2>
                <p className=" motoresp">
                  Una de las opciones más rentables ​para ofrecer a tus clientes por su alta ​resistencia y relación costo-beneficio.
                  Desarrolladas para la automatización ​de cortinas metálicas.
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

export default Motores;
