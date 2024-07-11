export const GovBox = ({ title, children }) => {
    const style = {
        list: {
            fontWeight: '300',
            fontSize: '15px',
            color: '#707070',
            listStyleType: '"► "',
            margin: '17px',
        },
        h4: {
            color: "#0e458b",
            fontWeight: '400',
            fontSize: '20px',
            margin: '0',
        },
    };
    return (
        <>
            {title && <h4 style={style.h4}>{title}</h4>}
            <ul style={style.list} >{children}</ul>
        </>
    );
};