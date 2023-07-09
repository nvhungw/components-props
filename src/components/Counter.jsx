const number = 6

const Counter = () =>{
    return (
        <>
        {number % 2 === 0 &&
            <h1 className = 'odd'>
                <span>Số Chẵn</span>
            </h1>
        }
        </>
    )
}

export default Counter;