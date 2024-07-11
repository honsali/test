import { BlocContent } from "components/BlocContent";
import { GovBox } from "./GovBox";

export const FundsBloc = () => {
    const style = {
        funds: {
            backgroundColor: '#f4f4f4',
            paddingTop: '70px',
            height: '1140px',
            paddingNottom: '80px',
        },
        logo: {
            display: 'inline-block',
            width: '200px',
            textAlign: 'center' as const,
            padding: '0 30px',
            marginLeft: '150px',
            height: '320px',
        },
        title: {
            marginTop: '0',
            color: '#fb9010',
            fontSize: '55px',
            fontFamily: 'Courier New',
        },
        box: {
            width: '534px',
            display: 'inline-block',
            float: 'right' as const,
        },
        title1: {
            color: '#033d86',
            fontSize: '25px',
            marginBottom: '0',
        },
        paragraph: {
            margin: '10px 0',
            color: '#033d86',
            fontSize: '15px',
        },
    };
    return (
        <div style={style.funds}>
            <BlocContent>
                <div style={style.logo}>
                    <img src="/assets/logo-1.png" />
                    <h2 style={style.title} >FUNDS</h2>
                </div>
                <div style={style.box}>
                    <h3 style={style.title1} >4US Funds</h3>
                    <p style={style.paragraph} >4US Funds aims to assist international organizations, mainly donors, to develop and implement
                        programs of economic empowerment in developing countries. For this, the modules 4us Funds cover
                        all
                        phases necessary for the implementation of these programs including the design, fundraising,
                        search
                        and partner selection, monitoring and classification of the implementing agencies ... 4US Funds
                        includes So the following modules:
                    </p>
                    <GovBox title="Methodology">
                        <li>Define standards governing the collaboration with partners</li>
                        <li>Define performance indicators to monitor the economic empowerment of the Deprived families
                        </li>
                    </GovBox>
                    <GovBox title="Strategy">
                        <li>Choose intervention policy in poor areas using selection criteria (social, economic,
                            geographic,
                            demographic, ...)</li>
                        <li>Definition of contracts and conditions governing partnerships and relationships with local
                            autorities</li>
                    </GovBox>
                    <GovBox title="Financing">
                        <li>Create and manage a fund for financing economic empowerment programs</li>
                        <li>Create and manage an investment portfolio for financing economic empowerment programs
                            through
                            islamic finance</li>
                        <li>Mobilize donors to participate in funds and investment portfolios</li>
                        <li> Invest in external funds and external portfolios conform to the policy of intervention</li>
                        <li>Develop supporting funds and guarantee fund for economic empowerment programs</li>
                    </GovBox>
                    <GovBox title="Realization">
                        <li>Implement economic empowerment programs through communities and executing agencies meeting
                            the
                            standards</li>
                        <li>Coordinate with all stakeholders: governments, local or international</li>
                    </GovBox>

                    <GovBox title="Monitoring"><li>Monitor the work of own funds and own portfolios</li>
                        <li>Follow the placments in external funds and external portfolios</li>
                        <li>Monitor the activity of local stakeholders and partners</li>
                        <li>Ensure compliance with the intervention policy</li>
                        <li>Evaluate program performance based on the defined indicators</li>
                    </GovBox>


                </div>
            </BlocContent>
        </div>
    );
};