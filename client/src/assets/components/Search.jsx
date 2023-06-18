import search from '../iconoir_search.svg'
import { useState, useEffect } from 'react'



export default function Search(props) {
    const [input, setInput] = useState('')
    const [empty, setEmpty] = useState(false)

    const performSearch = (e) => {
        e.preventDefault()
        if (input.length > 0) {
            setEmpty(false)
            props.setDataFetch(true)
            props.setSearch(input)
        }
        if (input.length === 0) {
            setEmpty(true)
        }
    }
    return(
        <form onSubmit={ performSearch }>
            <label id="search">
                <input className={ empty ? "empty-form" : ""} value={input} type="text" onChange={(e)=> {setInput(e.target.value)}} onSubmit={(e) => {runSearch(e)}} />
                <img src={search}  onClick={ performSearch }/>
            </label>
            { empty && <p className="empty-message">Whoops, can’t be empty…</p> }
        </form>
    )
}
