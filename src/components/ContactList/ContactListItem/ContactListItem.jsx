export function ContactListItem({ data }) {
  return data.map((data) => {
    return (
      <li key={data.id}>
        <p>
          {data.name}:{data.number}
        </p>
        <button>Delete</button>
      </li>
    );
  });
}
