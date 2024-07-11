import { PointBox } from "concept/PointBox"
const style = {
    group: {
        width: '700px',
        display: 'inline-block',
    },
    logo: {
        float: 'right' as const,
        marginTop: '10px',
        width: '200px',
    },
};
export const PointBloc = () => {
    return (
        <>
            <div style={style.group}>
                <PointBox title="Economic Empowerment considers the different dimensions of poverty" >
                    <p>The combination of elements such as fragility, social,<br />economic and cultural barriers lead
                        to a multi-faceted poverty that relates to:</p>
                    <li>Income level,</li>
                    <li>Job,</li>
                    <li>Housing,</li>
                    <li>Financing,</li>
                    <li>Health,</li>
                    <li>Education,</li>
                    <li>Social justice,</li>
                    <li>Etc...</li>
                    <p>We believe that the poor have the right to get out of poverty by addressing all its
                        dimensions since remaining in poverty is a violation of human/social rights</p>
                </PointBox>
            </div>
            <div style={style.logo}>
                <img src="/assets/logo-1.png" />
            </div>
            <div style={style.group}>
                <PointBox title="Economic Empowerment emphasises social and economic solidarity role in fighting povrety" >
                    <p>Economic Empowerment aims to raise the socio-economic status of the poor and marginalized
                        population through social and economic solidarity
                    </p>
                    <p>Everyone agrees today that the state's role in economic and social development in itself is
                        not sufficient to develop an economy that is just and socially responsible.
                    </p>
                    <p>This is what justifies the need for the development of social and solidarity economy, and
                        this is why social institutions-including our company- are looking for other ways to find a
                        more human economy and more productive of wealth without being based only on the laws of the
                        market and the money</p>

                    <li>Enterprises are originally a group of persons before being a capital</li>
                    <li>Enterprise is ownership of its employees</li>
                    <li>Enterprises are managed democratically and mutually and have a special legal status
                        (Association - cooperative - informal groups...)</li>
                    <li>Enterprises are formed by persons who do not belong to the business world and are
                        marginalized</li>
                </PointBox>
                <PointBox title="Economic Empowerment Fundamentals" >
                    <li>Stop considering poors and social groups with special needs as a burden on society and the
                        burden on families. Poor can become real economic actors, even businessmen. </li>
                    <li>Move from relief assistance approach to the development approach </li>
                    <li> Consider target population as key actors in development and that they have potential
                        capabilities to be explored,</li>
                    <li> Work to change the mindsets of the beneficiaries so that they can be more confident in
                        their abilities and their potential </li>
                    <li>Reach equilibrium between social performance, economic performance and financial performance
                    </li>
                    <li>Rely on self-employment</li>
                </PointBox>
            </div >
        </>
    );
};
