import { BlocContent } from "components/BlocContent";
import { ApproachBox } from "./ApproachBox";
export const Approach = () => {
    const style = {
        approach: {
            padding: '22px 0 50px 0',
            backgroundColor: '#f9f9f9',
        },
        header: {
            textAlign: 'center' as const,
            borderBottom: 'solid 1px #e9e9e9',
        },
        title: {
            fontSize: '30px',
            color: '#033d86',
            marginBottom: '16px',
        },
        group: {
            paddingTop: '50px',
        },
        paragraph:{
            fontSize: '15px',
            color: '#033d86',
            lineHeight: '20px',
            listStyleType: '"► "',
        },
    };
    return (
        <div style={style.approach}>
            <BlocContent>
                <div style={style.header}>
                    <h1 style={style.title}>Our approach to Economic Empowerment</h1>
                </div>
                <div style={style.group} className="approach">
                    <ApproachBox title="Enable the poor to access to programs and projects opportunities:">
                    <p style={style.paragraph}>
                            <mark>1.</mark>Feasibility Study: financial, social, economic and risks<br /><br />
                            <mark>2.</mark>Project planning and organization in the local communities by the mechanisms
                            of the social
                            economy (cooperatives - associations – informal groups...) - Engineering Project - Manual
                            and operating tools<br /><br />
                            <mark>3.</mark>Implementation, follow-up, support individual and collective capacity
                            building <br /><br />
                            <mark>4.</mark> Evaluation and correction, guidance and ownership and development of the
                            spirit of
                            independence in the administration
                        </p>
                    </ApproachBox>
                    <ApproachBox title="Enable the poor to overcome six obstacles :">
                        ..
                    </ApproachBox>
                    <ApproachBox title="Develop Intelligent Partnership for the poor">
                        ..
                    </ApproachBox>
                    <ApproachBox title="Insert the activities of poors in a total value chain in order to maximize their profits by:">
                        <p style={style.paragraph}>
                        <li> Networking projects for the poor,</li>
                        <li> Enabling the poor to have partnerships with various partners with high added value,</li>
                        <li>Building on the partnership for all,</li>
                        <li> Build confidence on the partnership with the poor,</li>
                        <li> Involve the poor in the management of the partnership.</li>
                        </p>
                    </ApproachBox>
                </div>
            </BlocContent>
        </div>
    );
};