import { BlocContent } from "components/BlocContent";
import { TeamBox } from "./TeamBox";

export const TeamBloc = () => {
    const style = {
        team: {
            paddingTop: '180px',
            textAlign: 'center' as const,
        },
        title: {
            fontSize: '40px',
            color: '#033d86',
            marginBottom: '0',
        },
        paragraph: {
            fontWeight: '300',
            color: '#a8a8a8',
            fontSize: '15px',
            listStyleType: '"‣"',
        },
        members:{
            margin: 'auto' ,
            width: '1300px',
        },
    };
    return (
        <div style={style.team}>
            <BlocContent>
                <h1 style={style.title}>Our Team</h1>
                <p style={style.paragraph}>Our team is a group of highly qualified individuals specialized in the following fields :
                    <li>Islamic Economy and Finance</li>
                    <li> Microfinance and Economic Empowerment</li>
                    <li> Institutions and projects</li>
                    <li> IT Engineering</li>
                    <li> Islamic Law</li>
                </p>
            </BlocContent>
            <div style={style.members}>
                <TeamBox title="Anasse El Hasnaoui">General Manager</TeamBox>
                <TeamBox title="Abderrahim Lih">Head of Consulting and Training <br/>Department</TeamBox>
                <TeamBox title="Said Ait Dadda">IT Responsible</TeamBox>
                <TeamBox title="Zakaria Kharchaf">Technical sales representative</TeamBox>
            </div>
        </div>

    );
};
