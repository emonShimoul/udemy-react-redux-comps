import Button from '../components/Button';
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';

function ButtonPage() {
    const handleOnClick = () => {
        console.log('Click!!');
    }
    return (
        <div>
            <div>
                <Button onClick={handleOnClick} className="mb-5" success outline rounded>
                    <GoBell />
                    Click Me!
                </Button>

            </div>
            <div>
                <Button onMouseEnter={handleOnClick} danger outline rounded>
                    <GoCloudDownload />
                    Buy Now!
                </Button>
            </div>
            <div>
                <Button onMouseLeave={handleOnClick} warning outline rounded>
                    <GoDatabase />
                    See Deal!
                </Button>
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

export default ButtonPage;