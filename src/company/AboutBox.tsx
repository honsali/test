export const AboutBox = ({ title, paragraph, title1, children }) => {
    const style = {
        box: {
            width: '270px',
            display: 'inline-table',
            marginBottom: '30px',
            marginLeft: '15px',
        },
        h3: {
            color: '#0b438a',
            fontWeight: '400',
            margin: '0',
        },
        paragraph: {
            color: '#707070',
            fontWeight: '300',
            fontSize: '15px',
            lineHeight: '22px',
        },
        line:{
            listStyleType: 'none',
        },
    };
    return (
        <li style={style.line}>
            <div style={style.box} >
                {title && <h3 style={style.h3}>{title}</h3>}
                {paragraph && <p style={style.paragraph}>{paragraph}</p>}
            </div>
            <div style={style.box} >
                {title1 && <h3 style={style.h3}>{title1}</h3>}
                <p style={style.paragraph}> {children}</p>
            </div>
        </li>
    );
};