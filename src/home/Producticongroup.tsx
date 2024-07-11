import { Producticon } from './Producticon';
export const Producticongroup = ({ items }) => {
    const style = {
        title: {
            color: '#033d86',
            padding: '60px',
            fontWeight: '700',
            textAlign: 'center' as const,
            paddingRight: '80px',
        },
    };
    return (
        <>
            <div>
                <h1 style={style.title}>OUR PRODUCTS</h1>
            </div>
            <div>
                {items.map((x) => (
                    <Producticon source={x} />
                ))}
            </div>
        </>
    );
};
