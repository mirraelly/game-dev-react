import AppCard from '../AppCard/AppCard';
import appStore from '../../assets/images/appStore.svg';
import googlePlay from '../../assets/images/googlePlay.svg';
import './AppInfo.css';
import '../AppCard/AppCard.css';

const AppInfo = () => {
    return (
        <section className='fourthSection'>
            <h1 className='textBlue'>Baixe nosso App</h1>
            <p className='textBlue'>Você pode usar nosso aplicativo para uma melhor experiência em smartphones</p>
            <section className='appCard-container'>
                <div className='appCard-box'>
                    <AppCard className='first-AppCard'>
                        <img src={appStore} alt="App Store's logo" className='app-icon' />
                        <p className='textWhite'>App Store</p>
                    </AppCard>
                </div>
                <div className='appCard-box'>
                    <AppCard className='second-AppCard'>
                        <img src={googlePlay} alt="Google Play's logo" className='app-icon' />
                        <p className='textWhite'>Google Play</p>
                    </AppCard>
                </div>
            </section>
        </section>
    );
};

export default AppInfo;