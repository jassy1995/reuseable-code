import { useEffect } from "react"

export default function Child({ name }) {

    useEffect(() => {
        console.log('get name function called')
    }, [name])

    return (
        <div>My name is {name('lewandolski')}</div>
    )
}
