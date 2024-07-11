import { AboutBloc } from './AboutBloc';
import { ConceptBloc } from './ConceptBloc';
import { Impactbloc } from './Impactbloc';
import { Productbloc } from './Productbloc';
import { Reachingbloc } from './Reachingbloc';

export const HomePage = () => {
    return (
        <>
            <ConceptBloc />
            <Productbloc />
            <AboutBloc />
            <Impactbloc />
            <Reachingbloc />
        </>
    );
};
