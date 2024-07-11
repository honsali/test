import { Impacticon } from './Impacticon';
export const Impacticongroup = () => {
    const image = ["/assets/box4-1.png","/assets/box4-2.png","/assets/box4-3.png","/assets/box4-4.png"];
    return (
        <div>
            {image.map((x) => (
                <Impacticon source={x} />
            ))}
        </div>
    );
};
