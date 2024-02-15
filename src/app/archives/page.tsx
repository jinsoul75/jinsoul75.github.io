import Title from '@/components/common/Title';
import SubTitle from '@/components/common/SubTitle';
import { PostTags } from '@/components/common/PostItem';

import { allTags } from '@/constants/dataset';

export default function Archives() {
  return (
    <>
      <Title>Archives</Title>
      <SubTitle>Tags</SubTitle>
      <PostTags tags={allTags} />
    </>
  );
}
