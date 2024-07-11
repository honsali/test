export const Iframe = () => {
    const style ={
        frame:{
            display: 'block',
            width: '100%',
            position: 'relative' as const,
            height: '560px', 
            margin: '0', 
            border: '0', 
            overflow: 'hidden', 
            borderImageWidth: '0',
        },
    }
    return (
        <iframe
           style={style.frame}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105884.89453179485!2d-6.939664967991864!3d33.969333765037526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76b871f50c5c1%3A0x7ac946ed7408076b!2sRabat%2C%20Maroc!5e0!3m2!1sfr!2str!4v1712275128246!5m2!1sfr!2str"
            width="100%"
            allowFullScreen
            loading="lazy"
            title="address"
            referrerPolicy="no-referrer-when-downgrade">
        </iframe>
    );
};