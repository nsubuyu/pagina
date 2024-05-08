import { useEffect } from "react";
import portada from "../img/productos/cortinas/1.png";
import img1 from "../img/cambn/2.png";
import img2 from "../img/cambn/prueba.png";
import img3 from "../img/cambn/3.png";
import img4 from "../img/cambn/4.png";
import img5 from "../img/cambn/5.png";
import img6 from "../img/cambn/6.png";
import img7 from "../img/cambn/7.png";
import img8 from "../img/cambn/8.png";

const Cortinas = ({ setOther }) => {
  useEffect(() => {
    setOther(true);
  }, [setOther]);

  return (

    <>
      <div className="padre">
        <div className="lineas_fondo w-100 h-100">
          <div className="first w-100">


          </div>
          <div className="second w-100">

          </div>
        </div>
      </div>

      <section className="marginTop  mb-5">
        <figure>
          <img src={portada} className=" w-100 h-100 " alt=" portada" />

        </figure>

      </section>


      <section className="container">
        <div className="d-flex justify-content-center ">

          <h2 className="texttitulo text-wrap text-center ">De todo para Cortinas Metálicas</h2>

        </div>
      </section>

      <div className="container d-flex justify-content-end">
        <figure >
          <img className="muestrac" src={img2} alt="muestra del material " />
        </figure>
      </div>

      <section className=" container my-5">
        <div className=" d-flex gap-3 mb-5  telefono-reverse">
          <div className="imagen_terjeta">
            <figure className="w-100 h-100">
              <img
                className="w-100 h-100"
                src={img1}
                alt="muestra de la persiana"
              />
            </figure>
          </div>

          <div className=" w-50 d-flex align-items-center telefono-w-100 ">
            <h2 className="textodesc ">
              Ofrecemos a distribuidores y <br></br>​mayoristas una amplia <br></br> ​variedad de
              materiales y <br></br> ​accesorios para fabricar <br></br> ​cortinas metálicas
              manuales y <br></br> ​motorizadas.
            </h2>
          </div>
        </div>

        <div className="container mt-5 ">
          <h3 className="texto_2  text-center tptelefono"> ¡Ofrece a tus clientes lo mejor!</h3>
        </div>

        <div className="paddingCenter container d-flex telefono gap-4">

          <div className="w-50 telefono-w-100">
            <figure>
              <img
                className="w-100 h-100"
                src={img3}
                alt="Cortinas Métalicas"
              />
            </figure>
            <div className="text-justify ">
              <h3 className="text-center texto_tittfica cortinast"> Duelas de Aluminio</h3>
              <p className="cortinasp">
                Ideal para tus clientes que buscan proyectos ​de construcción,
                se destacan por su ​durabilidad, versatilidad y diseño
                innovador.
              </p>
            </div>
          </div>


          <div className="w-50 telefono-w-100">
            <figure >
              <img
                className="w-100 h-100"
                src={img4}
                alt="Cortinas Métalicas"
              />
            </figure>
            <div className="text-justify ">
              <h3 className=" text-center texto_tittfica cortinast"> Duelas de Acero</h3>
              <p className=" cortinasp">
                Los accesos de seguridad más empleados ​en el mercado para
                brindar protección a ​locales comerciales y empresas de tus
                clientes.
              </p>
            </div>
          </div>
        </div>
      </section>






      <section className="cotainer">


        <div className="d-flex justify-content-center estilost">
          <h2 className=" texto_2 tptelefono">Estilos de duelas</h2>
        </div>


        <div className=" d-flex gap-3 duelas telefono">



          <figure className=" w-100 " >
            <img className="w-100 h-100" src={img5} alt="Cortinas Métalicas" />
          </figure>


          <div className=" d-flex align-items-center">
            <p className="duelasp" >
              Tenemos una amplia variedad de diseños ​de cortinas metálicas para
              satisfacer las ​necesidades de tus clientes.
            </p>
          </div>
        </div>
      </section>

      <div className="container">


        <figure>
          <img className="w-100 h-100" src={img6} alt="Cortinas Métalicas" />
        </figure>


      </div>
      <div className="container">
        <figure>
          <img className="w-100 h-100 spintando" src={img7} alt="señorpintando" />
        </figure>
      </div>


      <section className=" padre overflow-hidden seccionlineas ">
        <div className="transfom w-100 "></div>

        <div className="container d-flex gap-3 telefono ">


          <div className="d-flex align-items-center bajarletras" >
            <div>
              <p className="letraslineas">
                ¡En DICET cuentas con toda la ​asesoría necesaria para que puedas
                ofrecer la mejor opción a tus clientes! </p>
              <p className="letraslineas "> Con nosotros encuentras de todo ​para Cortinas Metálicas. </p>

            </div>
          </div>


          <div className="contworker">
            <figure>
              <img
                className="trabajador"
                src={img8}
                alt="trabajador"
              />
            </figure>


          </div>
        </div>
      </section>



      <div className="pidecotiza p-3">
        <h3 className="text-center textopie2"> ¡Cotiza hoy mismo! <br></br> 4083-1699</h3>
      </div>
    </>
  );
};

export default Cortinas;
