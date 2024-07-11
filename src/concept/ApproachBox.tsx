export const ApproachBox = ({ title, children }) => {
    const style = {

        box: {
            width: '470px',
            display: 'inline-table',
            margin: '0 40px 35px 0',
            borderLeft: 'solid 2px #fb9010',
            paddingLeft: '14px',
            paddingBottom: '15px',
        },
        header: {
            cursor: 'pointer',
        },
        h2: {
            color: '#033d86',
            fontWeight: '400',
            fontSize: '20px',
            display: 'inline - table',
            width: '436px',
            lineHeight: '26px',

        },
        article: {
            color: '#fb9010',
            fontSize: '24px',
            width: '12px',
            display: 'inline-block',
            marginRight: '10px',
        },
        more: {
            width: '450px',
            marginLeft: '28px',
            // display: 'none',
        },
        mark: {
            backgroundColor: 'transparent',
            fontWeight: '700',
            fontSize: '22px',
            color: '#033d86',
        },
    };
    return (
        <div style={style.box} >
            <div style={style.header} >
                <a style={style.article}>-</a>
                {title && <h2 style={style.h2}>{title}</h2>}
            </div>
            <div style={style.more}> {children}</div>

        </div>
    );
};
