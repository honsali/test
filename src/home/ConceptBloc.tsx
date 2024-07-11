export const ConceptBloc = () => {
    const style = {
        bloc: { padding: '120px 0', margin: ' 0 auto', backgroundColor: ' #fff' },
        textBloc: {
            display: 'inline-block',
            color: '#033d86',
            verticalAlign: 'top',
            fontSize: ' 15px',
            lineHeight: '20px',
        },
        textTitle: { fontWeight: '700', padding: '0 0 20px', margin: '0' },
        readMore: {
            margin: ' 50px 0 0 0', //
            color: ' #fb9010',
            fontWeight: 'bolder',
            fontSize: '14px',
            cursor: 'pointer',
            width: '100px',
            textAlign: 'center' as const,
            borderTop: ' 3px solid transparent',
            borderBottom: '3px solid #DDD',
            padding: '10px',
        },
        imgBloc: { display: 'inline-block', textAlign: 'right' as const },
    };
    return (
        <div style={style.bloc}>
            <div className="content">
                <div style={style.textBloc}>
                    <h1 style={style.textTitle}>The concept</h1>
                    <p>
                        Economic Empowerment considers the different dimensions of <br />
                        poverty
                    </p>
                    <p>
                        Economic Empowerment emphasises social and economic solidarity <br />
                        role in fighting poverty Economic
                    </p>
                    <p> Empowerment Fundamentals</p>
                    <p>
                        Our approach to Economic Empowerment
                        <br />
                    </p>
                    <div style={style.readMore}>Read More</div>
                </div>
                <div style={style.imgBloc}>
                    <img src="/assets/home_i.png" style={{ width: '520px' }} />
                </div>
            </div>
        </div>
    );
};
