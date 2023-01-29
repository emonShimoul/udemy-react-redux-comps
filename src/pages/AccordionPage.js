import Accordion from "../components/Accordion";


function AccordionPage() {
    const items = [
        {
            id: '1',
            label: 'Can I use React on a project?',
            content: 'You can use react on any project you want. You can use react on any project you want. You can use react on any project you want. You can use react on any project you want. You can use react on any project you want.'
        },
        {
            id: '2',
            label: 'Can I use JS on a project?',
            content: 'You can use react on any project you want. You can use react on any project you want. You can use react on any project you want. You can use react on any project you want. You can use react on any project you want.'
        },
        {
            id: '3',
            label: 'Can I use Python on a project?',
            content: 'You can use react on any project you want. You can use react on any project you want. You can use react on any project you want. You can use react on any project you want. You can use react on any project you want.'
        },
    ]
    return <Accordion items={items}></Accordion>
}

export default AccordionPage;