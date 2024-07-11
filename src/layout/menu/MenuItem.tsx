import { useNavigate } from 'react-router';

export const MenuItem = ({ title, path }) => {
    const navigate = useNavigate();
    const style = {
        display: 'inline-block', //
        padding: '24px 16px',
        borderBottom: '4px solid transparent',
        font: 'Poppins',
        fontSize: '14px',
        color: ' #161313 ',
        cursor: ' pointer',
    };

    return (
        <li style={style} onClick={() => navigate(path)}>
            {title}
        </li>
    );
};
