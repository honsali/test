import { BlocContent } from "components/BlocContent";
import { GovBox } from "./GovBox";

export const GovBloc = () => {
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
                    <h3 style={style.title}>4US Gov</h3>
                    <p style={style.paragraph}>4US Gov is the information system of the 4US Suite designed for governments seeking to implement a development program. 4US Gov assists government agencies during all phases of the program
                        through the following modules:
                    </p>
                    <GovBox title="Conception">
                        <li>Conduct field surveys</li>
                        <li>Analyze economic and social data of the poor</li>
                        <li>Analyze the needs and potential of poor families</li>
                        <li>Establish a knowledge base fed by preliminary field studies</li>
                        <li>Define a national strategy of economic empowerment through <br />Islamic finance</li>
                        <li>Set standards and appropriate evaluation indicators</li>
                        <li>Define social and economic objectives</li>
                        <li>Conduct simulations</li>
                    </GovBox>
                </div>
                <div style={style.logo}>
                    <img src="/assets/logo-1.png" />
                    <h2 style={style.title1} >GOV</h2>
                </div>

                <div style={style.box}>
                    <GovBox title="Promotion">
                        <li>Contacting potential partners</li>
                        <li>Management and monitoring of campaigns</li>
                    </GovBox>
                    <GovBox title="Launch">
                        <li>Operational planning of economic empowerment programs</li>
                        <li>Defining the actors roles and responsibilities</li>
                        <li>Coordination of the relationship between internal and external actors</li>
                        <li> Setting up funds</li>
                    </GovBox>
                    <GovBox title="Monitoring"><li>Manage interconnected development programs</li>
                        <li>Monitoring of program funding</li>
                        <li>Monitoring of execution entities' activity and program management </li>
                        <li>Monitoring activity and program execution</li></GovBox>

                    <GovBox title="Evaluation">
                        <li>Conduct impact analysis</li>
                        <li>Multivariate Analysis of financing, management and execution Data</li>
                        <li>Objectives evaluation Report</li>
                    </GovBox>

                </div>
            </BlocContent>
        </div>
    );
};