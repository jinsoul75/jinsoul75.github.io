import { allBlogPosts, seriesPosts } from '@/constants/dataset';

import Title from '@/components/common/Title';
import SubTitle from '@/components/common/SubTitle';
import Paragraph from '@/components/common/Paragraph';
import PostList from '@/components/common/PostList';

export default function BlogPage() {
  return (
    <>
      <Title>Blog</Title>

      <Paragraph className="pb-4">프론트엔드 세계를 탐구합니다.</Paragraph>

      <div>검색바 컴포넌트</div>

      <SubTitle>Series</SubTitle>

      <PostList posts={seriesPosts}/>

      <SubTitle>All Posts ({allBlogPosts.length})</SubTitle>

      <PostList posts={allBlogPosts} />
    </>
  );
}
