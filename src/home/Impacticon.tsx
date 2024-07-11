export const Impacticon = ({ source }) => {
    const style = {
        icon: {
            height: '60px',
            display: 'inline-block',
            width: '230px',
            margin: '0 20px',
        },
        image: { height: '46px', 

        },
    };
    return (
        <div style={style.icon}>
            <img src={source} style={style.image} />
        </div>
    );
};
