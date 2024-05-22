import { useEffect } from "react";
import { NavLink } from "react-router-dom";
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
import img7 from "../img/cambn/18.png";
import img8 from "../img/logo1.png";

const Home = ({ setOther }) => {
  useEffect(() => {
    setOther(false);
  }, [setOther]);

  return (
    <>
      <CarouselHome content={imgCarouselHome} />

      <section className="know-more">
        <div className="container d-flex justify-content-center overflow-hidden">
          <div className="d-flex" data-aos="zoom-in">
            <span className="d-flex align-items-center fw-bold">
              <RiArrowRightDoubleLine size={40} />
            </span>
            <h2 className="mb-0">Conoce más acerca de DICET</h2>
          </div>
        </div>
      </section>

      <section className="section-curtain-motors">
        <div className="container overflow-hidden ">
          <div className="d-flex gap-3 flexWrapReverse " data-aos="fade-right">
            <div>
              <figure>
                <img
                  className="w-100 h-100"
                  src={img1}
                  alt="Motores para cortinas"
                />
              </figure>
            </div>
            <div className="d-flex flex-column justify-content-center">
              <h2 className="text-uppercase fw-bold title-sections">
                motores para cortinas
              </h2>
              <p>
                Nuestros motores se caracterizan por su alta calidad,
                durabilidad y eficiencia, ​lo que los convierte en la elección
                ideal para todo tipo de cortinas metálicas, ​ya sea para uso
                comercial, industrial o residencial.
              </p>
              <div className="d-flex gap-1 align-items-center">
                <span className="arrow-round-green">
                  <IoIosArrowDropright size={30} />
                </span>
                <NavLink to="/motores">
                  <span className="fw-bold">Más información </span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-curtain-staves">
        <div className="container overflow-hidden">
          <div className="d-flex gap-3 flexWrap" data-aos="fade-left">
            <div className="d-flex flex-column justify-content-center">
              <h2 className="text-uppercase fw-bold title-sections">
                duelas para cortinas
              </h2>
              <p>
                Amplia distribución en Guatemala, El Salvador y Honduras de
                duelas, accesorios, cadenas, guías y chapas para cortinas
                metálicas.
              </p>
              <p>
                {" "}
                Distintos mod​elos y diseños para todos los gustos y
                necesi​dades de tus clientes.{" "}
              </p>
              <div className="d-flex gap-1 align-items-center">
                <span className="arrow-round-green">
                  <IoIosArrowDropright size={30} />
                </span>
                <NavLink to="/cortinas">
                  <span className="fw-bold">Más información </span>
                </NavLink>
              </div>
            </div>
            <div>
              <figure>
                <img
                  className="w-100 h-100"
                  src={img2}
                  alt="Duelas para cortinas"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="section-rollers">
        <div className="container overflow-hidden">
          <div className="d-flex gap-3 flexWrapReverse" data-aos="fade-right">
            <div>
              <figure>
                <img
                  className="w-100 h-100"
                  src={img3}
                  alt="Mecanismos para rollers"
                />
              </figure>
            </div>
            <div className="d-flex flex-column justify-content-center">
              <h2 className="text-uppercase fw-bold title-sections">
                mecanismos para rollers
              </h2>
              <p>
                En DICET encuentras una amplia variedad de mecanismos, motores,
                herrajes ​y accesorios para rollers interior y exterior, nos
                especializamos en la venta a ​distribuidores y fabricantes,
                hacemos envío a todo el país.
              </p>
              <div className="d-flex gap-1 align-items-center">
                <span className="arrow-round-green">
                  <IoIosArrowDropright size={30} />
                </span>
                <NavLink to="/rollers">
                  <span className="fw-bold">Más información </span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-parking-elevators">
        <div className="container overflow-hidden">
          <div className="d-flex gap-3 flexWrap" data-aos="fade-left">
            <div className="d-flex flex-column justify-content-center">
              <h2 className="text-uppercase fw-bold title-sections">
                elevadores de parqueo
              </h2>
              <p>
                Distribuidores oficiales de la marca Mutrade, los elevadores de
                parqueo ​más comerciales en Asia y en Europa.
              </p>
              <div className="d-flex gap-1 align-items-center">
                <span className="arrow-round-green">
                  <IoIosArrowDropright size={30} />
                </span>
                <NavLink to="/elevadores">
                  <span className="fw-bold">Más información </span>
                </NavLink>
              </div>
            </div>
            <div>
              <figure>
                <img
                  className="w-100 h-100"
                  src={img4}
                  alt="Elevadores de parqueo"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="section-italian-fabrics">
        <div className="container overflow-hidden">
          <div className="d-flex gap-3 flexWrapReverse" data-aos="fade-right">
            <div>
              <figure>
                <img className="w-100 h-100" src={img5} alt="Telas Italianas" />
              </figure>
            </div>
            <div className="d-flex flex-column justify-content-center">
              <h2 className="text-uppercase fw-bold title-sections">
                telas acrílicas 100% italianas
              </h2>
              <p>
                Amplia variedad de estilos, texturas y diseños de telas para
                exteriores ​e interiores ideales para toldos y sombrillas tales
                como: Screen, ​Blackout, Tipo Zebra y Sarán.
              </p>
              <div className="d-flex gap-1 align-items-center">
                <span className="arrow-round-green">
                  <IoIosArrowDropright size={30} />
                </span>
                <NavLink to="/">
                  <span className="fw-bold">Más información </span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-umbrella-structure">
        <div className="container overflow-hidden">
          <div className="d-flex gap-3 flexWrap" data-aos="fade-left">
            <div className="d-flex flex-column justify-content-center">
              <h2 className="text-uppercase fw-bold title-sections">
                estructura de aluminio para sombrillas
              </h2>
              <p>
                Nuestro equipo de expertos se dedica a crear las mejores
                ​estructuras de aluminio para sombrillas, diseñadas para brindar
                ​resistencia, durabilidad y estilo a tus espacios al aire libre.
              </p>
              <div className="d-flex gap-1 align-items-center">
                <span className="arrow-round-green">
                  <IoIosArrowDropright size={30} />
                </span>
                <NavLink to="/">
                  <span className="fw-bold">Más información </span>
                </NavLink>
              </div>
            </div>
            <div>
              <figure>
                <img
                  className="w-100 h-100"
                  src={img6}
                  alt="Estructura de alumino para sombrillas"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="section-curtain-motors">
        <div className="container overflow-hidden">
          <div className="d-flex gap-3 flexWrapReverse" data-aos="fade-right">
            <div>
              <figure>
                <img
                  className="w-100 h-100"
                  src={img7}
                  alt="rollers de exteriores"
                />
              </figure>
            </div>
            <div className="d-flex flex-column justify-content-center">
              <h2 className="text-uppercase fw-bold title-sections">
                ROLLERS DE INTERIOR ​Y EXTERIOR
              </h2>
              <p>
                Nuestros Rollers para interiores y exteriores bloquean la luz
                solar y, al ​mismo tiempo, permiten la entrada de luz natural en
                la habitación ​dependiendo el estilo de cada cortina
              </p>
              <div className="d-flex gap-1 align-items-center">
                <span className="arrow-round-green">
                  <IoIosArrowDropright size={30} />
                </span>
                <NavLink to="/rollers">
                  <span className="fw-bold">Más información </span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="nuevo_pie">
          <div className="titulo_targeta">
            <figure>
              <img className="w-100 h-100" src={img8} alt="logo" />
            </figure>
          </div>
          <div className="columnas">
            <div className="colum">
              <h2> Redes Sociales</h2>
              <h4> Redes Sociales</h4>
              <ul>
                <li>dicet_gt</li>
                <li>/DICETtudistribuidora</li>
              </ul>
            </div>
            <div className="colum">
              <h2>Servicios</h2>
              <ul>
                <li> Cortinas Metalicas</li>
                <li>Acsesorios para Cortinas Metalicas</li>
                <li>Motores</li>
                <li>Elevadores de Parqueo</li>
                <li>Toldos y Sombras</li>
              </ul>
            </div>
            <div className="colum">
              <h2>Contactanos</h2>
              <h4> Ubicaciones</h4>
              <ul>
                <li>
                  9a. av. 2-94 Zona 2 de Mixco Colonia Alvarado, ​Guatemala
                </li>
                <li> 17 calle 22-74 Zona 10, Colonia Alcázar, Guatemala</li>
                <li>
                  7a. av. D3-38B Zona 5, Ofibodegas Los Altos No.12,
                  Quetzaltenango
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
