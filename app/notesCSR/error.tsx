'use client'

type Props = {
    error: Error;
}

const Error = ({error}: Props) => {
    return (
        <div>
            <h2>Помилка при завантаженні CSR</h2>
            <p>{error.message}</p>
        </div>
    )
}
export default Error;