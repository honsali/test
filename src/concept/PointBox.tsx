export const PointBox = ({ title, children }) => {
    const style = {

        box: {
            borderleft: 'solid 2px #fb9010',
            paddingLeft: '18px',
            paddingBottom: '12px',
            width: '490px',
            marginBottom: '38px',
        },
        header: {
            width: '600px',
            cursor: 'pointer',
        },
        article: {
            color: '#fb9010',
            fontSize: '24px',
            width: '14px',
            display: 'inline-block',
        },
        h3: {
            fontSize: '24px',
            lineHeight: '30px',
            color: '#95acd5',
            width: '480px',
            display: 'inline-table',
            paddingLeft: '10px',
            marginBottom: '10px',
            marginTop: '10px',
        },
        more: {
            paddingLeft: '30px',
            color: '#033d86',
            fontSize: '15px',
            listStyleType: '"► "',
            lineHeight: '20px',
            // display: 'none',
        },
    };
    return (
        <div style={style.box} >
            <div style={style.header} >
                <a style={style.article}>-</a>
                {title && <h3 style={style.h3}>{title}</h3>}
            </div>
            <div style={style.more}> {children}</div>

        </div>
    );
};
