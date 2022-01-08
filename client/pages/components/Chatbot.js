import { Component } from "react";
import Styled from '@emotion/styled'
import axios from 'axios';
import { v4 as uuid } from "uuid";
import Cookies from 'universal-cookie';
import Message from "./Message";

const cookies = new Cookies();

const StyledChatbot = Styled.div`
    height: 400px;
    width: 400px;
    float: right;
    #chatbot {
        height: 100%;
        width: 100%;
        overflow: auto;
        background: red;
    }
    .monda {
        float: left;
        clear: both;
    }
`;

class Chatbot extends Component {

    messagesEnd;
    talkInput;

    constructor(props) {
        super(props);
        this.handleInputKeyPress = this._handleInputKeyPress.bind(this);
        this.state = {
            messages: []
        };

        if(cookies.get('userID') === undefined) {
            cookies.set('userID', uuid(), {path:'/'});
        }
        console.log(cookies.get('userID'));
    }

    async df_text_query(queryText) {
        let says = {
            speaks: 'Yo',
            msg: {
                text: {
                    text: queryText
                }
            }
        };

        this.setState({messages: [...this.state.messages, says]});
        const res = await axios.post('/api/df_text_query', {text: queryText, userID: cookies.get('userID')});

        for(let msg of res.data.fulfillmentMessages) {
            says = {
                speaks: 'bot',
                msg: msg
            };
            this.setState({messages: [...this.state.messages, says]});
        }
    }

    async df_event_query(eventName) {
        const res = await axios.post('/api/df_event_query', {event: eventName, userID: cookies.get('userID')});

        for(let msg of res.data.fulfillmentMessages) {
            let says = {
                speaks: 'bot',
                msg: msg
            };
            this.setState({messages: [...this.state.messages, says]});
        }
    }

    componentDidMount() {
        this.df_event_query('Welcome');
    }

    componentDidUpdate() {
        this.messagesEnd.scrollIntoView({ behavior: "smooth"});
        this.talkInput.focus();
    }

    renderMessages(stateMessages) {
        if(stateMessages) {
            return stateMessages.map((message, i) => {
                return <Message key={i} speaks={message.speaks} text={message.msg.text.text} />;
            });
        } else {
            return null;
        }
    }

    _handleInputKeyPress(e) {
        if(e.key === 'Enter') {
            this.df_text_query(e.target.value);
            e.target.value = '';
        }
    }

    render() {
        return(
            <StyledChatbot>
                <div id="chatbot">
                    <h2>Chatbot</h2>
                    {this.renderMessages(this.state.messages)}
                    <div className="Monda" ref={(el) => { this.messagesEnd = el;  }} ></div>
                    <input type="text" ref={(input) => { this.talkInput = input; }} onKeyPress={this.handleInputKeyPress} autoFocus/>
                </div>
            </StyledChatbot>
        )
    }
}

export default Chatbot;