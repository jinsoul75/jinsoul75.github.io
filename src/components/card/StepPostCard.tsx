import Link from 'next/link';
import { MdNavigateNext } from 'react-icons/md';
import { MdNavigateBefore } from 'react-icons/md';

export default function StepPostCard({
  step,
  post,
}: {
  step: string;
  post: any;
}) {
  return (
    <Link
      href={post.slug}
      className="border p-4 rounded hover:bg-slate-200 flex items-center gap-2"
    >
      <div>{step === 'prev' && <MdNavigateBefore />}</div>
      <div>{post.title}</div>
      <div>{step === 'next' && <MdNavigateNext />}</div>
    </Link>
  );
}
