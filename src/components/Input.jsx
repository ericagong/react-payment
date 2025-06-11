import { useState } from 'react';
import '../styles/input.css';


export default function Input({title, type, placeholder}) {
    const [inputValue, setInputValue] = useState('');
    
    return (
        <div className='input-container'>
            <label className='input-title' htmlFor={title}>{title}</label>
            <div className='input-box'>
                    <input 
                        className='input-basic' 
                        id={title}
                        type={type} 
                        placeholder={placeholder} 
                        value={inputValue} 
                        onChange={(e) => setInputValue(e.target.value)} 
                    />
            </div>
        </div>
    );
}