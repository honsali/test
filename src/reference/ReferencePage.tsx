export const ReferencePage = () => {
    const style = {
        poster: {
            width: '1366px',
            alignSelf: 'auto',
        },
        partners: {
            padding: '70px 130px',
        },
        content: {
            width: '1120px',
            margin: '0',
        },
        image: {
            height: '210px',
            marginLeft: '10px',
            width: '210px',
            marginBottom: '60px',
        },
        image1: {
            width: '210px',
            height: 'auto',
        },

    };
    return (
        <>
            <div>
                <img style={style.poster} src="/assets/poster_partner.png" />
            </div>
            <div style={style.partners} >
                <div style={style.content}>
                    <div>
                        <img style={style.image} src="/assets/partner-1.png" />
                        <img style={style.image} src="/assets/partner-2.png" />
                        <img style={style.image} src="/assets/partner-3.png" />
                        <img style={style.image} src="/assets/partner-4.png" />
                        <img style={style.image} src="/assets/partner-5.png" />
                    </div>
                    <div className="line2">
                        <img style={style.image1} src="/assets/partner-6.png" />
                        <img style={style.image1} src="/assets/partner-7.png" />
                        <img style={style.image1} src="/assets/partner-8.png" />
                        <img style={style.image1} src="/assets/partner-9.png" />
                        <img style={style.image1} src="/assets/partner-10.png" />
                    </div>
                    <div>
                        <img style={style.image} src="/assets/partner-11.png" />
                        <img style={style.image} src="/assets/partner-12.png" />
                        <img style={style.image} src="/assets/partner-13.png" />
                        <img style={style.image} src="/assets/partner-14.png" />
                        <img style={style.image} src="/assets/partner-15.png" />
                    </div>

                </div>
            </div>
        </>
    );
};
