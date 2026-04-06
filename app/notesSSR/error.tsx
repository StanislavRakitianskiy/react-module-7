'use client';

type Props = {
    error: Error;
    reset: () => void
}

const Error = ({error, reset}: Props) => {
    return ( 
        <div>
            <h2>Помилка при завантаженні SSR</h2>
            <p>{error.message}</p>
            <button onClick={reset}>Again</button>
        </div>
    )
}
export default Error