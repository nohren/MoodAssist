import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import styles from '../styles/Home.module.css'
import Select from './Select';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 700,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function SimpleModal({ postAction, postThought, emotion, emojiPic }) {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [activity, setActivity] = React.useState('');
    const [time, setTime] = React.useState('');
    const [phrase, setPhrase] = React.useState('');

    const handleOpen = () => {
        //check if an emotion selected
        emotion === '' ? alert('You must select an emotion before you can personalize your suggestions!') : setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onClickSubmit = () => {
        //track emotion 
        //based on activity do that
        if (activity === 'action') {
            postAction(emotion, time, phrase);
        } else if (activity === 'thought') {
            postThought(emotion, time, phrase)
        }
        // console.log(postAction)
        // console.log(postThought)       
        // console.log(emotion)
        // console.log(activity)
        // console.log(time)
        // console.log(phrase)

        //close modal 
        handleClose();
        returnToDefaultState();
    };

    const returnToDefaultState = () => {
        setActivity('');
        setTime('');
        setPhrase('');
    }

    const onChangeText = (e) => {
        setPhrase(e.target.value)
    };


    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Personalize your suggestions for {emojiPic}</h2>
            <Select setTime={setTime} setActivity={setActivity} activity={activity} time={time} />
            <span className={styles.input}>
                <div className={styles.example}><i>{' '}"Go walk your pug" or "think about roses and sunshine"</i></div>

                <input className={styles.inputWidth} onChange={onChangeText} name="phrase" type="text" value={phrase} />
            </span>
            <button
                className={styles.button}
                onClick={onClickSubmit}
            >Submit</button>
        </div>
    );

    return (
        <div>
            <button className={styles.button} type="button" onClick={handleOpen}>
                Personalize!
      </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"

            >
                {body}
            </Modal>
        </div>
    );
}