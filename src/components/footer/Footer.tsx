import LinkContacts from '../common/LinkContacts';

export default function Footer() {
  return (
    <footer className="py-4 flex flex-col items-end border-t border-t-black">
      <LinkContacts />
      <div>@ 2024 jinsoul Powered by Next.js, Vercel</div>
    </footer>
  );
}
