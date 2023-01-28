import Button from "./Button";

function App() {
    return (
        <div>
            <div>
                <Button success outline rounded>Click Me!</Button>
            </div>
            <div>
                <Button danger outline rounded>Buy Now!</Button>
            </div>
            <div>
                <Button warning outline rounded>See Deal!</Button>
            </div>
            <div>
                <Button secondary outline rounded>Hide Ads!</Button>
            </div>
            <div>
                <Button primary outline rounded>Something!</Button>
            </div>
        </div>
    );
}

export default App;