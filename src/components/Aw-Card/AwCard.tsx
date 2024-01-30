interface AwCardProps{
    title:string,
    price:string,
    image:string
}

function AwCard({title, price, image}:AwCardProps) {
    return ( 
        <div>
            <div>
                <img src={image} width={100}/>
            </div>
            <div>
                <section>
                    {title}
                </section>
                <section>
                    {price}
                </section>
            </div>
        </div>
    );
}

export default AwCard;