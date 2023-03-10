import Route from "./components/Route";
import Sidebar from "./components/Sidebar";
import AccordionPage from "./pages/AccordionPage";
import ButtonPage from "./pages/ButtonPage";
import CounterPage from "./pages/CounterPage";
import DropdownPage from "./pages/DropdownPage";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";


function App() {
    return (
        <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
            <Sidebar></Sidebar>
            <div className="col-span-5">
                <Route path="/">
                    <DropdownPage></DropdownPage>
                </Route>
                <Route path="/accordion">
                    <AccordionPage></AccordionPage>
                </Route>
                <Route path="/buttons">
                    <ButtonPage></ButtonPage>
                </Route>
                <Route path="/modal">
                    <ModalPage></ModalPage>
                </Route>
                <Route path="/table">
                    <TablePage></TablePage>
                </Route>
                <Route path="/counterpage">
                    <CounterPage initialCount={10} />
                </Route>
            </div>
        </div>
    );
}

export default App;