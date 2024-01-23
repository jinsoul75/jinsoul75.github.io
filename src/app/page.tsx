import Link from 'next/link';
import Title from '@/components/common/Title';
import Paragraph from '@/components/common/Paragraph';

export default function Page() {
  return (
    <div>
      <Title>Jinsoul Kim</Title>
      <div>
        <div className="mb-4">
          안녕하세요{' '}
          <span className="font-bold text-2xl">Frontend Develper 김진솔</span>{' '}
          입니다.
        </div>
        <Paragraph className=''>
          ✔️ 호기심을 가지고 깊이 탐구 하는것<br />
          ✔️ 문제를 정의하고 해결하는 것<br />
          ✔️ 그 과정에서 얻은 지식을 공유하고 함께 성장하는것
        </Paragraph>
        <div className="my-4">
          위와 같은 가치를 가지고 꾸준한 성장을 이뤄나가고 있습니다.
        </div>
      </div>
      <ul className="flex">
        <li className="mr-2">
          <Link
            href="mailto: wlsthf75@gmail.com"
            target="_blank"
            className="py-2 pr-2"
          >
            Email
          </Link>
        </li>
        <li className="mr-2">
          <Link
            href="https://github.com/jinsoul75"
            target="_blank"
            className="p-2"
          >
            Github
          </Link>
        </li>
        <li>
          <Link
            href="http://localhost:3000/blog"
            target="_blank"
            className="p-2"
          >
            Blog
          </Link>
        </li>
      </ul>
    </div>
  );
}
