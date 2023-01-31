import Link from "./Link";

function Sidebar() {
    const Links = [
        { label: 'Dropdown', path: '/' },
        { label: 'Accordion', path: '/accordion' },
        { label: 'Buttons', path: '/buttons' },
        { label: 'Modal', path: '/modal' },
        { label: 'Table', path: '/table' },
        { label: 'Counter', path: '/counterpage' },
    ];

    return (
        <div className="sticky top-0 flex flex-col items-start">
            {
                Links.map((link) => {
                    return <Link
                        key={link.label}
                        to={link.path}
                        className="mb-3"
                        activeClassName="font-bold border-l-4 border-blue-500 pl-2"
                    >{link.label}</Link>
                })
            }
        </div>
    );
}

export default Sidebar;