import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { Component } from 'react';
import Radio from '@material-ui/core/Radio';
import { RadioGroup } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import axios from 'axios';
import Modal from '../components/personalizeModal';
import randomObj from '../helpers/helpers'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showHoverHappy: false,
      showHoverAnxious: false,
      showHoverInsecure: false,
      showHoverTired: false,
      showHoverLonely: false,
      showHoverAngry: false,
      showHoverSad: false,
      showHoverConfident: false,
      emotion: '',
      time: '',
      cssFlash: false,
      suggestion: false,
      emojiPic: '',
      action: { action: '' },
      thought: { thought: '' }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClickSuggestion = this.handleClickSuggestion.bind(this);
    this.postAction = this.postAction.bind(this);
    this.postThought = this.postThought.bind(this);
    this.setState = this.setState.bind(this);
  }
  //Go ...<actionphrase> And ... <thoughtphrase>

  //state needs to track whatever is selected at any one time
  //an emotion
  //how much time

  chooseEmotion(emotion, emoji) {
    if (this.state.emotion !== emotion) {
      this.setState({
        emotion: emotion,
        emojiPic: emoji
      })
    } else {
      this.setState({
        emotion: '',
        emojiPic: ''
      })
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  getSuggestion() {
    axios.get(`api/backend?emotion=${this.state.emotion}&timeRequired=${this.state.time}`)
      .then((result) => {
        var actions = result.data.actions;
        var thoughts = result.data.thoughts;
        var time = Number(this.state.time);
        //select one action obj and one thought obj at random given the time allotted
        //filter the arrays for that
        if (time === 0) {
          let actionFilter = actions.filter(action => {
            return action.timeRequired === 0;
          })
          let thoughtFilter = thoughts.filter(thought => {
            return thought.timeRequired === 0;
          })
          let action = randomObj(actionFilter);
          let thought = randomObj(thoughtFilter);
          //set state with them
          this.setState({
            action,
            thought
          })

        } else if (time === 1) {
          let actionFilter = actions.filter(action => {
            return action.timeRequired === 1;
          })
          let thoughtFilter = thoughts.filter(thought => {
            return thought.timeRequired === 0 || thought.timeRequired === 1;
          })
          let action = randomObj(actionFilter);
          let thought = randomObj(thoughtFilter);
          //set state with them
          this.setState({
            action,
            thought
          })
        } else {
          let actionFilter = actions.filter(action => {
            return action.timeRequired === 1 || action.timeRequired === 2;
          })
          let thoughtFilter = thoughts.filter(thought => {
            return thought.timeRequired === 0 || thought.timeRequired === 1 || thought.timeRequired === 2;
          })
          let action = randomObj(actionFilter);
          let thought = randomObj(thoughtFilter);
          //set state with them
          this.setState({
            action,
            thought
          })
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  postThought(emotion, time, phrase) {
    // console.log('thought post')
    // console.log(emotion + ' ' + time + " " + phrase)
    const params = {
      emotion,
      timeRequired: time,
      phrase
    }
    axios.post('api/backend?kind=thought', params)
      .then((result) => {
        console.log(result)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  postAction(emotion, time, phrase) {
    // console.log('action post')
    // console.log(emotion + ' ' + time + " " + phrase)
    const params = {
      emotion,
      timeRequired: time,
      phrase
    }
    axios.post('api/backend?kind=action', params)
      .then((result) => {
        console.log(result)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  handleClickSuggestion() {
    if (this.state.emotion === '' || this.state.time === '') {
      alert('You must select an emotion and a time!')
      return;
    }
    this.getSuggestion()
    this.setState({ cssFlash: true })

    //capture app reference
    const toggleCSS = () => {
      this.setState({ cssFlash: false, suggestion: true })
    }
    const boundToggle = toggleCSS.bind(this);
    setTimeout(boundToggle, 3000);
  }


  render() {

    return (
      <div className={styles.container}>
        <Head>
          <title>MoodAssist</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport"content="width=device-width, initial-scale=1" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to MoodAssist
          </h1>

          <p className={styles.description}>
            Get started by selecting the emoji you currently identify with
          </p>

          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.emojiRow}>
                <div className={styles.emoji}
                  onMouseEnter={() => { this.setState({ showHoverHappy: true }) }}
                  onMouseLeave={() => { this.setState({ showHoverHappy: false }) }}
                  onClick={() => { this.chooseEmotion('happy', '😃') }}
                >😃
                {this.state.showHoverHappy || this.state.emotion === 'happy' ?
                    <div
                      className={styles.hoverText}
                    >Happy</div> : null}
                </div>
                <div className={styles.emoji}
                  onMouseEnter={() => { this.setState({ showHoverAngry: true }) }}
                  onMouseLeave={() => { this.setState({ showHoverAngry: false }) }}
                  onClick={() => { this.chooseEmotion('angry', '😠') }}
                >😠
                 {this.state.showHoverAngry || this.state.emotion === 'angry' ?
                    <div
                      className={styles.hoverText}
                    >Angry</div> : null}
                </div>
                <div className={styles.emoji}
                  onMouseEnter={() => { this.setState({ showHoverAnxious: true }) }}
                  onMouseLeave={() => { this.setState({ showHoverAnxious: false }) }}
                  onClick={() => { this.chooseEmotion('anxious', '😨') }}
                >😨
                {this.state.showHoverAnxious || this.state.emotion === 'anxious' ?
                    <div
                      className={styles.hoverText}
                    >Anxious</div> : null}
                </div>
              </div>
              <div className={styles.emojiRow}>
                <div className={styles.emoji}
                  onMouseEnter={() => { this.setState({ showHoverLonely: true }) }}
                  onMouseLeave={() => { this.setState({ showHoverLonely: false }) }}
                  onClick={() => { this.chooseEmotion('lonely', '😔') }}
                >😔
                {this.state.showHoverLonely || this.state.emotion === 'lonely' ?
                    <div
                      className={styles.hoverText}
                    >Lonely</div> : null}
                </div>
                <div className={styles.emoji}
                  onMouseEnter={() => { this.setState({ showHoverInsecure: true }) }}
                  onMouseLeave={() => { this.setState({ showHoverInsecure: false }) }}
                  onClick={() => { this.chooseEmotion('insecure', '😒') }}
                >😒
                {this.state.showHoverInsecure || this.state.emotion === 'insecure' ?
                    <div
                      className={styles.hoverText}
                    >Insecure</div> : null}
                </div>
                <div className={styles.emoji}
                  onMouseEnter={() => { this.setState({ showHoverTired: true }) }}
                  onMouseLeave={() => { this.setState({ showHoverTired: false }) }}
                  onClick={() => { this.chooseEmotion('tired', '😴') }}
                >😴
                {this.state.showHoverTired || this.state.emotion === 'tired' ?
                    <div
                      className={styles.hoverText}
                    >Tired</div> : null}
                </div>

              </div>
              <div className={styles.emojiRow}>
                <div className={styles.emoji}
                  onMouseEnter={() => { this.setState({ showHoverSad: true }) }}
                  onMouseLeave={() => { this.setState({ showHoverSad: false }) }}
                  onClick={() => { this.chooseEmotion('sad', '😢') }}
                >😢
                {this.state.showHoverSad || this.state.emotion === 'sad' ?
                    <div
                      className={styles.hoverText}
                    >Sad</div> : null}
                </div>
                <div className={styles.emoji}
                  onMouseEnter={() => { this.setState({ showHoverConfident: true }) }}
                  onMouseLeave={() => { this.setState({ showHoverConfident: false }) }}
                  onClick={() => { this.chooseEmotion('confident', '😎') }}
                >😎
                {this.state.showHoverConfident || this.state.emotion === 'confident' ?
                    <div
                      className={styles.hoverText}
                    >Confident</div> : null}
                </div>
                <div className={styles.emoji}
                  onMouseEnter={() => { this.setState({ showHoverLove: true }) }}
                  onMouseLeave={() => { this.setState({ showHoverLove: false }) }}
                  onClick={() => { this.chooseEmotion('loved', '😍') }}
                >😍
                {this.state.showHoverLove || this.state.emotion === 'loved' ?
                    <div
                      className={styles.hoverText}
                    >Loved</div> : null}
                </div>

              </div>
            </div>
          </div>
          <p className={styles.description}>
            Now select how much time you have to do something for your mood
          </p>
          <div className={styles.newCard}>
            <RadioGroup aria-label="gender" name="time" value={this.state.time} onChange={this.handleChange}>
              <FormControlLabel value="0" control={<Radio color="primary" />} label="Couple minutes" />
              <FormControlLabel value="1" control={<Radio color="primary" />} label="Couple hours" />
              <FormControlLabel value="2" control={<Radio color="primary" />} label="Let's Schedule it!" />
            </RadioGroup>

          </div>
          <p className={styles.suggestionContext}>
            Mood assist sends you suggestions based on your current mood. These suggestions are modeled off the action-thought
            paradigm of nuerolinguistic programming (NLP).
          </p>

          <div className={this.state.cssFlash ? styles.suggestionCardImg : styles.suggestionCard}>
            {this.state.suggestion && !this.state.cssFlash ?
              <p className={styles.suggestion}>
                {this.state.action.action} and {this.state.thought.thought}!
              </p> : null}
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.button}
              onClick={this.handleClickSuggestion}
            >
              Ali-Oop my mood!
          </button>
            <span className={styles.modalButton}>
              <Modal emojiPic={this.state.emojiPic} emotion={this.state.emotion} postAction={this.postAction} postThought={this.postThought} />
            </span>
          </div>
        </main>
      </div>
    )
  }

}

