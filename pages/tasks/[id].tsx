import { BaseUrl } from "../../store/store";
export default function Post({ data }) {
  return (
    <div>
      <ul>
        {Object.keys(data).map((key) => (
          <li key={data[key]}>
            {key} : {data[key]}
          </li>
        ))}
      </ul>
    </div>
  );
}

Post.getInitialProps = async (ctx) => {
  const response = await fetch(`${BaseUrl}/tasks/${ctx.query.id}`);
  const data = await response.json();

  return { data: data[0] };
};
