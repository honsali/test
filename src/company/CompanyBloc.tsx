import { BlocContent } from "components/BlocContent";

export const CompanyBloc = () => {
    const style = {
        header: {
            color: '#033d86',
            height: '260px',
            width: '1100px',
            padding: '110px',
        },
        title: {
            fontSize: '42px',
            margin: '0',
            marginLeft: '30px',
        },
        content: {
            backgroundColor: '#f7f7f7',
            textAlign: 'center' as const,
            padding: '0 15px 40px 15px',
        },
        title1: {
            fontSize: '25px',
            color: '#033d86',
            marginBottom: '0',
        }
        ,
        paragraph: {
            width: '900',
            fontSize: '15px',
            fontWeight: '300',
            color: '#717171',
        },

    };
    return (
        <div>
            <div style={style.header}>
                <h1 style={style.title}>Company</h1>
            </div>
            <BlocContent>
                <div style={style.content}>
                    <img src="/assets/logo-1.png" />
                    <h3 style={style.title1}>President's word</h3>
                    <p style={style.paragraph}>
                        <p>The aim of our company is to help the economic empowerment of the poor through participatory finance /
                            microfinance. It is about providing <br />the disadvantaged population with resources and skills to become
                            autonomous, to enable them to become economic and social actors that produce wealth and contribute to
                            societal progress.
                        </p>
                        <p>Our economic approach is fundamentally human and social, placing "man" at the center of change, not at
                            the service of the machine of<br /> production.</p>
                        <p>One of the consequences of this approach is to consider as a focal point the building of capacities and
                            the development of opportunities for the poor and populations threatened with marginalization. The use
                            of relief and aid should not be the purpose of development missions. For that, a confidence in the
                            important potential of the target persons to carry out entrepreneurial projects is a necessary condition
                            for the success of the process of their empowerment. Another implication of such an approach is to work
                            for the cultural change that involves changing the mentalities of these populations so that they
                            themselves have confidence in their abilities and their future.</p>
                        <p>We see the poor as our partners and everyone should understand and assume their roles and
                            responsibilities. This is an important factor in <br />ensuring, at best, the balance between social
                            performance and economic performance.
                        </p>
                        <p>In this framework, we believe that Self-entrepreneurship is to be encouraged and supported as it can play
                            a strategic role in the integration and empowerment of young and marginalized people.
                        </p>
                        <p>
                            In order to fulfil its mission, our company has designed and implemented an economic training system
                            that consists in offering the following products and services:
                        </p>
                        <p>
                            1- Assistance for the design and implementation of an entrepreneurial ecosystem favourable to the
                            abilities of the poor;<br />
                            2- An adequate MIS for the management and monitoring of economic empowerment programs of disadvantaged
                            populations for the different actors of these programs: Financial Institutions, Governments, Donors,
                            Communities;<br />
                            3- Work tools tested in the field;<br />
                            4- A capacity building program for the benefit of all stakeholders in economic empowerment programs:
                            actors and beneficiaries;<br />
                            5- Assistance for the creation and start-up of activities of entities specialized in economic
                            empowerment;<br />
                            6- Assistance for the creation and mobilization of funds for programs of economic empowerment;<br />
                            7- Assistance for the study and assembly of investment projects in the field of economic capacitation
                        </p>
                        <p>
                            Our company enjoys a network of national and international partners that allows us to meet the
                            requirements of our customers and ensure our mission in the best conditions;
                        </p>
                        <p>
                            We have accomplished major projects in several countries: Sudan, Benin, Palestine, Tunisia, Djibouti,
                            Yemen, Guinea, Senegal...
                        </p>
                        <p>
                            We are ready to take up the challenges with you to make people more confident, more competent and
                            happier.</p>
                    </p>
                </div>
            </BlocContent>
        </div>
    );
};
