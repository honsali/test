import { Impactbloc } from "home/Impactbloc";
import { AboutBloc } from "./AboutBloc";
import { CompanyBloc } from "./CompanyBloc";
import { TeamBloc } from "./TeamBloc";


export const CompanyPage = () => {
    return (
        <div>
            <CompanyBloc/>
            <AboutBloc/>
            <Impactbloc/>
            <TeamBloc/>
        </div>  
    );
};
