import { Outlet } from 'react-router';
import { Footer } from './Footer';
import { MenuBar } from './menu/MenuBar';
import { SocialMediaBar } from './SocialMediaBar';

const Layout = () => {
    return (
        <div>
            <SocialMediaBar />
            <MenuBar />
            <Outlet />
            <Footer />
        </div>
    );
};
export default Layout;
