import { BlocContent } from "components/BlocContent";
import { ProductBox } from "./ProductBox";
import { GovBloc } from "./GovBloc";
import { FundsBloc } from "./FundsBloc";
import { CddBloc } from "./CddBloc";

export const ProductsPage = () => {
    const style = {
        suite: {
            textAlign: 'center' as const,
            paddingBottom: '70px',
        },
        title: {
            marginTop: '370px',
            fontSize: '30px',
            marginBottom: '0',
            color: '#033d86',
        },
        paragraph: {
            marginTop: '7px',
            fontSize: '15px',
            lineHeight: '19px',
        },
        types: {
            background: '#f4f4f4',
            textAlign: "center" as const,
            padding: '60px 0 115px 0',
        },
        us:{
            padding: '100px 0 80px 0',
        },
    };
    return (
        <>
            <div style={style.suite}>
                <BlocContent>
                    <div>
                        <h2 style={style.title}>4US Software Suite</h2>
                    </div>
                    <p style={style.paragraph}>4US MIS is a software suite of 4 Unified Systems for Economic Empowerment through Islamic Finance, that
                        cover the MIS needs of all the stakeholders in the sphere of economic empowerment.</p>
                </BlocContent>
            </div>
            <div style={style.types}>
                <BlocContent>
                    <ProductBox title="BANKS"/>
                    <ProductBox title="GOV"/>
                    <ProductBox title="FUNDS"/>
                    <ProductBox title="CDD"/>
                </BlocContent>
            </div>
            <div style={style.us}>
                <GovBloc/>
                <FundsBloc/>
                <CddBloc/>
            </div>
        </>
    );
};
