import { BlocContent } from "components/BlocContent";

export const NewsPage = () => {
    const style = {
        news: {
            marginBottom: '100px',
        },
        annoucment: {
            width: '1368px',
            height: '100%',
            margin: 'auto',
            position: 'relative' as const, 
        },
        poster: {
            display: 'inline-block',
            marginRight: '20px',
            height: '280px',
        },
        image: {
            top: '50px',
            left: '150px',
            position: 'absolute' as const,
            width: '390px',
        },
        description: {
            width: '650px',
            height: '280px',
            position: 'absolute' as const,
            top: '40px',
            right: '150px',
        },
        title: {
            fontSize: '30px',
            lineHeight: '34px',
            color: '#033d86',

        },

        paragraph: {
            color: '#707070',
            fontWeight: '300',
            fontSize: '15px',

        },

        more: {
            float: 'right' as const,
            color: '#fba43b',
        },

    };
    return (
        <div style={style.news}>
            <div style={style.annoucment} >

                <div style={style.poster}> <img style={style.image} src="/assets/news1.jpg" />
                </div>
                <div style={style.description}>
                    <h1 style={style.title}>2ND INTERNATIONAL ISLAMIC MICROFINANCE AWARDS WILL TAKE PLACE ON NOVEMBER 25, 2017 - ISTANBUL,
                        TURKEY</h1>
                    <p style={style.paragraph}>ABOUT ISLAMIC MICROFINANCE AWARDS Islamic Microfinance awards are a signature initiative of
                        AlHuda
                        CIBE aimed to recognize the industry leaders and to promote the concept of […]</p>
                    <a style={style.more}><img />Read more</a>
                </div>
            </div>
        </div>
    );
};
