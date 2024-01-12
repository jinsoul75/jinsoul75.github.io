import { allBlogs } from '../../../../.contentlayer/generated';
import { getFromReadingTime, getBlogFromParams } from '../../../libs/getPage';
import Mdx from '../../../components/mdx/Mdx';

interface Props {
  params: {
    slug: string;
  };
}

export default async function Slug({ params }: Props) {
  const posting = await getBlogFromParams(allBlogs, params.slug);
  const readingTime = await getFromReadingTime(allBlogs, params.slug);
  const date = posting.date.slice(0, 10);

  return (
    <section>
      <div>
        {posting.title}
        {posting.category}
        {posting.date}
        {posting.tags.map((tag) => (
          <div>{tag}</div>
        ))}
      </div>
      <div>
        <Mdx code={posting.body.code} />
      </div>
    </section>
  );
}
