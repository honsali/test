export const Menu = ({ children }) => {
    const style = {
        menu: {
            position: 'relative' as const,
            backgroundColor: '#f7f8f8',
            borderBottom: '1px solid #a5a5a6',
            height: ' 70px',
        },
    };
    return <div style={style.menu}>{children}</div>;
};
