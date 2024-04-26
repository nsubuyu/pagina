import { useState, useEffect } from "react"
import response from "../helper/sendMail";

const Contact = ({setOther}) => {
    const [allValues, setAllValues] = useState(true);
    const [SendMail, setSendMail] = useState(false);
    const [preSend, setPreSend] = useState(false);
    const [inputMensaje, setInputMensaje] = useState('');
    const [messageError, setMessageError] = useState('');
    const [inputPhone, setInputPhone] = useState('');
    const [inputName, setInputName] = useState('');
    const [inputMail, setInputMail] = useState('');

    useEffect(() => {
        setOther(true)
    }, [setOther])
    
    const handleInputName = (e) => {
        setInputName(e.target.value);
    }
    const handleInputPhone = (e) => {
        setInputPhone(e.target.value);
    }
    const handleInputMail = (e) => {
        setInputMail(e.target.value);
    }
    const handleInputMensaje = (e) => {
        setInputMensaje(e.target.value);
    }

    const validatePhone = (phone) => {
        return phone.length === 8
    }

    const handleValidation = () => {
        if (inputName !== '' && inputPhone !== ''){
            if (validatePhone(inputPhone)){
                setAllValues(true)
                setMessageError('')
            }
            else{
                setMessageError('Ingrese un número teléfonico valido')
                setAllValues(false)
                setTimeout(() => {
                    setAllValues(true);
                }, 3000);
            }
        }
        else{
            setMessageError('No se han completado todos los campos... ¡Por favor completa todos los campos!')
            setAllValues(false)
            setTimeout(() => {
                setAllValues(true);
            }, 3000);
        }
    }

    const handleSendMail = async () => {
        let data = {
            'name': inputName,
            'phone': inputPhone,
            'mail': inputMail,
            'message': inputMensaje
        }
        
        const res = await response(data)
        
        if(res.status === 200){
            setPreSend(false)
            setSendMail(true);
            setAllValues(true)
            setTimeout(() => {
                setSendMail(false);
            }, 3000);
        }
        else{
            setSendMail(false);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (allValues){
            setPreSend(true)
            await handleSendMail();
            setInputMensaje('');
            setInputPhone('');
            setInputName('');
            setInputMail('');
        }
    }

    return(
            <section className='marginTop mb-5'>
                <div className="container">
                    <form className="w-50 m-auto form-contact" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <h2 className="text-uppercase">contáctanos</h2>
                    </div>
                        <div className="mb-3">
                            <label htmlFor="inputName" className="form-label">Nombre <span className="selector-red">*</span></label>
                            <input type="text" className="form-control" id="inputName" placeholder="Nombre Apellido" value={inputName} onChange={handleInputName}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputPhone" className="form-label">Teléfono <span className="selector-red">*</span></label>
                            <input type="tel" className="form-control" id="inputPhone" placeholder="0000-0000" value={inputPhone} onChange={handleInputPhone}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputMail" className="form-label">Correo <span className="selector-red">*</span></label>
                            <input type="email" className="form-control" id="inputMail" placeholder="user@dominio.com" value={inputMail} onChange={handleInputMail}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputMessage" className="form-label">Mensaje</label>
                            <textarea className="form-control" id="inputMessage" rows="3" placeholder="Si lo deseas, escribe acá tú solicitud" value={inputMensaje} onChange={handleInputMensaje}></textarea>
                        </div>
                        <div className={`alert alert-danger d-flex align-items-center ${!allValues ? 'show-incomplete': 'd-none' }`} role="alert">
                            {messageError}
                        </div>
                        <div className={`alert alert-warning ${preSend ? 'show-incoming': 'd-none' }`} role="alert">
                            Enviando correo...
                        </div>
                        <div className={`alert alert-success ${SendMail ? 'show-success': 'd-none' }`} role="alert">
                            Gracias, con gusto nos pondremos en contacto
                        </div>
                        <button onClick={handleValidation} className={`${preSend ? 'd-none' : ''}`}>Enviar Mensaje</button>
                    </form>
                </div>
            </section>
    )
}

export default Contact