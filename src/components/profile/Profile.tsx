import Image from 'next/image';
import LinkContacts from '../common/LinkContacts';

export default function Profile() {
  return (
    <section className="flex justify-center items-center">
      <figure className="mr-4 w-[20px] h-[20x]">
        <Image
          height={0}
          width={0}
          sizes="100vw"
          src="https://images.unsplash.com/photo-1600804340584-c7db2eacf0bf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8JUVBJUIwJTk1JUVDJTk1JTg0JUVDJUE3JTgwfGVufDB8fDB8fHww"
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
