import { BlocContent } from "components/BlocContent";

export const ExperiencePage = () => {
    const style = {
        experience: {
            margin: 'auto',
            width: '1100px',
            padding: '100px',
        },
        title: {
            color: '#fb9010',
            height: '260px',
        },
        title1: {
            fontSize: '45px',
            margin: '0',
            marginLeft: '40px',
        },
        description:{
            color: '#033d86',
            fontSize: '20px',
            textAlign: 'center' as const,
            width: '1100px',
            lineHeight: '25px',
            marginLeft: '40px',
        },

    };
    return (
        <div style={style.experience}>
            <BlocContent>
                <div style={style.title}>
                    <h1 style={style.title1}>Experience</h1>
                </div>
                <div style={style.description}>
                    <p >4us team consists of experts/consultants, recognized internationally, with extensive experience in
                        the
                        research, design and operational implementation, particularly in Sharia-compliant, Microfinance and
                        economic
                        empowerment projects. They have contributed to significant missions, such as:</p>
                </div>
            </BlocContent>
        </div>

    );
};
