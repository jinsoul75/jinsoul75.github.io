import { allProjects } from 'contentlayer/generated';

import Title from '@/components/common/Title';
import Paragraph from '@/components/common/Paragraph'
import PostList from '@/components/common/PostList';

export default function Projects() {
  return (
    <>
      <Title>Projects</Title>

      <Paragraph className='pb-4'>진행했던 프로젝트 목록입니다.</Paragraph>

      <PostList posts={allProjects}/>
    </>
  );
}
