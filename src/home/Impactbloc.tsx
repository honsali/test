import { Impacticongroup } from './Impacticongroup';
import { Impactboxgroup } from './Impactboxgroup';
import { BlocContent } from 'components/BlocContent';

export const Impactbloc = () => {
    const style = {
        impact: {
            backgroundColor: '#ffffff',
        },
        bloc: {
            textAlign: 'center' as const,
            paddingTop: '300px',
        },

    };
    return (
        <div style={style.impact}>
            <BlocContent >
                <div style={style.bloc}>

                    <Impacticongroup />
                    <Impactboxgroup />
                </div>
            </BlocContent>

        </div>
    );
};
