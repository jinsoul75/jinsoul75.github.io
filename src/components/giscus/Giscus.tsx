'use client'

import Giscus from '@giscus/react';

export default function Reaction() {
  return (
    <Giscus
      id="comments"
      repo="jinsoul75/jinsoulblog"
      repoId="R_kgDOLAkSOw"
      category="General"
      categoryId="DIC_kwDOLAkSO84CdTrx"
      mapping="pathname"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme="light"
      lang="en"
      loading="lazy"
    />
  );
}