import axios from "axios";
import styled from "styled-components";
import { mobile } from "../../Responsive";
import { useState, useEffect } from "react";

const ContactPage = styled.section`
  width: 80%;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  ${mobile({ "font-size": "2rem " })}
`;

const ContactForm = styled.form``;
const Label = styled.label`
  font-size: 1.5rem;
`;
const Input = styled.input`
  color: white;
  border: none;
  padding: 0 0.5rem;
  font-size: 1.5rem;
  background: #0b2545;
  border-bottom: 1px solid white;
  &:focus {
    outline: none;
  }
`;
const Textarea = styled.textarea`
  color: white;
  resize: none;
  border: none;
  height: 10rem;
  padding: 0 0.5rem;
  font-size: 1.5rem;
  background: #0b2545;
  border-bottom: 1px solid white;
  &:focus {
    outline: none;
  }
`;
const Name = styled.div`
  display: flex;
  margin-bottom: 2rem;
  flex-direction: column;
`;
const Email = styled.div`
  display: flex;
  margin-bottom: 2rem;
  flex-direction: column;
`;
const Phone = styled.div`
  display: flex;
  margin-bottom: 2rem;
  flex-direction: column;
`;
const Message = styled.div`
  display: flex;
  margin-bottom: 2rem;
  flex-direction: column;
`;
const Send = styled.button`
  border: none;
  color: #0b2545;
  font-size: 1rem;
  font-weight: 900;
  border-radius: 5px;
  letter-spacing: 2px;
  padding: 0.5rem 2rem;
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
    background: #bc9359;
  }
`;
const StatusMessage = styled.div`
  margin: 1rem 0;
  ${mobile({ "text-align": "center" })}
`;

const Status = styled.p`
  font-size: 1.25rem;
`;

const Contact = () => {
  const [nameValue, setName] = useState("");
  const [phoneValue, setPhone] = useState("");
  const [emailValue, setEmail] = useState("");
  const [messageValue, setMessage] = useState("");
  const [isNameValid, setValidName] = useState(false);
  const [isPhoneValid, setValidPhone] = useState(false);
  const [isEmailValid, setValidEmail] = useState(false);
  const [isMessageValid, setValidMessage] = useState(false);
  const [submitBtn, setSubmitBtn] = useState("disabled");
  const [formEnabled, setFormEnabled] = useState("enabled");
  const [formSubmissionStatus, setFormSubmissionStatus] = useState({});

  useEffect(() => {
    validateForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nameValue, phoneValue, emailValue, messageValue]);

  function handleName() {
    const nameInput = document.getElementById("nameInput");
    let name = nameInput.value;
    setName(name);
    setValidName(true);
  }
  function handlePhone() {
    const phoneInput = document.getElementById("phoneInput");
    let phone = phoneInput.value;
    setPhone(phone);
    setValidPhone(true);
  }
  function handleEmail() {
    const emailInput = document.getElementById("emailInput");
    let email = emailInput.value;
    setEmail(email);
    setValidEmail(true);
  }
  function handleMessage() {
    const messageInput = document.getElementById("messageInput");
    let message = messageInput.value;
    setMessage(message);
    setValidMessage(true);
  }
  function validateForm() {
    if (
      isNameValid === false ||
      isPhoneValid === false ||
      isEmailValid === false ||
      isMessageValid === false
    ) {
      setSubmitBtn("disabled");
    } else {
      setSubmitBtn("enabled");
    }
  }
  function clearForm() {
    const nameInput = document.getElementById("nameInput");
    const emailInput = document.getElementById("emailInput");
    const phoneInput = document.getElementById("phoneInput");
    const messageInput = document.getElementById("messageInput");
    setName(null);
    setPhone(null);
    setEmail(null);
    setMessage(null);
    nameInput.value = null;
    emailInput.value = null;
    phoneInput.value = null;
    messageInput.value = null;
  }
  function handleSubmission(e) {
    e.preventDefault();
    setFormEnabled("disabled");
    const options = {
      name: nameValue,
      email: emailValue,
      phone: phoneValue,
      message: messageValue,
    };
    axios
      .post("https://donavinmartin.herokuapp.com/api/contact", options)
      .then((response) => {
        setFormSubmissionStatus(response.data);
        clearForm();
        setTimeout(() => {
          window.location.reload();
        }, 3500);
      });
  }

  return (
    <ContactPage>
      <Title>Contact</Title>
      <ContactForm className={formEnabled}>
        <Name>
          <Label>Name</Label>
          <Input
            id="nameInput"
            onChange={handleName}
            className={formEnabled}
          ></Input>
        </Name>
        <Phone>
          <Label>Phone Number</Label>
          <Input
            id="phoneInput"
            onChange={handlePhone}
            className={formEnabled}
          ></Input>
        </Phone>
        <Email>
          <Label>Email</Label>
          <Input
            id="emailInput"
            onChange={handleEmail}
            className={formEnabled}
          ></Input>
        </Email>
        <Message>
          <Label>Message</Label>
          <Textarea
            id="messageInput"
            onChange={handleMessage}
            className={formEnabled}
          ></Textarea>
        </Message>
        <Send className={submitBtn} onClick={handleSubmission}>
          Send
        </Send>
      </ContactForm>
      <StatusMessage>
        <Status className={formSubmissionStatus.status}>
          {formSubmissionStatus.statusMessage}
        </Status>
      </StatusMessage>
    </ContactPage>
  );
};

export default Contact;
