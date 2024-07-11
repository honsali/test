import { BlocContent } from 'components/BlocContent';
import { Reachingbox } from './Reachingbox';
import { Reachingtitle } from './Reachingtitle';
export const Reachingbloc = () => {
    const array3 = ['1', '2', '3', '4', '5'];
    const style = {
        reaching: {
            paddingTop: '210px',
            paddingBottom: '95px',
        },
        group: {
            display: 'inline-table',
            marginTop: '70px',
        },

    };
    return (
        <div style={style.reaching}>
            <BlocContent>
                <Reachingtitle />
                <div style={style.group}>
                    <br />
                    <br />
                    {array3.map((x) => (
                        <Reachingbox number={x} />
                    ))}
                </div>
            </BlocContent>
        </div>
    );
};
