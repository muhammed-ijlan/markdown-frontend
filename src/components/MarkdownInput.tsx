
const MarkdownInput: React.FC<{ value: string; onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void }> = ({ value, onChange }) => {
    return (
        <textarea
            className='input'
            value={value}
            onChange={onChange}
            placeholder="Type your Markdown here..."
        />
    );
};

export default MarkdownInput;