import './index.css';

const List = (props) => {
  return (
    <div>
      <ul>
        {props.list.map(
          ({ title, url, author, num_comments, points, objectID }) => (
            <li key={objectID}>
              <p>{title}</p>
              <a href={url}>{title}</a>
              <p>{author}</p>
              <p>Comments {num_comments}</p>
              <p>Points: {points}</p>
            </li>
          )
        )}
      </ul>
    </div>
  );
};
export default List;
