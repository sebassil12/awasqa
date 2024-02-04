import AwPresentation from "../../components/Aw-Presentation/AwPresentation";
import { CONTACTS, SOCIAL_MEDIA } from "../../constants/constants";
import awcontact from "./styles/awcontact.module.css";

function AwContact() {
    return ( 
        <section className={awcontact.container}>
            <h1 className={awcontact.section}>CONTÁCTAME</h1>
        <section className={awcontact.card_container}>
            <AwPresentation children_content={
                <div>
                    
                    <section >
                        <section className={awcontact.presentation_container}>
                            <div className={awcontact.perfil_container}>
                            <img src={CONTACTS.perfil} className={awcontact.perfil}/>
                            </div>
                        <div className={awcontact.name_container}>
                            <h1 className={awcontact.name}>Nicole Toral</h1>
                            <h3 className={awcontact.subname}>Emprendedora</h3>
                        </div>
                        </section>
                        <div className={awcontact.contacts}>
                            <a target="_blank"  href="https://wa.me/593998729566?text=Hola!%20Me%20gustaria%20cotizar%20uno%20de%20tus%20productos"><img src={CONTACTS.whatsapp} width={50}/></a>
                            <p>+593 99872 9566</p>
                        </div>
                        <div className={awcontact.contacts}>
                            <img src={SOCIAL_MEDIA.instagram} width={50}/>
                            <p>awasqa._</p>
                        </div>
                        <div className={awcontact.contacts}>
                            <img src={CONTACTS.location} width={50}/>
                            <p>Cuenca, Ecuador</p>
                        </div>
                    </section>
                </div>

            } children_social={null} />

        </section>
        </section>
     );
}

export default AwContact;