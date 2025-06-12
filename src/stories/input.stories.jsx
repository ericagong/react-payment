import { useState } from 'react';
import LabledInput from '../components/molecules/LabledInput.jsx';

export default {
    title: 'Input',
    component: LabledInput,
    args: {
        title: '제목',
        placeholder: '입력해주세요.',
    }
}

export const Default = (args) => {
    const [value, setValue] = useState('');

    return (
        <LabledInput 
            {...args} 
            value={value} 
            onChange={(e) => setValue(e.target.value)} 
        />
    );
}

