import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
//import { Element } from "react-scroll";
import "./contact.css";

import React, { useState, useEffect } from "react";
import { db } from "../../firebase";



export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);

        db.collection("contacts")
            .add({
                name: name,
                email: email,
                message: message,
            })
            .then(() => {
                setLoader(false);
                alert("Your message has been submitted👍");
            })
            .catch((error) => {
                alert(error.message);
                setLoader(false);
            });

        setName("");
        setEmail("");
        setMessage("");
    };
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px"
        }}
      >
        <form
          onSubmit={handleSubmit}
          className="contact-form"
          id="contact-form"
          style={{
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column",
            padding: "25px",
            borderRadius: "10px"
          }}
        >
          <TextField
            label="Name"
            type="text"
            margin="normal"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            variant="outlined"
            placeholder="Enter your email"
          />
          <TextField
            label="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            multiline
            margin="normal"
            variant="outlined"
            placeholder="Enter your message"
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Button
              variant="outlined"
              color="primary"
              size="large"
              type="submit"
              style={{ width: "50%", marginTop: "15px" }}
            >
              Send
            </Button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}
