import { allBlogs } from 'contentlayer/generated';

import { getSortByLatestDate } from '@/libs/getPosts';

import Title from '@/components/common/Title';
import SubTitle from '@/components/common/SubTitle';
import Paragraph from '@/components/common/Paragraph';
import PostList from '@/components/common/PostList';
import Link from 'next/link';

export default function BlogPage() {
  const sortedPosts = getSortByLatestDate(allBlogs);

  return (
    <>
      <Title>Blog</Title>

      <Paragraph className="pb-4">프론트엔드 세계를 탐구합니다.</Paragraph>

      <div>검색바 컴포넌트</div>

      <SubTitle>Series</SubTitle>
      <div>
        <Link href="/blog/series/react">리액트 딥다이브</Link>
      </div>

      <SubTitle>All Posts ({allBlogs.length})</SubTitle>

      <PostList posts={sortedPosts} />
    </>
  );
}
