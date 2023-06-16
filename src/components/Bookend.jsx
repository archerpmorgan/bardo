import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import IconButton from '@mui/material/IconButton';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

function Bookend({ sessionId }) {
    const defaultText = "Hi [sponser name]. I'm bookending the start of a relapse prevention session.";
    const [text, setText] = useState(defaultText);
    const [sent, setSent] = useState(false); //TODO: use this to show a message that the text was sent  
    const [sending, setSending] = useState(false);
    const [error, setError] = useState(null);
    const [copied, setCopied] = useState(false);

    //send a text message to a phone number to start the protocol
    const sendText = async () => {
        // setSending(true);
        // // const isAvailable = await SMS.isAvailableAsync();
        // if (isAvailable) {
        //     // const { result } = await SMS.sendSMSAsync(
        //     //     [''],
        //     //     text,
        //     // );
        //     console.log(result);
        //     setSending(false);
        //     setSent(true);
        // } else {
        //     setSending(false);
        //     setError(new Error("SMS is not available on this device"));
        // }
    }

    return (
        <div>
            <TextField
                id="filled-multiline-flexible"
                label="Bookend text"
                multiline
                maxRows={4}
                variant="filled"
                defaultValue={defaultText}
                onChange={(newValue) => setText(newValue.target.value)}
            />
            <CopyToClipboard text={text}>
                <IconButton color="primary" aria-label="add to shopping cart">
                    <ContentCopyIcon />
                </IconButton>
            </CopyToClipboard>

            {copied ? <span style={{ color: 'red' }}>Copied.</span> : null}
        </div>
        // <TextInput style={styles.textInput}
        //     placeholder={defaultText}
        //     onChangeText={(text) => setText(text)}
        //     value={text}
        // />
        // {sending ? <Text>Sending...</Text> : null}
        // {error ? <Text>Error: {error.message}</Text> : null}
        // <Button title="Submit" onPress={sendText} />
    );
}

export default Bookend;