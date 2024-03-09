import Title from '../common/Title';
import Paragraph from '../common/Paragraph';
import ScrollButton from './ScrollButton';

export default function FirstPage() {
  return (
    <div className="fullpage bg-fuchsia-200 dark:bg-black flex flex-col justify-center items-center">
      <section>
        <Title>Jinsoul Kim</Title>
        <Paragraph>Hi👋🏻 I am a frontend developer using React✨</Paragraph>
        <Paragraph>Welcome to my website :)</Paragraph>
      </section>
      <ScrollButton className=" bottom-4" />
    </div>
  );
}
