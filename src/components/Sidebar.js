import Link from "./Link";

function Sidebar() {
    const Links = [
        { label: 'Dropdown', path: '/' },
        { label: 'Accordion', path: '/accordion' },
        { label: 'Buttons', path: '/buttons' },
    ];

    return (
        <div className="sticky top-0 flex flex-col">
            {
                Links.map((link) => {
                    return <Link key={link.label} to={link.path}>{link.label}</Link>
                })
            }
        </div>
    );
}

export default Sidebar;