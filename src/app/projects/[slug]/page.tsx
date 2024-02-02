import { allProjects } from 'contentlayer/generated';
import { getBlogFromParams } from '../../../libs/getPage';
import Mdx from '../../../components/mdx/Mdx';

interface Props {
  params: {
    slug: string;
  };
}

export default async function Slug({ params }: Props) {
  // const { title, category, date, tags, body } =  getBlogFromParams(
  //   allProjects,
  //   params.slug,
  // );
  // const readingTime = await getFromReadingTime(allProjects, params.slug);
  // const parsedDate = date.slice(0, 10);

  return (
    <section>
      {/* <div>
        {title}
        {category}
        {date}
        {tags?.map((tag: string) => (
          <div>{tag}</div>
        ))}
      </div>
      <div>
        <Mdx code={body.code} />
      </div> */}
    </section>
  );
}
