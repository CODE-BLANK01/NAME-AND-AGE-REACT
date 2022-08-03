
import Card from './Card';
import Wrapper from '../Wrapper/Wrapper'
import Button from './Button'
import classes from './ErrorModal.module.css';

const ErrorModal=props=>{
    return(
        <Wrapper>
            <div className={classes.backdrop} onClick={props.onConfirm}/>
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p> {props.message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.onConfirm}>Okay</Button>
                </footer>
            </Card>
        </Wrapper>
    )
}

export default ErrorModal;