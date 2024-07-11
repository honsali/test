
export const Impactbox = ({ title, paragraph }) => {
    const style = {
        box: {
            display: 'inline-table',
            width: '220px',
            textAlign: 'center' as const,
            margin: '0 25px',
        },
        title1: {
            color: 'transparent',
            fontWeight: 400,
            textAlign: 'center' as const,
            fontSize: '45px',
            margin: '0',
            WebkitTextStrokeWidth: '1px',
            WebkitTextStrokeColor: '#fb9010',
        },
        title2: {
            margin: '0',
            color: '#fb9010',
            fontWeight: '400',
            textAlign: 'center' as const,
            lineHeight: '25px',
            fontSize: '20px',
        },
    };
    return (
        <div style={style.box}>
            <h1 style={style.title1}>{title}</h1>
            <h3 style={style.title2}>{paragraph}</h3>
        </div>
    );
};
