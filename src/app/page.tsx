import FullPageContainer from '@/components/fullPage/FullPageContainer';
import MainHeader from '@/components/header/MainHeader';

export default function Page() {
  return (
    <>
      <MainHeader />
      <FullPageContainer className="outer overflow-auto h-screen" />
    </>
  );
}
