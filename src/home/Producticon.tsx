export const Producticon = ({ source }) => {
    const style = {
        icon: {
            height: '150px',
            display: 'inline-block',
            width: '230px',
            marginRight: ' 35px',
        },
        image: {
            float: 'left' as const,
            height: '100px',
        },
    };
    return (
        <div style={style.icon}>
            <img src={source} style={style.image} />
        </div>
    );
};
