import '../styles/SubscribeForm.css';

const SubscribeForm = () => {
    return (
        <form className='email-forms e-mail-edge'>
            <input type="text" placeholder="Email Address" className='email-input bord e-mail-edge' required />
            <button type='submit' className='email-submit textWhite e-mail-edge'>Subscrever</button>
        </form>
    );
};

export default SubscribeForm;