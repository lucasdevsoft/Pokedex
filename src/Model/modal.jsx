

export default function Modal({ open, children }) {
    if (!open) return null


    return (
        <div className="container-modal">
            {children}
        </div>
    )
}

