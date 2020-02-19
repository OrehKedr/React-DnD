import React from 'react'

function Board(props) {
    const handleDrop = event => {
        event.preventDefault();

        const cardId = event.dataTransfer.getData('cardId');        
        const card = document.getElementById(cardId);

        card.style.display = 'block';
        event.target.appendChild(card);
    };

    const handleDragOver = event => {
        event.preventDefault();
    };

    return (
        <div
            id={ props.id }
            className={ props.className }
            onDrop={ handleDrop }
            onDragOver={ handleDragOver }
        >
            { props.children }
        </div>
    )
}

export default Board
