import Image from 'next/image';

import LinkContacts from '../common/LinkContacts';
import { profileAvatar } from '@/constants/imgUrl';

export default function Profile() {
  return (
    <section className="flex justify-center items-center">
      <figure className="mr-4 w-[80px] h-[80x]">
        <Image
          height={80}
          width={80}
          src={profileAvatar}
          alt="profile"
          className="rounded-full"
          priority
        />
      </figure>
      <div>
        <div className="font-extrabold">Jinsoul Kim</div>
        <div>Junior Frontend Developer</div>
        <div>
          <LinkContacts />
        </div>
      </div>
    </section>
  );
}
