import React, { useState } from 'react';

// Importing necessary CodeMirror assets
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

// Importing the ControlledEditor from react-codemirror2
import { Controlled as ControlledEditor } from 'react-codemirror2';

// Importing Material-UI components and icons
import { Box, Typography, Button, styled } from '@mui/material';
import { CloseFullscreen } from '@mui/icons-material';

// Importing custom styles
import '../App.css';

// Styled components using Material-UI's styled function
const Container = styled(Box)`
    flex-grow: 1;
    flex-basis: 0;
    display: flex;
    flex-direction: column;
    padding: 0 8px 8px;
`;

const Header = styled(Box)`
    display: flex;
    justify-content: space-between;
    background: #060606;
    color: #AAAEBC;
    font-weight: 700;
`;

const Heading = styled(Box)`
    background: #1d1e22;
    padding: 9px 12px;
    display: flex;
    align-items: center;
`;

// Editor component
const Editor = ({ heading, language, value, onChange, icon, color }) => {
    const [open, setOpen] = useState(true);

    const handleChange = (editor, data, value) => {
        onChange(value);
    };

    return (
        <Container style={open ? null : { flexGrow: 0 }}>
            <Header>
                <Heading>
                    <Box
                        component="span"
                        style={{
                            background: color,
                            borderRadius: 5,
                            marginRight: 5,
                            height: 20,
                            width: 20,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: '#000',
                            paddingBottom: 2
                        }}
                    >
                        {icon}
                    </Box>
                    {heading}
                </Heading>
                <CloseFullscreen
                    fontSize="small"
                    style={{ alignSelf: 'center' }}
                    onClick={() => setOpen((prevState) => !prevState)}
                />
            </Header>
            <ControlledEditor
                onBeforeChange={handleChange}
                value={value}
                className="controlled-editor"
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    lineNumbers: true,
                    theme: 'material'
                }}
            />
        </Container>
    );
};

export default Editor;
