import Title from '@/components/common/Title';
import SubTitle from '@/components/common/SubTitle';
import { PostTags } from '@/components/common/PostItem';
import Paragraph from '@/components/common/Paragraph';

import { allTags } from '@/constants/dataset';

export default function Archives() {
  return (
    <>
      <Title>Archives</Title>
      <Paragraph className="pb-4">모든 기록물들을 한곳에 모았습니다.</Paragraph>
      <SubTitle>Tags</SubTitle>
      <PostTags tags={allTags} />
    </>
  );
}
