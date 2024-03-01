import Image from 'next/image';

import Title from '@/components/common/Title';
import Paragraph from '@/components/common/Paragraph';
import Animation from '@/framer/Animation';
import LinkWithIcon from '@/components/common/LinkWithIcon';

import { FaRunning } from 'react-icons/fa';

export default function Page() {
  return (
    <div className="flex flex-col gap-2">
      <section className="grow">
        <Title>Jinsoul Kim</Title>
        <Paragraph>Hi👋🏻 I am a frontend developer using React✨</Paragraph>
        <Paragraph>Welcome to my Blog🙋🏻‍♀️</Paragraph>
      </section>

      <Title>Featured</Title>
      <Animation>
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-3 gap-2">
            <Image
              className="rounded-xl"
              width={387}
              height={580}
              src="https://images.unsplash.com/photo-1708936116644-decc9e468248?q=80&w=2863&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="서핑하는바다"
            />
            <Image
              className="rounded-xl"
              width={387}
              height={580}
              src="https://images.unsplash.com/photo-1708936116644-decc9e468248?q=80&w=2863&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="서핑하는바다"
            />
            <Image
              className="rounded-xl"
              width={387}
              height={580}
              src="https://images.unsplash.com/photo-1708936116644-decc9e468248?q=80&w=2863&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="서핑하는바다"
            />
          </div>
          <div className="flex justify-end">
            <LinkWithIcon
              href="/blog"
              className="inline-flex items-center gap-1 underline hover:font-bold"
            >
              Wanna See More?
              <FaRunning />
            </LinkWithIcon>
          </div>
        </div>
      </Animation>
    </div>
  );
}

{
  /* <section className="grow">
<SubTitle>Recent Posts</SubTitle>
<ul className="grid grid-cols-4 gap-4">
  {recentPosts.map((blog) => (
    <MainCard key={blog._id} blog={blog} />
  ))}
</ul>

</section> */
}
