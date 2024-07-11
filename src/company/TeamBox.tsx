export const TeamBox = ({ title, children }) => {
    const style = {
        box: {
            display: 'inline-table',
            textAlign: 'center' as const,
            padding: '10px',
        },
        h3: {
            color: '#033d86',
            fontSize: '20px',
            fontWeight: '400',
            marginBottom: '0',
            marginTop: '0',
        },
        position: {
            fontWeight: '300',
            fontSize: '15px',
            color: '#a8a8a8',
            marginTop: '0',
        },
        form: {
            width: '270px',
        },
        circle: {
            strokeWidth: '8px',
            stroke: '#f8f8f8',
            fill: 'white',
        },
        social: {
            width: '100px',
            borderTop: '2px solid #f6ab0c',
            margin: '0 85px',
            padding: '15px',
            height: '80px',
        },
        square: {
            height: '100px',
        },
        rect: {
            height: '45px',
            width: '45px',
            fill: '#f0f0f0',
        },
    };
    return (
        <div style={style.box} >

            <svg style={style.form}>
                <circle style={style.circle} cx="50%" cy="50%" r="60" />
            </svg>
            {title && <h3 style={style.h3}>{title}</h3>}
            <p style={style.position}> {children}</p>

            <div style={style.social}>
                <svg style={style.square}>
                    <rect style={style.rect} />
                    <rect style={style.rect} x="50" y="0" />
                </svg>
            </div>
        </div>
    );
};