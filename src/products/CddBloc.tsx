import { BlocContent } from "components/BlocContent";
import { GovBox } from "./GovBox";

export const CddBloc = () => {
    const style = {
        gov: {
            paddingBottom: '90px',
        },

        box: {
            width: '534px',
            display: 'inline-block',
        },
        title: {
            color: '#033d86',
            fontSize: '25px',
            marginBottom: '0',
        },
        paragraph: {
            margin: '10px 0',
            color: '#033d86',
            fontSize: '15px',
        },
        logo: {
            display: 'inline-block',
            width: '200px',
            textAlign: 'center' as const,
            padding: '0 30px',
            marginLeft: '150px',
            height: '320px',
        },
        title1: {
            marginTop: '0',
            color: '#fb9010',
            fontSize: '55px',
            fontFamily: 'Courier New',
        },
    };
    return (
        <div style={style.gov}>
            <BlocContent>
                <div style={style.box}>
                    <h3 style={style.title}>4US CDD</h3>
                    <p style={style.paragraph}>4US CDD is a system that allows local communities to take part in the management and control of
                        economic empowerment programs through the following modules:</p>
                    <GovBox title="Planning">
                       
                    <li>Develop strategic and operational plannings for the execution of economic empowerment
                            programs</li>
                        <li>Meet the requirements of government and the legal framework</li>
                        <li>Comply with the intervention policies of contributors</li>
                    </GovBox>
                </div>
                <div style={style.logo}>
                    <img src="/assets/logo-1.png" />
                    <h2 style={style.title1} >CDD</h2>
                </div>

                <div style={style.box}>
                    <GovBox title="Realization">
                    <li>Organize and supervise the beneficiaries</li>
                        <li>Beneficiaries’ capacity building</li>
                        <li>Manage and control economic empowerment programs</li>
                        <li>Provide technical support to economic empowerment programs</li>
                    </GovBox>
                    <GovBox title="Monitoring">
                        <li>Assess the socio-economic impacts of economic empowerment programs</li>
                        <li>Assess the financial performance of economic empowerment programs</li>
                    </GovBox>

                </div>
            </BlocContent>
        </div>
    );
};