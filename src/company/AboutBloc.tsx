import { AboutBox } from "./AboutBox";

export const AboutBloc = () => {
    const style = {
        about: {
            paddingTop: '50px',
        },
        content: {
            margin: 'auto',
            width: '1200px',
            height: '100%',
            position: 'relative' as const,
        },
        poster: {
            display: 'inline-table',
            height: '500px',
            marginLeft: '15px',
            paddingTop:'20px',
        },
        image: {
            width: '430px',
        },
        group: {
            width: '650px',
            display: 'inline-block',
            paddingLeft: '40px',
            top:'5px',
            position:'absolute' as const,
        },

    }
    return (
        <div style={style.about}>
            <div style={style.content}>
                <div style={style.poster}>
                    <img style={style.image} src="/assets/about_poster.jpg" />
                </div>
                <div style={style.group}>
                    <AboutBox title="About us" paragraph="4US is a company promoted and managed by dynamic professionals expert in the field of
                            Economic Empowerment through Islamic Finance." title1="Our Vision">Being the reference at the international level in providing Economic Empowerment solutions.
                    </AboutBox>
                    <AboutBox title="Our Mission" paragraph="Our mission is to provide consultancy services, develop IT services and reference manuals, in
                            the field of Economic Empowerment through Islamic Finance. We beleive that this knowledge
                            will have a large impact" title1="Why 4US">A unique philosophy and a field-proven methodology of Economic Empowerment
                        <br /><br />First of its kind automated solution of Economic Empowerment through Islamic Finance, designed for all types of financial institutions.
                    </AboutBox>


                </div>
            </div>
        </div>

    );
};
