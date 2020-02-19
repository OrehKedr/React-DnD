import React from 'react'

function Card(props) {
    const handleDragStart = event => {
        const target = event.target;

        event.dataTransfer.setData('cardId', target.id);

        setTimeout(() => {
            target.style.display = 'none';
        }, 0);
    };

    const handleDragOver = event => {
        event.stopPropagation();
    };

    return (
        <div
            id={ props.id }
            className={ props.className }
            draggable={ props.draggable }
            onDragStart={ handleDragStart }
            onDragOver={ handleDragOver }
        >
            { props.children }
        </div>
    )
}

export default Card
