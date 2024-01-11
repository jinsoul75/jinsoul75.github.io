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

</details>
