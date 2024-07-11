export const Logo = () => {
    const style = {
        height: '60px', //
        cursor: 'pointer',
        position: 'absolute' as const,
        left: '4px',
        bottom: '4px',
    };
    return <img src={'/assets/logo-1.png'} style={style} />;
};
