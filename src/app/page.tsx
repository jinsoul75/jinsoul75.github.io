import { recentPosts } from '@/constants/dataset';

import Title from '@/components/common/Title';
import Paragraph from '@/components/common/Paragraph';
import SubTitle from '@/components/common/SubTitle';

import MainCard from '@/components/card/MainCard';

export default function Page() {
  return (
    <>
      <section className="grow">
        <Title>Jinsoul Kim</Title>
        <div className="mb-4">
          안녕하세요{' '}
          <span className="font-bold text-2xl">Frontend Developer 김진솔</span>{' '}
          입니다.
        </div>
        <Paragraph className="">
          ✔️ 호기심을 가지고 깊이 탐구 하는것
          <br />
          ✔️ 문제를 정의하고 해결하는 것<br />
          ✔️ 그 과정에서 얻은 지식을 공유하고 함께 성장하는것
        </Paragraph>
        <div className="my-4">
          위와 같은 가치를 가지고 꾸준한 성장을 이뤄나가고 있습니다.
        </div>
      </section>
      <section className="grow">
        <SubTitle>Recent Posts</SubTitle>
        <ul className='grid grid-cols-4 gap-4'>
          {recentPosts.map((blog) => (
            <MainCard key={blog._id} blog={blog} />
          ))}
        </ul>
      </section>
    </>
  );
}
