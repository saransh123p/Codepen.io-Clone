import { useState, useEffect, useContext } from 'react';
import { DataContext } from '../context/DataProvider';
import { Box, styled } from '@mui/material';

const Container = styled(Box)`
    height: 41vh;
    position: relative; /* Ensure the container is positioned correctly */
    overflow: hidden; /* Prevent content from spilling out */
    background-color: #444857; /* Background color for when content is not present */
`;

const StyledIframe = styled('iframe')`
    position: absolute; /* Position the iframe absolutely within the container */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none; /* Remove border */
    overflow: hidden; /* Handle overflow of iframe content */
`;

const Result = () => {
    const [src, setSrc] = useState('');
    const { html, css, js } = useContext(DataContext);

    // Create the srcCode string
    const srcCode = `
        <html>
            <head>
                <style>
                    html, body {
                        margin: 0;
                        padding: 0;
                        width: 100%;
                        height: 100%;
                        overflow: hidden; /* Prevent scrolling inside iframe */
                    }
                    /* Additional styles can be added here */
                    ${css}
                </style>
            </head>
            <body>
                ${html}
                <script>${js}</script>
            </body>
        </html>
    `;

    useEffect(() => {
        // Update the src state with a delay to ensure iframe content is updated
        const timeout = setTimeout(() => {
            setSrc(srcCode);
        }, 250);

        // Clean up the timeout if the component is unmounted or dependencies change
        return () => clearTimeout(timeout);
    }, [html, css, js]);

    return (
        <Container>
            <StyledIframe 
                srcDoc={src}
                title="output"
                sandbox="allow-scripts"
            />
        </Container>
    );
}

export default Result;
