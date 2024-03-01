import PostItem from '../common/PostItem';
import { Blog } from 'contentlayer/generated';

export default function MainCard({ blog }: { blog: Blog }) {
  return (
    <li>
      <PostItem className="flex flex-col h-full border rounded-xl p-4">
        <PostItem.PostTitle title={blog.title} className="grow" />
        <PostItem.PostTags tags={blog.tags} className="mt-4" />
      </PostItem>
    </li>
  );
}
