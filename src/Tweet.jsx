export function Tweet({ id, name, content, like, onDelete, onLike }) {
    return (
      <div className="tweet">
        <button className="delete" onClick={onDelete}>❌</button>
        <h3>{name}</h3>
        <p>{content}</p>
        <button onClick={onLike}>{like} ❤️</button>
      </div>
    );
  }
  