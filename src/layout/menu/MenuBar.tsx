import { BlocContent } from 'components/BlocContent';
import { Menu } from './Menu';
import { MenuGroup } from './MenuGroup';
import { MenuItem } from './MenuItem';
import { Logo } from './Logo';

export const MenuBar = () => {
    return (
        <Menu>
            <BlocContent>
                <Logo/>
                <MenuGroup>
                    <MenuItem title="Home" path="/" />
                    <MenuItem title="Company" path="/company" />
                    <MenuItem title="Concept" path="/concept" />
                    <MenuItem title="Products" path="/products" />
                    <MenuItem title="Experience" path="/experience" />
                    <MenuItem title="References & Partners" path="/reference" />
                    <MenuItem title="News" path="/news" />
                    <MenuItem title="Contact" path="/contact" />
                </MenuGroup>
            </BlocContent>
        </Menu>
    );
};
