import { Approach } from "./Approach";
import { PointBloc } from "./PointBloc";
import { BlocContent } from "components/BlocContent";

export const ConceptPage = () => {
    const style = {
        poster: {
            width: '1366px',
            alignSelf: 'auto',
        },
        points: {
            paddingTop: '40px',
            paddingBottom: '60px',
        },
    };
    return (
        <>
            <div>
                <img style={style.poster} src="/assets/chains.png" />
            </div>
            <div style={style.points}>
                <BlocContent>
                    <PointBloc />
                </BlocContent>
            </div>
            <Approach />
        </>
    );
};
