import { useEffect } from "react"

export default function Child({ name }) {
    //   just to know how many time this name function(props) is being called in the parent component
    useEffect(() => {
        console.log('get name function called')
    }, [name])

    return (
        <div>My name is {name('lewandolski')}</div>
    )
}
