import React, { useState } from 'react';
import axiosInstance from '../api/axiosConfig';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import PreviewContainer from '../components/PreviewContainer';
import MarkdownInput from '../components/MarkdownInput';
import ButtonGroup from '../components/ButtonGroup';
import ReactCardFlip from 'react-card-flip';

const Markdown: React.FC = () => {
    const [markdown, setMarkdown] = useState<string>('');
    const [html, setHtml] = useState<string>('');
    const [isFlipped, setIsFlipped] = useState<boolean>(false);


    const handleMarkdownChange = async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const markdownText = e.target.value;
        setMarkdown(markdownText);
        try {
            const response = await axiosInstance.post('/convert', { markdown: markdownText });
            setHtml(response.data.data.html);
        } catch (error) {
            console.error('Error converting markdown:', error);
        }
    };

    const handleClear = () => {
        setMarkdown('');
        setHtml('');
    };

    const handleShowHtml = () => {
        setIsFlipped(prevState => !prevState);
    };

    return (
        <div className="container">
            <MarkdownInput value={markdown} onChange={handleMarkdownChange} />
            <ButtonGroup onClear={handleClear} onShowHtml={handleShowHtml} isFlipped={isFlipped} />
            <div className="preview-container">
                <ReactCardFlip isFlipped={isFlipped} containerStyle={{ width: "100%" }} flipDirection='horizontal'>
                    <PreviewContainer title="Markdown Preview" content={<div style={{ wordBreak: 'break-all', }} dangerouslySetInnerHTML={{ __html: html }} />} />
                    <PreviewContainer title="HTML Preview" content={html && <SyntaxHighlighter language="html" style={darcula} lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
                        wrapLines={true} >{html}</SyntaxHighlighter>} />
                </ReactCardFlip>
            </div>
        </div>
    );
};

export default Markdown;
