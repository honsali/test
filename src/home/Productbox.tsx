export const Productbox = ({ title, paragraph }) => {
    const style = {
        box: {
            display: 'inline-table',
            width: '230px',
            marginRight: '35px',
            textAlign: 'left' as const,
            marginBottom: '50px',
        },
        title: {
            color: '#063f87',
            fontWeight: '400',
            textAlign: 'left' as const,
        },

        paragraph: {
            color: '#707070',
            textAlign: 'left' as const,
            fontWeight: '300',
            width: '227px',
            fontSize: '15px',
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
            <h3 style={style.title}>{title}</h3>
            <p style={style.paragraph}>{paragraph}</p>
            <a style={style.article}>
                Learn more &nbsp;
                <img style={style.image} src="/assets/fleche.png" />
            </a>
        </div>
    );
};
