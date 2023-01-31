import {FormEvent, useState} from "react";

const URL = "https://jsonplaceholder.typicode.com/posts";

export default function Fetcher() {
    const [id, setId] = useState("");
    const [error, setError] = useState("");
    const [result, setResult] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            const response = await fetch(`${URL}/${id}`);
            if (response.status !== 200) {
                throw Error(response.statusText);
            }
            const data = await response.json();
            setResult(data);
        } catch (e) {
            if (e instanceof Error) {
                setError(e.message);
            }
        }
    };

    return <form onSubmit={handleSubmit}>
        <label>
            ID:
            <input type="text" value={id} onChange={e => setId(e.target.value)}/>
            <br/>
        </label>
        <button type="submit">Получить данные!</button>
        {result && <div>
            <b>{result?.title}</b><br/>
            {result?.body}
        </div>}
        {error && <div>{error}</div>}
    </form>;
}