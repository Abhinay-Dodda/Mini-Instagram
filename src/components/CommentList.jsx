// src/components/CommentList.jsx
export default function CommentList({ comments }) {
  // If there are no comments, show a message
  if (!comments || !comments.length) {
    return <p style={{ opacity: 0.7, marginTop: 8 }}>Be the first to comment.</p>;
  }

  // Otherwise, display the list of comments
  return (
    <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: 8 }}>
      {comments.map(c => (
        <li key={c.id}><strong>@{c.author}</strong> {c.text}</li>
      ))}
    </ul>
  );
}