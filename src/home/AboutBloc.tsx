import { BlocContent } from "components/BlocContent";
import { parseJsonText } from "typescript";
import { AboutBox } from "./AboutBox";

export const AboutBloc = () => {
    const style = {
        about: {
            backgroundColor: '#f7f9fa',
            paddingTop: '63px',
            paddingBottom: '76px',
        },
        part1: {
            textAlign: 'left' as const,
            display: 'inline-table',
        },
        title1: {
            fontSize: '30px',
            lineHight: '34px',
            color: '#033d86',
        },
        mark: {
            color: '#fb9010',
            backgroundColor: 'transparent',
        },
        image1: {
            width: '510px',
            marginTop: '35px',
        },
        part2: {
            display: 'inline-table',
            paddingLeft: '70px',
        },
        title2: {
            fontSize: '30px',
            lineHeight: '34px',
            color: "#033d86",
            marginBottom: '33px',
        },

    };
    const items = [
        { title: 'Philosophy', paragraph: 'A unique philosophy and a field-proven methodology of Economic Empowerment' },
        { title: 'Automated Solution', paragraph: 'First of its kind automated solution of Economic Empowerment through Islamic Finance,designed for all types of financial institutions.' },
    ];
    return (
        <div style={style.about}>
            <BlocContent>
                <div style={style.part1}>
                    <h1 style={style.title1}>In the service <br />of microfinance since <mark style={style.mark} >1997</mark> </h1>
                    <div> <img style={style.image1} src="/assets/part1.jpg" /></div>

                </div>
                <div style={style.part2}>
                    <div>
                        <h1 style={style.title2}><br />Why 4US?</h1>
                    </div>
                    <div><img src="/assets/icons.png" /></div>

                    {items.map((x) => (
                        <AboutBox title={x.title} paragraph={x.paragraph} />
                    ))}
                </div>

            </BlocContent>

        </div>
    );
}