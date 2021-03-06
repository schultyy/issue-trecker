export const getViewerDataQuery = `query getViewerData {
  viewer {
    login,
    avatarUrl,
    location
  }
}`;

export const getRepositoriesQuery = `query getRepos {
  viewer {
    repositories(first: 100, orderBy: {field: CREATED_AT, direction: DESC}, isFork: false) {
      nodes{
        id,
        name,
        nameWithOwner,
        createdAt,
        hasIssuesEnabled,
        isPrivate
      }
    }
  }
}`;

export const getIssuesForRepositoryQuery = (repository) => {
  return `query GetIssues {
    viewer {
      repository(name: "${repository}") {
        issues(first: 100) {
          nodes {
            id,
            number,
            title,
            body,
            state,
            createdAt,
            comments(first: 100) {
              nodes {
                author {
                  avatarUrl,
                  login,
                  url
                },
                body,
                createdAt,
                id
              }
            },
            author {
              avatarUrl
              login
              url
            },
            milestone {
              number,
              title,
              state
            }
            assignees(first: 10){
              nodes{
                login,
                avatarUrl
              }
            },
            labels(first: 20) {
              nodes {
                color
                id
                name
              }
            }
          }
        }
      }
    }
  }`;
};