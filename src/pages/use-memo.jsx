import { useEffect, useState, useMemo } from 'react';
import axios from 'axios';


const MemoExample = () => {
    const [data, setData] = useState(null)
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then((res) => { setData(res.data) })
            .catch((err) => { console.log(err) })
    }, [])

    const findLongestName = (comments) => {
        if (!comments) return null;
        let logest_name = '';
        for (let i = 0; i < comments.length; i++) {
            let current_name = comments[i].name;
            if (current_name.length > logest_name.length) {
                logest_name = current_name;
            }
        }

        console.log('running')
        return logest_name

    }

    const getLongestName = useMemo(() => findLongestName(data), [data])
    return (
        <div className='flex flex-col'>
            <div>{getLongestName}</div>
            <button className='border border-slate-200' onClick={() => setToggle(!toggle)}>Toggle</button>
            {toggle && <span>toggle</span>}
        </div>
    );
}

export default MemoExample;