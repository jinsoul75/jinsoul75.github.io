import PostItem from '../common/PostItem';
import { Blog } from 'contentlayer/generated';

export default function MainCard({ blog }: { blog: Blog }) {
  return (
    <li>
      <PostItem key={blog._id} className="flex flex-col h-full">
        <PostItem.PostTitle
          title={blog.title}
          className="grow"
          slug={blog.slug}
        />
        <PostItem.PostTags tags={blog.tags} className="mt-4" />
      </PostItem>
    </li>
  );
}
