import { Impactbox } from './Impactbox';

export const Impactboxgroup = () => {
    const items = [
        { title: '300', paragraph: 'Million dedicated to the economic empowerment' },
        { title: '40000', paragraph: 'Beneficiaries of economic empowerment' },
        { title: '3', paragraph: 'New institutions specialized in economic empowerment' },
        { title: '5000', paragraph: 'Jobs are created in Palestine through economic empowerment' },
    ];
    return (
        <div>
            {items.map((x) => (
                <Impactbox title={x.title} paragraph={x.paragraph} />
            ))}
        </div>
    );
};
