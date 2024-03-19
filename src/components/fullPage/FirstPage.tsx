import Title from '../common/Title';

import ScrollButton from './ScrollButton';
import { recentPosts } from '@/constants/dataset';

import PostList from '../common/PostList';

export default function FirstPage() {
  return (
    <div className="fullpage bg-cover bg-forest dark:bg-black flex flex-col justify-center items-center">
      <section>
        <Title>Recent Posts</Title>
        <PostList posts={recentPosts} />
      </section>
      <ScrollButton className="bottom-4" />
    </div>
  );
}
