import React from 'react';
import { Icon } from '@iconify/react';

interface ButtonGroupProps {
    isFlipped: boolean;
    onClear: () => void;
    onShowHtml: () => void;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ onClear, onShowHtml, isFlipped }) => {
    return (
        <div className='button-section'>
            <button className="styled-button" onClick={onClear}>
                <Icon icon={"ic:sharp-clear"} style={{ fontSize: '20px', marginRight: '5px' }} />
                Clear
            </button>
            <button className="styled-button" onClick={onShowHtml}>
                <Icon icon={isFlipped ? "carbon:view" : "mdi:code-tags"} style={{ fontSize: '20px', marginRight: '5px' }} />
                {`${isFlipped ? "View Preview" : "Show HTML"}`}
            </button>
        </div>
    );
}

export default ButtonGroup;
