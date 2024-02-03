import AwPresentation from "../../components/Aw-Presentation/AwPresentation";
import { CONTACTS, SOCIAL_MEDIA } from "../../constants/constants";
import awpresentation from "./styles/awpresentation.module.css";

function AwContact() {
    return ( 
        <section>
            <AwPresentation children_content={
                <div>
                    <section >
                        <section className={awpresentation.name_container}>
                            <div className={awpresentation.perfil_container}>

                        <img src={CONTACTS.perfil} className={awpresentation.perfil}/>
                            </div>
                        <section >
                            <h1 className={awpresentation.name}>Nicole Toral</h1>
                            <h3 className={awpresentation.subname}>Emprendedora</h3>
                        </section>
                        </section>
                        <div className={awpresentation.contancts}>
                            <img src={CONTACTS.whatsapp} width={50}/>
                            <p>+593 99872 9566</p>
                        </div>
                        <div className={awpresentation.contancts}>
                            <img src={SOCIAL_MEDIA.instagram} width={50}/>
                            <p>awasqa._</p>
                        </div>
                        <div className={awpresentation.contancts}>
                            <img src={CONTACTS.location} width={50}/>
                            <p>Cuenca, Ecuador</p>
                        </div>
                    </section>
                </div>

            } children_social={null} />

        </section>
     );
}

export default AwContact;