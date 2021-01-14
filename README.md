# 👨🏻‍💻  슬기로운 대학 생활

사용 기술 :

Spring boot, MySQL, React.js

# 코딩 컨벤션
- Lombok을 사용한다.
- 한 메서드의 길이는 10줄을 넘으면 안된다.
- tab 사용
- Gradle 사용
- MVC 패턴
- db는 snake_case, java는 camelCase
- [Java Convention](https://myeonguni.tistory.com/1596)
<br>

# 프로젝트 관리
- Github의 Project 탭
    - TODO
    - IN PROGRESS
        - 동시에 1개만 진행한다.
    - REVIEW
        - 2일내에 리뷰하기
        - **프론트 개발은 프론트 담당 전원이 리뷰한다.**
        - **백엔드 개발은 백엔드 담당 전원이 리뷰한다.**
        - 리뷰어가 Approved 하면 PR보낸 사람이 Merge한다.
    - DONE
        - Merge가 된 후에 Done으로 이동
<br>

# Git commit 컨벤션
- Commit messsage 컨벤션 : [Commit message 참고](https://doublesprogramming.tistory.com/256)

- Pull Request Message : [#issueNumber] feat: issueName
    - ex) [#3] feat: 설문 결과에 따른 유형 매핑 기능
    
- Merge Commit Message : [Merge] [#issueNumber] feat: issueName
    - ex) [Merge] [#3] feat: 설문 결과에 따른 유형 매핑 기능
<br>

### 브랜치 이름

- 마스터 브랜치 : main
- 개발 브랜치 : develop
- 기능 구현 브랜치 : feature/{issueNumber}/{issueName}
    - ex) feature/4/kakaoShare


### 새로운 브랜치 생성방법 
```
git fetch origin develop
git checkout -b feature/4/kakaoShare origin/develop
```


# 개발 기간
1차 배포: 1월 9일 ~ 2월 7일(목표)
