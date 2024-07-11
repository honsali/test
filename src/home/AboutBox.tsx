export const AboutBox = ({ title, paragraph }) => {
    const style = {
        box: {
            display: 'inline-table',
            width: '245px',
            paddingRight: '7px',
        },

        title: {
            fontWeight: '400',
            color: '#033d86',
            marginBottom: '5px',
        },

        paragraph: {
            marginTop: '5px',
            fontWeight: '400',
            fontSize: '15px',
            color: '#8b8c8c',
        },
    }
    return (
        <div style={style.box}>
            <h1 style={style.title}>{title}</h1>
            <p style={style.paragraph}>{paragraph}</p>
        </div>
    );
}