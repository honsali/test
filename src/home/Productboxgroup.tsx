
    import { Productbox } from './Productbox';

    export const Productboxgroup = () => {
        const items = [
            { title: '4US Banks', paragraph: "4us banks assists banks and financial institutions during the execution of a developmentprogram which is based on Islamic finance." },
            { title: '4US Gov', paragraph: "4US Gov is the information system of the 4US Suite designed for governments seeking to implement a development program." },
            { title: "4US Funds", paragraph: "4us Funds aims to assist international organizations, mainly donors, to develop and implement programs of economic empowerment in developing countries." },
            { title: '4US CDD', paragraph: "4US CDD is a system that allows local communities to take part in the management and control of  economic empowerment programs." },

        ];
        return (
            <div>
                    {items.map((x) => (
                            <Productbox  title={x.title} paragraph={x.paragraph} />
                        ))}
            </div>
        );
    };
    