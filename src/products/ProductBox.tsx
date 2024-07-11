export const ProductBox = ({ title }) => {
    const style = {
        box: {
            display: 'inline-block',
            margin: '10px 20px',
        },
        h2: {
            marginTop: '0',
            color: '#fb9010',
            fontSize: '38px',
            fontWeight: '600',
        },
        image: {
            height: '180px',
        },
    };
    return (
        <div style={style.box} >
            <img style={style.image} src="/assets/logo-1.png" />
            {title && <h2 style={style.h2}>{title}</h2>}
        </div>
    );
};