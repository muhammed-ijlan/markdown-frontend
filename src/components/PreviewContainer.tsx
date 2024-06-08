
const PreviewContainer: React.FC<{ title: string; content: React.ReactNode }> = ({ title, content }) => {
    return (
        <div className="preview">
            <h3>{title}</h3>
            <div className='underline' />
            {content}
        </div>
    );
};

export default PreviewContainer;