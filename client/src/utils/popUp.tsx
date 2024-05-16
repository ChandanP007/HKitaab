

export const successPopUp = (message: string) => {
    return (
        <div className="absolute top-0 right-0 p-4 bg-green-400 text-white">
        {message}
        </div>
    )
}

export const errorPopUp = (message: string) => {
    return (
        <div className="absolute top-0 right-0 p-4 bg-red-400 text-white">
        {message}
        </div>
    )
}