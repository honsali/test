export const Reachingtitle = () => {
    const style = {
        box: {
            display: 'inline-table',
        },
        title: {
            color: ' #033d86',
            fontSize: '30px',
            lineHeight: '33px',
            width: '530px',
            marginRight: '125px',
            paddingTop: '50px',
        },
        mark: {
            color: '#fb9010',
            backgroundColor: 'transparent',
        },
        article: {
            textDecoration: 'none',
            color: '#fb9010',
            fontWeight: '300',
            fontSize: '15px',
            textAlign: 'left' as const,
        },
        image: {
            height: '14px',
            bottom: '0',
        },
    };
    return (
        <div style={style.box}>
            <h1 style={style.title}>
                More informations?
                <br />
                Please call as:<mark style={style.mark}> +212 (0) 5 37 63 06 35</mark>
            </h1>
            <a style={style.article}>    Contact form  <img style={style.image} src="/assets/fleche.png" />
            </a>
        </div>
    );
};
