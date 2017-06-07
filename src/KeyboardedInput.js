import React from 'react';
import Keyboard from './Keyboard';
import KeyboardButton from './KeyboardButton';

class KeyboardedInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleFocus = this.handleFocus.bind(this);
    this.handleFocusLost = this.handleFocusLost.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.hideKeyboard = this.hideKeyboard.bind(this);

    this.state = {
      showKeyboard: false,
      input: null,
      focusLostTimer: null
    };
  }

  componentDidMount() {
    this.refs.input.addEventListener('input', this.handleChange);
  }

  componentWillUnmount() {
    this.refs.input.removeEventListener('input', this.handleChange);
    if (this.state.focusLostTimer)
      clearTimeout(this.state.focusLostTimer);
  }

  componentDidUpdate(prevProps, prevState) {
    if ((this.state.showKeyboard !== prevState.showKeyboard) && this.props.onToggle)
      this.props.onToggle(this.state.showKeyboard);
  }

  handleChange(event) {
    this.props.onChange(event.target.value);
  }

  handleFocus() {
    this.setState({...this.state, showKeyboard: true});
  }

  handleFocusLost(event) {
    this.setState({
      focusLostTimer: setTimeout(() => {
       if (!document.activeElement.classList.contains("keyboard-button") && !document.activeElement.classList.contains("keyboard") && !document.activeElement.classList.contains("keyboard-row")) {
         this.setState({...this.state, showKeyboard: false, focusLostTimer: null});
       }
      }, 0)
    });
  }

  hideKeyboard() {
    this.setState({...this.state, showKeyboard: false});
  }

  render() {
    return (
      <div>
        <input 
          value={this.props.value}
          type={this.props.type}
          onFocus={this.handleFocus}
          onBlur={this.handleFocusLost}
          min={this.props.min}
          max={this.props.max}
          step={this.props.step}
          pattern={this.props.pattern}
          onChange={this.handleChange}
          autoFocus={this.props.autoFocus}
          ref="input"
        />
        {this.state.showKeyboard && this.props.enabled &&
          <Keyboard
            hideKeyboard={this.hideKeyboard}
            defaultKeyboard={this.props.defaultKeyboard}
            secondaryKeyboard={this.props.secondaryKeyboard}
            inputNode={this.refs.input}
            isFirstLetterUppercase={this.props.capitalize}
          />
        }
      </div>
    );
  }
}

export default KeyboardedInput;
