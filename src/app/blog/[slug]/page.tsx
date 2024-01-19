import { allBlogs } from '../../../../.contentlayer/generated';
import { getFromReadingTime, getBlogFromParams } from '../../../libs/getPage';
import Mdx from '../../../components/mdx/Mdx';

interface Props {
  params: {
    slug: string;
  };
}

export default async function Slug({ params }: Props) {
  const { title, category, date, tags, body } = await getBlogFromParams(
    allBlogs,
    params.slug,
  );
  const readingTime = await getFromReadingTime(allBlogs, params.slug);
  const parsedDate = date.slice(0, 10);

  return (
    <section>
      <div>
        {title}
        {category}
        {date}
        {tags.map((tag) => (
          <div>{tag}</div>
        ))}
      </div>
      <div>
        <Mdx code={body.code} />
      </div>
    </section>
  );
}
