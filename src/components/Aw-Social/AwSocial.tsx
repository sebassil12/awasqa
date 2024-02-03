import { SOCIAL_MEDIA } from "../../constants/constants";
import AwButtonSocial from "../Aw-Button-Social/AwButtonSocial";
import awsocial from "./styles/awsocial.module.css";

function AwSocial() {
    return ( 
        <section className={awsocial.container}>
            <section className={awsocial.instagram}>
                <AwButtonSocial svg={SOCIAL_MEDIA.instagram} name={"awasqa._"} link={"https://www.instagram.com/awasqa._/"}/>
            </section>
            <section className={awsocial.tiktok}>
                <AwButtonSocial svg={SOCIAL_MEDIA.tiktok} name={"@awasqa"} link={"https://www.tiktok.com/@awasqa"}/>

            </section>
        </section>
    );
}

export default AwSocial;