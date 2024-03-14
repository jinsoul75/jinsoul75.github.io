import Title from '@/components/common/Title';
import SubTitle from '@/components/common/SubTitle';
import { PostTags } from '@/components/common/PostItem';
import Paragraph from '@/components/common/Paragraph';
import LinkItem from '@/components/common/LinkItem';
import { allTags, getPostsByYear, postYears } from '@/constants/dataset';
import { SERIES, SERIES_INFO } from '@/constants/route';
import dayjs from 'dayjs';

export default function Archives() {
  return (
    <>
      <Title>Archives</Title>
      <Paragraph className="pb-4">모든 기록물들을 한곳에 모았습니다.</Paragraph>

      <SubTitle>Tags({allTags.length})</SubTitle>
      <PostTags tags={allTags} />

      <SubTitle>Series({SERIES.length})</SubTitle>
      <ul className="flex gap-2">
        {SERIES.map((series) => {
          return (
            <li key={series} className="border rounded-xl hover:bg-slate-200">
              <LinkItem className="block p-4" href={SERIES_INFO[series].route}>
                {SERIES_INFO[series].name}
              </LinkItem>
            </li>
          );
        })}
      </ul>
      <SubTitle>Blog</SubTitle>
      {postYears.map((postYear) => {
        const postsByYear = getPostsByYear(postYear);
        return (
          <div key={postYear}>
            <div className="font-bold text-xl">
              {postYear}({postsByYear.length})
            </div>
            <ul>
              {postsByYear.map((post) => {
                return (
                  <li key={post.title} className="flex gap-2 items-center">
                    <div className=" text-gray-400 text-sm">
                      {dayjs(post.date).format('MM.DD')}
                    </div>
                    <LinkItem href={post.slug} className="hover:font-bold">
                      {post.title}
                    </LinkItem>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </>
  );
}
