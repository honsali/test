import { Iframe } from "./Iframe";

export const ContactPage = () => {
    const style = {
        map: {
            marginTop: '340px',
            width: '100%',
            height: '980px',
            backgroundColor: '#f2f5f9',
            position: 'relative' as const,
        },
        block: {
            position: 'absolute' as const,
            backgroundColor: 'white',
            top: '228px',
            left: '40px',
            height: '390px',
            width: '367px',
            boxShadow: '0 8px 6px #e6e9ee',
            padding: '60px 23px',
            color: '#033d86',
        },
        title:{
            fontSize: '20px',
            fontWeight: '400',
            marginBottom: '3px',
        },
        paragraph: {
            fontSize: '15px',
            lineHeight: '19px',
            marginBottom: '58px',
        },
       mark: {
            color: '#e95b30',
            backgroundColor: 'transparent',
        },
        header: {
            backgroundColor: '#083358',
            height: '120px',
            width: '912px',
            float: 'right' as const,
        },

        title1: {
            float: 'right' as const,
            color: 'white',
            margin: '33px 194px 0 0',
            fontSize: '30px',
        },
        title2:{
            display: 'inline-table',
            color: '#e65b30',
            fontWeight: '400',
            fontSize: '20px',
            margin: '38px 100px 0 143px',
        },
        contact: {
            marginTop: '270px',
            padding: '0 320px',

        },
        title3: {
            fontSize: '30px',
            margin: '4px',
            color: '#033d86',
        },
    };
    return (
        <div style={style.map}>
            <Iframe/>
            <div style={style.block}>
                <h3 style={style.title}>4US Maroc</h3>
                <p style={style.paragraph}>
                    <p>13 av Doukkalah,<br />/.Aviation Rabat <br />Morocco<br /></p>
                    <p>Phone : + 212 5 37 63 06 35</p>
                    <p>E-mail : <mark style={style.mark}>contact@4us.ma</mark></p>
                    <p>Web :<mark style={style.mark}>http://4us.ma</mark></p>
                </p>
            </div>
            <div style={style.header}>
                <h1 style={style.title1}>+ 212 5 37 63 06 35</h1>

                <h3 style={style.title2} >CALL US:</h3>
            </div>
            <div style={style.contact}>
                <h1 style={style.title3}>
                    Send us a message</h1>
            </div>
        </div>

    );
};
