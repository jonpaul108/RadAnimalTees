import Link from 'next/link';

const ShirtPost = props => (
  <li>
    <Link href={`/shirt?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

export default ShirtPost;
