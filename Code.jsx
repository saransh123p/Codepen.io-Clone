import { useContext } from 'react';
import { Box, styled } from '@mui/material';
import Editor from './Editor';  // Ensure this is the correct path for the Editor component
import { DataContext } from '../context/DataProvider';  // Ensure this is the correct path for the DataContext

// Styled component for the container
const Container = styled(Box)`
    display: flex;
    background-color: #060606;
    height: 50vh;
`;

const Code = () => {
    // Destructure the necessary states from the DataContext
    const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext);

    return (
        <Container>
            {/* Editor component for HTML */}
            <Editor 
                language="xml"  // Specify the language mode for CodeMirror
                heading="HTML"  // Set the heading for this editor
                icon="/"  // Icon representation
                color="#FF3C41"  // Color for the header
                value={html}  // The current value for the HTML editor
                onChange={setHtml}  // Function to update the value
            />
            {/* Editor component for CSS */}
            <Editor 
                language="css"
                heading="CSS"
                icon="*"
                color="#0EBEFF"
                value={css}
                onChange={setCss}
            />
            {/* Editor component for JavaScript */}
            <Editor 
                language="javascript"
                heading="JavaScript"
                icon="()"
                color="#FCD000"
                value={js}
                onChange={setJs}
            />
        </Container>
    );
}

export default Code;
