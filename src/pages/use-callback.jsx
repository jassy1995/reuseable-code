import { useCallback, useState } from "react";
import Child from "../components/child";

const UseCallBackExample = () => {
    const [name, setName] = useState('robert')
    const [toggle, setToggle] = useState(false)

    const getName = useCallback((surname) => {
        return name + ' ' + surname

    }, [name])

    return (
        <div className='flex flex-col'>
            <Child name={getName} />
            <button className='border border-slate-200' onClick={() => setToggle(!toggle)}>Toggle</button>
            {toggle && <span>toggle</span>}
        </div>
    );
}

export default UseCallBackExample;