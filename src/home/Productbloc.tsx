import { Producticongroup } from './Producticongroup';
import { Productboxgroup } from './Productboxgroup';
import { BlocContent } from 'components/BlocContent';
export const Productbloc = () => {
    const array1 = ["/assets/box-1.png", "/assets/box-2.png", "/assets/box-3.png", "/assets/box-4.png"];
    return (
        <div style={{ backgroundColor: '#f6f6f6' }}>
            <BlocContent>
                <Producticongroup items={array1} />
                <Productboxgroup />
            </BlocContent>
        </div>
    );
};
