개인 기술 블로그 사이트 입니다.
## 개발일지
<details>
<summary>Day1</summary>

- md 파일에서는 토글을 지원하지 않는다. 하지만 html의 &lt;details&gt; 태그로  &lt;summary&gt;에 토글 제목을 적어주면 사용할 수 있다.

- prttier,eslint 설정 
매번 똑같은 설정 해주는데 찾아보는 문서만 여러개다. 블로그 완성하면 snippets에 모아두어야겠다.

- package설정
다른분들 블로그 보면 코드가 적힌 박스나 상단 로딩바 등등을 어떻게 구현하지 했는데 다 라이브러리가 있었다.
1. glob : 경로를 패턴 매칭하여 일치하는 파일들의 리스트를 반환 ex)  `{SOME_PATH}/**/*.mdx`
2. dayjs : 날짜 파싱

- 배포 고민 (Vercel 채택!)
세가지 방법이 있었다. githubPages, Netlify, Vercel
Netlify는 메인 프로젝트에서 사용해보았고 저번에 Vercel 모종의 이유로 배포에 실패했기 때문에
그리고 아래 블로그에서 Vercel이 유일하게 서울에 CDN이 있어서 빠르다는 정보가 있어 채택!
[세가지 방법이 정리된 블로그](https://www.taeny.dev/javascript/nextjs-with-deployment-platform)

- 포스팅 형식 고민 (mdx방식 채택!)

|  | notion API | mdx |
| --- | --- | --- |
| 장점 | 자동으로 글이 연결되므로 편하다 | 잔디를 심을 수 있다.</br>버그가 생길 일이 거의 없다.|
 단점 | 잔디를 못심는다.</br> 버그가 있을때 참고할 레퍼런스가 많이 없다. | 매번 커밋해야해서 귀찮다. |

- 레이아웃, 디자인 고민
1. 레이아웃 : 간단하게 필요한것만 ..
2. 색상 : 네이비를 가장 좋아하지만.. 파란색이 깔끔한것 같아서 파란색으로 결정!

- 초기 세팅 커밋메세지
매번 뭐가 좋을까 고민했는데 setting의 set으로 결정
처음에 init 이라 했는데 변경하고 싶어서
git commit --amend
명령어 통해서 바꿔주었다.

- Module Aliases
@로 import 하는 방법이 궁금했는데 next.js [공식문서](https://nextjs.org/docs/app/building-your-application/configuring/absolute-imports-and-module-aliases#module-aliases)에 친절히 나와있다.

```
    "paths": {
      "@/*": ["./src/*"]
    }
```

이렇게 하면 @뒤의 경로들이 자동으로 src 하위폴더로 매칭된다.

- 테일윈드가 작동하지 않는다.
시도한 방법
1. tailwind.config.js content 확인
2. app 폴더 안의 globals.css 파일 확인
3. tailwindcss postcss autoprefixer 최신버전 업그레이드
4. postcss.config.js 파일 확인
5. npm run dev 다시 실행

??? 갑자기 됨 진짜 수정된거 하나도 없는데 갑자기 됨!!!!!!!!!!!!!
이것때문에 1시간은 날렸는데 진짜 어이없다 ..... ㅜ ㅜ

- next.js에도 suspense 로딩중 폴백을 걸 수 있다.
[공식문서](https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming)에 따르면 suspense 사용시 다음과 같은 이점이 있다.
* suspense는 children 컴포넌트가 로딩이 끝날때 까지 fallback을 보여준다.
- SSR은 데이터 페칭이 끝나고 오직 단 한번 HTML을 렌더링한다.
- 그리고 클라이언트에서도 페이지에 있는 모든 컴포넌트의 코드가 다운도르 되었을 때 단 한번 UI를 하이드레이드한다.
- streaming은 HTML페이지를 작은 청크로 쪼개서 점진적으로 서버에서 클라이언트로 보낸다.
- 데이터에 의존되지 않는 컴포넌트가 우선순위를 가진 컴포넌트가 먼저 하이드레이션된다.
- Streaming은 TTFB, FCP, TTI 에 도움이 된다.

1. Streaming Server Rendering
서버에서 클라이언트로 HTML을 점진적으로 랜더링 할 수 있다.
HTML 문서를 조각조각으로 나누어 서버에서 클라이언트로 전송해서 초기 렌더링이 빨라져 사용자 경험을 향상 할 수 있다.
HTML 문서의 일부가 준비되면 브라우저에서 바로 렌더링을 시작

2. Selective Hydration
리액트가 어떤 컴포넌트를 먼저 상호작용 가능하게 만들지 선택적 수행하는 것.
사용자가 특정 부분에 상호작용할 때, 해당 부분에 필요한 리액트 컴포넌트들을 선택적으로 활성화
이는 초기 로딩 시 모든 컴포넌트를 활성화하지 않고, 필요한 부분만을 선택하여 빠르게 상호작용할 수 있도록 하는 전략
 초기 로딩 속도를 향상시키고 효율적인 자원 사용이 가능
 
</details>

<details>
<summary>Day2</summary>

- 헤더, 푸터 레이아웃만 잡고 게시글 파싱을 먼저해봤다.

1. `npm install contentlayer next-contentlayer`
2. 
next.config.js에 아래와 같은 설정을 해준다.
build, dev 과정시 Contentlayer 훅이 자동으로 실행된다.

```
// next.config.js

import { withContentlayer } from 'next-contentlayer'

/** @type {import('next').NextConfig} */
module.exports = withContentlayer({ 
	reactStrictMode: true,
	swcMinify: true,
});
```

3. typescript에 아래와 같은 설정을 해준다.
루트 폴더에 생성될 파일을 import 할때 deps가 깊어지지 않게 path를 설정해준다.

```
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    //  ^^^^^^^^^^^
    "paths": {
      "contentlayer/generated": ["./.contentlayer/generated"]
      // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".contentlayer/generated"
    // ^^^^^^^^^^^^^^^^^^^^^^
  ]
}
```

4. gitignore에 .contentlayer를 추가해준다.
```
# .gitignore

# ...

# contentlayer
.contentlayer
```

5. 루트 경로에 `contentlayer.config.ts` 파일을 생성한다.
```
// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
  },
  computedFields: {
    url: { type: 'string', resolve: (post) => `/posts/${post._raw.flattenedPath}` },
  },
}))

export default makeSource({ contentDirPath: 'posts', documentTypes: [Post] })
```
</details>

<details>
<summary>Day3</summary>

- 'clsx'란 라이브러리를 알게되었다.
특정 상황일때만 적용하고 싶은 className이 있는데
늘 이렇게 작성해왔다.

```
className = {${isActive? 'font-bold' : null}}
```
저렇게 작성하면 개발자 도구에 'null'이라고 남는게 보기 불편했다.

clsx를 사용하면 이런 문제를 해결해준다.
isActive가 true 값을 가질 때에만 'font-bold'를 적용해준다.


- figure 요소
독립적인 콘텐츠(이미지, 코드조각, 도표)를 표현할때 사용한다.
figcaption 요소로 figure요소가 포함하는 콘텐츠에 대한 설명을 추가할 수 있다.

- time 요소

- css grid border 중복 적용안되게 하기
리스트들을 감싸는 ul 태그 위쪽,왼쪽 border만 설정
각 li태그의 오른쪽,아래쪽 border만 설정

- li안에 들어있는 a 요소 클릭 범위 설정하기
li 태그에 패딩을 주었더니 a 요소가 박스모든 영역을 차지 하지 않았다.
해결 => a 태그에 부모 요소의 전체 가로폭을 차지하는 block 속성을 준다.

- 'React' refers to a UMD global, but the current file is a module 에러
시도1. typeScript 컴파일 설정에 속성을 추가해준다.
.tsx 확장자의 파일의 jsx 코드를 어떻게 컴파일 할지 결정하는 옵션
`"jsx": "react-jsx",`

결과 : npm run dev시 preserve로 바꿔버린다.

시도2. allowUmdGlobalAccess 설정을 해준다.
`"allowUmdGlobalAccess": true,`

</details>