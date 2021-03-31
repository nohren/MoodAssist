import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { Component } from 'react';
import Radio from '@material-ui/core/Radio';
import { RadioGroup } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

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
      actions: [{ actionPhrase: 'Run your favorite trail', helpfulness: 5, date: new Date() }],
      thoughts: [{ thoughtPhrase: 'and ponder getting a new dog', helpfulness: 5, date: new Date() }]
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClickSuggestion = this.handleClickSuggestion.bind(this);
  }
  //Go ...<actionphrase> And ... <thoughtphrase>

  //state needs to track whatever is selected at any one time
  //an emotion
  //how much time

  chooseEmotion(emotion) {
    if (this.state.emotion !== emotion) {
      this.setState({
        emotion: emotion
      })
    } else {
      this.setState({
        emotion: ''
      })
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  getSuggestion() {

    axios.get(`http://localhost:3000/api/backend?emotion=${this.state.emotion}&time=${this.state.time}`)
      .then((result) => {
        console.log(result)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  // postThought() {
  //   const params = {
  //     firstName: 'Oren'
  //   }
  //   axios.post('http://localhost:3000/api/backend', params)
  //   .then((result) => {
  //     console.log(result)
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
  // }

  // postAction() {

  // }

  handleClickSuggestion() {
    this.getSuggestion()
    this.setState({ cssFlash: true })

    //capture app reference
    const app = this;
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
                  onClick={() => { this.chooseEmotion('happy') }}
                >😃
                {this.state.showHoverHappy || this.state.emotion === 'happy' ?
                    <div
                      className={styles.hoverText}
                    >happy</div> : null}
                </div>
                <div className={styles.emoji}
                  onMouseEnter={() => { this.setState({ showHoverAngry: true }) }}
                  onMouseLeave={() => { this.setState({ showHoverAngry: false }) }}
                  onClick={() => { this.chooseEmotion('angry') }}
                >😠
                 {this.state.showHoverAngry || this.state.emotion === 'angry' ?
                    <div
                      className={styles.hoverText}
                    >Angry</div> : null}
                </div>
                <div className={styles.emoji}
                  onMouseEnter={() => { this.setState({ showHoverAnxious: true }) }}
                  onMouseLeave={() => { this.setState({ showHoverAnxious: false }) }}
                  onClick={() => { this.chooseEmotion('anxious') }}
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
                  onClick={() => { this.chooseEmotion('lonely') }}
                >😔
                {this.state.showHoverLonely || this.state.emotion === 'lonely' ?
                    <div
                      className={styles.hoverText}
                    >Lonely</div> : null}
                </div>
                <div className={styles.emoji}
                  onMouseEnter={() => { this.setState({ showHoverInsecure: true }) }}
                  onMouseLeave={() => { this.setState({ showHoverInsecure: false }) }}
                  onClick={() => { this.chooseEmotion('insecure') }}
                >😒
                {this.state.showHoverInsecure || this.state.emotion === 'insecure' ?
                    <div
                      className={styles.hoverText}
                    >Insecure</div> : null}
                </div>
                <div className={styles.emoji}
                  onMouseEnter={() => { this.setState({ showHoverTired: true }) }}
                  onMouseLeave={() => { this.setState({ showHoverTired: false }) }}
                  onClick={() => { this.chooseEmotion('tired') }}
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
                  onClick={() => { this.chooseEmotion('sad') }}
                >😢
                {this.state.showHoverSad || this.state.emotion === 'sad' ?
                    <div
                      className={styles.hoverText}
                    >sad</div> : null}
                </div>
                <div className={styles.emoji}
                  onMouseEnter={() => { this.setState({ showHoverConfident: true }) }}
                  onMouseLeave={() => { this.setState({ showHoverConfident: false }) }}
                  onClick={() => { this.chooseEmotion('confident') }}
                >😎
                {this.state.showHoverConfident || this.state.emotion === 'confident' ?
                    <div
                      className={styles.hoverText}
                    >Confident</div> : null}
                </div>
                <div className={styles.emoji}
                  onMouseEnter={() => { this.setState({ showHoverLove: true }) }}
                  onMouseLeave={() => { this.setState({ showHoverLove: false }) }}
                  onClick={() => { this.chooseEmotion('love') }}
                >😍
                {this.state.showHoverLove || this.state.emotion === 'love' ?
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
            {this.state.suggestion && !this.state.cssFlash?
              <p className={styles.suggestion}>
                {this.state.actions[0].actionPhrase} and {this.state.thoughts[0].thoughtPhrase}!
              </p> : null}
          </div>
            <button className={styles.button}
              onClick={this.handleClickSuggestion}
            >
              Ali-Oop my mood!
          </button>
        </main>
      </div>
    )
  }

}

